<template>
  <div class="music-track">
    <hr />
    <b>{{ track.name }}</b> <br />
    <p>
      <i>{{ track.description }}</i>
    </p>
    <audio controls>
      <source
        :src="'https://craze.se/prev/' + track.filename"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script lang="ts">
import { ISimpleTrack } from '@/model/track';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'MusicTrack',

  // Declare input properties
  props: {
    track: { type: Object as PropType<ISimpleTrack>, required: true },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.music-track {
  background-color: rgb(240, 231, 112);
  width: 80%;
  margin: auto;
  padding: 1rem;
}
p {
  color: rgb(6, 9, 61);
}
</style>
