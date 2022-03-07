<template>
  <div class="some-list">
    <p>I am the list component: {{ numberList[0] }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'SomeList',
  setup() {
    const something = 'Something';
    // expose to template and other options API hooks
    return {
      something,
    };
  },
  props: {
    numberList: { type: Array as PropType<number[]>, required: true },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.some-list {
  background-color: rgb(152, 193, 226);
  width: 80%;
  height: 50%;
  margin: auto;
}
p {
  color: rgb(6, 9, 61);
}
</style>
