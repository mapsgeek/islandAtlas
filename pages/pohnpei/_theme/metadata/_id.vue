<template>
  <div style="background-color:#f6f9fc;text-align:center">
    <div class="page" v-if="map">
      <a-tabs>
        <a-tab-pane v-for="(item, index) in JSON.parse(map[0].metaName)" :key="index" default-active-key="1" :tab=item>
          <iframe style="height: 81vh;width: 100%;" :src="`${url}/pohnpei/${$route.params.theme}/${item}.html`" frameborder="0" allowfullscreen>
          </iframe>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import InteractiveMap from '~/apollo/queries/fetchInteractiveMap'

export default {
  data() {
    return {
      url: 'https://islandatlas.org/assets/maps'
    }
  },
  apollo: {
    map: {
      query: InteractiveMap,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id, island: "pohnpei" }
      }
    },
  },
}
</script>

<style lang="less" scoped>
.page {
  padding: 7px;
}
body {
  overflow: hidden;
}
</style>