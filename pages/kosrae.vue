<template>
  <div class="main">
    <ThemesHeader island='kosrae' />
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
      localStorage.setItem("island", "kosrae")
    }
  }
}
</script>

<style lang="less" scoped>
</style>