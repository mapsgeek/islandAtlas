<template>
  <div>
    <nuxt-child :key="$route.params.id" />
  </div>

</template>

<script>
export default {
  // scrollToTop: true,
}
</script>

<style>
</style>