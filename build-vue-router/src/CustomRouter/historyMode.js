let _Vue = null;

export default class CustomRouter {
  /**
   * 插件开发模式：https://segmentfault.com/a/1190000023594548
   * Vue.use（xx）需要在 Vue 实例化前调用
   * @param {*} Vue
   */
  static install(Vue) {
    // 判断是否已经创建，避免重复创建
    if (CustomRouter.install.installed) {
      return;
    }

    CustomRouter.install.installed = true;

    _Vue = Vue;

    _Vue.mixin({
      // 全局混入后，所有 Vue 实例生命周期都会被执行
      beforeCreate: function () {
        // $options 是创建 Vue 实例时传递的配置
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      }
    });
  }

  constructor(options) {
    this.options = options;
    /**
     * routeMap: key 是 path 值，属性值是对应的组件，是一个映射
     */
    this.routeMap = {};
    // observable 将对象变成响应式
    this.data = _Vue.observable({
      current: "/"
    });
  }

  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
    this.initEvent();
  }

  createRouteMap() {
    /**
     * 遍历路由配置规则，将路由规则解析成键值对形式，存储在 routeMap 中
     */
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component;
    });
  }

  initComponents(Vue) {
    /**
     * Router-Link 组件
     */
    Vue.component("router-link", {
      props: {
        to: String
      },
      render(h) {
        return h(
          "a",
          {
            // dom 对象属性
            attrs: {
              href: this.to
            },
            on: {
              click: this.clickHandler
            }
          },
          // this.$slots.default 是包含子节点的数组
          [this.$slots.default]
        );
      },
      methods: {
        clickHandler(e) {
          // 改变 URL，但是不发送请求
          window.history.pushState({}, "", this.to);
          this.$router.data.current = this.to;
          e.preventDefault();
        }
      }
    });

    /**
     * Router-View 组件
     */
    const self = this;
    Vue.component("router-view", {
      // h 函数返回一个 VNode 结点，此处可以理解为一个 template 包括容器
      render(h) {
        const component = self.routeMap[self.data.current];
        return h(component);
      }
    });
  }

  initEvent() {
    window.addEventListener("popstate", () => {
      console.log("pathname: ", window.location.pathname);
      this.data.current = window.location.pathname;
    });
  }
}
