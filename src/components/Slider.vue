<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href="/event/1">
                    <img src="@/assets/overwatch.jpg">
                </a>
            </div>
            <div class="swiper-slide">
                <a href="/event/1">
                    <img src="@/assets/overwatch.jpg">
                </a>
            </div>
            <div class="swiper-slide">
                <a href="/event/1">
                    <img src="@/assets/overwatch.jpg">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    // Import Swiper Vue.js components
    import Swiper from 'swiper';

    // Import Swiper styles
    import 'swiper/swiper.min.css';

    export default {
        components: {},
        mounted() {
            this.swiper = new Swiper(".swiper-container", {
                init: true,
                slidesPerView: "auto",
                direction: "horizontal",
                spaceBetween: 25,
                loop: true,
                speed: 800
            });

            setTimeout(this.slideNext, 5000);
        },
        methods: {
            slideNext() {
               this.swiper.slideNext();
               setTimeout(this.slideNext, 5000);
            }
        }
    };
</script>
<style>
    .swiper-slide img {
        height: auto;
        width: 100%;
        border-radius: 10px;
        transition: 0.3s ease;
    }

    .swiper-slide img:hover {
        transform: scale(1.02);
    }
</style>