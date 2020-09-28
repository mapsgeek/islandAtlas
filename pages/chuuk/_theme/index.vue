<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="page">
        <h1 style="text-align:center;margin-bottom: 35px;">CHUUK LAGOON MAPS:<span v-bind:class="`${theme}color`"> {{theme}}</span></h1>
        <!-- <a-skeleton v-if="$apollo.queries.groups.loading" active /> -->
        <MapItem :maps=groups :island='"chuuk"' :theme="theme" />
      </div>
    </div>
  </transition>
</template>

<script>
import maps from '~/apollo/queries/fetchMaps'
import MapItem from '~/components/MapItem'

export default {
  components: {
    MapItem
  },
  computed: {
    theme() {
      return this.$route.params.theme
    }
  },
  apollo: {
    groups: {
      query: maps,
      prefetch: ({ route }) => ({ theme: route.params.theme }),
      variables() {
        return { theme: this.$route.params.theme, island: "chuuk" }
      }
    },
  },
}
</script>

<style lang="less">
</style>
