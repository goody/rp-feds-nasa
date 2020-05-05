<template>
  <div class="PotD">
    <div>
      {msg}
      <img src="{nasaData.url}" alt="{title}" />
    </div>
    <div id="info">
      <div class="pic-title">
        {nasaData.title}
      </div>
      <div class="pic-desc">
        {nasaData.explanation}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PotD",
  props: {
    title: String,
    description: String,
    nasaData: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
