<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import IslandsCards from '~/components/IslandsCards.vue'
import Footer from '~/components/Footer.vue'

export default {
  scrollToTop: true,
  components: {
    Header,
    IslandsCards,
    Footer
  },
  mounted() {
    if (process.browser) {
      // localStorage.removeItem("island")
    }
  }
}
</script>

<style>
</style>