<template>
    <div v-for="article in articles" :id="'id' + articles.indexOf(article)" :key="article" class="article-list">

        <!-- If url is not /blog -->
        <div v-if="$route.name != 'Blog' && $route.params.title == null">
            <div id="article-list">
                <img :src="img" alt="image de base">
                <p>{{ article.title }}</p>
                <p >{{ article.description }}</p>
                <div>
                    <router-link :to="'/admin/' + articles.indexOf(article)"><i class="fas fa-edit"></i></router-link>
                    <button @click="deleteArticle(articles.indexOf(article))"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div v-if="$route.params.id == articles.indexOf(article)" id="article-edition">
                <router-view :article="article" />
            </div>
        </div>

        <!-- If you want to display a single post -->
        <div v-else-if="$route.params.title == article.title">
            <router-view :article="article" />
        </div>

        <!-- If you want to display all the post in /blog  -->
        <div v-else-if="$route.params.title == null">
            <div id="article-list">
                <img :src="img" alt="image de base">
                <p>{{ article.title }}</p>
                <p>{{ article.metaDescription }}</p>
                <div>
                    <router-link :to="'/blog/' + article.title"><i class="fas fa-edit"></i></router-link>
                </div>
            </div>
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
    },
    methods: {
        deleteArticle: function(article) {
            this.$store.dispatch('deleteArticle', article)
        }
    }
}
</script>

<style>
#article-list {
    display: flex;
    align-items: center;
    margin: 0 auto 3vh;
    padding: 20px 20px;
    border: 1px solid rgb(161, 161, 161);
}

#article-edition {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4vh;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div:first-of-type {
    display: flex;
    justify-content: space-between;
}

.article-list>div {
    width: 100%;
}

.article-list>div>div {
    width: 50%;
}



img{
    width: 20vh;
    height: auto;
}

p {
    margin: 0 5px;
    min-width: 30%;
}

button, a{
    cursor: pointer;
    width: 3vw;
    height: 5vh;
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