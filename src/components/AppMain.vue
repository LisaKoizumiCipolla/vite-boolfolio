<template>
    <div class="posts">

        <div class="post-card" v-for="post in posts">
            <h2>
                {{ post.title }}
            </h2>
            <h4 :style="'color:' + post.type.colour + ';' ">
                Type: {{ post.type.name }}
            </h4>
            <h4>
                Technologies: {{ post.technologies.name }}
            </h4>
            <h5>
                {{ post.slug }}
            </h5>
            <p>
                {{ post.content.substr(0, 250) }}
            </p>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default{
    
    name: 'AppMain',

    data() {
        return {
            posts : [],
            apiUrl : 'http://127.0.0.1:8000/api/posts'
        }
    },

    methods: {
        getPosts(){
            axios.get( this.apiUrl, {
                params: {}
            })
            .then( (response) => {
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

    created(){
        this.getPosts();
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

    .post-card{
        background-color: rgb(231, 221, 174);
        color: black;
        padding: 15px;
        margin: 15px 5px;
        width: calc( (100% / 3) - 20px );
        border-radius: 10px;

        *{
            margin-bottom: 10px;
        }

        &:hover {
            background-color: white;
            cursor: pointer;
        }

    }

    h2{
        margin: 10px 5px;
    }

</style>