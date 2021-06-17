<template>
  <n-layout has-sider class="n-layout">
    <n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px">
        <router-view></router-view>
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="less" scoped>
.n-layout {
  min-height: 100vh;
}
</style>
