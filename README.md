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

Vue.use(jssdkCrib[, option])
// 初始化全局配置，可以查看配置参数
Vue.use(jssdkCrib, {
  token: '', // 可在其它逻辑中配置
  prefix: '/crib-app-web', // 前缀
  url: '' // 接口地址
})
```

```业务组件中，埋点使用方法
this.$Behavior[saveType](data[, option])
// 点击事件示例
this.$Behavior.clickButton({
  exhibitionChannel: '13',
  clickCategory: '1',
  buttonName: 'BANNER',
  userAgent: navigator.userAgent
}, option)
```

## 手动设置option

```示例：main.js
import Vue from 'vue'
import jssdkCrib from 'jssdk-crib'

Vue.use(jssdkCrib)
jssdkCrib.Behavior.options.token = '11111111111'
```

```示例：业务组件
this.$Behavior[saveType](saveValue, {
  token: '222222222222222' // 在这里配置，不会影响全局参数，只在本次有效
})
```

## 配置参数option

| 属性 | 说明 | 类型 | 默认值 | 必填 |
|--------|--------|--------|--------|--------|
| token | 用户登录态 | string | '' | 必填 |
| prefix | 按工程配置填，一般使用axios的baseUrl | string | '' | 必填 |
| url | 埋点接口地址 | string | '/BehaviorAnalysisController/saveBehaviorAnalysis' | 非必填 |
| methods | 埋点方法json数据，如有新增或修改，传入对象即可自动合并，数据结构参考methods.json | json&#124;object | /src/methods.json | 非必填 |


## saveType

| 属性 | 说明 | 类型 |
|--------|--------|--------|
| 方法名(埋点类型) | methods.json中第1层key即方法名 | string |
| clickButton | 按钮点击事件 | string |
| viewPage | 页面访问 | string |
| searchKeyword | 产品关键词搜索 | string |
| viewPageStayLength | 页面停留时长 | string |

## saveValue
### clickButton
| 属性 | 说明 | 类型 | 必填 |
|--------|--------|--------|--------|
| exhibitionChannel | 销售渠道，由业务传入 | string | 必填 |
| clickCategory | 事件分类，由业务传入1:banner2:快捷入口3:专属产品4:热门产品5:产品列表6:职域营销7:推荐产品 | string | 必填 |
| openId | openId，由业务传入 | string | 必填 |
| buttonName | 按钮名称，由业务传入 | string | 必填 |
| userAgent | 客户端信息，由sdk传入 | string | 必填 |


### searchKeyword
| 属性 | 说明 | 类型 | 必填 |
|--------|--------|--------|--------|
| exhibitionChannel | 销售渠道，由业务传入 | string | 必填 |
| keyword | 关键词，由业务传入 | string | 必填 |
| openId | openId，由业务传入 | string | 必填 |
| userAgent | 客户端信息，由sdk传入 | string | 必填 |
### viewPage
| 属性 | 说明 | 类型 | 必填 |
|--------|--------|--------|--------|
| exhibitionChannel | 销售渠道，由业务传入 | string | 必填 |
| pageClassification | 页面分类，由业务传入1:首页2:产品3:投保流程4:我的 | string | 必填 |
| visitSource | 访问来源，由业务传入1:快捷入口2:banner3:首页专属产品4:热门产品5:产品列表6:团单推荐产品 | string | 必填 |
| pageType | 页面类型，有业务传入1:首页2:产品列表3:产品详情4:健康告知5:填写投保信息6:投保信息确认7:填写投被保人信息8:保费计算9:填写受益人信息10:填写银行卡信息11:信息确认12:交易完成13:我的14:我的保单15:我的消息16:常用联系人 | string | 必填 |
| openId | openId，由业务传入 | string | 必填 |
| productCode | 产品代码 | string | 非必填&#124;pageType = 3时，必填 |
| companyId | 保险公司id | string | 非必填&#124;pageType = 3时，必填 |
| categoryId | 产品类别id | string | 非必填&#124;pageType = 3时，必填 |
| sequence | 热门产品展示顺序 | string | 非必填&#124;pageType = 3时，必填 |
| userAgent | 客户端信息，由sdk传入 | string | 必填 |
### viewPageStayLength
| 属性 | 说明 | 类型 | 必填 |
|--------|--------|--------|--------|
| id | 页面访问返回id，由业务传入 | string | 必填 |
| stayLength | 页面停留时长，由sdk传入 | string | 必填 |