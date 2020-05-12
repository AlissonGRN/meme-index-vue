<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Meme Index</router-link>

    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/images">Images</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/gifs">Gifs</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>