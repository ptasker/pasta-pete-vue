<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><a v-bind:href='url'>DBI!</a></p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Pete\'s Pasta',
      url: 'https://deliciousbrains.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
