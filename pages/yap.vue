<template>
  <div class="main">
    <ThemesHeader island='yap' />
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
      localStorage.setItem("island", "Yap")
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  margin-top: 100px;
}
</style>