<template>
    <div class="container">
        <nav>
            <ul>
                <li>Contacts</li>
                <li>Contacts</li>
                <li>Contacts</li>
            </ul>
        </nav>
    </div >
</template>

<script>
export default{
    
    name: 'AppFooter'

}

</script>

<style lang="scss" scoped>


    .container{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
    }

    nav{
        width: 100%;
        padding: 20px 0;
        background-color: rgb(43, 3, 7);
        color: white;


            ul{
                width: 100%;
                display: flex;
                justify-content: center;
                list-style-type: none;
                font-size: 1rem;

                li{
                    margin-right: 50px;
                    font-weight: 500;

                    a{
                        text-decoration: none;
                        color: rgb(215, 239, 248);
                    
                        &:hover{
                            cursor: pointer;
                            color: #4accff;
                        }
                    }
                }
            }

    }

</style>