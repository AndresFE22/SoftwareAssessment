from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import errorcode
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Configuración de la base de datos MySQL
db_config = {
    'user': 'root',
    'password': '',
    'host': 'localhost',
    'database': 'planAssessment'
}

def get_db_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Algo está mal con tu usuario o contraseña")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("La base de datos no existe")
        else:
            print(err)
    return None

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    user = data.get('user')
    password = data.get('password')

    if not name or not user or not password:
        return jsonify({'error': 'Faltan datos'}), 400

    hashed_password = generate_password_hash(password)

    conn = get_db_connection()
    if not conn:
        return jsonify({'error': 'No se pudo conectar a la base de datos'}), 500

    cur = conn.cursor()
    cur.execute("SELECT * FROM usuarios WHERE usuario = %s", (user,))
    existing_user = cur.fetchone()
    
    if existing_user:
        return jsonify({'error': 'El usuario ya existe'}), 409

    cur.execute("INSERT INTO usuarios (name, usuario, contraseña) VALUES (%s, %s, %s)",
                (name, user, hashed_password))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({'message': 'Usuario registrado exitosamente'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = data.get('user')
    password = data.get('password')
    

    if not user or not password:
        return jsonify({'error': 'Faltan datos'}), 400

    conn = get_db_connection()
    if not conn:
        return jsonify({'error': 'No se pudo conectar a la base de datos'}), 500

    cur = conn.cursor()
    cur.execute("SELECT * FROM usuarios WHERE usuario = %s", (user,))
    user_data = cur.fetchone()
    cur.close()
    conn.close()
    
    print(user_data)

    if not user_data:
        return jsonify({'error': 'Usuario no encontrado'})

    user_id, name, user, user_password, remember = user_data

    if check_password_hash(user_password, password):
        return jsonify({'message': 'Inicio de sesión exitoso', 'user': {'id': user_id, 'name': name, 'user': user, 'remember': remember}}), 200
    else:
        return jsonify({'error': 'Contraseña incorrecta'})

if __name__ == '__main__':
    app.run(debug=True)
