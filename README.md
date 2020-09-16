# JSSDK-CRIB

## 快速安装

```
npm install jssdk-crib --registry http://124.70.6.203:4873
```
用户名：user_crib
密码：123123

## 使用
``` main.js
import Vue from 'vue'
import jssdkCrib from 'jssdk-crib'

// 初始化全局配置，可以查看配置参数
Vue.use(jssdkCrib, {
  token: '', // 可在其它逻辑中配置
  prefix: '/crib-app-web', // 前缀
  url: '' // 接口地址
})
```

``` 业务组件中，埋点使用方法
this.$Behavior.xxx(data[, option])
// 点击事件示例
this.$Behavior.clickButton({
  exhibitionChannel: '13',
  clickCategory: '1',
  buttonName: 'BANNER',
  userAgent: navigator.userAgent
}, option)
```

## 配置参数option

| 属性 | 说明 | 类型 | 默认值 | 必填 |
|--------|--------|--------|--------|--------|
| token | 用户登录态 | string | '' | 必填 |
| prefix | 按工程配置填，一般使用axios的baseUrl | string | '' | 必填 |
| url | 埋点接口地址 | string | '/BehaviorAnalysisController/saveBehaviorAnalysis' | 非必填 |
| methods | 埋点方法json数据，如有新增或修改，传入对象即可自动合并，数据结构参考methods.json | json|object | /src/methods.json | 非必填 |

## 手动设置option

``` 示例
import Vue from 'vue'
import jssdkCrib from 'jssdk-crib'

Vue.use(jssdkCrib)
jssdkCrib.Behavior.options.token = '11111111111'
```

```
this.$Behavior.clickButton({
  exhibitionChannel: '13',
  clickCategory: '1',
  buttonName: 'BANNER',
  userAgent: navigator.userAgent
}, {
  token: '222222222222222' // 在这里配置，不会影响全局参数，只在本次有效
})
```