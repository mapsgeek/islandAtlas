<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc; text-align:center">
      <div class="page">
        <h1 style="text-align:center;margin-top:20px">Gallery</h1>
        <Strong>Change island</Strong>
        <br>
        <a-select :defaultValue=island style="width: 120px;margin-bottom:40px;margin-top:10px" @change="handleChange">
          <a-select-option value="pohnpei">
            Pohnpei
          </a-select-option>
          <a-select-option value="yap">
            Yap
          </a-select-option>
          <a-select-option value="chuuk">
            Chuuk
          </a-select-option>
          <a-select-option value="kosrae">
            Kosrae
          </a-select-option>
        </a-select>
        <viewer :images="map" :options="options" style="text-align: center;">
          <img class="image" loading="lazy" v-for="src in map" :src="`${url}/pohnpei/${src.theme}/preview/thumbnails/${src.id}.jpg`" :key="src.id" :data-src="`${url}/pohnpei/${src.theme}/preview/${src.id}.jpg`" :title="src.title">
        </viewer>
      </div>
    </div>
  </transition>
</template>

<script>

import gallery from '~/apollo/queries/fetchGallery'

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

import Vue from 'vue'
Vue.use(Viewer)

export default {
  data: () => {
    return {
      url: "https://islandatlas.org/assets/maps",
      // localStorage.getItem("island") ||
      island: localStorage.getItem("island") || 'pohnpei',
      options: {
        url: 'data-src',
        inline: false,
        button: true,
        navbar: true,
        title: true,
        toolbar: true,
        tooltip: true,
        movable: false,
        zoomable: true,
        rotatable: false,
        scalable: false,
        transition: true,
        fullscreen: true,
        keyboard: true,
      },
    }
  },
  mounted() {
    if (process.browser) {
      if (localStorage.getItem("island") === null) {
        this.island = "pohnpei"
      } else {
        this.island = localStorage.getItem("island")
        console.log(this.island)
      }
    }
  },
  computed: {
  },
  methods: {
    handleChange(value) {
      this.island = value
    },
  },
  apollo: {
    map: {
      query: gallery,
      variables() {
        return {
          island: this.island
        }
      }
    },
  },
  head: {
    title: 'Gallery'
  },
}
</script>

<style lang="less" scoped>
.page {
  min-height: 100vh;
  background-color: white;
  padding: 50px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.image {
  width: 300px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 991px) {
  .page {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>