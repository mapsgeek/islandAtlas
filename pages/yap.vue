<template>
  <div class="main">
    <ThemesHeader island='yap' />
    <nuxt-child :key="$route.params.theme" />
  </div>
</template>

<script>
import ThemesHeader from '~/components/ThemesHeader'

export default {
  // scrollToTop: true,
  components: {
    ThemesHeader
  },
  mounted() {
    if (process.browser) {
      localStorage.setItem("island", "Yap")
      localStorage.setItem("islandgallery", "yap")
    }
  }
}
</script>

<style lang="less" scoped>
</style>