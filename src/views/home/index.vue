<script setup>
import HomeNaveBar from './components/home-nav-bar.vue'
</script>

<template>
  <div class="home">
    <HomeNaveBar/>
    <div class="banner">
      <img src="@/assets/images/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">大连</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/images/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    width: 74px;

    .text {
      position: relative;
      top: 1px;
      font-size: 12px;
    }
    
    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }

}
</style>