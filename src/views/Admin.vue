<template>
    <div class="admin">
        <div v-if="$route.name != 'CreateArticle'">
            <router-link to="/create-an-article" id="admin-button-article">Create Article</router-link>
            <ArticleList v-bind:articles="articles"/>
        </div>
        <div v-else>
            <CreateArticle @newArticle="addArticle"/>
        </div>
    </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import CreateArticle from '@/components/CreateArticle.vue'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: {
        ArticleList,
        CreateArticle,
    },
    computed: {
        ...mapState(['articles'])
    },
    methods: {
        addArticle(article) {
            this.articles.push(article);
        }
    }
}
</script>

<style>
#admin-button-article, #admin-button-create {
    padding: 10px 16px;
    background: rgb(22, 84, 255);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 2px;
    text-decoration:none;
}

#admin-button-article:hover, #admin-button-create:hover{
    background: rgb(11, 46, 141);
}

#admin-button-article {
    position: absolute;
    top: 4vh;
    right: 9.2vw;
}

#admin-button-create {
    position: relative;
    left: 70vw;
    top: 6vh;
}
</style>