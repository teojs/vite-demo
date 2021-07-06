<template>
  <div class="not-found">
    <i class="iconfont icon-404" />
    <p>
      <router-link to="/">
        回到首页
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Views404',
  components: {},
  data() {
    return {}
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style scoped lang='less'>
@font-face {
  font-family: 'iconfont'; /* Project id 2557912 */
  src: url('data:application/x-font-woff;charset=utf-8;base64,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')
    format('woff');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-404:before {
  content: '\e64f';
}

.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  i {
    font-size: 300px;
    color: #ccc;
  }
}
</style>
