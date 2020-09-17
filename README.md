# jssdk-behavior

## 快速安装

```
npm adduser --registry http://124.70.6.203:4873
```
用户名：user_crib
密码：123123

```
npm install jssdk-behavior --registry http://124.70.6.203:4873
```
- 注
>此版本暂未验证methods.json中的allow，看业务需要，下个版本也许会增加，所以如有新增或修改的methods，请按现有结构改写。

## 使用
main.js
```
import Vue from 'vue'
import jssdkBehavior from 'jssdk-crib'

Vue.use(jssdkBehavior[, option])
// 初始化全局配置，可以查看配置参数
Vue.use(jssdkBehavior, {
  token: '', // 可在其它逻辑中配置
  prefix: '/crib-app-web', // 前缀
  url: '' // 接口地址
})
```
业务组件中，埋点使用方法
```
this.$Behavior[saveType](saveValue[, option])
// 点击事件示例
<script>
export default {
  methods: {
    // 点击按钮
    handleOnClickButton () {
      this.$Behavior.clickButton({
        exhibitionChannel: '13',
        clickCategory: '1',
        buttonName: '提交表单',
        userAgent: navigator.userAgent
      })
    }
  }
}
</script>
```

viewPage 和 viewPageStayLength 使用示例
```
export default {
  created () {
    this.$Behavior.viewPage({
      exhibitionChannel: 1,
      pageClassification: 1,
      visitSource: 1,
      pageType: '首页'
    })
  },
  beforeDestroy () {
    this.$Behavior.viewPageStayLength()
  },
}
```

## option手动设置
示例：main.js
```
import Vue from 'vue'
import jssdkBehavior from 'jssdk-behavior'

Vue.use(jssdkBehavior)
jssdkBehavior.Behavior.options.token = '11111111111' // 全局配置
```
示例：业务组件
```
this.$Behavior.options.token = '222222222' // 全局配置
this.$Behavior[saveType](saveValue, {
  token: '222222222' // 局部配置，不影响全局
})
```

## option参数说明

| 属性 | 说明 | 类型 | 默认值 | 必填 |
|--------|--------|--------|--------|--------|
| token | 用户登录态 | string | '' | 必填 |
| prefix | 按工程配置填，一般使用axios的baseUrl | string | '' | 必填 |
| url | 埋点接口地址 | string | '/BehaviorAnalysisController/saveBehaviorAnalysis' | 非必填 |
| methods | 埋点方法json数据的扩展，如有新增或修改，传入对象即可自动合并，数据结构参考methods.json（目前用不上） | json&#124;object | /src/methods.json | 非必填 |


## saveType

| 属性 | 说明 | 类型 |
|--------|--------|--------|
| 方法名(埋点类型) | methods.json中第1层key即方法名 | string |
| clickButton | 按钮点击事件 | string |
| viewPage | 页面访问 | string |
| searchKeyword | 产品关键词搜索 | string |
| viewPageStayLength | 页面停留时长 | string |

## saveValue

##### clickButton

| 属性 | 说明 | 参数值 | 类型 | 必填 |
|--------|--------|--------|--------|--------|
| exhibitionChannel | 销售渠道 | 输入数字，按照各个渠道分配 | string | 必填 |
| clickCategory | 事件分类 | 输入数字1:banner2:快捷入口3:专属产品4:热门产品5:产品列表6:职域营销7:推荐产品 | string | 必填 |
| buttonName | string | 按钮名称 | 输入中文 | 必填 |


##### searchKeyword

| 属性 | 说明 | 参数值 | 类型 | 必填 |
|--------|--------|--------|--------|--------|
| exhibitionChannel | 销售渠道 | 输入数字，按照各个渠道分配 | string | 必填 |
| keyword | 关键词 | 输入用户搜索关键词 | string | 必填 |

##### viewPage

| 属性 | 说明 | 参数值 | 类型 | 必填 |
|--------|--------|--------|--------|--------|
| exhibitionChannel | 销售渠道 | 输入数字，按照各个渠道分配 | string | 必填 |
| pageClassification | 页面分类 | 输入数字1:首页2:产品3:投保流程4:我的 | string | 必填 |
| visitSource | 访问来源 | 输入数字，1:快捷入口2:banner3:首页专属产品4:热门产品5:产品列表6:团单推荐产品 | string | 必填 |
| pageType | 页面名称 | 输入中文，“页面分类”与“页面名称”对应关系见pageType参数说明 | string | 必填 |
| productCode | 产品代码 | 输入产品代码 | string | 非必填&#124;pageType = 3时，必填 |
| companyId | 保险公司 | 输入保险公司id | string | 非必填&#124;pageType = 3时，必填 |
| categoryId | 产品类别 | 输入产品类别id | string | 非必填&#124;pageType = 3时，必填 |
| sequence | 热门产品展示顺序 | 从热门产品进入输入热门产品排序，如果不是从热门产品，则传“-1”，需要两边联调 | string | 非必填&#124;pageType = 3时，必填 |

##### viewPageStayLength

| 属性 | 说明 | 参数值 | 类型 | 必填 |
|--------|--------|--------|--------|--------|
| stayLength | 页面停留时长 | 由sdk生成，计算从调用viewPage方法开始-调用本方法时间差 | `<int>`number(秒) | 非必填 |

## pageType参数说明

| 页面分类 | 页面 |
|--------|--------|
| 1:首页 | 首页 |
| 2:产品 | 产品列表-全部 |
| | 产品列表-专属 |
| | 产品列表-少儿 |
| | … |
| 3:投保流程 | 产品详情 |
| | 健康告知 |
| | 填写投保信息 |
| | 投保信息确认 |
| | 填写投被保人信息 |
| | 保费计算 |
| | 填写受益人信息 |
| | 填写银行卡信息 |
| | 信息确认 |
| | 交易完成 |
| 我的 | 我的 |
| | 我的保单-全部 |
| | 我的保单-待完成 |
| | 我的保单-有效 |
| | 我的保单-无效 |
| | 我的保单-续费 |
| | 我的保单-个单详情 |
| | 我的保单-团单详情 |
| | 我的消息 |
| | 常用联系人 |
