<template>
  <div style="text-align:center">
    <a-tabs default-active-key="1" size="small">
      <a-tab-pane key="1" tab="Pohnpei">
        <iframe class="iframe" src="https://islandatlas.org/assets/maps/pohnpei/PohnpeiMain/" frameborder="0" seamless="seamless"></iframe>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Kosrae" force-render>
        <iframe class="iframe" src="https://islandatlas.org/assets/maps/kosrae/kosraemain/" frameborder="0" seamless="seamless"></iframe>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Yap">
        <iframe class="iframe" src="https://islandatlas.org/assets/maps/yap/Yapmain/" frameborder="0" seamless="seamless"></iframe>
      </a-tab-pane>
      <a-tab-pane key="4" tab="Chuuk" disabled>
        <!-- <iframe class="iframe" src="https://pohepei-maps.maps.arcgis.com/apps/webappviewer/index.html?id=be4cbf47e2454cd4bb3914bc1f6272ea" frameborder="0" seamless="seamless"></iframe> -->
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  layout: 'NotFixedNavbar'
}
</script>

<style lang='less' scoped>
.iframe {
  position: fixed;
  top: 91px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 91vh;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>