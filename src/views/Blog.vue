<template>
    <div class="blog">
        <ArticleList :articles="articles"/>
    </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: {
        ArticleList,

    },
    computed: {
        ...mapState(['articles'])
    }
}
</script>