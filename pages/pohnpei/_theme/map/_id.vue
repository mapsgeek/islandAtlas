<template>
  <div style="background-color:#f6f9fc;">
    <div class="page">
      <img :src="`${url}/pohnpei/${this.$route.params.theme}/preview/${this.$route.params.id}.jpg`" alt="map" style="width:100%">
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      url: 'https://islandatlas.org/assets/maps'
    }
  }
}
</script>

<style lang="less">
</style>