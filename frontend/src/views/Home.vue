<template>
  <div>
    <div class="jumbotron jumbotron-fluid mx-5 mt-4 rounded">
      <div class="container">
        <h3 class="display-4">Meme Index</h3>
        <hr />
        <p class="lead">Aplicação Web para indexar e organizar gifs e imagens</p>
        <p class="lead">
          <router-link class="btn btn-primary btn-lg" to="/images">
            <unicon class="mr-1" name="image" fill="white" />Imagens
          </router-link>
          <router-link class="btn btn-primary btn-lg ml-3" to="/gifs">
            <unicon class="mr-1" name="image-plus" fill="white" />Gifs
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>