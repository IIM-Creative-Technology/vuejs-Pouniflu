<template>
  <div id="create-article">
    <h2>Créer une nouvelle page du blog</h2>
    <div>
        <label for="title">Titre de la page</label>
        <input type="text" id="title" v-model="title">
        <label for="metaTitle">Meta Title</label>
        <input type="text" id="metaTitle" v-model="metaTitle">
        <label for="metaDescription">Meta Description</label>
        <input type="text" id="metaDescription" v-model="metaDescription">
    </div>
    <div>
        <img :src="img" alt="#">
        <input type="file" accept="image/png, image/jpeg">
    </div>
    <div>
        <label for="corps">Corps du post</label>
        <input type="text" id="corps" v-model="description">
    </div>
    <router-link to="/admin" id="admin-button-create" @click="sendArticle({title: title, metaTitle: metaTitle, metaDescription: metaDescription, description: description})">Create Article</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'create-article',
    computed: {
        ...mapState(['img', 'text'])
    },
    methods: {
        sendArticle(article) {
            this.$store.dispatch('createArticle', article)
        }
    }
}
</script>

<style>
#create-article {
    display: flex;
    flex-wrap: wrap;
}

#create-article div:first-of-type {
    display: flex;
    flex-direction: column;
    width: 60%;
}

#create-article div:nth-of-type(2) {
    width: 40%;
    text-align: center;
}

#create-article div:nth-of-type(2) img {
    width: 10vw;
    height: auto;
    border-radius: 50px;
}

#create-article div:last-of-type {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

#create-article div:last-of-type input {
    width: 40%;
    height: 20vh;
    margin: 0 3vw;
}

h2 {
    width: 100%;
    text-align: center;
}
</style>