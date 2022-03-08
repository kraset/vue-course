<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>Welcome to the Home component.</p>
    <button @click="onClickChangeList()">Click to change the list.</button>

    <PersonList :persons="listOfPersons" />
  </div>
</template>

<script lang="ts">
import { IPerson } from '@/model/person';
import { defineComponent, ref } from 'vue';
import PersonList from './PersonList.vue';

export default defineComponent({
  name: 'HomeComponent',
  components: {
    PersonList,
  },
  props: {
    title: String,
  },
  setup() {
    const listOfPersons = ref<IPerson[]>([
      { id: 1, name: 'Karl' },
      { id: 2, name: 'Anna' },
      { id: 3, name: 'Lisa' },
    ]);
    // expose to template and other options API hooks
    return {
      listOfPersons,
    };
  },
  methods: {
    onClickChangeList() {
      this.listOfPersons = [
        { id: 4, name: 'Sten' },
        { id: 5, name: 'Oskar' },
        { id: 6, name: 'Emelie' },
      ];
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-color: rgb(175, 212, 158);
  width: 80%;
  height: 30rem;
  margin: auto;
}
p {
  color: purple;
}
</style>
