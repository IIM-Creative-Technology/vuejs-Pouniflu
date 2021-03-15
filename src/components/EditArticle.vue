<template>
    <div id="edit-article">
        <label for="title">Titre de la page</label>
        <input type="text" id="title" v-model="title" :placeholder="article.title" disabled>
        <label for="metaTitle">Meta Title</label>
        <input type="text" id="metaTitle" v-model="metaTitle" :placeholder="article.metaTitle">
        <label for="metaDescription">Meta Description</label>
        <input type="text" id="metaDescription" v-model="metaDescription" :placeholder="article.metaDescription">
    </div>
    <div>
        <img :src="img" alt="#">
        <p>Modifier l'image</p>
    </div>
    <div id="edit-description">
        <label for="description">Corps du post</label>
        <textarea type="text" id="description" v-model="description" :placeholder="article.description"></textarea>
    </div>
    <router-link to="/admin" @click="modifyArticle({title: title, metaTitle: metaTitle, metaDescription: metaDescription, description: description})" id="admin-button-modificate">Valider les modifications</router-link>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'edit-article',
    props: ['article'],
    computed: {
        ...mapState(['img', 'articles'])
    },
    methods: {
        modifyArticle: function(article) {
            console.log(article)
        }
    }
}
</script>

<style>
#edit-article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

#edit-description {
    display: flex;
    flex-direction: column;
}
</style>

<style scoped>
label {
    margin-top: 2vh;
}

img {
    width: 100px;
    height: auto;
    border-radius: 20px;
    margin-top: 20px;
}

a {
    margin-top: 20px;
    padding: 10px 30px;
    text-decoration: none;
    background-color: rgb(56, 149, 56);
    font-weight: bold;
    border-radius: 3px;
    color: white;
}

a:hover {
    background-color: rgb(40, 104, 40);
}
</style>