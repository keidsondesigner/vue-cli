<template>
  <div id="app">
    <nav>
      <!-- navegação entrega páginas -->
      <router-link to="/">Home</router-link>
      <router-link to="/acoes">Acoes</router-link>
      <router-link to="/cursos">Cursos</router-link>
      <router-link :to="{ name: 'cursos' }">Name Cursos</router-link>
      <!-- <router-link :to="{ name: 'cursos', params: { id } }">Name Cursos id</router-link> -->
    </nav>
    <!-- <HomePage /> -->
    <!-- <TesteComponent msg="Olá mundo" /> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  margin: 10px;
  outline: none;
  text-decoration: none;
}
</style>
