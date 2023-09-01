<template>

    <div class="card-wrapper">
        <SinglePost v-if="post" class="post-card" :post='post' />
    </div>
    
</template>

<script>
import axios from 'axios';
import SinglePost from '../components/SinglePost.vue';

export default {

    name: 'PostShow',

    components:{
        SinglePost
    },

    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000',
            post : false
        }
    },
    methods: {
            getPost(){
                console.log(this.$route.params.id);
                axios.get(`${this.apiUrl}/api/posts/${this.$route.params.id}`).then((response) => {
                    console.log(response);
                    this.post = response.data.result;
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
    

    created(){
        this.getPost();
    },
}
</script>
<style lang="scss" scoped>
    
    .card-wrapper{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .post-card{
        background-color: rgb(231, 221, 174);
        color: black;
        padding: 15px;
        margin: 15px 5px;
        width: 500px;
        border-radius: 10px;

        *{
            margin-bottom: 10px;
        }

        &:hover {
            background-color: white;
            cursor: pointer;
        }
    
              img{
            width: 95%;
            max-height: 150px;
            object-fit: cover;
        }

       

    } 

    h2{
        margin: 10px 5px;
    }
</style>