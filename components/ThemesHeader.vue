<template>
  <div style="position:fixed;z-index:1;right:0;top:50px;left:0">
    <div style="display:flex;flex-direction:column">
      <div class="logo">
        <a-dropdown>
          <img :src="require(`assets/imgs/normal-${this.island}.png`)">
          <a-menu slot="overlay" class="flags">
            <a-menu-item>
              <nuxt-link to='/yap'>
                <!-- <img src="https://islandatlas.org/nuxt/imgs/normal-yap.png" onmouseover="this.src='https://islandatlas.org/nuxt/imgs/grey-yap.png';" onmouseout="this.src='https://islandatlas.org/nuxt/imgs/normal-yap.png';"> -->
                <img width="200px" src="~assets/imgs/normal-yap.png">
              </nuxt-link>
            </a-menu-item>
            <a-menu-item>
              <img width="200px" src="~assets/imgs/normal-yap-OI.png" alt="">
            </a-menu-item>
            <a-menu-item>
              <nuxt-link to='/chuuk'>
                <img width="200px" src="~assets/imgs/normal-chuuk.png" alt="">
              </nuxt-link>
            </a-menu-item>
            <a-menu-item>
              <img width="200px" src="~assets/imgs/normal-chuuk-OI.png" alt="">
            </a-menu-item>
            <a-menu-item>
              <nuxt-link to='/pohnpei'>
                <img width="200px" src="~assets/imgs/normal-pohnpei.png" alt="">
              </nuxt-link>
            </a-menu-item>
            <a-menu-item>
              <img width="200px" src="~assets/imgs/normal-pohnpei-OI.png" alt="">
            </a-menu-item>
            <a-menu-item>
              <nuxt-link to='/kosrae'>
                <img width="200px" src="~assets/imgs/normal-kosrae.png" alt="">
              </nuxt-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="topNavbar">
        <div style="justify-content:center;display:flex;flex-grow:1">
          <a-dropdown class="dropNav" placement="bottomRight">
            <a class="ant-dropdown-link" style="margin-right:15px;">
              Menu
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <nuxt-link to="interactive-map">
                  <img class="imgIcon" src="~assets/icons/interactivemapblack.png">
                  Interactive Map
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="interactive-map">
                  <img class="imgIcon" src="~assets/icons/datarepositoryblack.png">
                  Data Repository
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="interactive-map">
                  <img class="imgIcon" src="~assets/icons/galleryblack.png">
                  Gallery
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="interactive-map">
                  <img class="imgIcon" src="~assets/icons/sitemapblack.png">
                  Site Map
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="interactive-map">
                  <img class="imgIcon" src="~assets/icons/searchblack.png">
                  Search
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="interactive-map">
                  <img class="imgIcon" src="~assets/icons/aboutblack.png">
                  About
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="interactive-map">
                  <img class="imgIcon" src="~assets/icons/contactusblack.png">
                  Contact Us
                </nuxt-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <div class="fullLinks">
            <ul class="nav navbar-nav themes">
              <li>
                <nuxt-link exact-active-class="intro" :to='"/" +this.island'>
                  Intro
                </nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="land" :to='"/"+this.island+"/land"'>
                  LAND
                </nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="reefs" :to='"/"+this.island+"/reefs"'>
                  REEFS
                </nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="water" :to='"/"+this.island+"/water"'>
                  WATER
                </nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="vegetation" :to='"/"+this.island+"/vegetation"'>
                  VEGETATION
                </nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="population" :to='"/"+this.island+"/population"'>
                  POPULATION
                </nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="infrastructure" :to='"/"+this.island+"/infrastructure"'>
                  INFRASTRUCTURE
                </nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="conservation" :to='"/"+this.island+"/conservation"'>
                  CONSERVATION
                </nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="culture" :to='"/"+this.island+"/culture"'>
                  CULTURE
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    island: String
  },
  computed: {

  },
  mounted() {
    console.log(this.$route)
  },
  data() {
    return {
      normal: "normal",
      grey: "grey"
    }
  }
}
</script>

<style lang="less" scoped>
.flags {
  padding: 0;
  transition: all 0;
  margin-top: -4px;
  box-shadow: none;
  & > .ant-dropdown-menu-item {
    padding: 0;
  }
  a {
    padding: 0 12px;
  }
}
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.nav {
  margin: auto;
  display: flex;
  list-style: none;
  padding: 0;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 9px 15px;
}

.topNavbar {
  position: relative;
  background: #4b5861;
  color: white;
  display: flex;
  align-items: flex-end;
  height: 50px;
  a {
    color: white;
    // margin-right: 15px;
    &:hover {
      text-decoration: underline;
    }
  }
}

.nav > li {
  &:hover {
    &:nth-child(1) {
      background: #959595;
    }
    &:nth-child(2) {
      background: #954c97;
    }
    &:nth-child(3) {
      background: #2ca2db;
    }
    &:nth-child(4) {
      background: #1dbbb0;
    }
    &:nth-child(5) {
      background: #7fb842;
    }
    &:nth-child(6) {
      background: #fab317;
    }
    &:nth-child(7) {
      background: #ee5525;
    }
    &:nth-child(8) {
      background: #be2326;
    }
    &:nth-child(9) {
      background: #901c21;
    }
  }
}
.dropNav {
  display: none;
}
.fullLinks {
  margin: auto;
}
@media screen and (max-width: 920px) {
  .fullLinks {
    display: none;
  }
  .dropNav {
    display: block;
    margin-left: auto;
    padding-right: 40px;
  }
}
.logo {
  margin-top: 10px;
  width: 200px;
  position: fixed;
  z-index: 1;
  & img {
    width: 100%;
  }
}
</style>