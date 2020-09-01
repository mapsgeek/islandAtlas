<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="page">
        <h1 style="text-align:center;margin-top:20px">Search</h1>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.page {
  min-height: 100vh;
  background-color: white;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.image {
  width: 300px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 991px) {
  .page {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
