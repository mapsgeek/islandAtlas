<template>
  <div>
    <div style="margin-bottom: 30px;" v-for="group in maps" :key="group.id">
      <h3 v-bind:class="`${theme}color`">{{group.name}}</h3>
      <a-collapse :bordered="false" v-for="category in group.categorysByGroupsId" :key="category.id.toString()" expand-icon-position="right" v-model="activeKey" @change="changedKey">
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <a-collapse-panel :key="category.id.toString()" :header="category.name" :style="customStyle" :forceRender="true">
          <div class="map" v-for="map in category.mapsByCategoryId" :key="map.id">
            <div class="previewMap">
              <img v-if="map.island !=='pohnpei'" :src="`${url}/${island}/${theme}/preview/thumbnails/${map.fileName}.png`" alt="thumbnail">
              <img v-if="map.island==='pohnpei'" :src="`${url}/${island}/${theme}/preview/thumbnails/${map.fileName}.jpg`" alt="thumbnail">
            </div>
            <div class="content">
              <h2 class="title">{{map.title}}</h2>
              <p class="description">{{map.decription}}</p>
              <div class="buttons">
                <nuxt-link :to="`/${island}/${theme}/map/${map.fileName}`" class="ant-dropdown-link">
                  View Map
                </nuxt-link>
                <nuxt-link :to="`/${island}/${theme}/interactive/${map.id}`" class="ant-dropdown-link" :disabled="map.interactiveMapURL===null">
                  View Layers
                </nuxt-link>
                <!-- :NOTE temporary -->
                <nuxt-link :to="`/${island}/${theme}/metadata/${map.id}`" class="ant-dropdown-link" :disabled="map.metaName===null">
                  View Metadata
                </nuxt-link>
                <a-dropdown placement="bottomCenter" :trigger="['hover']">
                  <a class="ant-dropdown-link">
                    Download Map
                    <a-icon type="down" />
                  </a>
                  <div slot="overlay" class="downloadSpan">
                    <p>
                      Please select desired format
                    </p>
                    <div>
                      <span>
                        <a :href="`${url}/${island}/${theme}/${map.fileName}.pdf`" download>
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              8.5&quot x 11&quot, 300 dpi document
                            </template>
                            <img src="~assets/imgs/pdf.png" alt="pdf">
                          </a-tooltip>
                        </a>
                      </span>
                      <span>
                        <a :href="`${url}/${island}/${theme}/${map.fileName}.png`" download>
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              2550 x 3300 pixels high-res image
                            </template>
                            <img src="~assets/imgs/png.png" alt="png">
                          </a-tooltip>
                        </a>
                      </span>
                      <span>
                        <a :href="`${url}/${island}/${theme}/${map.fileName}.jpg`" download ghost>
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              2550 x 3300 pixels compressed image
                            </template>
                            <img src="~assets/imgs/jpg.png" alt="jpg">
                          </a-tooltip>
                        </a>
                      </span>
                      <span>
                        <a :href="`${url}/${island}/${theme}/${map.fileName}.svg.zip`" download ghost v-if="map.island!=='pohnpei'">
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              Vector format download
                            </template>
                            <img src="~assets/imgs/svg.png" alt="svg">
                          </a-tooltip>
                        </a>
                        <a :href="`${url}/${island}/${theme}/${map.fileName}-svg.zip`" download ghost v-if="map.island==='pohnpei'">
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              Vector format download
                            </template>
                            <img src="~assets/imgs/svg.png" alt="svg">
                          </a-tooltip>
                        </a>
                      </span>
                    </div>
                  </div>
                </a-dropdown>
                <!-- :NOTE temporary -->

                <a-dropdown placement="bottomCenter" :trigger="['hover']" :disabled="map.gisName ===null">
                  <a class="ant-dropdown-link" :disabled="map.gisName ===null">
                    Download Data
                    <a-icon type="down" />
                  </a>
                  <div slot="overlay" class="downloadSpan">
                    <p>
                      Please select desired format
                    </p>
                    <div>
                      <span>
                        <a :href="`${url}/${island}/${theme}/${map.gisName}.zip`" download>
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              GIS File
                            </template>
                            <img src="~assets/imgs/shp.png" alt="shp">
                          </a-tooltip>
                        </a>
                      </span>
                      <a-tooltip placement="bottom" v-if="island !== 'pohnpei'">
                        <template slot="title">
                          Soon
                        </template>
                        <span>
                          <a :href="`${url}/${island}/${theme}/${map.fileName}.kmz`" :disabled="island !== 'pohnpei'" download>
                            <a-tooltip placement="bottom">
                              <template slot="title">
                                Google Earth File
                              </template>
                              <img style="    filter: saturate(0.1);" src="~assets/imgs/kml.png" alt="kml">
                            </a-tooltip>
                          </a>
                        </span>
                      </a-tooltip>
                      <span v-if="island === 'pohnpei'">
                        <a :href="`${url}/${island}/${theme}/${map.fileName}.kmz`" download>
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              Google Earth File
                            </template>
                            <img src="~assets/imgs/kml.png" alt="kml">
                          </a-tooltip>
                        </a>
                      </span>
                    </div>
                  </div>
                </a-dropdown>

                <a-dropdown placement="bottomCenter" :trigger="['hover']">
                  <a class="ant-dropdown-link">
                    Download Overlay
                    <a-icon type="down" />
                  </a>
                  <div slot="overlay" class="downloadSpan">
                    <p>
                      Please select desired format
                    </p>
                    <div>
                      <span>
                        <a :href="`${url}/${island}/${theme}/${map.fileName}.tif`" download v-if="map.island==='pohnpei'">
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              Full Map GeoTIFF
                            </template>
                            <img src="~assets/imgs/tiff1.png" alt="tiff">
                          </a-tooltip>
                        </a>
                        <a :href="`${url}/${island}/${theme}/${map.fileName}.tiff`" download v-if="map.island!=='pohnpei'">
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              Full Map GeoTIFF
                            </template>
                            <img src="~assets/imgs/tiff1.png" alt="tiff">
                          </a-tooltip>
                        </a>
                      </span>
                      <span>
                        <a :href="`${url}/${island}/${theme}/layer/${map.fileName}.tif`" download v-if="map.island==='pohnpei'">
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              Island-only GeoTIFF
                            </template>
                            <img src="~assets/imgs/tiff2.png" alt="png">
                          </a-tooltip>
                        </a>
                        <a :href="`${url}/${island}/${theme}/layer/${map.fileName}.tiff`" download v-if="map.island!=='pohnpei'">
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              Island-only GeoTIFF
                            </template>
                            <img src="~assets/imgs/tiff2.png" alt="png">
                          </a-tooltip>
                        </a>
                      </span>
                    </div>
                  </div>
                </a-dropdown>
              </div>
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
import maps from '~/apollo/queries/fetchMaps'

export default {
  scrollToTop: false,
  props: ['maps', 'island', 'theme'],
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'border-radius: 4px;margin-bottom: 8px;border: 0;overflow: hidden;background:#f6f9fc',
      url: 'https://islandatlas.org/assets/maps',
      activeKey: []
    };
  },
  mounted() {
    if (process.client) {
      if (localStorage.getItem('mapKey') !== undefined) {
        this.activeKey = JSON.parse(localStorage.getItem('mapKey'))
      }
    }
  },
  beforeDestroy() {
    // console.log(this.activeKey)
    if (process.client) {
      localStorage.setItem('mapKey', JSON.stringify(this.activeKey))
    }
  },
  methods: {
    changedKey(key) {
      // console.log(this.activeKey)
    }
  }
}
</script>

<style lang="less" scoped >
.previewMap img {
  width: 100%;
}
.map {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 40px;
}
.content {
  padding: 0px 20px 20px 20px;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  & a {
    margin-right: 20px;
    width: 140px;
    margin-top: 10px;
  }
}

h3 {
  font-style: italic;
}

@media screen and (max-width: 650px) {
  .map {
    display: grid;
    grid-template-columns: auto;
  }
  .buttons {
    justify-content: center;
  }
  .previewMap img {
    margin-bottom: 20px;
  }
}
.downloadSpan {
  border-radius: 5px;
  background-color: #4b5861;
  width: fit-content;
  text-align: center;
  cursor: pointer;
  p {
    color: white;
    text-align: center;
    padding: 5px;
    border-bottom: 1px solid white;
  }
  div {
    padding: 0px 10px 10px 10px;
  }
}
</style>