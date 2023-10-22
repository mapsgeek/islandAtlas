<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="page">
        <h1 style="text-align:center;margin-bottom:20px">Site Map</h1>
        <client-only>
          <a-tree :tree-data="treeData" :default-expanded-keys=keys @expand="onExpand" :autoExpandParent="false">
            <a slot="homepage" class="intro atlas" href="/">DIGITAL ATLAS OF MICRONESIA</a>
            <span slot="islands" style="cursor: default;" class="maplink">Island Modules</span>
            <span slot="pohnpei" class="intro pohnpei">Pohnpei State</span>

            <a slot="Main" class="maplinkintro maplink" href="/pohnpei">Pohnpei</a>
            <a slot="Interactive" class="maplinkintro maplink" href="/interactive-map">Interactive Map</a>
            <a slot="Repo" class="maplinkintro maplink" href="/data-repository">Data Repository</a>
            <a slot="Gallery" class="maplinkintro maplink" href="/gallery">Gallery</a>
            <a slot="About" class="maplinkintro maplink" href="/about">About</a>
            <a slot="Contact" class="maplinkintro maplink" href="/contact">Contact Us</a>
            <a slot="Outer" class="maplinkintro maplink" href="" disabled>Outer Islands (Soon)</a>

            <a slot="land" class="maplinkland maplink" href="/pohnpei/land">Land</a>
            <a slot="reefs" class="maplinkreefs maplink" href="/pohnpei/reefs">Reefs</a>
            <a slot="water" class="maplinkwater maplink" href="/pohnpei/water">Water</a>
            <a slot="vegetation" class="maplinkvegetation maplink" href="/pohnpei/vegetation">Vegetation</a>
            <a slot="population" class="maplinkpopulation maplink" href="/pohnpei/population">Population</a>
            <a slot="infrastructure" class="maplinkinfrastructure maplink" href="/pohnpei/infrastructure">Infrastructure</a>
            <a slot="conservation" class="maplinkconservation maplink" href="/pohnpei/conservation">Conservation</a>
            <a slot="culture" class="maplinkculture maplink" href="/pohnpei/culture">Culture</a>

            <span slot="Yap" class="intro yap">Yap State</span>
            <a slot="yapMain" class="maplinkintro maplink" href="/yap">WAQAB (YAP Proper)</a>

            <a slot="Neighbor" class="maplinkintro maplink" href="oi-yap">NEIGHBORING ISLANDS (Soon)</a>

            <a slot="yapland" class="maplinkland maplink" href="/yap/land">Land</a>
            <a slot="yapreefs" class="maplinkreefs maplink" href="/yap/reefs">Reefs</a>
            <a slot="yapwater" class="maplinkwater maplink" href="/yap/water">Water</a>
            <a slot="yapvegetation" class="maplinkvegetation maplink" href="/yap/vegetation">Vegetation</a>
            <a slot="yappopulation" class="maplinkpopulation maplink" href="/yap/population">Population</a>
            <a slot="yapinfrastructure" class="maplinkinfrastructure maplink" href="/yap/infrastructure">Infrastructure</a>
            <a slot="yapconservation" class="maplinkconservation maplink" href="/yap/conservation">Conservation</a>
            <a slot="yapculture" class="maplinkculture maplink" href="/yap/culture">Culture</a>

            <span slot="Kosrae" class="intro kosrae">kosrae state</span>
            <a slot="kosraeMain" class="maplinkintro maplink" href="/kosrae">kosrae</a>
            <!-- <a slot="OuterKos" class="maplinkintro maplink" href="" disabled>Outer Islands (Soon)</a> -->

            <a slot="kosraeland" class="maplinkland maplink" href="/kosrae/land">Land</a>
            <a slot="kosraereefs" class="maplinkreefs maplink" href="/kosrae/reefs">Reefs</a>
            <a slot="kosraewater" class="maplinkwater maplink" href="/kosrae/water">Water</a>
            <a slot="kosraevegetation" class="maplinkvegetation maplink" href="/kosrae/vegetation">Vegetation</a>
            <a slot="kosraepopulation" class="maplinkpopulation maplink" href="/kosrae/population">Population</a>
            <a slot="kosraeinfrastructure" class="maplinkinfrastructure maplink" href="/kosrae/infrastructure">Infrastructure</a>
            <a slot="kosraeconservation" class="maplinkconservation maplink" href="/kosrae/conservation">Conservation</a>
            <a slot="kosraeculture" class="maplinkculture maplink" href="/kosrae/culture">Culture</a>

            <span slot="Chuuk lagoon" class="intro chuuk">Chuuk state</span>
            <a slot="chuukMain" class="maplinkintro maplink" href="/chuuk">Chuuk lagoon</a>
            <a slot="OuterChuuk" class="maplinkintro maplink" href="" disabled>Outer Islands (Soon)</a>

            <a slot="chuukland" class="maplinkland maplink" href="/chuuk/land">Land</a>
            <a slot="chuukreefs" class="maplinkreefs maplink" href="/chuuk/reefs">Reefs</a>
            <a slot="chuukwater" class="maplinkwater maplink" href="/chuuk/water">Water</a>
            <a slot="chuukvegetation" class="maplinkvegetation maplink" href="/chuuk/vegetation">Vegetation</a>
            <a slot="chuukpopulation" class="maplinkpopulation maplink" href="/chuuk/population">Population</a>
            <a slot="chuukinfrastructure" class="maplinkinfrastructure maplink" href="/chuuk/infrastructure">Infrastructure</a>
            <a slot="chuukconservation" class="maplinkconservation maplink" href="/chuuk/conservation">Conservation</a>
            <a slot="chuukculture" class="maplinkculture maplink" href="/chuuk/culture">Culture</a>

            <a slot="Acknowledgements" class="maplinkintro maplink" href="/acknowledgements">Acknowledgements</a>
            <a slot="Data" class="maplinkintro maplink" href="/data-sources">Data sources</a>
          </a-tree>
        </client-only>
      </div>

    </div>
  </transition>
</template>

<script>
const treeData = [
  {
    title: 'DIGITAL ATLAS OF MICRONESIA',
    key: '0',
    slots: { title: 'homepage' },
    children: [
      {
        title: 'Island Modules',
        key: '0-0',
        slots: { title: 'islands' },
        children: [
          {
            title: 'Yap',
            slots: { title: 'Yap' },
            key: '0-0-1',
            children: [
              {
                title: 'Main Island', key: '0-0-0-0-1', slots: { title: 'yapMain' },
                children: [
                  { title: 'Land', key: '0-0-0-1-2', slots: { title: 'yapland' }, },
                  { title: 'Land', key: '0-0-0-1-3', slots: { title: 'yapreefs' }, },
                  { title: 'Land', key: '0-0-0-1-4', slots: { title: 'yapwater' }, },
                  { title: 'Land', key: '0-0-0-1-5', slots: { title: 'yapvegetation' } },
                  { title: 'Land', key: '0-0-0-1-6', slots: { title: 'yappopulation' } },
                  { title: 'Land', key: '0-0-0-1-7', slots: { title: 'yapinfrastructure' } },
                  { title: 'Land', key: '0-0-0-1-8', slots: { title: 'yapconservation' } },
                  { title: 'Land', key: '0-0-0-1-9', slots: { title: 'yapculture' } },
                ],
              },
              {
                title: 'Neighbor', key: '0-0-0-0-5', slots: { title: 'Neighbor' },
              }
            ],
          },
          {
            title: 'Chuuk lagoon',
            slots: { title: 'Chuuk lagoon' },
            key: '0-0-3',
            children: [
              {
                title: 'Main Island', key: '0-0-0-0-3', slots: { title: 'chuukMain' },
                children: [
                  { title: 'Land', key: '0-0-0-0-3-2', slots: { title: 'chuukland' }, },
                  { title: 'Land', key: '0-0-0-0-3-3', slots: { title: 'chuukreefs' }, },
                  { title: 'Land', key: '0-0-0-0-3-4', slots: { title: 'chuukwater' }, },
                  { title: 'Land', key: '0-0-0-0-3-5', slots: { title: 'chuukvegetation' } },
                  { title: 'Land', key: '0-0-0-0-3-6', slots: { title: 'chuukpopulation' } },
                  { title: 'Land', key: '0-0-0-0-3-7', slots: { title: 'chuukinfrastructure' } },
                  { title: 'Land', key: '0-0-0-0-3-8', slots: { title: 'chuukconservation' } },
                  { title: 'Land', key: '0-0-0-0-3-9', slots: { title: 'chuukculture' } },
                ]
              },
              {
                title: 'OuterChuuk', key: '0-0-0-0-6', slots: { title: 'OuterChuuk' },
              }
            ],
          },
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
              },
              {
                title: 'OUTER ISLANDS', key: '0-0-0-0-4', slots: { title: 'Outer' },
              }
            ],
          },
          {
            title: 'Kosrae',
            slots: { title: 'Kosrae' },
            key: '0-0-2',
            children: [
              {
                title: 'Main Island', key: '0-0-0-0-2', slots: { title: 'kosraeMain' },
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
              },
            ],
          },
        ]
      },
      {
        title: 'Interactive', key: '0-1', slots: { title: 'Interactive' },
      },
      {
        title: 'Repo', key: '0-2', slots: { title: 'Repo' },
      },
      {
        title: 'Gallery', key: '0-3', slots: { title: 'Gallery' },
      },
      {
        title: 'About', key: '0-4', slots: { title: 'About' },
      },
      {
        title: 'Contact', key: '0-5', slots: { title: 'Contact' },
      },
      {
        title: 'Acknowledgements', key: '0-6', slots: { title: 'Acknowledgements' },
      },
      {
        title: 'Data sources', key: '0-7', slots: { title: 'Data' },
      },
    ],
  },
];

export default {
  data() {
    return {
      treeData,
      expandedKeys: ["0-0"]
    };
  },
  mounted() {
    if (process.client) {
      if (localStorage.getItem("keys") === null) {
        this.expandedKeys = ["0-0"]
      } else {
        this.expandedKeys = JSON.parse(localStorage.getItem("keys"))
      }
    }
  },
  computed: {
    keys: {
      get() {
        if (process.client) {
          return JSON.parse(localStorage.getItem("keys")) || ["0-0"]
        }
      },
      set(value) {
        this.expandedKeys = value
      }
    }
  },
  methods: {
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys
      localStorage.setItem('keys', JSON.stringify(this.expandedKeys))
    }
  },
};
</script>

<style lang="less" scoped>
.intro {
  cursor: default;
}
.atlas {
  cursor: pointer;
}
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
  background-color: #0e1c67;
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
@media screen and (max-width: 480px) {
  .page ul {
    font-size: xx-small;
  }
}
</style>
