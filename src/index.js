import behavior from './behavior'

let Plugin = {
  Behavior: null,
  install (Vue, options = {}) {
    Plugin.Behavior = Vue.prototype.$Behavior = new behavior(options)
  }
}

export default Plugin
