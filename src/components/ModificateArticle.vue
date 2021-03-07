<template>
    <div id="modificate-article">
        <div>
        <label for="title">Titre de la page</label>
        <input type="text" id="title" v-model="title" placeholder="test" disabled>
        <label for="metaTitle">Meta Title</label>
        <input type="text" id="metaTitle" v-model="metaTitle">
        <label for="metaDescription">Meta Description</label>
        <input type="text" id="metaDescription" v-model="metaDescription">
    </div>
    <div>
        <img :src="img" alt="#">
        <p>Ajouter une image</p>
    </div>
    <div>
        <label for="description">Corps du post</label>
        <input type="text" id="description" v-model="description">
    </div>
    <router-link to="/admin" id="admin-button-modificate">Valider les modifications</router-link>
    </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
    name: 'modificate-article'
}
</script>

<style>

</style>