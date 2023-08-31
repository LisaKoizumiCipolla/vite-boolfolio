<template>
    
        <nav>
            <ul>
                <li v-for="link in links">
                    <router-link :to=" {name: link.route} ">
                        {{ link.name }}
                    </router-link> 
                </li>
            </ul>
        </nav>
    
</template>

<script>
export default{
    
    name: 'AppHeader',
    data() {
        return {
            links : [
                {
                    route: 'homepage',
                    name: 'Homepage'
                },
                {
                    route: 'about',
                    name: 'About Us'
                },
                {
                    route: 'posts.index',
                    name: 'Posts'
                }

            ]
        }
    },

}

</script>

<style lang="scss" scoped>

    h1{
        margin: 50px;
        font-size: 4rem;
    }

    nav{
        width: 100%;
        padding: 20px 0;
        background-color: rgb(9, 9, 48);
        color: white;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;


            ul{
                width: 100%;
                display: flex;
                justify-content: center;
                list-style-type: none;
                font-size: 2rem;

                li{
                    margin-right: 50px;
                    font-weight: 900;

                    a{
                        text-decoration: none;
                        color: rgb(231, 248, 215);
                    
                        &:hover{
                            cursor: pointer;
                            color: #4accff;
                        }
                    }
                }
            }

    }

</style>