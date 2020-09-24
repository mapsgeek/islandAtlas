<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="page">
        <h1 style="text-align:center;margin-top:20px">Data repository</h1>
        <div style="text-align:center">
          <Strong>Change island</Strong>
          <br>
          <a-select style="width: 120px;margin-bottom:40px;margin-top:10px" :defaultValue=island @change="handleChange">
            <a-select-option value="pohnpei">
              Pohnpei
            </a-select-option>
            <a-select-option value="yap">
              Yap
            </a-select-option>
            <!-- <a-select-option value="chuuk">
            Chuuk lagoon
          </a-select-option> -->
            <a-select-option value="kosrae">
              Kosrae
            </a-select-option>
          </a-select>
        </div>

        <a-button style="margin-bottom:10px;" type="primary" @click="downloadWithAxios" :disabled="!hasSelected">Download</a-button>
        <!-- <a-skeleton v-if="$apollo.queries.vectors.loading" active /> -->
        <a-table id="table" :row-selection="rowSelection" :columns="columns" :data-source="vectors" :scroll="{ x: 800, y: 900 }">
          <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
            {{record.Description}}
          </p>
        </a-table>
      </div>
    </div>
  </transition>
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
  scrollToTop: true,

  data: () => {
    return {
      // localStorage.getItem("island") ||
      island: localStorage.getItem("island") || '',
      columns,
      selectedRows: [],
    }
  },
  mounted() {
    if (process.browser) {
      if (localStorage.getItem("island") === null) {
        this.island = "pohnpei"
      } else {
        this.island = localStorage.getItem("island")
      }
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRows.length > 0;
    },
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          this.selectedRows = selectedRows;
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.file.includes('DO NOT SHARE'), // Column configuration not to be checked
            name: record.file,
          },
        }),
      };
    }
  },
  methods: {
    handleChange(value) {
      this.island = value
    },
    // onSelectChange(selectedRowKeys, selectedRows) {
    //   this.selectedRows = selectedRows;
    // },
    downloadWithAxios() {
      this.selectedRows.forEach(url => {
        this.$axios({
          url: `http://islandatlas.org/assets/maps/${this.island}${url.file}`,
          method: 'GET',
          proxyHeaders: false,
          credentials: false,
          responseType: 'blob', // important
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data
          ]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `file.kmz`);
          document.body.appendChild(link);
          link.click();
        })
          .catch(() => console.log('error occured'))
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
