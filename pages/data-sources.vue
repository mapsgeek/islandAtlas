<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="w-container">
        <h1 style="text-align:center;margin-bottom:20px">Data sources</h1>
        <a-tabs default-active-key="2">
          <!-- <a-tab-pane key="1" tab="Acknowledgments">
          </a-tab-pane> -->
          <a-tab-pane key="2" tab="Data sources">
            <img width="60px" src="~assets/images/symbol-data.png" alt="Copyright">
            <div style="width:90%;float:right;">
              <p style="margin-right:25px;">
                Data used in this atlas are from a variety of sources. The most common sources are: <br>
                <strong>Island Research &amp; Education Initiative (iREi)<br>
                  US Geological Survey (USGS)<br>
                  National Oceanic and Atmospheric Administration (NOAA)<br>
                  US Department of Agriculture (USDA)<br>
                  &nbsp;&nbsp;&nbsp;&nbsp; Natural Resources Conservation Service (NRCS)<br>
                  &nbsp;&nbsp;&nbsp;&nbsp; United States Forest Service (USFS)<br>
                  Pacific Disaster Center (PDC)<br>
                  The Nature Conservancy<br>
                  FSM National Government<br>
                  Pohnpei State Government<br></strong>
                <br>
                For the specific data used in particular maps, please check the relevant metadata provided, or visit www.islandatlas.org/#/sources for a centralized register.

              </p>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.w-container {
  min-height: 100vh;
  margin-top: 50px;
  // background-color: white;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
// @media screen and (max-width: 991px) {
//   .page {
//     margin-left: auto;
//     margin-right: auto;
//     max-width: 940px;
//   }
// }

@media screen and (max-width: 991px) {
}

@media screen and (max-width: 767px) {
  .w-container {
    padding: 10px;
  }
}
@media screen and (max-width: 480px) {
  .w-container {
    padding: 10px;
  }
}
</style>
