# ng-ant-admin
[![CodeFactor](https://www.codefactor.io/repository/github/huajian123/ng-ant-admin/badge)](https://www.codefactor.io/repository/github/huajian123/ng-ant-admin)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
[![Angular](https://img.shields.io/badge/Build%20with-Angular%20CLI-red?logo=angular)](https://www.github.com/angular/angular)


## ✨特性

- 支持最新angular版本
- Support the latest angular version
- 所有组件onPush,性能卓越
- All components onPush, excellent performance
- 代码示例丰富，有完整服务端后台，前后端分离示例
- Rich code examples, complete server background, front-end and back-end separation examples
- 常用工具类，服务， 指令，管道，封装了表格，抽屉，对话框等常用功能
- Common tools, services, instructions, pipelines。Encapsulates common functions such as tables, drawers, and dialog boxes
- <font color=red size=6>全部组件均为独立组件，文件量减少（如果需要module版本，请看[这里](https://github.com/huajian123/ng-ant-admin/releases/tag/v15.0)）</font>
- <font color=red size=6>Standalone Components（module style is [here](https://github.com/huajian123/ng-ant-admin/releases/tag/v15.0)）</font>


## 文档

有关文档与示例，请访问 [doc](http://1.117.181.242:8081/)



# 项目介绍
账号admin，密码123456 ,数据库每10分钟从备份恢复一次<br>
默认登录超时时间为1h，上传，下载，websocket，系统管理模块均为真实接口调用展示。<br>
完成最常用的权限控制，人员账号管理，角色管理，菜单管理，登录超时等。添加了大量业务示例，开箱即用。<br>
使用本项目遇到问题，可以加入376065816 qq群号与我沟通。<br>


快速二开使用详解 [快速二开使用详解](https://www.bilibili.com/video/BV1gF411x7rN/)<br>
项目搭建简易教程 [项目搭建简易教程](https://www.bilibili.com/video/BV1EM4y1w7zd/)<br>
online demo地址 [demo](http://1.117.181.242/)<br>
纯净版项目地址 [pure](https://gitee.com/hjxiaoqianduan/ng-ant-admin-pure/)<br>
pure project address [pure](https://gitee.com/hjxiaoqianduan/ng-ant-admin-pure/)<br>
服务端源码地址 [serviceApi](https://github.com/huajian123/ng-ant-admin-api)<br>
serviceApi address [serviceApi](https://github.com/huajian123/ng-ant-admin-api)<br>
线上swagger地址 [swagger](http://1.117.181.242:8003/swagger-ui.html#/)<br>


# 路由的key
key需要设置成路由地址最后一个'/'后的字符串，并且要唯一
```typescript
const routes: Routes = [
  {path: '', data: {key: 'login', shouldDetach: 'no'}, component: LoginFormComponent}
];
```
# 栅格系统监听
```angular2html
enum EquipmentWidth {
  xs,  // (max-width: 575.98px)
  sm,  // (min-width: 576px) and (max-width: 767.98px)
  md,  // (min-width: 768px) and (max-width: 991.98px)
  lg,  // (min-width: 992px) and (max-width: 1199.98px)
  xl,  // (min-width: 1200px) and (max-width: 1599.98px)
  xxl  // (min-width: 1600px)
}
```
使用方式
```
  constructor(private windowsWidthService: WindowsWidthService) {
  }
  
  this.windowsWidthService.getWindowWidthStore().pipe(takeUntil(this.destory$)).subscribe(res => {
    this.currentEquipmentWidth = res;
    this.cdr.markForCheck();
  })
```


# 模块不需要预加载

```typescript
export const routes: Routes = [
  {
    path: 'contact',
    loadChildren: import(() => './contact/contact.module').then(m => m.ContactModule),
    data: {
      preload: false
    }
  }
];
```


# 模块不需要保存状态

```typescript
const routes: Routes = [
  {path: '', data: {key: 'login', shouldDetach: 'no'}, component: LoginFormComponent}
];
```

# 模块中打开新tab页来展示详情，必须设置参数如下
在data中设置newTab
```typescript
const routes: Routes = [
  {path: '', component: TabsComponent, data: {title: '标签页操作', key: 'tabs'}},
  {path: 'example-detail', component: DetailComponent, data: {newTab:'true', title: '演示详情', key: 'example-detail'}}
];
```

# 缓存页面中指定容器的滚动条
在data中设置scrollContain 为元素选择器
```typescript
  {path: '', component: KeepScrollPageComponent, data: {title: '缓存滚动条', key: 'keep-scroll-page',scrollContain:['#div-scroll1','#div-scroll2']}}

```

# 切换tab调用的临时声明周期如下

```typescript
_onReuseInit: () => void;
_onReuseDestroy: () => void;

```
直接在目标组件中写出方法名为_onReuseInit或者_onReuseDestroy的方法即可实现

## 系统截图
![ScreenShot](https://github.com/huajian123/ng-ant-admin/blob/master/projectImg/11.png)

## star支持
我是自费服务器搭建后端服务接口,所以如果本项目对您有用，如果您也愿意的话，麻烦举起您性感的小手帮我点个免费的star以资鼓励，谢谢啊<br>
<br>
if help you, if you want ,please give me a star ,thank you<br>


## 捐赠
如果本项目对您有用，正巧您如果也想请我喝一杯咖啡，请扫下面的码，哈哈<br>
If this project is useful to you, and you happen to want to invite me for a cup of coffee, please scan Alipay or WeChat<br>
![ScreenShot](https://github.com/huajian123/ng-ant-admin/blob/master/projectImg/weixin.jpeg)
![ScreenShot](https://github.com/huajian123/ng-ant-admin/blob/master/projectImg/zhifubao.jpeg)



### 🏴授权协议License

MIT 
