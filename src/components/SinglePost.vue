<template>
    
    <div class="post-card">
        <h2>
            <router-link :to="{name: 'posts.show', params: { id : post.id }}">
                {{ post.title }}
            </router-link>
        </h2>
        <h4 :style="'color:' + post.type.color + ';' ">
            Type: {{ post.type.name }}
        </h4>
        <h4>
            Technologies: {{ post.technologies.name }}
        </h4>
        <h5>
            {{ post.slug }}
        </h5>
        <div class="img-wrapper">
            <img v-if="post.image.startsWith('http')" :src="post.image" alt="">
            <img v-else :src="'http://127.0.0.1:8000/storage/' + post.image" alt="">
        </div>
        <p>
            {{ post.content.substr(0, 250) }}
        </p>
    </div>
    
</template>
<script>
export default {
    name: 'SinglePost',
    props : {
        'post' : Object
    }
}
</script>
<style lang="scss" scoped>
    
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