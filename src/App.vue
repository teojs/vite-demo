<template>
  <n-config-provider :theme="darkTheme" class="n-config-provider">
    <router-view />
  </n-config-provider>
</template>

<script>
import { darkTheme } from 'naive-ui'
export default {
  data() {
    return {
      darkTheme,
    }
  },
}
</script>

<style lang="less">
.n-config-provider {
  min-height: 100vh;
}
</style>
