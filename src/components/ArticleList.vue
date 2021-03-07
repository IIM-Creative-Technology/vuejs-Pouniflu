<template>
  <div id="article-list" v-for="article in articles" :key="article">
    <img :src="img" alt="image de base">
    <p>{{ article.title }}</p>
    <button><i class="fas fa-edit"></i></button>
    <button><i class="fas fa-trash"></i></button>
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
    min-width: 70%;
}

button{
    width: 50px;
    height: 30px;
    border: none;
    margin: 0 5px;
}

button:first-of-type{
    background-color: rgb(212, 212, 212);
}

button:first-of-type:hover{
    background-color: rgb(134, 134, 134);
}

button:last-of-type{
    background-color: rgb(221, 0, 0);
}

button:last-of-type:hover{
    background-color: rgb(255, 0, 0);
}
</style>