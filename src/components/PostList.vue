<template>
    <div class="post-wrapper">
        <h1>
            Posts
        </h1>

        <div class="posts">
            
            <SinglePost class="post-card" v-for="post in posts" :post='post' />

        </div>
    </div>
</template>
<script>
import SinglePost from './SinglePost.vue';

export default {
    name:'PostList',
    components: {
        SinglePost
    },
    props: {
        'posts' : Array
    }
}
</script>
<style lang="scss" scoped>
    .posts{
        display: flex;
        //align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

</style>