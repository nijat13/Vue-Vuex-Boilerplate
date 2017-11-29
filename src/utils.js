// import
// TODO
export const initResource = function (Vue) {
  Vue.http.options.root = '/'
}

export const interceptRouter = function (router) {
  router.beforeEach((to, from, next) => {
    next()
  })

  router.afterEach(() => {

  })
}
