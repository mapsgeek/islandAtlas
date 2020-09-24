<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="page">
        <h1 style="text-align:center;margin-bottom:20px">Site Map</h1>
        <a-tree :tree-data="treeData" :default-expanded-keys="['0-0-0', '0-0-0-0']">
          <nuxt-link slot="homepage" class="intro atlas" to="/">DIGITAL ATLAS OF MICRONESIA</nuxt-link>
          <span slot="pohnpei" class="intro pohnpei">Pohnpei</span>
          <nuxt-link slot="Main" class="maplinkintro maplink" to="/pohnpei">Main Island</nuxt-link>
          <nuxt-link slot="land" class="maplinkland maplink" to="/pohnpei/land">Land</nuxt-link>
          <nuxt-link slot="reefs" class="maplinkreefs maplink" to="/pohnpei/reefs">Reefs</nuxt-link>
          <nuxt-link slot="water" class="maplinkwater maplink" to="/pohnpei/water">Water</nuxt-link>
          <nuxt-link slot="vegetation" class="maplinkvegetation maplink" to="/pohnpei/vegetation">Vegetation</nuxt-link>
          <nuxt-link slot="population" class="maplinkpopulation maplink" to="/pohnpei/population">Population</nuxt-link>
          <nuxt-link slot="infrastructure" class="maplinkinfrastructure maplink" to="/pohnpei/infrastructure">Infrastructure</nuxt-link>
          <nuxt-link slot="conservation" class="maplinkconservation maplink" to="/pohnpei/conservation">Conservation</nuxt-link>
          <nuxt-link slot="culture" class="maplinkculture maplink" to="/pohnpei/culture">Culture</nuxt-link>

          <span slot="Yap" class="intro yap">Yap</span>
          <nuxt-link slot="yapMain" class="maplinkintro maplink" to="/yap">Main Island</nuxt-link>
          <nuxt-link slot="yapland" class="maplinkland maplink" to="/yap/land">Land</nuxt-link>
          <nuxt-link slot="yapreefs" class="maplinkreefs maplink" to="/yap/reefs">Reefs</nuxt-link>
          <nuxt-link slot="yapwater" class="maplinkwater maplink" to="/yap/water">Water</nuxt-link>
          <nuxt-link slot="yapvegetation" class="maplinkvegetation maplink" to="/yap/vegetation">Vegetation</nuxt-link>
          <nuxt-link slot="yappopulation" class="maplinkpopulation maplink" to="/yap/population">Population</nuxt-link>
          <nuxt-link slot="yapinfrastructure" class="maplinkinfrastructure maplink" to="/yap/infrastructure">Infrastructure</nuxt-link>
          <nuxt-link slot="yapconservation" class="maplinkconservation maplink" to="/yap/conservation">Conservation</nuxt-link>
          <nuxt-link slot="yapculture" class="maplinkculture maplink" to="/yap/culture">Culture</nuxt-link>

          <span slot="Kosrae" class="intro kosrae">kosrae</span>
          <nuxt-link slot="kosraeMain" class="maplinkintro maplink" to="/yap">Main Island</nuxt-link>
          <nuxt-link slot="kosraeland" class="maplinkland maplink" to="/yap/land">Land</nuxt-link>
          <nuxt-link slot="kosraereefs" class="maplinkreefs maplink" to="/yap/reefs">Reefs</nuxt-link>
          <nuxt-link slot="kosraewater" class="maplinkwater maplink" to="/yap/water">Water</nuxt-link>
          <nuxt-link slot="kosraevegetation" class="maplinkvegetation maplink" to="/yap/vegetation">Vegetation</nuxt-link>
          <nuxt-link slot="kosraepopulation" class="maplinkpopulation maplink" to="/yap/population">Population</nuxt-link>
          <nuxt-link slot="kosraeinfrastructure" class="maplinkinfrastructure maplink" to="/yap/infrastructure">Infrastructure</nuxt-link>
          <nuxt-link slot="kosraeconservation" class="maplinkconservation maplink" to="/yap/conservation">Conservation</nuxt-link>
          <nuxt-link slot="kosraeculture" class="maplinkculture maplink" to="/yap/culture">Culture</nuxt-link>
        </a-tree>
      </div>
    </div>
  </transition>
</template>

<script>
const treeData = [
  {
    title: 'DIGITAL ATLAS OF MICRONESIA',
    key: '0-0',
    slots: { title: 'homepage' },
    children: [
      {
        title: 'Pohnpei',
        slots: { title: 'pohnpei' },
        key: '0-0-0',
        children: [
          {
            title: 'Main Island', key: '0-0-0-0', slots: { title: 'Main' },
            children: [
              { title: 'Land', key: '0-0-0-2', slots: { title: 'land' }, },
              { title: 'Land', key: '0-0-0-3', slots: { title: 'reefs' }, },
              { title: 'Land', key: '0-0-0-4', slots: { title: 'water' }, },
              { title: 'Land', key: '0-0-0-5', slots: { title: 'vegetation' } },
              { title: 'Land', key: '0-0-0-6', slots: { title: 'population' } },
              { title: 'Land', key: '0-0-0-7', slots: { title: 'infrastructure' } },
              { title: 'Land', key: '0-0-0-8', slots: { title: 'conservation' } },
              { title: 'Land', key: '0-0-0-9', slots: { title: 'culture' } },
            ]
          }
        ],
      },
      {
        title: 'Yap',
        slots: { title: 'Yap' },
        key: '0-0-1',
        children: [
          {
            title: 'Main Island', key: '0-0-0-0-1', slots: { title: 'Main' },
            children: [
              { title: 'Land', key: '0-0-0-1-2', slots: { title: 'yapland' }, },
              { title: 'Land', key: '0-0-0-1-3', slots: { title: 'yapreefs' }, },
              { title: 'Land', key: '0-0-0-1-4', slots: { title: 'yapwater' }, },
              { title: 'Land', key: '0-0-0-1-5', slots: { title: 'yapvegetation' } },
              { title: 'Land', key: '0-0-0-1-6', slots: { title: 'yappopulation' } },
              { title: 'Land', key: '0-0-0-1-7', slots: { title: 'yapinfrastructure' } },
              { title: 'Land', key: '0-0-0-1-8', slots: { title: 'yapconservation' } },
              { title: 'Land', key: '0-0-0-1-9', slots: { title: 'yapculture' } },
            ]
          }
        ],
      },
      {
        title: 'Kosrae',
        slots: { title: 'Kosrae' },
        key: '0-0-2',
        children: [
          {
            title: 'Main Island', key: '0-0-0-0-2', slots: { title: 'Main' },
            children: [
              { title: 'Land', key: '0-0-0-0-2-2', slots: { title: 'kosraeland' }, },
              { title: 'Land', key: '0-0-0-0-2-3', slots: { title: 'kosraereefs' }, },
              { title: 'Land', key: '0-0-0-0-2-4', slots: { title: 'kosraewater' }, },
              { title: 'Land', key: '0-0-0-0-2-5', slots: { title: 'kosraevegetation' } },
              { title: 'Land', key: '0-0-0-0-2-6', slots: { title: 'kosraepopulation' } },
              { title: 'Land', key: '0-0-0-0-2-7', slots: { title: 'kosraeinfrastructure' } },
              { title: 'Land', key: '0-0-0-0-2-8', slots: { title: 'kosraeconservation' } },
              { title: 'Land', key: '0-0-0-0-2-9', slots: { title: 'kosraeculture' } },
            ]
          }
        ],
      },
    ]
  },
];

export default {
  data() {
    return {
      treeData,
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.maplinkintro {
  color: #959595;
  &:hover {
    color: white;
    background-color: #959595;
  }
}
.maplinkland {
  color: #954c97;
  &:hover {
    color: white;
    background-color: #954c97;
  }
}
.maplinkreefs {
  color: #2ca2db;
  &:hover {
    color: white;
    background-color: #2ca2db;
  }
}
.maplinkwater {
  color: #1dbbb0;
  &:hover {
    color: white;
    background-color: #1dbbb0;
  }
}
.maplinkvegetation {
  color: #7fb842;
  &:hover {
    color: white;
    background-color: #7fb842;
  }
}
.maplinkpopulation {
  color: #fab317;
  &:hover {
    color: white;
    background-color: #fab317;
  }
}
.maplinkinfrastructure {
  color: #ee5525;
  &:hover {
    color: white;
    background-color: #ee5525;
  }
}
.maplinkconservation {
  color: #be2326;
  &:hover {
    color: white;
    background-color: #be2326;
  }
}
.maplinkculture {
  color: #901c21;
  &:hover {
    color: white;
    background-color: #901c21;
  }
}
.maplink {
  padding: 5px;
  font-family: "Trend Sans One Regular", sans-serif;
  // &:hover {
  //   background-color: black;
  // }
}
.pohnpei {
  padding: 5px;
  color: white;
  background-color: #0d2881;
  font-family: "Trend Sans One Regular", sans-serif;
}
.yap {
  padding: 5px;
  color: white;
  background-color: #1169ab;
  font-family: "Trend Sans One Regular", sans-serif;
}
.kosrae {
  padding: 5px;
  color: white;
  background-color: #457fbf;
  font-family: "Trend Sans One Regular", sans-serif;
}
.chuuk {
  padding: 5px;
  color: white;
  background-color: #457fbf;
  font-family: "Trend Sans One Regular", sans-serif;
}
.atlas {
  background-color: #4c5861;
  padding: 5px;
  color: white;
  font-family: "Trend Sans One Regular", sans-serif;
}

.page {
  min-height: 100vh;
  margin-top: 50px;
  background-color: white;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

@media screen and (max-width: 991px) {
  .page {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
