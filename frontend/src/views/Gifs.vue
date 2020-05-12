<template>
  <div>
    <form class="container card my-2" @submit.prevent="save">
      <div class="form-group">
        <label for="nameInput">Name</label>
        <input type="text" class="form-control col-xs-4" placeholder="Gif Name" v-model="gif.name" />

        <label for="urlInput" class="mt-2">Url</label>
        <input type="text" class="form-control col-xs-4" placeholder="Gif url" v-model="gif.url" />

        <button type="submit" class="btn btn-primary mt-2">Adcionar</button>
      </div>
    </form>

    <div class="row">
      <div class="card mx-4 mb-4" style="width: 14rem" v-for="gif in gifs" :key="gif.id">
        <video autoplay loop :src="gif.url" class="card-img-top"></video>
        <div class="card-body">
          <h5 class="card-title">{{ gif.name }}</h5>

          <div class="btn-group" role="group">
            <a type="button" class="btn btn-primary" href="#" @click="openLink(gif.url)">
              <unicon class name="file-download" fill="white" />View
            </a>

            <button type="button" class="btn btn-warning" @click="edit(gif)">
              <unicon name="edit" fill="white" />Edit
            </button>

            <button type="button" class="btn btn-danger" @click="remove(gif)">
              <unicon name="trash-alt" fill="white" />Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gif from "../services/gifs";

export default {
  data() {
    return {
      gif: {
        name: "",
        url: ""
      },
      gifs: [],
      errors: []
    };
  },
  mounted() {
    this.listGifs();
  },
  methods: {
    listGifs() {
      Gif.getGifs()
        .then(response => {
          this.gifs = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    save() {
      if (!this.gif.id) {
        Gif.addGif(this.gif)
          .then(response => {
            this.image = {};
            alert("Gif adcionado com sucesso!");
            console.log(response);
            this.listGifs();
          })
          .catch(error => {
            alert(error);
          });
      } else {
        Gif.update(this.gif)
          .then(response => {
            this.gif = {};
            alert("Atualizado com sucesso");
            console.log(response);
            this.listGifs();
          })
          .catch(error => {
            alert(error);
          });
      }
    },
    edit(gif) {
      this.gif = gif;
    },
    remove(gif) {
      if (confirm("Deseja excluir o gif?")) {
        Gif.delete(gif)
          .then(response => {
            console.log(response);
            this.listGifs();
          })
          .catch(error => {
            alert(error);
          });
      }
    },
    openLink(gifUrl) {
      window.open(gifUrl, "_blank");
    }
  }
};
</script>