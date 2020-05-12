<template>
  <div>
    <form class="container card my-2" @submit.prevent="save">
      <div class="form-group">
        <label for="nameInput">Name</label>
        <input
          type="text"
          class="form-control col-xs-4"
          placeholder="Image Name"
          v-model="image.name"
        />
        <label for="urlInput" class="mt-2">Url</label>
        <input
          type="text"
          class="form-control col-xs-4"
          placeholder="Image url"
          v-model="image.url"
        />
        <button type="submit" class="btn btn-primary mt-2">Adcionar</button>
      </div>
    </form>
    <hr />

    <div class="row">
      <div class="card mx-4 mb-4" style="width: 14rem" v-for="image in images" :key="image.id">
        <img :src="image.url" :alt="image.name" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ image.name }}</h5>

          <div class="btn-group" role="group">
            <a type="button" class="btn btn-primary" href="#" @click="openLink(image.url)">
              <unicon class name="eye" fill="white" />View
            </a>

            <button type="button" class="btn btn-warning" @click="edit(image)">
              <unicon name="edit" fill="white" />Edit
            </button>

            <button type="button" class="btn btn-danger" @click="remove(image)">
              <unicon name="trash-alt" fill="white" />Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "../services/images";

export default {
  data() {
    return {
      image: {
        name: "",
        url: ""
      },
      images: [],
      errors: []
    };
  },
  mounted() {
    this.listImages();
  },
  methods: {
    listImages() {
      Image.getImages()
        .then(response => {
          this.images = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    save() {
      if (!this.image.id) {
        Image.addImage(this.image)
          .then(response => {
            this.image = {};
            alert("Imagem adicionada com sucesso");
            console.log(response);
            this.listImages();
          })
          .catch(error => {
            alert(error);
          });
      } else {
        Image.update(this.image)
          .then(response => {
            this.image = {};
            alert("Atualizado com sucesso");
            console.log(response);
            this.listImages();
          })
          .catch(error => {
            alert(error);
          });
      }
    },
    edit(image) {
      this.image = image;
    },

    remove(image) {
      if (confirm("Deseja excluir a imagem?")) {
        Image.delete(image)
          .then(response => {
            console.log(response);
            this.listImages();
          })
          .catch(e => {
            alert(e);
          });
      }
    },
    openLink(imageUrl) {
      window.open(imageUrl, "_blank");
    }
  }
};
</script>