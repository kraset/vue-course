<template>
  <div class="hello-world">
    <h1>{{ msg }}</h1>
    <p>Welcome to the Hello World component.</p>
    <button @click="onClickCounter()">Click me to increase a counter.</button>
    <br>


    <button @click="onClickChangeList()">Click to change the list.</button>

    <h4>Counter: {{ counter }}</h4>

    <SomeList :numberList="listOfNumbers" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SomeList from './SomeList.vue';

export default defineComponent({
  name: 'HelloWorld',
  components: {
    SomeList,
  },
  setup() {
    const listOfNumbers = ref<number[]>([1, 2, 3]);
    const counter = ref<number>(5);
    // expose to template and other options API hooks
    return {
      counter,
      listOfNumbers,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    onClickCounter() {
      this.counter++;
      this.listOfNumbers[0]++;
      this.listOfNumbers = [7, 2, 4];
    },
    onClickChangeList() {
      this.listOfNumbers = [7, 2, 4];
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello-world {
  background-color: rgb(175, 212, 158);
  width: 80%;
  height: 30rem;
  margin: auto;
}
p {
  color: purple;
}
</style>
