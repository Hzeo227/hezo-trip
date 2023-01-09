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
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) of tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img :src="currentIndex !== index ? getAssetURL(item.image) : getAssetURL(item.imageActive)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  
  img {
    height: 28px;
  }
}
</style>