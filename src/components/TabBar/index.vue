<script setup>
import tabbarItems from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/load_assets'
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const tabbarData = tabbarItems
const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}

</script>

<template>
  <div class="tab-bar">
    <template v-for="(item,index) of tabbarData">
      <div 
        class="tab-bar-item"
        :class="{ active: currentIndex === index}"
        @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" style="">
        <img v-else :src="getAssetURL(item.imageActive)" style="">
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

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }

  }

  


}
</style>