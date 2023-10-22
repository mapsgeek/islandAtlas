<template>
  <div>
    <!-- <TopNavBar /> -->
    <nuxt />
  </div>
</template>
<script>
import TopNavBar from '~/components/TopNavbar'
export default {
  components: {
    // TopNavBar
  },
  head: {
    bodyAttrs: {
      class: ""
    }
  }
}
</script>
<style>
.NavbarContainer {
  position: fixed;
  z-index: 500;
  right: 0;
  top: 0;
  left: 0;
}
</style>
