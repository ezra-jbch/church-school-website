<template>
     <div class="footer">
        <router-link class="footer-text" :to="{ name: 'ContactUs' }">Contact Us</router-link>
     </div>
</template>

<style>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: #333333;
        padding: 15px 15px 10px;

    }
    .footer-text {
        color: #808080;
        text-decoration: none;
        font-size: 15px;
        font-family: "Open Sans", sans-serif;
    }
</style>