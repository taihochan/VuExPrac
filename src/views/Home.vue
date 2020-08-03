<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/c2f">C2F</router-link>
    <World />
  </div>
</template>

<script>
// @ is an alias to /src
import World from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    World,
  },
};
</script>
