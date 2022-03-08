<template>
  <p>This is text in the App component.</p>

  <div v-if="!showHome">
    <button @click="showHome = true">Show Cool Lists</button>
    <SimpleTest title="Simple Test Component" />
  </div>

  <Home v-if="showHome" title="I am Home" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Home from './components/Home.vue';
import SimpleTest from './components/SimpleTest.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
    SimpleTest,
  },
  setup() {
    const showHome = ref<boolean>(false);
    return {
      showHome,
    };
  },
});
</script>

<style>
button {
  margin-bottom: 20px;
  margin-right: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
