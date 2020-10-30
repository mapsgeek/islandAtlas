<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="page">
        <h1 style="text-align:center;margin-bottom: 35px;">WAQAB (YAP PROPER) MAPS:<span v-bind:class="`${theme}color`"> {{theme}}</span></h1>
        <client-only>
          <a-skeleton v-if="$apollo.queries.groups.loading" active />
        </client-only>
        <MapItem :maps=groups :island='"yap"' :theme="theme" />
      </div>
    </div>
  </transition>
</template>

<script>
import maps from '~/apollo/queries/fetchMaps'
import MapItem from '~/components/MapItem'


export default {
  scrollToTop: true,
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
        return { theme: this.$route.params.theme, island: "yap" }
      }
    },
  }
}
</script>

<style lang="less">
.page {
  min-height: 100vh;
  background-color: white;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

@media screen and (max-width: 991px) {
  .page {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
