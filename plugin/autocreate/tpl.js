/**
 * api name here
 * 接口说明...
 */
export default function(ctx) {
  this.$http({
    method: 'post',
    url: '/api',
    // params: ctx.params,
    data: ctx.data,
    // loading: ctx.loading,
  }).then(e => {
    if (e.code === '01') {
      return ctx.success(e.body)
    }
    ctx.fail(e.message)
  })
}
