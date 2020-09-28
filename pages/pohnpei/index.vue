<template>
  <div id="heroSlider">
    <a-carousel arrows effect="fade" autoplay :pauseOnHover=false :speed=800 centerPadding lazyLoad :autoplaySpeed="5000" accessibility>
      <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div class="intro">
        <div class="caption">
          <h1 class="border">POHNPEI</h1>
        </div>
      </div>
      <div class="land">
        <div class="caption">
          <h1 class="border">LAND</h1><br>
          <div class="subtitle">from the shoreline to the mountaintops
          </div>
          <br>
          <nuxt-link to="/pohnpei/land">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="reefs">
        <div class="caption">
          <h1 class="border">REEFS</h1><br>
          <div class="subtitle">from the lagoon to the ocean floor
          </div>
          <br>
          <nuxt-link to="/pohnpei/reefs">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="water">
        <div class="caption">
          <h1 class="border">WATER</h1><br>
          <div class="subtitle">from mist and rain to streams and estuaries
          </div>
          <br>
          <nuxt-link to="/pohnpei/water">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="vegetation">
        <div class="caption">
          <h1 class="border">VEGETATION</h1><br>
          <div class="subtitle">from mangrove swamp to upland forest
          </div>
          <br>
          <nuxt-link to="/pohnpei/vegetation">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="population">
        <div class="caption">
          <h1 class="border">POPULATION</h1><br>
          <div class="subtitle">from traditional villages to census indicators
          </div>
          <br>
          <nuxt-link to="/pohnpei/population">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="infrastructure">
        <div class="caption">
          <h1 class="border">INFRASTRUCTURE</h1><br>
          <div class="subtitle"> from ancient trails to modern utilities
          </div>
          <br>
          <nuxt-link to="/pohnpei/infrastructure">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="conservation">
        <div class="caption">
          <h1 class="border">CONSERVATION</h1><br>
          <div class="subtitle">from species to ecosystems
          </div>
          <br>
          <nuxt-link to="/pohnpei/conservation">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="culture">
        <div class="caption">
          <h1 class="border">CULTURE</h1><br>
          <div class="subtitle">from prehistoric ruins to contemporary life
          </div>
          <br>
          <nuxt-link to="/pohnpei/culture">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Pohnpei",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Pohnpei main island maps'
        }
      ]
    }
  }
};
</script>
<style  scoped>
.intro {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-INTRO2.jpg");
  background-position: center center;
  background-size: cover;
}
.land {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-LAND2.jpg");
  background-position: center center;
  background-size: cover;
}
.land button:hover {
  background-color: #954c97;
  outline: none;
  color: white;
  border: none;
}
.reefs {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-REEFS2.jpg");
  background-position: center center;
  background-size: cover;
}
.reefs button:hover {
  background-color: #2ca2db;
  outline: none;
  color: white;
  border: none;
}
.water {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-WATER2.jpg");
  background-position: center center;
  background-size: cover;
}
.water button:hover {
  background-color: #1dbbb0;
  outline: none;
  color: white;
  border: none;
}
.vegetation {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-VEGETATION1.jpg");
  background-position: center center;
  background-size: cover;
}
.vegetation button:hover {
  background-color: #7fb842;
  outline: none;
  color: white;
  border: none;
}
.population {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-POPULATION2.jpg");
  background-position: center center;
  background-size: cover;
}
.population button:hover {
  background-color: #fab317;
  outline: none;
  color: white;
  border: none;
}
.infrastructure {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-INFRASTRUCTURE2.jpg");
  background-position: center center;
  background-size: cover;
}
.infrastructure button:hover {
  background-color: #ee5525;
  outline: none;
  color: white;
  border: none;
}
.conservation {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-CONSERVATION2.jpg");
  background-position: center center;
  background-size: cover;
}
.conservation button:hover {
  background-color: #be2326;
  outline: none;
  color: white;
  border: none;
}
.culture {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 28%)),
    url("https://islandatlas.org/assets/images/pohnpei/Pohnpei-CULTURE2.jpg");
  background-position: center center;
  background-size: cover;
}
.culture button:hover {
  background-color: #901c21;
  outline: none;
  color: white;
  border: none;
}

.ant-carousel >>> .slick-slide {
  position: relative;
  text-align: center;
  margin-top: 98px;
  height: 90vh;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.5;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 1;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
