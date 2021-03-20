<template>
    <article>
        <div>
            <img :src="img" alt="image de base">
            <h2>{{ article.title }}</h2>
        </div>
        <p>{{ article.description }}</p>
        <div>
            <p>Posté le {{ article.date }}</p>
            <p>Par {{ article.author }}</p>
        </div>
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

article div:first-of-type {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

article div:last-of-type{
    display: flex;
    justify-content: space-between;
}

article div:last-of-type p:first-of-type{
    margin-top: 5vh;
    font-style: italic;
}
</style>