<template>
    <nav >
        <router-link to="/" >reminder add list</router-link>
        <router-link to="/calender">calendar</router-link>
        <router-link to="/remainder">reminder</router-link>

    </nav>
</template>

<script>
    export default {
        name:"NavbarComp"
    }
</script>

<style scoped>
nav{
    background-color: rgba(0, 0, 0, 0.852);
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

nav a{
    text-decoration: none;
    color: white;
    text-transform: capitalize;
    font-size: large;
    /* font-weight: ; */
}

nav a:hover{
    color:#138A36;
    text-decoration: underline;
}
</style>