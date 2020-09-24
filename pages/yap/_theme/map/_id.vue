<template>
  <div style="background-color:#f6f9fc;">
    <div class="page">
      <img :src="`${url}/yap/${this.$route.params.theme}/preview/${this.$route.params.id}.png`" alt="map" style="width:100%">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://islandatlas.org/assets/maps'
    }
  }
}
</script>

<style lang="less">
</style>