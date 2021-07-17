<template>
    <header class = "header">
        <router-link :to="{ name: 'Home' }"> <!-- Routes the page back to the Home page when you press on the Logo -->
            <img alt ="church school logo" src = "../assets/logo.png" class = "img">
        </router-link>
    </header>
</template>

<script>
export default {

}
</script>
<style>
    .header{
        padding: 10px;
        background: #E4E5E8;
        text-align: left;
    }
    .img{
        width: 30%;
        /*Re-renders image so that it is easier to code*/
        -ms-transform: translateZ(0); /* IE 9 */
        -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
        transform: translateZ(0);

    }
    @media only screen and (max-width: 480px) {
    /* For mobile phones: */
        .header{
            text-align: center;
        }
        .img{
            width: 80%;
        }
    }
</style>