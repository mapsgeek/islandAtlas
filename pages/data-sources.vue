<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="w-container">
        <h1 style="text-align:center;margin-bottom:20px">Data Sources</h1>
        <br>
        <p>
          The data layers served here include:
        <ul style="list-style: disc;
    margin-left: 35px;">
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
  padding: 50px 185px 50px 185px;
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
