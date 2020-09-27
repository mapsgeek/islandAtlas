<template>
  <!-- <div class="header"></div> -->
  <div>
    <section class="top-mov-obj-frame">
      <div class="bnr-frame">
        <div class="container">
          <div class="row">
            <div class="innr-box col-12">
              <span class="logo"><img src="~assets/images/logo.png" alt=""></span>
              <h1>Digital Atlas of Micronesia</h1>
              <h4>Venture across our lands and waters, and through our traditions and culture.</h4>
            </div>
          </div>
        </div>
        <span class="scroll-down-icon">
          <a href="#" v-scroll-to="{ el: '#islands' , duration: 1000, }"><img src="~assets/images/scroll-down-icon.png" alt=""></a>
        </span>

      </div>
      <div id="islands" class="hover-bnr-frame">
        <div class="layer" data-depth="0.35" id="object1">
          <nuxt-link class="innr-link" to="/yap" style="transform: translate(5.95417px, 25.6581px); display: inline;">
            <p>WAQAB (YAP)</p><span class="link-arrow"><span></span></span>
          </nuxt-link>
          <span class="img"><img src="~assets/images/object1.png" alt=""></span>
        </div>
        <div class="layer" data-depth="0.25" id="object2">
          <nuxt-link class="innr-link" to="/chuuk" style="transform: translate(5.95417px, 25.6581px); display: inline;">
            <p>CHUUK LAGOON</p><span class="link-arrow"><span></span></span>
          </nuxt-link>
          <span class="img"><img src="~assets/images/object2.svg" alt=""></span>
        </div>
        <div class="layer" data-depth="0.45" id="object3">
          <nuxt-link class="innr-link" to="/pohnpei" style="transform: translate(5.95417px, 25.6581px); display: inline;">
            <p>POHNPEI</p><span class="link-arrow"><span></span></span>
          </nuxt-link>
          <span class="img"><img src="~assets/images/object3.svg" alt=""></span>
        </div>
        <div class="layer" data-depth="0.25" id="object4">
          <nuxt-link class="innr-link" to="/kosrae" style="transform: translate(5.95417px, 25.6581px); display: inline;">
            <p>KOSRAE</p><span class="link-arrow"><span></span></span>
          </nuxt-link>
          <span class="img"><img src="~assets/images/object4.svg" alt=""></span>
        </div>

        <div class="layer" data-depth="0.30" id="object5">
          <nuxt-link class="innr-link" to="" disabled style="transform: translate(5.95417px, 25.6581px); display: inline;">
            <p>NEIGHBORING ISLANDS OF YAP</p><span class="link-arrow"><span></span></span>
          </nuxt-link>
          <a-tooltip>
            <template slot="title">
              Coming soon
            </template>
            <span></span>
            <span class="img"><img src="~assets/images/object5.png" alt=""></span>
          </a-tooltip>
        </div>
        <div class="layer" data-depth="0.20" id="object6">
          <nuxt-link class="innr-link" to="" disabled style="transform: translate(5.95417px, 25.6581px); display: inline;">
            <p>OUTER ISLANDS OF CHUUK</p><span class="link-arrow"><span></span></span>
          </nuxt-link>
          <a-tooltip>
            <template slot="title">
              Coming soon
            </template>
            <span></span>
            <span class="img"><img src="~assets/images/object6.svg" alt=""></span>
          </a-tooltip>
        </div>
        <div class="layer" data-depth="0.30" id="object7">
          <nuxt-link class="innr-link" to="" disabled style="transform: translate(5.95417px, 25.6581px); display: inline;">
            <p>OUTER ISLANDS OF POHNPEI</p><span class="link-arrow"><span></span></span>
          </nuxt-link>
          <a-tooltip>
            <template slot="title">
              Coming soon
            </template>
            <span></span>
            <span class="img"><img src="~assets/images/object7.svg" alt=""></span>
          </a-tooltip>
        </div>

        <div id="layer"></div>

      </div>

    </section>

    <div class="bot-cont-frame">

      <section class="cont-frame-01">
        <div class="container">
          <div class="row">
            <div class="cont-box-01 col-12">
              <span class="add-pin-img"><img src="~assets/images/add-pin-img.png" alt=""></span>
              <h5>Geospatial data Repository for the Federated States of Micronesia (FSM)</h5>
              <div class="row">
                <div class="left-cont-box col">
                  <p>The Digital Atlas of Micronesia is the foremost source of maps and geospatial
                    information for the Federated States of Micronesia.</p>
                  <p>People searching for any sort of map or GIS data can come to this web-based Atlas to
                    identify, visualize, query, analyze and acquire datasets relevant to their
                    interests.</p>
                </div>

                <div class="right-cont-box col">
                  <p>At the core of the Atlas is intuitive and searchable web-based data repository that
                    allows users to quickly locate, view, and manipulate geospatial information.</p>
                  <p>In addition, the Atlas is also an informational hub that incorporates hundreds of
                    static maps, charts, and datasets related to the natural and human environment of
                    Micronesian islands.</p>
                </div>
              </div>
              <p style="text-align:center;">Please see the video below for a user quide and brief introduction
                to this resource.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="video-frame">
        <div class="container">
          <div class="row">
            <div class="video-box col-12">
              <iframe src="https://player.vimeo.com/video/238520607" width="100%" height="550" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="flag-card-frame">
        <div class="container">
          <div class="row">
            <div class="flag-card-box col-12">
              <h5>Comprehensive Map and Data Collection for all four FSM States</h5>
              <p>This digital atlas is the most comprehensive geospatial data source available for the
                Federated States of Micronesia. You can find here the GIS data you need for any island in
                the nation's four states.</p>
              <div class="row">
                <ul class="card-list">
                  <li>
                    <span class="img"><img src="~assets/images/card-img-01.jpg" alt=""></span>
                    <div class="text-box">
                      <h3>Yap State</h3>
                      <ul class="innr-list">
                        <li>
                          <nuxt-link to="/yap">WAQAB (YAP)</nuxt-link>
                        </li>
                        <li>
                          <a-tooltip>
                            <template slot="title">
                              Coming soon
                            </template>
                            <span></span>
                            <nuxt-link to="" disabled>
                              Neighboring Islands
                            </nuxt-link>
                          </a-tooltip>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span class="img"><img src="~assets/images/card-img-02.jpg" alt=""></span>
                    <div class="text-box">
                      <h3>Chuuk State</h3>
                      <ul class="innr-list">
                        <li>
                          <nuxt-link to="chuuk">Chuuk Lagoon</nuxt-link>
                        </li>
                        <li>
                          <a-tooltip>
                            <template slot="title">
                              Coming soon
                            </template>
                            <span></span>
                            <nuxt-link to="" disabled>
                              Outer ISLANDS
                            </nuxt-link>
                          </a-tooltip>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span class="img"><img src="~assets/images/card-img-03.jpg" alt=""></span>
                    <div class="text-box">
                      <h3>Pohnpei State</h3>
                      <ul class="innr-list">
                        <li>
                          <nuxt-link to="/pohnpei">Pohnpei</nuxt-link>
                        </li>
                        <li>
                          <a-tooltip>
                            <template slot="title">
                              Coming soon
                            </template>
                            <span></span>
                            <nuxt-link to="" disabled>
                              Outer ISLANDS
                            </nuxt-link>
                          </a-tooltip>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span class="img"><img src="~assets/images/card-img-04.jpg" alt=""></span>
                    <div class="text-box" style="margin-bottom:4px">
                      <h3>Kosrae State</h3>
                      <ul class="innr-list">
                        <li>
                          <nuxt-link to="/kosrae">Kosrae</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="fea-frame">
        <div class="container">
          <div class="row">
            <div class="fea-box col-12">
              <h6>Introduction</h6>
              <h2>The purpose and Potential of<br> This <span>Digital atlas</span></h2>
              <ul class="fea-list">
                <li>
                  <div class="image-box">
                    <span class="img"><img src="~/assets/images/fea-img-01.png" alt=""></span>
                  </div>
                  <div class="text-box">
                    <h2>INSPIRED BY THE<br> DIVERSITY OF MICRONESIA</h2>
                    <p>This Digital Atlas covers islands spanning hundreds of miles across the Western
                      Pacific. It provides access to data for any part of the region, from
                      sun-drenched coral atolls to lofty peaks shrowded in clouds. People from every
                      island will find information they seek about their home, complete with accurate
                      place names in their own languages and spelling systems.</p>
                    <!-- <span class="read-more">
                      <nuxt-link to="/about">Read More</nuxt-link>
                    </span> -->
                  </div>

                </li>
                <li>
                  <div class="image-box">
                    <span class="img"><img src="~/assets/images/fea-img-02.png" alt=""></span>
                  </div>
                  <div class="text-box">
                    <h2>DESIGNED, CREATED, AND<br> UTILIZED IN THE FSM</h2>
                    <p>Locally-relevant and locally-built, this resource was created in Micronesia for
                      Micronesia. It is envisioned and initiated by the Water and Environmental
                      Research Institute of the Western Pacific (WERI), created and maintained by
                      Island Research and Education Initiative (iREi), and supported and promoted by
                      the FSM Department of Environment, Climate Change &amp; Emergency Management
                      (DECEM). </p>
                    <!-- <span class="read-more">
                      <nuxt-link to="/about">Read More</nuxt-link>
                    </span> -->
                  </div>

                </li>
              </ul>
              <div class="btn-box">
                <span class="show-more-btn">
                  <nuxt-link to="/about">Read More
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="exp-frame">
        <div class="container">
          <div class="row">
            <div class="exp-box col-12">
              <h6>Glimpse</h6>
              <h2>Beauty Of the <span>Islands Of the FSM</span></h2>
              <p>Magnificent reefs, lush forests, prolific gardens, and people who love their islands and live
                in tune with them</p>

              <div class="gallery-box">
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-01.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Chuuk</h6>
                    <h2>Fánáápi</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-02.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Chuuk</h6>
                    <h2>Sunset over Tol</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-03.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Kosrae</h6>
                    <h2>Lelu church</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-04.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Kosrae</h6>
                    <h2>Sleeping Lady</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-05.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Kosrae</h6>
                    <h2>Tok</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-06.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Kosrae</h6>
                    <h2>Utwe mangroves</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-07.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Pohnpei</h6>
                    <h2>Ant Atoll</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-08.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Pohnpei</h6>
                    <h2>Going fishing</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-09.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Pohnpei</h6>
                    <h2>Paipalap</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-10.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Pohnpei</h6>
                    <h2>Underwater</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-11.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Yap</h6>
                    <h2>Dance</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-12.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Yap</h6>
                    <h2>Meeting house</h2>
                  </div>
                </div>
                <div>
                  <span class="img"><img src="~assets/images/gallery-img-13.jpg" alt=""></span>
                  <div class="text-box">
                    <h6>Yap</h6>
                    <h2>Sailing canoes</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="part-frame">
        <div class="container">
          <div class="row">
            <div class="part-box col-12">
              <h6>Credits</h6>
              <h2>PROJECT <span>DEVELOPMENT</span></h2>
              <ul class="part-list">
                <li>
                  <span class="logo"><img src="~assets/images/part-top-logo-01.png" alt=""></span>
                  <h5>Island<br> Research &amp;<br> Education<br> Initiative</h5>
                </li>
                <li>
                  <span class="logo"><img src="~assets/images/part-top-logo-02.png" alt=""></span>
                  <h5>FSM Department of<br> Environment,<br> Climate Change &amp;<br> Emergency Management
                  </h5>
                </li>
                <li>
                  <span class="logo"><img src="~assets/images/part-top-logo-03.png" alt=""></span>
                  <h5>Water and Environmental<br> Research Institute of the<br> Western Pacific,<br>
                    University of Guam</h5>
                </li>
                <li>
                  <span class="logo"><img src="~assets/images/part-top-logo-04.png" alt=""></span>
                  <h5>United<br> States<br> Geological<br> Survey</h5>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="part-box part-box-02 col-12">
              <h2><span>Major Partners</span> and Data-Sharing <span>Contributors</span></h2>
              <ul class="part-list">
                <li>
                  <span class="logo"><img src="~assets/images/part-bot-logo-01.png" alt=""></span>
                  <h5>USDA<br> NRCS</h5>
                </li>
                <!-- <li>
                  <span class="logo"><img src="~assets/images/part-bot-logo-02.png" alt=""></span>
                  <h5>NOAA NWS</h5>
                </li> -->
                <li>
                  <span class="logo"><img src="~assets/images/part-bot-logo-03.png" alt=""></span>
                  <h5>Yap State R&amp;D</h5>
                </li>
                <li>
                  <span class="logo"><img src="~assets/images/part-bot-logo-04.png" alt=""></span>
                  <h5>Pohnpei State DOE</h5>
                </li>
                <li>
                  <span class="logo"><img src="~assets/images/part-bot-logo-05.png" alt=""></span>
                  <h5>Chuuk State EPA</h5>
                </li>
                <li>
                  <span class="logo"><img src="~assets/images/part-bot-logo-06.png" alt=""></span>
                  <h5>COM-FSM</h5>
                </li>
                <li>
                  <span class="logo"><img src="~assets/images/part-bot-logo-07.png" alt=""></span>
                  <h5>PDC</h5>
                </li>
              </ul>

            </div>
          </div>

          <div class="row">
            <div class="part-box part-box-02 col-12">
              <h2><span>REVIEWERS</span> and other <span>COLLABORATORS</span></h2>
              <h5>NOAA OCM, NOAA NGS, NOAA NWS<br> Chuuk Visitors Bureau,<br> KIRMA, Kosrae State HPO,<br> Yap Community Action Program</h5>
            </div>
          </div>
          <div class="btn-box">
            <span class="book-btn"><a @click="ToggleModal">Acknowledgments and Data Sources<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></span>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  </div>
</template>
<script>
import Footer from '~/components/Footer'

// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    Footer,
  },
  mounted() {
    if (process.client) {
      var scene = document.getElementById('islands');
      var parallax = new Parallax(scene);
      $(document).ready(function () {
        $('.gallery-box').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          // centerMode: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      });
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 550) {
          $(".bnr-frame").addClass("on-hover");
          $(".hover-bnr-frame").addClass("on-hover");
          $(".main-frame").addClass("on-hover");
        } else {
          $(".bnr-frame").removeClass("on-hover");
          $(".hover-bnr-frame").removeClass("on-hover");
          $(".main-frame").removeClass("on-hover");
        }
      });
    }
  },
  data() {
    return {
      settings: {
        "centerMode": true,
        "centerPadding": "20px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 3,
        "speed": 500
      }
    }
  },
  methods: {
    ToggleModal() {
      this.$root.$emit('ToggleModal', true)
    },
  }
}

</script>
<style scoped lang='less'>
@media (max-width: 1199px) {
  .slick-next {
    right: -10px !important;
  }
  .slick-prev {
    left: -10px !important;
  }
}
@media (max-width: 1199px) {
  .slick-next {
    right: -5px !important;
  }
  .slick-prev {
    left: -5px !important;
  }
}
@media (max-width: 991px) {
  .slick-next {
    right: -5px !important;
  }
  .slick-prev {
    left: -5px !important;
  }
}
@media (max-width: 767px) {
  .slick-next {
    right: -5px !important;
  }
  .slick-prev {
    left: -5px !important;
  }
}

.exp-frame {
  float: left;
  width: 100%;
  padding: 60px 0 100px;
}
.exp-box h6 {
  font-family: "Trend Sans One Regular";
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 500;
  color: #fff;
  letter-spacing: -1px;
  text-align: center;
}
.exp-box h2 {
  font-family: "Trend Sans One Regular";
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 500;
  color: #fff;
  letter-spacing: -1px;
  text-align: center;
  line-height: 30px;
}
.exp-box h2 span {
  color: #000;
}
.exp-box p {
  float: left;
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-size: 17px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 20px;
  line-height: 24px;
  text-align: center;
}
.gallery-box {
  float: left;
  width: 100%;
  padding-left: 30px !important;
  padding-right: 30px !important;
}
.slick-slide {
  padding-top: 50px;
  padding-bottom: 50px;
  transition: 0.5s;
}
.slick-slide.slick-active + .slick-active {
  transform: scale(1.1);
  z-index: 99;
}
.slick-slide.slick-active + .slick-active + .slick-active {
  transform: none;
}
.slick-prev:before,
.slick-next:before {
  font-size: 55px !important;
}
.slick-prev {
  left: -45px !important;
  width: 60px !important;
  height: 60px !important;
}
.slick-next {
  right: -45px !important;
  width: 60px !important;
  height: 60px !important;
}

.gallery-box .slick-slide {
  position: relative;
}
.gallery-box .slick-slide .text-box {
  position: absolute;
  bottom: 55px;
  left: 0;
  width: 100%;
  text-align: center;
}
.gallery-box .slick-slide .text-box h6 {
  font-family: "Trend Sans One Regular";
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 12px;
  font-weight: 500;
  color: #fff;
  letter-spacing: -1px;
  text-align: center;
}
.gallery-box .slick-slide .text-box h2 {
  font-family: "Trend Sans One Regular";
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  letter-spacing: -1px;
  text-align: center;
  line-height: 30px;
}

// @import "~assets/css/slick.css";
// @import "~assets/css/slick-theme.css";

// .header {
//   height: 100vh;
//   background-image: url("~assets/imgs/coverimage1.jpg");
//   background-position: 50% 50%;
//   background-size: cover;
//   background-repeat: no-repeat;
//   margin-top: 50px;
// }
</style>
