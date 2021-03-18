<template>
    <div class="admin">
        <div v-if="$route.name = 'Blog'">
            <ArticleList v-bind:articles="articles"/>
        </div>
        <div v-else>
            <SingleArticle/>
        </div>
    </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import SingleArticle from '@/components/SingleArticle.vue'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: {
        ArticleList,
        SingleArticle
    },
    computed: {
        ...mapState(['articles'])
    }
}
</script>