<template>
  <div>
    <iframe class="iframe" src="https://pohepei-maps.maps.arcgis.com/apps/webappviewer/index.html?id=be4cbf47e2454cd4bb3914bc1f6272ea" frameborder="0" seamless="seamless"></iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.iframe {
  position: fixed;
  top: 55px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 95vh;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 999999;
}
</style>