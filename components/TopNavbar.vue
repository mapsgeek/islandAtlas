<template>
  <div style="position:fixed;z-index:1;right:0;top:0;left:0">
    <div style="display:flex;flex-direction:column">
      <div class="logo">
        <nuxt-link to='/'>
          <img src="~assets/imgs/main.png" alt="">
        </nuxt-link>
      </div>
      <div class="topNavbar">
        <div style="justify-content:center;display:flex;flex-grow:1">
          <a-dropdown class="dropNav" placement="bottomRight">
            <a class="ant-dropdown-link">
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
            <nuxt-link to="/interactive-map">
              <img class="imgIcon" src="~assets/icons/interactivemapwhite.png">
              Interactive Map
            </nuxt-link>
            <nuxt-link to="interactive-map">
              <img class="imgIcon" src="~assets/icons/datarepositorywhite.png">
              Data Repository
            </nuxt-link>
            <nuxt-link to="interactive-map">
              <img class="imgIcon" src="~assets/icons/gallerywhite.png">
              Gallery
            </nuxt-link>
            <nuxt-link to="interactive-map">
              <img class="imgIcon" src="~assets/icons/sitemapwhite.png">
              Site Map
            </nuxt-link>
            <nuxt-link to="interactive-map">
              <img class="imgIcon" src="~assets/icons/searchwhite.png">
              Search
            </nuxt-link>
            <nuxt-link to="interactive-map">
              <img class="imgIcon" src="~assets/icons/aboutwhite.png">
              About
            </nuxt-link>
            <nuxt-link to="interactive-map">
              <img class="imgIcon" src="~assets/icons/contactuswhite.png">
              Contact Us
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.topNavbar {
  position: relative;
  background: #4b5861;
  color: white;
  display: flex;
  align-items: center;
  height: 50px;
  a {
    color: white;
    margin-right: 15px;
    &:hover {
      text-decoration: underline;
    }
  }
}
.imgIcon {
  width: 20px;
  vertical-align: text-top;
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
  width: 160px;
  position: fixed;
  z-index: 1;
  & img {
    width: 100%;
  }
}
</style>