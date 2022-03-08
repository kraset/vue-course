<template>
  <div class="simple-test">
    <h1>{{ title }}</h1>
    <p>{{description}}.</p>
    <h4>Counter: {{ counter }}</h4>
    <button @click="onClickCounter()">Click me to increase a counter.</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SimpleTest',
  components: {
    // other components that we use in this template
  },
  props: {
    title: String,
  },
  setup() {
    const counter = ref<number>(5);
    const description = ref<string>('I am a simple test.');
    // expose to template and other options API hooks
    return {
      counter,
      description,
    };
  },
  methods: {
    onClickCounter() {
      this.counter++;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.simple-test {
  background-color: rgb(218, 226, 97);
  width: 80%;
  margin: auto;
  padding: 1rem;
}
</style>
