<template>
  <client-only>
    <transition appear-active-class="animated fadeInUp" appear>
      <div style="background-color:#f6f9fc;">
        <div class="page">
          <h1 style="text-align:center;margin-bottom:20px">Data repository</h1>
          <div style="text-align:center">
            <Strong>Select island</Strong>
            <br>
            <a-select style="width: 140px;margin-bottom:40px;margin-top:10px;text-align:center;" :defaultValue="intialIsland" @change="handleChange">
              <a-select-option value="Yap">
                Yap
              </a-select-option>
              <a-select-option value="Chuuk">
                Chuuk
              </a-select-option>
              <a-select-option value="Pohnpei">
                Pohnpei
              </a-select-option>
              <a-select-option value="Kosrae">
                Kosrae
              </a-select-option>
            </a-select>
          </div>

          <a-button style="margin-bottom:10px;" type="primary" @click="downloadWithAxios" :disabled="!hasSelected" :loading="loading">Download</a-button>
          <!-- <a-skeleton v-if="$apollo.queries.vectors.loading" active /> -->
          <a-table id="table" :row-selection="rowSelection" :columns="columns" :data-source="vectors">
            <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
              {{record.Description}}
            </p>
          </a-table>
        </div>
      </div>
    </transition>
  </client-only>
</template>

<script>
import table from '~/apollo/queries/fetchTable'
import axios from '@nuxtjs/axios'

const columns = [
  {
    title: 'ID', dataIndex: 'id', key: 'id',
    sorter: (a, b) => a.key - b.key,
    sortDirections: ['ascend'],
  },
  {
    title: 'Item Name', dataIndex: 'name', key: 'name',
  },
  {
    title: 'General Theme', dataIndex: 'general', key: 'general',
    filters: [
      {
        text: 'Land',
        value: 'Land',
      },
      {
        text: 'Reefs',
        value: 'Reefs',
      },
      {
        text: 'Water',
        value: 'Water',
      },
      {
        text: 'Vegetation',
        value: 'Vegetation',
      },
      {
        text: 'Population',
        value: 'Population',
      },
      {
        text: 'Infrastructure',
        value: 'Infrastructure',
      },
      {
        text: 'Conservation',
        value: 'Conservation',
      },
      {
        text: 'Culture',
        value: 'Culture',
      }
    ],
    onFilter: (value, record) => record.general.indexOf(value) === 0,
  },
  {
    title: 'Island', dataIndex: 'island', key: 'island'
  },
  {
    title: 'Geometry', dataIndex: 'geometry', key: 'geometry',
    // filters: [
    //   {
    //     text: 'Polygon',
    //     value: 'Polygon',
    //   },
    //   {
    //     text: 'Point',
    //     value: 'Point',
    //   },
    //   {
    //     text: 'Line',
    //     value: 'Line',
    //   },
    //   {
    //     text: 'raster',
    //     value: 'raster'
    //   },
    //   {
    //     text: 'Various',
    //     value: 'Various',
    //   }
    // ],
    // onFilter: (value, record) => record.geometry.indexOf(value) === 0,
  },
  {
    title: 'File Type', dataIndex: 'filetype', key: 'filetype',
    filters: [
      {
        text: 'ESRI Shapefile',
        value: 'Esri Shapefile',
      },
      {
        text: 'Google Earth (KMZ)',
        value: 'Google Earth (KMZ)',
      },
      {
        text: 'Raster',
        value: 'TIFF',
      }
    ],
    onFilter: (value, record) => record.filetype.indexOf(value) === 0,
  },
];

export default {
  // scrollToTop: true,
  data: () => {
    return {
      // localStorage.getItem("island") || 'Select island',
      island: 'Yap',
      columns,
      selectedRowKeys: [],
      rows: [],
      loading: false
    }
  },
  mounted() {
    if (process.client) {
      if (localStorage.getItem("island") === null) {
        this.island = "Yap"
      } else {
        this.island = localStorage.getItem("island")
      }
    }
  },
  computed: {
    hasSelected: {
      get() {
        return this.selectedRowKeys.length > 0;
      },
      set(value) {
        this.value = value
      }
    },
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          this.selectedRowKeys = selectedRowKeys
          this.rows = selectedRows
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.file.includes('DO NOT SHARE'), // Column configuration not to be checked
            name: record.file,
          },
        }),
        selectedRowKeys: this.selectedRowKeys
      };
    },
    intialIsland: {
      get() {
        if (process.client) {
          return localStorage.getItem("island") || 'Yap'
        }
      },
      set(value) {
        this.value = value
      }
    }
  },
  methods: {
    handleChange(value) {
      if (process.client) {
        localStorage.setItem("island", value)
      }
      this.island = value
    },
    // onSelectChange(selectedRowKeys, selectedRows) {
    //   this.selectedRowKeys = selectedRowKeys;
    // },
    downloadWithAxios() {
      this.loading = true;
      this.$nuxt.$loading.start()
      this.rows.forEach(url => {
        this.$axios({
          url: `https://islandatlas.org/assets/maps/${this.island.toLowerCase()}${url.file}`,
          method: 'GET',
          proxyHeaders: false,
          credentials: false,
          responseType: 'arraybuffer', // important
        }).then((response) => {
          const urlx = window.URL.createObjectURL(new Blob([response.data
          ]));
          const link = document.createElement('a');
          link.href = urlx;
          link.setAttribute('download', url.file.toString());
          document.body.appendChild(link);
          link.click();
          this.selectedRowKeys = []
          this.rows = []
        })
          .then(() => {
            this.loading = false
            this.$nuxt.$loading.finish()
          })
          .catch((error) => {
            this.loading = false
            this.$nuxt.$loading.finish()
            // alert('Sorry, something went wrong please try again')
          })
      });
    }
  },
  apollo: {
    vectors: {
      query: table,
      variables() {
        return {
          island: this.island
        }
      }
    },
  },
  head: {
    title: 'Data repository'
  },
}
</script>

<style lang="less" scoped>
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
  #table {
    overflow: auto;
  }
  .page {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
