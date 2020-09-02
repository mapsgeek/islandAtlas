<template>
  <div v-if="map">
    <iframe class="iframe" scrolling="no" :src="map[0].interactiveMapURL" frameborder="0" seamless></iframe>
  </div>
</template>

<script>
import InteractiveMap from '~/apollo/queries/fetchInteractiveMap'

export default {
  apollo: {
    map: {
      query: InteractiveMap,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id, island: "chuuk" }
      }
    },
  },
}
</script>

<style>
</style>