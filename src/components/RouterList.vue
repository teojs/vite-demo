<template>
  <div v-for="router in routers" :key="router.path" class="list">
    <router-link :to="router.path">
      {{router.name}}
    </router-link>
    <RouterList v-if="router.children" :routers="router.children" />
  </div>
</template>

<script>
export default {
  props: {
    routers: {
      type: Array,
      default() {
        return []
      },
    },
  },
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
.list {
  margin-left: 10px;
  a {
    text-decoration: underline;
    margin-bottom: 5px;
    display: block;
  }
}
</style>
