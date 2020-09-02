<template>
  <div id="heroSlider">
    <a-carousel arrows autoplay effect="fade" :autoplay-speed="2000" :swipe=true touchMove>
      <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div class="intro">
        <div class="caption">
          <div class="border">CHUUK</div><br>
          <div class="border">MAIN ISLAND
          </div>
        </div>
      </div>
      <div class="land">
        <div class="caption">
          <div class="border">LAND</div><br>
          <div class="subtitle">From shoreline to the mountains
          </div>
          <br>
          <nuxt-link to="/chuuk/land">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="reefs">
        <div class="caption">
          <div class="border">REEFS</div><br>
          <div class="subtitle">From mist and rain to streams and estuaries
          </div>
          <br>
          <nuxt-link to="/chuuk/reefs">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="water">
        <div class="caption">
          <div class="border">WATER</div><br>
          <div class="subtitle">From mist and rain to streams and estuaries
          </div>
          <br>
          <nuxt-link to="/chuuk/water">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="vegetation">
        <div class="caption">
          <div class="border">VEGETATION</div><br>
          <div class="subtitle">From mangrove swamps to cloud forest
          </div>
          <br>
          <nuxt-link to="/chuuk/vegetation">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="population">
        <div class="caption">
          <div class="border">POPULATION</div><br>
          <div class="subtitle">From traditional villages to census indicators
          </div>
          <br>
          <nuxt-link to="/chuuk/population">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="infrastructure">
        <div class="caption">
          <div class="border">INFRASTRUCTURE</div><br>
          <div class="subtitle"> From ancient trails to moden utilities
          </div>
          <br>
          <nuxt-link to="/chuuk/infrastructure">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="conservation">
        <div class="caption">
          <div class="border">CONSERVATION</div><br>
          <div class="subtitle">From species to ecosystems
          </div>
          <br>
          <nuxt-link to="/chuuk/conservation">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="culture">
        <div class="caption">
          <div class="border">CULTURE</div><br>
          <div class="subtitle">From prehistoric ruins to contemporary life
          </div>
          <br>
          <nuxt-link to="/chuuk/culture">
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-INTRO1.jpg");
  background-position: center center;
  background-size: cover;
}
.land {
  width: 100%;
  height: 100vh;
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-LAND1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-REEFS1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-WATER1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-VEGETATION2.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-POPULATION2.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-INFRASTRUCTURE1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-CONSERVATION1.jpg");
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-CULTURE1.jpg");
  background-position: center center;
  background-size: cover;
}
.conserculturevation button:hover {
  background-color: #901c21;
  outline: none;
  color: white;
  border: none;
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
