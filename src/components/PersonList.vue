<template>
  <div class="person-list">
    <p>{{ description }}</p>

    <h4>Original list</h4>
    <div
      v-for="person in persons"
      :key="person.id"
      @click="onClickPerson(person)"
    >
      id: {{ person.id }}, name: {{ person.name }}
    </div>

    <hr />

    <h4>Computed list</h4>
    <div v-for="person in modifiedList" :key="person.id">
      id: {{ person.id }}, name: {{ person.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { IPerson } from '@/model/person';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'PersonList',

  // Declare input properties
  props: {
    persons: { type: Array as PropType<IPerson[]>, required: true },
  },

  // Declare emitters
  emits: {
    eventDeletePerson(person: IPerson) {
      return person;
    },
  },

  // Data
  setup() {
    const description = ref<string>('I am the PersonList component.');
    // expose to template and other options API hooks
    return {
      description,
    };
  },

  // Methods
  methods: {
    onClickPerson(person: IPerson) {
      console.log(person.name);
      this.$emit('eventDeletePerson', person);
    },
  },

  // Computed values: depends on other values and has to be recalculated whenever it changes
  computed: {
    modifiedList(): IPerson[] {
      return this.persons.slice(0, 2);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-list {
  background-color: rgb(152, 193, 226);
  width: 80%;
  margin: auto;
  padding: 1rem;
}
p {
  color: rgb(6, 9, 61);
}
</style>
