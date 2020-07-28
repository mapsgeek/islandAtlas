<template>
  <div>
    <div v-for="group in maps" :key="group.id">
      <h3>{{group.name}}</h3>
      <a-collapse :bordered="false" v-for="category in group.categorysByGroupsId" :key="category.id" expand-icon-position="right">
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <a-collapse-panel key="1" :header="category.name" :style="customStyle" :forceRender="true">
          <div class="map" v-for="map in category.mapsByCategoryId" :key="map.id">
            <div class="previewMap">
              <img v-if="map.island==='kosrae'" :src="`${url}/${island}/${theme}/preview/thumbnails/${map.fileName}.png`" alt="thumbnail">
              <img v-if="map.island==='pohnpei'" :src="`${url}/${island}/${theme}/preview/thumbnails/${map.fileName}.jpg`" alt="thumbnail">
            </div>
            <div class="content">
              <h2 class="title">{{map.title}}</h2>
              <p class="description">{{map.decription}}</p>
              <div class="buttons">
                <nuxt-link :to="`${theme}/map/${map.fileName}`" class="ant-dropdown-link">
                  View Map
                </nuxt-link>
                <nuxt-link :to="`${theme}/interactive/${map.id}`" class="ant-dropdown-link">
                  View Layers
                </nuxt-link>
                <nuxt-link :to="`${theme}/metadata/${map.id}`" class="ant-dropdown-link">
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
                        <a :href="`${url}/${island}/${theme}/${map.fileName}-svg.zip`" download ghost>
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
                <a-dropdown placement="bottomCenter" :trigger="['hover']">
                  <a class="ant-dropdown-link">
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
                      <span>
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
                        <a :href="`${url}/${island}/${theme}/${map.fileName}.tif`" download>
                          <a-tooltip placement="bottom">
                            <template slot="title">
                              Full Map GeoTIFF
                            </template>
                            <img src="~assets/imgs/tiff1.png" alt="tiff">
                          </a-tooltip>
                        </a>
                      </span>
                      <span>
                        <a :href="`${url}/${island}/${theme}/layer/${map.fileName}.tif`" download>
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
  scrollToTop: true,
  props: ['maps', 'island', 'theme'],
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden;background:#f6f9fc',
      url: 'https://islandatlas.org/assets/maps'
    };
  },
}
</script>

<style lang="less" >
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