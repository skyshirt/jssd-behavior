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

Vue.use(jssdkCrib, {
  prefix: '/crib-app-web-wuchao' // 域名，路径前缀或域名+前缀都可以，根据自己实际情况
})
```

``` 业务组件中，埋点使用方法
// 点击事件示例
this.$Behavior.clickButton({
  exhibitionChannel: '13',
  clickCategory: '1',
  buttonName: 'BANNER',
  userAgent: navigator.userAgent
})
```