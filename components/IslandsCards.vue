<template>
  <div style="margin-top:50px;text-align:center">
    <h1>EXPLORE</h1>
    <div id="mainbox">
      <div class="card">
        <div class="card-img">
          <img src="~assets/imgs/yapCard.jpg" alt="">
        </div>
        <h1>Yap State</h1>
        <a-button type="link">
          <a href="/yap" class="button">Waqab
            <a-icon type="link" />
          </a>
        </a-button>
        <br>
        <a-tooltip>
          <template slot="title">
            Comming soon
          </template>
          <a-button type="link">
            <span></span>
            <a href="/yap-outter" class="button" disabled>
              Neighboring Islands
              <a-icon type="link" />
            </a>
          </a-button>
        </a-tooltip>
        <div class="flag">
          <img src="~assets/imgs/Flag_of_Yap.svg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="~assets/imgs/chuukCard.jpg" alt="">
        </div>
        <h1>Chuuk State</h1>
        <a-tooltip>
          <template slot="title">
            Comming soon
          </template>
          <a-button type="link">
            <span></span>
            <a href="/chuuk" class="button" disabled>
              Chuuk Lagoon
              <a-icon type="link" />
            </a>
          </a-button>
        </a-tooltip>
        <br>
        <a-tooltip>
          <template slot="title">
            Comming soon
          </template>
          <a-button type="link">
            <span></span>
            <a href="/chuuk-outter" class="button" disabled>
              Outer Islands
              <a-icon type="link" />
            </a>
          </a-button>
        </a-tooltip>
        <div class="flag">
          <img src="~assets/imgs/flag_of_Chuuk.svg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="~assets/imgs/pohnpeiCard.jpg" alt="">
        </div>
        <h1>Pohnpei State</h1>
        <a-button type="link">
          <a href="/pohnpei" class="button">Pohnpei
            <a-icon type="link" />
          </a>
        </a-button>
        <br>
        <a-tooltip>
          <template slot="title">
            Comming soon
          </template>
          <a-button type="link">
            <span></span>
            <a href="/pohnpei-outter" class="button" disabled>
              Outer Islands
              <a-icon type="link" />
            </a>
          </a-button>
        </a-tooltip>
        <div class="flag">
          <img src="~assets/imgs/flag_of_Pohnpei.svg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="~assets/imgs/kosreaCard.jpg" alt="">
        </div>
        <h1>Kosrea State</h1>
        <a-button type="link">
          <a href="/kosrae" class="button">Kosrae
            <a-icon type="link" />
          </a>
        </a-button>
        <br>
        <a-tooltip>
          <template slot="title">
            Comming soon
          </template>
          <a-button type="link">
            <span></span>
            <a href="/kosrae-outter" class="button" disabled>
              Neighbouring Islands
              <a-icon type="link" />
            </a>
          </a-button>
        </a-tooltip>
        <div class="flag">
          <img src="~assets/imgs/Flag_of_Kosrae.svg" alt="">
        </div>
      </div>
      <!-- <div class="card">
        <h1>YAP</h1>
        <div class="flag">
          <img src="~assets/imgs/flag_of_yap.svg" alt="">
        </div>
        <div class="links">
          <a-button type="link">
            <a href="/yap">Main Island</a>
          </a-button>
          <a-button type="link">
            <a href="/yap-outter">Outter Islands</a>
          </a-button>
        </div>
      </div>
      <div class="card">
        <h1>CHUUK</h1>
        <div class="flag">
          <img src="~assets/imgs/Flag_of_Chuuk.svg" alt="">
        </div>
        <div class="links">
          <a-button type="link">
            <a href="/chuuk">Main Island</a>
          </a-button>
          <a-button type="link">
            <a href="/chuuk-outter">Outter Islands</a>
          </a-button>
        </div>
      </div>
      <div class="card">
        <h1>POHNPEI</h1>
        <div class="flag">
          <img src="~assets/imgs/Flag_of_Pohnpei.svg" alt="">
        </div>
        <div class="links">
          <a-button type="link">
            <a href="/pohnpei">Main Island</a>
          </a-button>
          <a-button type="link">
            <a href="/pohnpei-outter">Outter Islands</a>
          </a-button>
        </div>
      </div>
      <div class="card">
        <h1>KOSREA</h1>
        <div class="flag">
          <img src="~assets/imgs/Flag_of_Kosrae.svg" alt="">
        </div>
        <div class="links">
          <a-button type="link">
            <a href="/kosrea">Main Island</a>
          </a-button>
          <a-button type="link">
            <a href="/kosrea-outter">Outter Islands</a>
          </a-button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.button {
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
}
h1 {
  font-weight: 500;
}
#mainbox {
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-wrap: nowrap;
  padding-top: 50px;
  padding-bottom: 50px;
}
.card-img {
  margin-bottom: 20px;
  & img {
    width: 90%;
    margin-top: -45px;
    box-shadow: 0px 3px 15px 0px #b3b3b3;
    border-radius: 5px;
    height: 140px;
  }
}
.card {
  width: 250px;
  background-color: white;
  height: 330px;
  padding: 10px;
  margin: 30px;
  box-shadow: 0px 3px 10px 1px #e8e8e8;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  position: relative;
  &:hover {
    .card-img > img {
      transform: translate(0px, -8px);
      box-shadow: 0px 7px 15px 2px #b3b3b3;
      transition: all 0.4s;
    }
  }
}

.flag {
  width: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  & img {
    width: 100%;
  }
}

.links {
  margin-top: 50px;
  & a {
    text-decoration: underline;
  }
}

@media screen and (max-width: 920px) {
  #mainbox {
    flex-wrap: wrap;
  }
}
</style>