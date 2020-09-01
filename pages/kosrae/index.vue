<template>
  <div id="heroSlider">
    <a-carousel arrows autoplay effect="fade" :autoplay-speed="2000" :swipe=true>
      <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div class="intro">
        <div class="caption">
          <span class="border">KOSRAE</span><br>
          <span class="border">MAIN ISLAND</span>
        </div>
      </div>
      <div class="land">
        <div class="caption">
          <span class="border">LAND</span><br>
          <span class="subtitle">From shoreline to the mountains</span>
          <br>
          <nuxt-link to="/kosrae/land">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="reefs">
        <div class="caption">
          <span class="border">REEFS</span><br>
          <span class="subtitle">From mist and rain to streams and estuaries</span>
          <br>
          <nuxt-link to="/kosrae/reefs">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="water">
        <div class="caption">
          <span class="border">WATER</span><br>
          <span class="subtitle">From mist and rain to streams and estuaries</span>
          <br>
          <nuxt-link to="/kosrae/water">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="vegetation">
        <div class="caption">
          <span class="border">VEGETATION</span><br>
          <span class="subtitle">From mangrove swamps to cloud forest</span>
          <br>
          <nuxt-link to="/kosrae/vegetation">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="population">
        <div class="caption">
          <span class="border">POPULATION</span><br>
          <span class="subtitle">From traditional villages to census indicators</span>
          <br>
          <nuxt-link to="/kosrae/population">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="infrastructure">
        <div class="caption">
          <span class="border">INFRASTRUCTURE</span><br>
          <span class="subtitle"> From ancient trails to moden utilities</span>
          <br>
          <nuxt-link to="/kosrae/infrastructure">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="conservation">
        <div class="caption">
          <span class="border">CONSERVATION</span><br>
          <span class="subtitle">From species to ecosystems</span>
          <br>
          <nuxt-link to="/kosrae/conservation">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="culture">
        <div class="caption">
          <span class="border">CULTURE</span><br>
          <span class="subtitle">From prehistoric ruins to contemporary life</span>
          <br>
          <nuxt-link to="/kosrae/culture">
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
export default {};
</script>
<style  scoped>
.intro {
  width: 100%;
  height: 100vh;
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-INTRO1.jpg");
  background-position: center center;
  background-size: cover;
}
.land {
  width: 100%;
  height: 100vh;
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-LAND1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-REEFS1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-WATER2.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-VEGETATION1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-POPULATION1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-INFRASTRUCTURE1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-CONSERVATION2.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/kosrae/Kosrae-CULTURE2.jpg");
  background-position: center center;
  background-size: cover;
}
.conserculturevation button:hover {
  background-color: #901c21;
  outline: none;
  color: white;
  border: none;
}

#heroSlider {
  margin-top: -100px;
}
.ant-carousel >>> .slick-slide {
  position: relative;
  text-align: center;
  height: 100vh;
  background: #364d79;
  overflow: hidden;
}
.caption {
  position: absolute;
  left: 0;
  top: 35%;
  width: 100%;
  text-align: center;
  color: #fff;
  z-index: 1;
  text-shadow: 1px 6px 10px rgb(0 0 0);
  font-size: 3rem;
}
.subtitle {
  font-size: 1.8rem;
  font-style: italic;
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
