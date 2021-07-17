<template>
    <header class = "header">
        <img alt ="church school logo" src = "../assets/logo.png" class = "img">
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
        /*Re-renders image so that it is easier to see*/
        -webkit-backface-visibility: hidden;
        -ms-transform: translateZ(0); /* IE 9 */
        -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
        transform: translateZ(0);
    }
</style>