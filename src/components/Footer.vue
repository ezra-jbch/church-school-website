<template>
    <div class="footer">
        <p class="footer-text left">Jesus Baptist U.S.A. Conference © {{ currentYear }} All rights reserved</p>
        <router-link class="footer-text" :to="{ name: 'ContactUs' }">Contact Us</router-link>
    </div>
</template>

<script>
export default ({
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
})
</script>


<style>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #333333;
        padding: 15px 30px;
        display: flex;
    }
    .footer-text {
        color: #808080;
        text-decoration: none;
        font-size: 15px;
        font-family: "Open Sans", sans-serif;
        margin: 0;
        display: inline
    }
    .left {
        margin-right: auto;
        padding: 0 30px 0 0;
    }
</style>