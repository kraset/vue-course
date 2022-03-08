<template>
  <div class="person-list">
    <p>I am the PersonList component.</p>
    <div v-for="person in persons" :key="person.id" @click="onClickPerson(person)">
      id: {{ person.id }}, name: {{ person.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { IPerson } from '@/model/person';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'PersonList',
  props: {
    persons: { type: Array as PropType<IPerson[]>, required: true },
  },
  setup() {
    const something = ref<string>('Something');
    // expose to template and other options API hooks
    return {
      something,
    };
  },
  methods:{
    onClickPerson(person: IPerson){
      console.log(person.name);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-list {
  background-color: rgb(152, 193, 226);
  width: 80%;
  margin: auto;
}
p {
  color: rgb(6, 9, 61);
}
</style>
