const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  fs.readFile('informacion.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    const info = JSON.parse(data);
    const perfiles = info.perfiles.filter(perfil =>
      perfil.nombre.toLowerCase().includes(query)
    );
    const competencias = info.competencias.filter(competencia =>
      competencia.nombre.toLowerCase().includes(query)
    );
    const resultados = info.resultados.filter(resultado =>
      resultado.nombre.toLowerCase().includes(query)
    );

    const results = [...perfiles, ...competencias, ...resultados];
    res.json({ results });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
