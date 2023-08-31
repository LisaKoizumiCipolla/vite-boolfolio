<template>
    <PostList :posts="posts" />
</template>

<script>
import axios from 'axios';
import PostList from './PostList.vue';

export default{
    name: 'AppMain',
    components: {
        PostList
    },
    data() {
        return {
            posts: [],
            apiUrl: 'http://127.0.0.1:8000/api/posts'
        };
    },
    methods: {
        getPosts() {
            axios.get(this.apiUrl, {
                params: {}
            })
                .then((response) => {
                console.log(response.data.results.data);
                this.posts = response.data.results.data;
            })
                .catch(function (error) {
                console.log(error);
            })
                .finally(function () {
            });
        }
    },
    created() {
        this.getPosts();
    },
    components: { PostList }
}

</script>

<style lang="scss" scoped>

    

</style>