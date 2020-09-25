<template>
  <div>
    <TopNavBar />
    <nuxt />
  </div>
</template>
<script>
import TopNavBar from '~/components/TopNavbar'
export default {
  name: 'SpecialBody',
  components: {
    TopNavBar
  },
  head: {
    bodyAttrs: {
      class: "noOverflow"
    }
  }
}
</script>
<style>
.noOverflow {
  overflow: hidden;
}
</style>
