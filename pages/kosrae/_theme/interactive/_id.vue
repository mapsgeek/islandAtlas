<template>
  <div style="background-color:#f6f9fc;">
    <div v-if="map">
      <iframe style="height:100vh;width:100%" scrolling="no" :src="map[0].interactiveMapURL" frameborder="0"></iframe>
    </div>
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
        return { id: `2-${this.$route.params.id}`, island: "kosrae" }
      }
    },
  },
}
</script>

<style>
</style>