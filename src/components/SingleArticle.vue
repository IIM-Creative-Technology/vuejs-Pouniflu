<template>
    <article>
        <div>
            <img :src="img" alt="image de base">
            <h2>{{ article.title }}</h2>
        </div>
        <p>{{ article.description }}</p>
        <p>Posté le 3 mars 2021</p>
    </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'single-article',
    props: ['article'],
    computed: {
        ...mapState(['img', 'articles'])
    },
}
</script>

<style>
article {
    margin: 0 5vw;
}

article img {
    width: 10vh;
    border-radius: 20px;
}

article div {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

article p:last-child{
    margin-top: 5vh;
    font-style: italic;
}
</style>