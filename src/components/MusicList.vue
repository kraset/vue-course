<template>
  <div class="music-list">
    <h4>List of cool music tracks</h4>
    <div v-for="track in tracks" :key="track.name" class="mb">
      <MusicTrack :track="track" />
    </div>
  </div>
</template>

<script lang="ts">
import { ISimpleTrack } from '@/model/track';
import { defineComponent, PropType, ref } from 'vue';
import MusicTrack from './MusicTrack.vue';

export default defineComponent({
  name: 'MusicList',
  components: {
    MusicTrack,
  },

  // Declare input properties
  props: {
    tracks: { type: Array as PropType<ISimpleTrack[]>, required: true },
  },

  // Data
  setup() {
    const description = ref<string>('I am the PersonList component.');
    // expose to template and other options API hooks
    return {
      description,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.music-list {
  background-color: rgb(187, 162, 235);
  width: 80%;
  margin: auto;
  padding: 1rem;
}
.mb {
  margin-bottom: 20px;
}
p {
  color: rgb(6, 9, 61);
}
</style>
