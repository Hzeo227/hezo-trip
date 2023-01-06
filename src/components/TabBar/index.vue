<script setup>

</script>

<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="@/assets/images/tabbar/tab_home.png" style="">
      <div class="text">首页</div>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/images/tabbar/tab_favor.png" style="">
      <div class="text">收藏</div>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/images/tabbar/tab_order.png" style="">
      <div class="text">订单</div>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/images/tabbar/tab_message.png" style="">
      <div class="text">消息</div>
    </div>
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