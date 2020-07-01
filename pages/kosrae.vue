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
  }
}
</script>

<style lang="less" scoped>
.main {
  margin-top: 100px;
}
</style>