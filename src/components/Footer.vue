<template>
    <div class="footer">
        <!-- Copyright -->
        <p class="footer-text left">Jesus Baptist U.S.A. Conference © {{ currentYear }} All rights reserved</p>
        <!-- Contact Us page -->
        <router-link class="footer-text border" :to="{ name: 'ContactUs' }">Contact Us</router-link>
    </div>
</template>

<script>
export default {
    computed: {
        currentYear() {
            // updates the copyright year info automatically
            return new Date().getFullYear()
        }
    }
}
</script>

<style>
    .footer {
        /* making footer flush to the bottom */
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #333333;
        /* giving appropriate padding to the copyright */
        padding: 12px 12px 12px 27px;
        display: flex;
    }
    .footer-text {
        color: #808080;
        text-decoration: none; /* to get rid of default link format */
        font-size: 15px;
        font-family: "Open Sans", sans-serif;
        margin: 0;
    }
    .border {
        /* contact us button style */
        border-style: solid;
        border-radius: 10px;
        border-width: 2px;
        padding: 5px 10px;
    }
    .border:hover {
        background: #505050;
    }
    .border:focus {
        /* button clicked (may end up removing this) */
        background: #808080;
        color: #333333;
        border-color: #808080;
    }
    .left {
        /* spacing left apart from right */
        margin-right: auto;
        padding: 0 27px 0 0;
        display: flex;
        /* vertically align */
        align-items: center;
    }

    @media only screen and (max-width: 580px) {
        /* for smaller screens (to prevent copyright and contact us squashing) */
        .footer {
            /* position the up and down as opposed to side by side */
            display: grid;
            padding: 12px;
        }
        .left {
            padding: 0;
            margin: auto; /* center horizontally */
            margin-bottom: 12px;
        }
    }
</style>