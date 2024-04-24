<template>
  <div>
      <div style="background-color: white;">

          <h1 style="padding: 20px;">EVALUACIÓN</h1>
          <iframe :src="iframeSrc" style="padding: 20px;" width="100%" height="720" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: "https://app.Lumi.education/api/v1/run/b2cPbx/embed"
    };
  }
};
</script>
<style>

</style>