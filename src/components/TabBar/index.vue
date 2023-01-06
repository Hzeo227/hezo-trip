<script setup>
import tabbarItems from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/load_assets'

const tabbarData = tabbarItems

</script>

<template>
  <div class="tab-bar">
    <template v-for="(item,index) of tabbarData">
      <div class="tab-bar-item">
        <img :src="getAssetURL(item.image)" style="">
        <div class="text">{{ item.text }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 36px;
  }

  .text {
    font-size: 12px;
    margin-top: 2px;
  }
}
</style>