<template>
    
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'homepage' }" >Home</router-link> 
                </li>
                <li>
                    <router-link :to="{ name: 'about' }" >About Us</router-link> 
                </li>
                <li>
                    <router-link :to="{ name: 'posts.index' }" >Posts</router-link> 
                </li>
            </ul>
        </nav>
    
</template>

<script>
export default{
    
    name: 'AppHeader'

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


            ul{
                width: 100%;
                display: flex;
                justify-content: center;
                list-style-type: none;
                font-size: 2rem;

                li{
                    margin-right: 10px;
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