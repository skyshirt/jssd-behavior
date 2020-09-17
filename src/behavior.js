import axios from './axios'
import METHOD from './methods.json'

const Behavior = function (options) {
  this.oc = new Date()
  this.options = Object.assign({
    methods: METHOD,
    prefix: '',
    url: '/BehaviorAnalysisController/saveBehaviorAnalysis',
    token: ''
  }, options)
  // 方法
  for (const saveType in this.options.methods) {
    this[saveType] = (saveValue = {}, option = {}) => {
      return this._post(saveType, saveValue, option)
    }
  }
  return this
}

Behavior.prototype = {
  _post (saveType, saveValue, options) {
    if (typeof saveValue !== 'object') {
      throw 'saveValue必须为对象{key:value}'
    }
    if (typeof options !== 'object') {
      throw '配置参数必须为对象{key:value}'
    }
    // 页面访问
    if (saveType === 'viewPage') {
      this.oc = new Date()
    }
    // 页面停留
    if (saveType === 'viewPageStayLength') {
      let OC = new Date()
      // saveValue传入了stayLength
      if (saveValue.stayLength) {
        this.oc = OC
        if (saveValue.stayLength > 3) {
          saveValue.stayLength = Math.round(saveValue.stayLength)
        } else {
          return Promise.reject(new Error('页面停留参数"stayLength" 有效值为大于3的数值'))
        }
      } else if (this.oc - OC < 3000) {
        this.oc = OC
        return
      } else {
        saveValue.stayLength = Math.round((this.oc - OC) / 1000)
      }
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

