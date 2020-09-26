<template>
  <!-- <transition appear-active-class="animated fadeInUp" appear> -->
  <div style="background-color:#f6f9fc;  clear:both;
    position:relative;
    bottom:0;">
    <div class="footerContainer">
      <div id="footer">
        <div class="topBorder">
        </div>
        <ul>
          <li class="footerList firstItem" @click="() => (acknowledgments = true)">Acknowledgments and Data Sources</li>
          <li class="footerList" @click="() => (terms = true)">Terms</li>
          <li class="footerList" @click="() => (disclaimer = true)">Disclaimer</li>
          <li class="footerList" @click="() => (privacy = true)">Privacy Policy</li>
          <li class="footerList" style="border:none">
            <nuxt-link style="color: white;padding:3px;" to="/contact"> Contact</nuxt-link>
          </li>
          <!-- <li class="footerList" @click="() => (staff = true)">Project Staff</li> -->
          <!-- <li class="footerList" @click="() => (funding = true)">Funding Sources</li> -->
          <!-- <li class="footerList" @click="() => (datasource = true)">Data Sources</li> -->
        </ul>

        <!-- Models -->
        <a-modal v-model="disclaimer" title="Disclaimer" @ok="() => (disclaimer = false)" :bodyStyle=modal width=900px :footer="null">
          <img width="60px" src="~assets/images/symbol-disclaimer.png" alt="Copyright">
          <div style="width:90%;float:right;">
            <p style="margin-right:25px;">The&nbsp;<strong>Digital Atlas of Micronesia </strong>provides public access to geospatial and other information about the Federated States of Micronesia, including text, maps, geospatial data files, photographs, and other forms. All of the material published on this website is together referred to hereafter as "the information".
              The information provided is based on the most current data that are readily accessible and releasable by their sources to Island Research &amp; Education Initiative (iREi) and Water and Environmental Research Institute of the Western Pacific (WERI). Maps are for awareness purposes only, and contain no authoritative positional or other information. The Digital Atlas is intended primarily for application to research, education, and reference. While reasonable efforts are made to verify accuracy and precision, to correct errors as they are discovered, or to flag uncorrected or suspected errors or other limitations, the information on which most of the content is based is taken and used "as is" from the original provider. Errors, inaccuracies, or problems noted by users should be brought to the attention of the iREi GIS specialist at <i><a style="text-decoration:none;">atlas@islandresearch.org</a></i>.
              No warranty of merchantability nor any other guarantee is expressed or implied, and neither iREi, nor WERI or the University of Guam, or any other partners or data contributors involved are responsible for any consequences that may result from the use of the Digital Atlas for any applications, including commercial, engineering, or legal. No responsibility is accepted for accuracy, completeness, or relevance to the user's purpose. Those using the Atlas for any purpose whatsoever are advised to verify content with the relevant source and to obtain appropriate advice.
              Furthermore, no warranty is given that the information is free of infection by computer viruses or other contamination, nor that access to the website or any part of it will not suffer from interruption from time to time, without notice. Any part of the Digital Atlas may be updated, corrected, deleted, or otherwise changed without prior notice. Any links to other websites that have been included on this website are provided for convenience only. iREi and WERI do not accept any responsibility for their content.
              This project is modular in nature and is funded from a variety of sources indicated in "credits" section. Any information or interpretations drawn from the project do not necessarily reflect the views and policies of the funding agencies, nor does the mention of trade names or commercial products constitute their endorsement.
            </p>
          </div>
        </a-modal>
        <a-modal v-model="terms" title="Terms" @ok="() => (terms = false)" :bodyStyle=modal width=900px :footer="null">
          <img width="60px" src="~assets/images/symbol-copyright.png" alt="Copyright">
          <div style="width:90%;float:right;">
            <p style="margin-right:25px; margin-bottom: 0px;">Maps and information presented in this Digital Atlas of Micronesia are licensed under&nbsp;<a target="_blank" href="http://creativecommons.org/licenses/by-nc/3.0/us/">Creative Commons Attribution-Noncommercial 3.0 United States License</a>, as granted by <strong>Island Research &amp; Education Initiative (iREi) and&nbsp;Water and Environmental Research Institute of the Western Pacific (WERI)</strong>. We allow the users of this site to download, print, display, utilize, distribute, and modify the information for non-commercial purposes only. We do require that any instance in which the material from this website is used be accompanied by Acknowledgments of the source being the <strong>Digital Atlas of Micronesia</strong> by Island Research &amp; Education Initiative (iREi) and&nbsp;Water and Environmental Research Institute of the Western Pacific (WERI). For permission to reproduce or use the information on this web site beyond this limited licence, permission must be sought from iREi via the contact form provided on this web site.
              Please note that this license applies only to information contained in this website and owned by iREi and WERI.
            </p>
          </div>
        </a-modal>
        <a-modal v-model="privacy" title="Privacy Policy" @ok="() => (privacy = false)" :bodyStyle=modal width=900px :footer="null">
          <img width="60px" src="~assets/images/symbol-privacy.png" alt="Copyright">
          <div style="width:90%;float:right;">
            <p style="margin-right:25px;">This site does not request the user to provide any identifying information, such as name, address and affiliation. By accessing this site, certain information about the user, such as Internet protocol (IP) addresses, navigation through the site, the software used and the time spent, along with other similar information, may be stored on our servers. These will not specifically identify the user. The information will be used internally only for web site traffic analysis. No responsibility is assumed for the security of this information.
            </p>
          </div>
        </a-modal>
        <!-- <a-modal v-model="staff" title="Project Staff" @ok="() => (staff = false)" :bodyStyle=modal width=900px :footer="null">
          <img width="60px" src="~assets/images/symbol-Staff.png" alt="Copyright">
          <div style="width:90%;float:right;">
            <p style="margin-right:25px;">
              This project is a public service to the people of the Federated States of Micronesia. It is created and maintained by <strong>Island Research &amp; Education Initiative (iREi)</strong>, the <strong>Water and Environmental Research Institute of the Western Pacific (WERI)</strong>, and other partners. It would not be possible without the work of the following individuals.
            </p>
            <a-list item-layout="horizontal" :data-source="data">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-list-item-meta :description="item.description">
                  <p style="margin-top:10px" slot="title">
                    {{item.header}}
                    <br>
                    {{ item.title }}
                  </p>
                  <a-avatar style="width: 100px;height: 100px;" size="large" slot="avatar" :src="item.src" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
        </a-modal> -->
        <a-modal v-model="acknowledgments" title="Acknowledgments and Data Sources" @ok="() => (acknowledgments = false)" :bodyStyle=modal width=900px :footer="null">
          <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="Acknowledgments">
              <img width="60px" src="~assets/images/symbol-Staff.png" alt="Copyright">
              <div style="width:90%;float:right;">
                <p>We are grateful to the following individuals and agencies that helped this project by providing additional data or technical expertise.<br>
                  The creators/originators of specific data sets are named in the metadata of the respective files. </p>
              </div>
              <div class="tg-wrap">
                <table class="tg">
                  <tbody>
                    <tr>
                      <th class="tg-9hbo">First Name</th>
                      <th class="tg-9hbo">Last Name</th>
                      <th class="tg-9hbo">Organization</th>
                      <th class="tg-9hbo">Organization Abbreviated</th>
                      <th class="tg-9hbo">Contributions</th>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Tony</td>
                      <td class="tg-yw4l">Kimmet</td>
                      <td class="tg-yw4l">U.S. Department of Agriculture -<br> Natural Resources Conservation Service</td>
                      <td class="tg-yw4l">USDA-NRCS</td>
                      <td class="tg-yw4l">Imagery</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Drew</td>
                      <td class="tg-yw4l">Decker</td>
                      <td class="tg-yw4l">U.S. Geological survey</td>
                      <td class="tg-yw4l">USGS</td>
                      <td class="tg-yw4l">DLGs/ Topo maps</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Alex</td>
                      <td class="tg-yw4l">Zuccarelli</td>
                      <td class="tg-yw4l">--</td>
                      <td class="tg-yw4l">--</td>
                      <td class="tg-yw4l">Various hiking and cultural KMLs</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Ed</td>
                      <td class="tg-yw4l">Carlson</td>
                      <td class="tg-yw4l">NOAA National Geodetic Survey</td>
                      <td class="tg-yw4l">NOAA-NGS</td>
                      <td class="tg-yw4l">Benchmarks</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Ross</td>
                      <td class="tg-yw4l">Winans</td>
                      <td class="tg-yw4l">NOAA Office of Coastal Management</td>
                      <td class="tg-yw4l">NOAA-OCM</td>
                      <td class="tg-yw4l">DLGs</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Gretchen</td>
                      <td class="tg-yw4l">Chiques</td>
                      <td class="tg-yw4l">NOAA Office of Coastal Management</td>
                      <td class="tg-yw4l">NOAA-OCM</td>
                      <td class="tg-yw4l"></td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Kalisi</td>
                      <td class="tg-yw4l">Mausio</td>
                      <td class="tg-yw4l">NOAA Office of Coastal Management</td>
                      <td class="tg-yw4l">NOAA-OCM</td>
                      <td class="tg-yw4l"></td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Bruce</td>
                      <td class="tg-yw4l">Robert</td>
                      <td class="tg-yw4l">College of Micronesia</td>
                      <td class="tg-yw4l">COM</td>
                      <td class="tg-yw4l">Historic maps</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Sharon</td>
                      <td class="tg-yw4l">Sawdey</td>
                      <td class="tg-yw4l">U.S. Department of Agriculture -<br> Natural Resources Conservation Service</td>
                      <td class="tg-yw4l">USDA-NRCS</td>
                      <td class="tg-yw4l"></td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Bart</td>
                      <td class="tg-yw4l">Lawrence</td>
                      <td class="tg-yw4l">U.S. Department of Agriculture -<br> Natural Resources Conservation Service</td>
                      <td class="tg-yw4l">USDA-NRCS</td>
                      <td class="tg-yw4l"></td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Len</td>
                      <td class="tg-yw4l">McKenzie</td>
                      <td class="tg-yw4l">James Cook University</td>
                      <td class="tg-yw4l">JCU</td>
                      <td class="tg-yw4l">Seagrasses</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Mike</td>
                      <td class="tg-yw4l">Aulerio</td>
                      <td class="tg-yw4l">The Nature Conservancy</td>
                      <td class="tg-yw4l">TNC</td>
                      <td class="tg-yw4l">Various conservation layers</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Nate</td>
                      <td class="tg-yw4l">Peterson</td>
                      <td class="tg-yw4l">The Nature Conservancy</td>
                      <td class="tg-yw4l">TNC</td>
                      <td class="tg-yw4l">Vegetation layers</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Chip</td>
                      <td class="tg-yw4l">Guard</td>
                      <td class="tg-ecrz">National Weather Service Guam</td>
                      <td class="tg-yw4l">NWS</td>
                      <td class="tg-yw4l">Weather stations</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Paulina</td>
                      <td class="tg-yw4l">Yourupi-Sandy</td>
                      <td class="tg-yw4l">Island Research &amp; Education Initiative</td>
                      <td class="tg-yw4l">iREi</td>
                      <td class="tg-yw4l">Building identifications</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Jacquline</td>
                      <td class="tg-yw4l">Hazen</td>
                      <td class="tg-yw4l">Island Research &amp; Education Initiative</td>
                      <td class="tg-yw4l">iREi</td>
                      <td class="tg-yw4l">Schools</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Wolf</td>
                      <td class="tg-yw4l">Forstreueter</td>
                      <td class="tg-yw4l">SPC Geoscience Division</td>
                      <td class="tg-yw4l">SPC</td>
                      <td class="tg-yw4l">Elevation data info</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Brihmer</td>
                      <td class="tg-yw4l">Johnson</td>
                      <td class="tg-yw4l">Department of Resources and Development, FSM</td>
                      <td class="tg-yw4l">FSMRD</td>
                      <td class="tg-yw4l">Raw census data</td>
                    </tr>
                    <tr>
                      <td class="tg-yw4l">Itorie</td>
                      <td class="tg-yw4l">Amond</td>
                      <td class="tg-yw4l">Department of Resources and Development, FSM</td>
                      <td class="tg-yw4l">FSMRD</td>
                      <td class="tg-yw4l">Raw census data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </a-tab-pane>
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
        </a-modal>
        <!-- <a-modal v-model="funding" title="Funding Sources" @ok="() => (funding = false)" :bodyStyle=modal width=900px :footer="null">
          <img width="60px" src="~assets/images/symbol-funding.png" alt="Copyright">
          <div style="width:90%;float:right;">
            <Strong> Project was funded by different sources, as follows:</Strong>
            <h5 style="margin-right:25px;">POHNPEI MODULE<br>
              <p style="margin-right:25px;">Main island unit</p>
            </h5>
            <strong>United States Geological Survey (USGS) </strong>through the <strong>National Institutes for Water Resources (NIWR)</strong> Program 104-B FY2016 and by the <strong>Pohnpei State Government</strong>,<strong> Department of Education (Pohnpei DOE)</strong>. <div style="margin-top:5px;"></div>
            Funding information for other parts of the atlas will be included here as it becomes available.
          </div>
        </a-modal> -->
        <div class="visitorsMap">
          <a href='https://clustrmaps.com/site/19u15' title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=400&t=n&d=qsVavNLv-TnGAJSWdKYe6w8FHSaFqNF9QcyBDaYTe00&co=4b5861&ct=cdd4d9' /></a>
        </div>
        <div class="footerGrid">
          <div class="links">
            <!-- <a href="http://www.islandresearch.org" target="_blank">
            <img src="~assets/images/logoirei.png">
          </a> -->
            <h4 class="footertext1">
              Island Research &amp; <br>
              Education Initiative (iREi)
            </h4>
            <!-- <a href="http://www.weriguam.org" target="_blank">
            <img src="~assets/images/logoweri.png">
          </a> -->
            <br>
            <h4 class="footertext1">
              Water and Environmental Research Institute
              <br>
              of the Western Pacific (WERI)
            </h4>
            <br>
            <h4 class="footertext1">
              FSM Department of Environment, Climate Change
              <br>
              and Emergency Management (DECEM)
              <br>
              P. O. Box PS-69
              <br>
              Palikir, Pohnpei FSM 96941
            </h4>
          </div>
          <div class="copyRights">
            <img style="width:50px;margin-bottom:20px" src="~assets/images/logo.png" alt="">
            <br>
            <p style="color:white">{{year}} &copy iREi/DECEM/WERI</p>
          </div>

        </div>
      </div>

    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
const data = [
  {
    title: 'Dr. Danko Taboroši',
    description: "Island Research & Education Initiative (iREi)",
    header: "Chief Editor / Principal Investigator",
    src: "https://islandatlas.org/assets/images/Photo-Danko-Taborosi.jpg"
  },
  {
    title: 'Maria Kottermair',
    description: "Island Research & Education Initiative (iREi)",
    header: "Co-editor",
    src: "https://islandatlas.org/assets/images/Photo-Maria-Kottermair.jpg"
  },
  {
    title: 'Ibrahim Mohammed',
    description: "Island Research & Education Initiative (iREi)",
    header: "GIS Web Developer",
    src: "https://islandatlas.org/assets/images/Photo-Ibrahim mohammed.jpg"
  },
  {
    title: 'Jan Rykr',
    description: "Firwood Maps",
    header: "Cartographer",
    src: "https://islandatlas.org/assets/images/Photo-Jan-Rykr.jpg"
  },
  {
    title: 'Dr. Shahram Khosrowpanah',
    description: "Water and Environmental Research Institute of the Western Pacific (WERI)",
    header: "Co-Principal Investigator for Pohnpei module",
    src: "https://islandatlas.org/assets/images/Photo-Shahram-Koshrowpanah.jpg"
  },
  {
    title: 'Dr.Joseph D.Rouse',
    description: "Water and Environmental Research Institute of the Western Pacific (WERI)",
    header: "Co-Principal Investigator for Yap module",
    src: "https://islandatlas.org/assets/images/Photo-Joseph-Rouse.jpg"
  },
  {
    title: 'Dr.John W.Jenson',
    description: "Water and Environmental Research Institute of the Western Pacific (WERI)",
    header: "Co-Principal Investigator for Kosrae module",
    src: "https://islandatlas.org/assets/images/Photo-John-Jenson.jpg"
  },
  {
    title: 'Peterson Anson',
    description: "Office of Transportation & Infrastructure, Pohnpei State Government",
    header: "Advisor",
    src: "https://islandatlas.org/assets/images/Photo-Peterson-Anson.jpg"
  },
  {
    title: 'Jocyleen Anson',
    description: "FSM Telecommunications Corporation",
    header: "Advisor",
    src: "https://islandatlas.org/assets/images/Photo-Jocyleen-Anson.jpg"
  },
  {
    title: 'Snyther Biza',
    description: "College of Micronesia",
    header: "Advisor",
    src: "https://islandatlas.org/assets/images/Photo-Snyther-Biza.jpeg"
  },
  {
    title: 'Lara Payne',
    description: "Weston Solutions, Inc.",
    header: "Advisor",
    src: "https://islandatlas.org/assets/images/Photo-Lara-Payne.jpg"
  },
  {
    title: 'Dorothy Rono',
    description: "Island Research & Education Initiative (iREi)",
    header: "KML Processing",
    src: "https://islandatlas.org/assets/images/Photo-Dorothy-Rono.jpg"
  },
];
export default {
  data() {
    return {
      disclaimer: false,
      terms: false,
      privacy: false,
      staff: false,
      acknowledgments: false,
      funding: false,
      datasource: false,
      modal: { height: "600px", overflow: "auto" },
      data,
      year: new Date().getFullYear(),
    };
  },
  mounted() {
    this.$root.$on('ToggleModal', () => {
      this.acknowledgments = true
    })
  }
}

</script>

<style lang="less" scoped>
@media (min-width: 1199px) {
  #footer {
    width: 70%;
  }
  .copyRights {
    text-align: center;
    margin-top: 200px;
  }
}
@media (max-width: 1450px) {
  #footer {
    width: 90%;
  }
  .copyRights {
    text-align: center;
    align-self: end;
    margin: 0;
  }
}
@media (max-width: 1199px) {
  #footer {
    width: 95%;
  }
  .copyRights {
    text-align: center;
    align-self: end;
    margin: 0;
  }
}

@media (max-width: 900px) {
  #footer {
    width: 100%;
  }
  .copyRights {
    align-self: end;
    margin: 0;
  }
}
@media (max-width: 767px) {
  .visitorsMap {
    display: none;
  }
  .copyRights {
    align-self: end;
    margin: 0;
  }
}
.footerGrid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  border-radius: 10px;
}
.footerContainer {
  background-color: #4b5861;
}
#footer {
  background-color: #4b5861;
  margin: auto;
  height: auto;
  padding-bottom: 30px;
}
ul {
  color: white;
  list-style: none;
  padding: 0;
}
.footerList {
  display: inline-block;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  border-right: 2px solid rgb(245, 245, 245);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
// #footer > ul > li:nth-child(1) {
//   border-left: 2px solid rgb(245, 245, 245);
// }
.topBorder {
  border-bottom: 2px solid rgb(245, 245, 245);
  height: 50px;
}
.footertext1 {
  color: white;
  font-family: "Raleway";
  font-size: 14px;
  margin-top: 5px;
  font-weight: 400;
}
.links {
  margin-top: 50px;
  padding-left: 30px;
}
.visitorsMap {
  float: right;
}

.firstItem {
  margin-left: 15px;
  // border-left: 2px solid #f5f5f5;
}
@media screen and (max-width: 600px) {
  li {
    border-right: none !important;
    display: block !important;
  }
  .topBorder {
    height: 20px;
  }
  .links {
    margin-top: 25px;
    padding-left: 15px;
  }
  .firstItem {
    margin-left: 0;
    border-left: none;
  }
}
table {
  border: 1px solid #eaeaea;
}
td {
  padding: 10px;
  border: 1px solid #eaeaea;
}
th {
  padding: 10px;
}
</style>