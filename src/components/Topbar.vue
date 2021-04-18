<template>
    <div>
        <nav class="navbar">
            <a href="Over.vue">
                <img src="@/assets/logo.svg">
                <p>streamhase</p>
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Topbar"
    }
</script>

<style scoped>
    .navbar {
        height: 60px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        background-color: #1C1C1C;
    }

    a {
        color: white;
        text-decoration: none;
        display: flex;
        flex-direction: row;
    }

    a img {
        width: 30px;
    }

    a p {
        font-size: 22px;
        padding-left: 10px;
    }
</style>