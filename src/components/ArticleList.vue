<template>
  <div v-for="article in articles" :id="'id' + articles.indexOf(article)" :key="article">
    <div id="article-list">
        <img :src="img" alt="image de base">
        <p>{{ article.title }}</p>
        <p>{{ article.id }}</p>
        <router-link :to="'/admin/' + articles.indexOf(article)"><i class="fas fa-edit"></i></router-link>
        <button><i class="fas fa-trash"></i></button>
    </div>
    <div v-if="$route.params.id == articles.indexOf(article)">
        <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'article-list',
    props: {
        articles: {
            type: Array,
            default: () => []
        },
        title : {
          type : String
        }
    },
    computed: {
        ...mapState(['img', 'text'])
    }
}
</script>

<style>
#article-list {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto 3vh;
    padding: 20px 20px;
    border: 1px solid rgb(161, 161, 161);
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width: 20vh;
    height: auto;
}

p {
    margin: 0 40px;
    min-width: 30%;
}

button, a{
    cursor: pointer;
    width: 50px;
    height: 30px;
    border: none;
    margin: 0 5px;
}

a{
    background-color: rgb(212, 212, 212);
}

a:hover{
    background-color: rgb(134, 134, 134);
}

button{
    background-color: rgb(221, 0, 0);
}

button:hover{
    background-color: rgb(255, 0, 0);
}
</style>