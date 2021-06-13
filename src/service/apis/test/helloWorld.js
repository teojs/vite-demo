/**
 * 接口说明...
 */
export default function(ctx) {
  this.$http({
    method: 'get',
    url: '/mock/helloWorld.json',
    // params: ctx.data,
    data: ctx.data,
  }).then(e => {
    if (e.code === '01') {
      return ctx.success(e.body)
    }
    ctx.fail(e.message)
  })
}
