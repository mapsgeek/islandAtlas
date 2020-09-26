<template>
  <div class="main">
    <ThemesHeader island='pohnpei' />
    <nuxt-child :key="$route.params.theme" />
  </div>
</template>

<script>
import ThemesHeader from '~/components/ThemesHeader'

export default {
  scrollToTop: true,
  components: {
    ThemesHeader
  },
  mounted() {
    if (process.browser) {
      localStorage.setItem("island", "Pohnpei")
      localStorage.setItem("islandgallery", "pohnpei")
    }
  }
}
</script>

<style lang="less" scoped>
</style>