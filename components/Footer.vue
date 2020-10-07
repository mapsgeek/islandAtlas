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
          <li class="footerList" style="border:none" @click="() => (privacy = true)">Privacy Policy</li>
          <!-- <li class="footerList">
            <nuxt-link style="color: white;padding:3px;" to="/contact"> Contact</nuxt-link>
          </li> -->
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
              <div style="padding:50px">
                <h1 style="text-align:center;margin-bottom:20px">Acknowledgements</h1>
                <div class="acknowledgement">
                  <p style="text-align: left; margin-bottom: 20px;">
                    <!-- <img width="60px;" style="margin-right:20px;" src="~assets/images/acknowledgments-icon.svg" alt="Copyright"> -->
                    This Atlas is a collaborative project conducted by:
                  </p>
                  <div style="text-align:center;margin-bottom: 20px;">
                    <p>
                      <strong>Island Research & Education Initiative (iREi)</strong>,
                      <br>
                      <strong>FSM Department of Environment, Climate Change & Emergency Management (DECEM)</strong>, and<br>
                      <strong>Water and Environmental Research Institute of the Western Pacific (WERI),</strong>
                      <br>
                      <strong>University of Guam (UOG)</strong>, with funding from the<br>
                      <strong>FSM National Government</strong> and the<br>
                      <strong>United States Geological Survey (USGS)</strong>
                    </p>
                  </div>
                  <div class="team">
                    <p style="text-align: left;margin-bottom: 20px;">
                      The Atlas core team are:
                    </p>
                    <ul>
                      <li>
                        <span>Chief editor:</span>
                        <p style="margin-left: 105px;margin-top: -20px;">
                          <strong>Danko Taboroši</strong>
                        </p>
                      </li>
                      <li>
                        <span>Co-editor:</span>
                        <p style="margin-left: 105px;margin-top: -20px;">
                          <strong>Maria Kottermair</strong>
                        </p>
                      </li>
                      <li>
                        <span>Advisors:</span>
                        <p style="margin-left: 105px;margin-top: -20px;">
                          <strong>John W. Jenson</strong><br>
                          <strong>Joseph D. Rouse</strong><br>
                          <strong>Myeong-Ho Yeo</strong><br>
                          <strong>Lara Payne</strong><br>
                          <strong>Shahram Khosrowpanah</strong><br>
                        </p>
                      </li>
                      <li>
                        <span>Developer:</span>
                        <p style="margin-left: 105px;margin-top: -20px;">
                          <strong>Ibrahim Mohammed</strong>
                        </p>
                      </li>
                      <li>
                        <span>Cartographer:</span>
                        <p style="margin-left: 105px;margin-top: -20px;">
                          <strong>Jan Rykr</strong>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <br>
                  <p>The Atlas would certainly not be as comprehensive as it is without the data-sharing agreements and support we have
                    received over the years from the following key partners and contributors:</p>
                  <br>

                  <div style=" margin-left: 120px;">
                    <strong>
                      USDA Natural Resources Conservation Service (NRCS)<br>
                      Yap State Department of Resources and Development (Yap R&D)<br>
                      Pohnpei State Department of Education (Pohnpei DOE)<br>
                      Chuuk State Environmental Protection Agency (Chuuk EPA)<br>
                      College of Micronesia (COM-FSM)<br>
                      Pacific Disaster Center (PDC)<br>
                    </strong>
                  </div>

                  <br>
                  <p>
                    Numerous other organizations contributed to this Atlas in different ways and at different stages of the project. The
                    most significant among them are:
                  <p>
                    <br>
                  <div style=" margin-left: 120px;">
                    <strong>
                      Chuuk Visitors Bureau (CVB)<br>
                      FSM Department of Resources and Development (FSM R&D)<br>
                      FSM Telecom<br>
                      Kosrae Island Resource Management Authority (KIRMA)<br>
                      Kosrae State Historic Preservation Office (Kosrae HPO)<br>
                      NOAA National Geodetic Survey (NGS)<br>
                      NOAA National Weather Service (NWS)<br>
                      NOAA Office for Coastal Management (OCM)<br>
                      The Nature Conservancy (TNC)<br>
                      Yap Community Action Program (Yap CAP)<br>
                      Yap Department of Health Services (Yap DHS)<br>
                      Yap State Historic Preservation Office (Yap HPO)<br>
                    </strong>
                  </div>

                  <br>
                  <p>
                    We have also received major support from the following individuals, to whom we extend special thanks:
                  <p>
                    <br>
                  <div style=" margin-left: 120px;">
                    <p>
                      <strong>Tony Kimmet,</strong> USDA-NRCS National Geospatial Center of Excellence
                    </p>
                    <p>
                      <strong>Drew Decker,</strong> USGS National Geospatial Program
                    </p>
                    <p>
                      <strong>Ross Winans,</strong> NOAA Office of Coastal Management
                    </p>
                  </div>
                  <br>
                  <p>
                    The maps, and indirectly other information in the Atlas, were reviewed and improved based on the comments by
                    the following individuals knowledgeable about their respective islands.
                  </p>
                  <br>
                  <div style=" margin-left: 45px;">
                    <ul>
                      <li>
                        <span style="font-style: italic; margin-left: -33px;">Yap:</span>
                        <p style="margin-left: 75px;
    margin-top: -20px;">
                          <strong>Joshua Libyan Tun</strong>, Yap DOE<br>
                          <strong>Francis Ruegorong</strong>, Yap Department of R&D <br>
                          <strong>Douglas Marar</strong>, Chuuk Visitors' Bureau<br>
                        </p>

                      </li>

                      <li>
                        <span style="font-style: italic;margin-left: -33px;">Chuuk:</span>
                        <p style="margin-left: 75px;
    margin-top: -20px;">
                          <strong>Brad Mori</strong>, Chuuk EPA<br>
                          <strong>Curtis Graham</strong>, Chuuk Conservation Society<br>
                          <strong>Douglas Marar</strong>, Chuuk Visitors' Bureau<br>
                        </p>
                      </li>
                      <li>
                        <span style="font-style: italic;margin-left: -33px;">Pohnpei:</span>
                        <p style="margin-left: 75px;
    margin-top: -20px;">
                          <strong>Peterson Anson</strong>, Pohnpei State Department of Land<br>
                          <strong>Jocyleen Anson</strong>, FSM Telecom<br>
                        </p>

                      </li>
                      <li>
                        <span style="font-style: italic;margin-left: -33px;">Kosrae:</span>
                        <p style="margin-left: 75px;
    margin-top: -20px;">
                          <strong>Blair Charley</strong>, KIRMA<br>
                          <strong>Betwin Tilfas</strong>, KIRMA<br>
                          <strong>Ashley Meredith</strong>, Kosrae HPO<br>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <br>
                  <p>
                    Numerous other individuals assisted this project in many different ways, from providing advice and existing data
                    layers to carrying out field verifications and creating new data layers specifically for this Atlas. In alphabetical
                    order, we thank:
                  <p>
                    <br>
                  <div style=" margin-left: 120px;">
                    <p>
                      <strong>Itorie Amond,</strong> FSM Department of Resources and Development
                    </p>
                    <p>
                      <strong>Mike Aulerio,</strong> The Nature Conservancy
                    </p>
                    <p>
                      <strong>John Paul Batarao,</strong> student, University of Guam
                    </p>
                    <p>
                      <strong>Julie Callebaut,</strong> Secretariat of the Pacific Regional Environment Programme
                    </p>
                    <p>
                      <strong>Ed Carlson,</strong> NOAA National Geodetic Survey (NGS)
                    </p>
                    <p>
                      <strong>Matthew Chigiyal,</strong> FSM National Oceanic Resource Management Authority
                    </p>
                    <p>
                      <strong>Gretchen Chiques,</strong> ESRI
                    </p>
                    <p>
                      <strong>Jacquline Hazen,</strong> Island Research & Education Initiative
                    </p>
                    <p>
                      <strong>Mandy Flowers,</strong> Island Research & Education Initiative
                    </p>
                    <p>
                      <strong>Wolf Forstreuter,</strong> Pacific GIS & Remote Sensing Council
                    </p>
                    <p>
                      <strong>Vaness Fread,</strong> Yap Community Action Program
                    </p>
                    <p>
                      <strong>Joyminda Palokoa George,</strong> UNICEF
                    </p>
                    <p>
                      <strong>John Gilmatam,</strong> Wa'ab Community Health Center / Yap Department of Health Services
                    </p>
                    <p>
                      <strong> Chip Guard,</strong> NOAA National Weather Service
                    </p>
                    <p>
                      <strong> William Jeffery,</strong> University of Guam
                    </p>
                    <p>
                      <strong> Brihmer Johnson,</strong> FSM Department of Resources and Development
                    </p>
                    <p>
                      <strong>Bart Lawrence,</strong> U.S. Department of Agriculture - Natural Resources Conservation Service
                    </p>
                    <p>
                      <strong>Len McKenzie,</strong> James Cook University
                    </p>
                    <p>
                      <strong>Nate Peterson,</strong> The Nature Conservancy
                    </p>
                    <p>
                      <strong>Larry Raigetal,</strong> Waagey
                    </p>
                    <p>
                      <strong>Bruce Robert,</strong> College of Micronesia
                    </p>
                    <p>
                      <strong>Nely Mori Ruben,</strong> Chuuk Visitors Bureau
                    </p>
                    <p>
                      <strong>Constance Sartor,</strong> student, University of Guam
                    </p>
                    <p>
                      <strong>Sharon Sawdey,</strong> Natural Resources Conservation Service
                    </p>
                    <p>
                      <strong>Paulina Yourupi-Sandy,</strong> Island Research & Education Initiative
                    </p>
                    <p>
                      <strong>Alex Zuccarelli,</strong> Pohnpei Eco-Adventure Guide
                    </p>

                  </div>
                  <br>
                  <p>
                    Over the years, we were also assisted by many other individuals whose names may not have been added to this list.
                    We apologize for that and remain grateful for all of their help. As we continue the work on the project, we hope that
                    more people will get involved with this Atlas and help us continually improve this resource for everyone.
                  </p>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Data Sources">
              <div style="padding:50px;">
                <div class="w-container">
                  <h1 style="text-align:center;margin-bottom:20px">Data Sources</h1>
                  <br>
                  <p>
                    The data layers served here include:
                  <ul style="list-style: disc;
    margin-left: 35px;color:black">
                    <li>
                      original information created specifically for this Atlas;
                    </li>
                    <li>
                      layers acquired from other sources and modified for inclusion in the Atlas; or a combination of the two, which is
                    </li>
                    <li>
                      layers where some data were previously available but required major updating.
                    </li>
                  </ul>
                  New layers were created by Island Research & Education Initiative (iREi) through fieldwork, imagery interpretation, or digitizing of published and unpublished sources. In contrast, many layers were already created by some other entity and our task was to locate, inventory, acquire,
                  process, and incorporate such data in the Atlas. In fact, inventorying and organizing existing data was the original
                  goal around which this Atlas was initiated. Over the years we have acquired relevant geospatial layers from a great
                  variety of sources and continue to do so. Before any such data are incorporated into this Atlas, the layers are
                  processed to ensure consistency throughout the atlas. The processing steps generally include but are not limited to
                  locating the most up-to-date and complete layers, extracting datasets for specific islands, verifying and correcting
                  the projection, shifting features to better match imagery and the Atlas original base layers, performing additional
                  edits and updates, checking topology and fixing errors, reviewing and populating attribute information, appending
                  source information to the attributes, and compiling and attaching metadata. That is why layers served to the users of
                  this Atlas contain many improvements with respect to their original versions. Irrespective of the type and amount of
                  work done to improve a particular layer, its creators/originators, version history, and changes made are carefully
                  documented in metadata. Arranged in alphabetical order, the principal sources from which we obtained geospatial
                  data or which we relied on to create GIS files are:
                  </p>
                  <br>
                  <div style=" margin-left: 120px;    margin-bottom: 1em;">
                    <strong>
                      Chuuk Environmental Protection Agency (Chuuk EPA)<br>
                      Chuuk State Department of Education (Chuuk DOE)<br>
                      Chuuk Visitors Bureau (CVB)<br>
                      College of Micronesia (COM-FSM)<br>
                      Digital Globe<br>
                      Franko's Maps<br>
                      FSM Department of Resources and Development<br>
                      FSM National Government<br>
                      FSM Telecom<br>
                      GEBCO Compilation Group<br>
                      Geoview<br>
                      GoogleMaps<br>
                      Kosrae Island Resource Management Authority (KIRMA)<br>
                      Kosrae HPO<br>
                      National Oceanic and Atmospheric Administration (NOAA)<br>
                      NOOA National Centers for Environmental Information (NCEI)<br>
                      NOAA National Geodetic Survey (NGS)<br>
                      NOAA National Weather Service (NWS)<br>
                      OpenStreetMap (OSM)<br>
                      Pacific Disaster Center (PDC)<br>
                      Pohnpei Eco-Adventure Guide<br>
                      Pohnpei State Department of Education (Pohnpei DOE)<br>
                      Pohnpei State Government<br>
                      PRISM Climate Group, Oregon State University<br>
                      Queens University of Charlotte<br>
                      University of Florida, Institute of Marine Remote Sensing (USF-IMaRS)<br>
                      University of Guam (UOG)<br>
                      US Department of Agriculture (USDA)<br>
                      USDA Natural Resources Conservation Service (NRCS)<br>
                      USDA Department of Agriculture (USDA)<br>
                      US Geological Survey (USGS)<br>
                      US National Park Service (NPS)<br>
                      The Nature Conservancy (TNC)<br>
                      Wa'ab Community Health Center (CHC)<br>
                      Yap Community Action Program (Yap CAP)<br>
                      Yap Department of Health Services<br>
                      Yap Historic Preservation Office (Yap HPO)<br>
                      Yap State Government<br>
                      Yap State Department of Resources and Development (Yap R&D)<br>
                    </strong>
                  </div>
                  <br>
                  <p>
                    It should be noted that the original objective of this Atlas was to make data that have already been created publicly
                    available and not improve or create new data. However, in the process of creating this Atlas, we found much of the
                    available data to be inadequate and decided to improve the layers or create new layers wherever possible. This is
                    beyond the project's original scope and users should know that improving the layers in this Atlas is an ongoing
                    process. Many layers are still based on incomplete information and will be updated as resources permit. As part of
                    the work on creating brand new layers, iREi has located many previously unrecognized sources, including print and
                    digital publications, unpublished reports, and even historical documents, from which we digitized geospatial
                    information for the purposes of this Atlas. The sources from which data were digitized are not listed above, but are
                    clearly identified in the relevant files' metadata.
                  </p>
                  <br>
                  <p>
                    If you happen to come across information which may not be properly credited, please contact us so that we can
                    investigate and correct any omissions. Also, if you encounter data in this Atlas which you think should not be freely
                    served to the public, please let us know your concerns. We have been careful to catalogue but not serve any data
                    whose owners do not want it freely distributed. For such layers, the data download options are not enabled and we
                    ask that you check metadata for the owner's or developer's points of contact and get in touch with them directly.
                  </p>
                </div>
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
            <!-- <br> -->
            <h4 class="footertext1">
              Water and Environmental Research Institute
              <br>
              of the Western Pacific (WERI)
            </h4>
            <!-- <br> -->
            <h4 class="footertext1">
              FSM Department of Environment, Climate Change
              <br>
              and Emergency Management (DECEM)
              <br>
              PO Box PS 69, Palikir, Pohnpei, FM 96941
            </h4>
          </div>
          <div class="copyRights">
            <img style="width:50px;margin-bottom:20px" src="~assets/images/logo-white.png" alt="">
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
.acknowledgement ul {
  color: black;
}
.acknowledgement {
  p {
    margiz-bottom: 1px;
  }
}
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
  margin-top: 22px;
  font-weight: 400;
}
.links {
  margin-top: 19px;
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