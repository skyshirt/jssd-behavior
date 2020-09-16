import axios from './axios'
import METHOD from './methods.json'

const Behavior = function (options) {
  this.options = Object.assign({
    methods: METHOD,
    prefix: '',
    url: '/BehaviorAnalysisController/saveBehaviorAnalysis',
    token: ''
  }, options)
  // 方法
  for (const saveType in this.options.methods) {
    this[saveType] = (saveValue) => {
      return this._post(saveType, saveValue)
    }
  }
  return this
}

Behavior.prototype = {
  _post (saveType, saveValue) {
    // var methods = this.options.methods
    const { prefix, url, token } = this.options
    return axios.post(prefix + url, {
      token,
      saveType,
      saveValue
    })
  }
}

export default Behavior

