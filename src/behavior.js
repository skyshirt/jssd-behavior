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
    this[saveType] = (saveValue, option = {}) => {
      return this._post(saveType, saveValue, option)
    }
  }
  return this
}

Behavior.prototype = {
  _post (saveType, saveValue, options) {
    if (typeof saveValue !== 'object') {
      throw('saveValue必须为对象{key:value}')
    }
    if (typeof options !== 'object') {
      throw('配置参数必须为对象{key:value}')
    }
    // var methods = this.options.methods
    const { prefix, url, token } = { ...this.options, ...options }
    return axios.post(prefix + url, {
      token,
      saveType,
      saveValue: JSON.stringify(saveValue)
    })
  }
}

export default Behavior

