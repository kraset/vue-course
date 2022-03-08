<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>Welcome to the Home component.</p>
    <button @click="onClickSortList()">Click to sort the list.</button>
    <button @click="showCoolMusic=!showCoolMusic">Toggle List Contents</button>

    <PersonList
      v-if="!showCoolMusic"
      :persons="listOfPersons"
      @eventDeletePerson="onEventDeletePerson"
    />
    <MusicList v-if="showCoolMusic" :tracks="tracks" />
  </div>
</template>

<script lang="ts">
import { getMusicTracks } from '@/data/music-api';
import { IPerson } from '@/model/person';
import { ISimpleTrack } from '@/model/track';
import { defineComponent, ref } from 'vue';
import PersonList from './PersonList.vue';
import MusicList from './MusicList.vue';

export default defineComponent({
  name: 'HomeComponent',
  components: {
    PersonList,
    MusicList,
  },
  props: {
    title: String,
  },
  setup() {
    const listOfPersons = ref<IPerson[]>([
      { id: 3, name: 'Lisa' },
      { id: 1, name: 'Karl' },
      { id: 6, name: 'Emelie' },
      { id: 2, name: 'Anna' },
      { id: 4, name: 'Sten' },
      { id: 5, name: 'Oskar' },
    ]);
    const tracks = ref<ISimpleTrack[]>([]);
    const showCoolMusic = ref<boolean>(false);

    // Expose to template, etc.
    return {
      listOfPersons,
      tracks,
      showCoolMusic,
    };
  },
  methods: {
    // Handle button click
    onClickSortList() {
      this.listOfPersons.sort((a: IPerson, b: IPerson) => {
        return a.id - b.id;
      });
    },

    onClickShowCoolMusic() {
      this.showCoolMusic = true;
    },

    // Event handler for child emit
    onEventDeletePerson(person: IPerson) {
      console.log('onEventDeletePerson: ', person.name);
      this.listOfPersons.splice(
        this.listOfPersons.findIndex((p) => p.id === person.id),
        1
      );
    },
  },

  async mounted() {
    const musicTracks = await getMusicTracks();
    this.tracks = musicTracks
      .filter((m) => m.mainTrack === 'Y')
      .map((musicTrack) => {
        return {
          name: musicTrack.name,
          description: musicTrack.description,
          filename: musicTrack.filename,
        };
      });
    // console.log(this.tracks);
    // this.listOfPersons = this.tracks.map( track => {
    //   return {id: track.id, name: track.name}
    // });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-color: rgb(175, 212, 158);
  width: 80%;
  padding: 2rem;
  margin: auto;
}
p {
  color: purple;
}
</style>
