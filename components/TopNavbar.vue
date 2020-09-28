<template>
  <div class="NavbarContainer">
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
                <nuxt-link to="/interactive-map">
                  <img class="imgIcon" src="~assets/icons/interactivemapblack.png">
                  Interactive Map
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="/data-repository">
                  <img class="imgIcon" src="~assets/icons/datarepositoryblack.png">
                  Data Repository
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="/gallery">
                  <img class="imgIcon" src="~assets/icons/galleryblack.png">
                  Gallery
                </nuxt-link>
              </a-menu-item>
              <!-- <a-menu-item>
                <nuxt-link to="/interactive-map">
                  <img class="imgIcon" src="~assets/icons/sitemapblack.png">
                  Site Map
                </nuxt-link>
              </a-menu-item> -->
              <!-- <a-menu-item>
                <nuxt-link to="/search">
                  <img class="imgIcon" src="~assets/icons/searchblack.png">
                  Search
                </nuxt-link>
              </a-menu-item> -->
              <a-menu-item>
                <nuxt-link to="/about">
                  <img class="imgIcon" src="~assets/icons/aboutblack.png">
                  About
                </nuxt-link>
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="/contact">
                  <img class="imgIcon" src="~assets/icons/contactusblack.png">
                  Contact Us
                </nuxt-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <div class="fullLinks">
            <nuxt-link :to="{ path: '/',hash:'#islands'}" v-if="['contact','interactive-map','about','gallery','data-repository','sitemap','index'].includes($route.name)">
              <img class="imgIcon" src="~assets/icons/icons8-browse-folder-32.png">
              Islands Modules
            </nuxt-link>
            <nuxt-link to="/interactive-map">
              <img class="imgIcon" src="~assets/icons/interactivemapwhite.png">
              Interactive Map
            </nuxt-link>
            <nuxt-link to="/data-repository">
              <img class="imgIcon" src="~assets/icons/datarepositorywhite.png">
              Data Repository
            </nuxt-link>
            <nuxt-link to="/gallery">
              <img class="imgIcon" src="~assets/icons/gallerywhite.png">
              Gallery
            </nuxt-link>
            <nuxt-link to="/sitemap">
              <img class="imgIcon" src="~assets/icons/sitemapwhite.png">
              Site Map
            </nuxt-link>
            <!-- <nuxt-link to="/search">
              <img class="imgIcon" src="~assets/icons/searchwhite.png">
              Search
            </nuxt-link> -->
            <nuxt-link to="/about">
              <img class="imgIcon" src="~assets/icons/aboutwhite.png">
              About
            </nuxt-link>
            <nuxt-link to="/contact">
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
  height: 55px;
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
  vertical-align: text-bottom;
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
  width: 180px;
  position: fixed;
  z-index: 1;
  & img {
    width: 100%;
  }
}
</style>