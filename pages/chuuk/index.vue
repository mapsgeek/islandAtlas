<template>
  <div id="heroSlider">
    <a-carousel arrows effect="fade" autoplay :pauseOnHover=false :speed=800 lazyLoad :autoplaySpeed="5000" accessibility>
      <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div class="intro">
        <div class="caption">
          <h1 class="border">CHUUK LAGOON</h1><br>
        </div>
      </div>
      <div class="land">
        <div class="caption">
          <h1 class="border">LAND</h1><br>
          <div class="subtitle">from the shoreline to the mountaintops
          </div>
          <br>
          <a href="/chuuk/land">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </a>
        </div>
      </div>
      <div class="reefs">
        <div class="caption">
          <h1 class="border">REEFS</h1><br>
          <div class="subtitle">from the lagoon to the ocean floor
          </div>
          <br>
          <a href="/chuuk/reefs">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </a>
        </div>
      </div>
      <div class="water">
        <div class="caption">
          <h1 class="border">WATER</h1><br>
          <div class="subtitle">From mist and rain to streams and estuaries
          </div>
          <br>
          <a href="/chuuk/water">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </a>
        </div>
      </div>
      <div class="vegetation">
        <div class="caption">
          <h1 class="border">VEGETATION</h1><br>
          <div class="subtitle">from mangrove swamp to upland forest
          </div>
          <br>
          <a href="/chuuk/vegetation">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </a>
        </div>
      </div>
      <div class="population">
        <div class="caption">
          <h1 class="border">POPULATION</h1><br>
          <div class="subtitle">From traditional villages to census indicators
          </div>
          <br>
          <a href="/chuuk/population">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </a>
        </div>
      </div>
      <div class="infrastructure">
        <div class="caption">
          <h1 class="border">INFRASTRUCTURE</h1><br>
          <div class="subtitle"> from ancient trails to modern utilities
          </div>
          <br>
          <a href="/chuuk/infrastructure">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </a>
        </div>
      </div>
      <div class="conservation">
        <div class="caption">
          <h1 class="border">CONSERVATION</h1><br>
          <div class="subtitle">From species to ecosystems
          </div>
          <br>
          <a href="/chuuk/conservation">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </a>
        </div>
      </div>
      <div class="culture">
        <div class="caption">
          <h1 class="border">CULTURE</h1><br>
          <div class="subtitle">From prehistoric ruins to contemporary life
          </div>
          <br>
          <a href="/chuuk/culture">
            <a-button>
              Maps
              <a-icon type="right" style="vertical-align: bottom;" />
            </a-button>
          </a>
        </div>
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Cuuk Lagoon",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Cuuk Lagoon main island maps'
        }
      ]
    }
  }
};
</script>
<style  scoped>
#heroSlider {
  /* margin-top: 100px; */
}
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
  background-image: url("https://islandatlas.org/assets/images/chuuk/Chuuk-INFRASTRUCTURE2.jpg");
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
