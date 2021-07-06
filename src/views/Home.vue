<template>
  <n-layout
    has-sider
    class="home">
    <n-layout-sider>
      <RouterList :routers="$router.options.routes" />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>头部</n-layout-header>
      <n-layout-content>
        <router-view />
      </n-layout-content>
      <n-layout-footer>底部</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="less" scoped>
.home {
  min-height: 100vh;
}
</style>
