// .filter((path)=> !/\/components\//.test(path))  /router\.js/
function pathToCamelCase(path) {
  return path.replace(/\/(.)/g, (_, c) => c.toUpperCase());
}



function requireComponentPaths() {
  // 组件路由的关系
  const requireModules = require.context('./views', true, /\.vue/);
  const componentPath = requireModules.keys().filter((path) => !/\/components\//.test(path)).map((key) => {
    const componentName = pathToCamelCase(key).replaceAll(".", "").replace("vue", "")
    const defaultValue = requireModules(key).default;
    return {
      componentId: componentName,
      path: key.replace(".", "").replace("/index.vue", ""),
      component: () => import(defaultValue.__file),
    };
  });
  return componentPath
}


function requireComponentMap() {
  // 组件路由的关系
  const requireModules = require.context('./views', true, /(\.vue|router\.js)$/);
  const componentPath = {}
  requireModules.keys().filter((path) => !/\/components\//.test(path)).map(async (key) => {
    let componentName = "";
    if (/\.vue/.test(key)) {
      componentName = pathToCamelCase(key.replaceAll(/\.\.\/|\.\//g,"").replace(/\/[a-zA-Z]*\.vue$/,"").replace(/^\.+\/+|^\//,""))
      const defaultValue = requireModules(key).default;

      let meta = undefined;
      try {
        const routerPath = key.replace("index.vue", "router.js").replace(".", "")
        meta = (await import("/src/views" + routerPath)).default.meta
      } catch (error) {
      } finally {
        componentPath[componentName] = {
          ...componentPath[componentName],
          componentId: componentName,
          path: key.replace(".", "").replace("/index.vue", ""),
          component: () => import(defaultValue.__file),
        }
      }
    }else{
      componentName = pathToCamelCase(key.replaceAll(/\.\.\/|\.\//g, "").replace("/router.js", ""))
      const defaultValue = requireModules(key).default;
      componentPath[componentName] = {
        ...componentPath[componentName] ,
        ...defaultValue
      }
    }

  });
  return componentPath
}



const componentPathMap = requireComponentMap();

console.log(componentPathMap)




// console.log("../../city/edit/index.vue".replaceAll(/\.\.\/|\.\//g,"").replace(/\/[a-zA-Z]*\.vue$/,"").replace(/^\.+\/+|^\//,""))
// console.log("./../city/edit/index.vue".replaceAll(/\.\.\/|\.\//g,"").replace(/\/[a-zA-Z]*\.vue$/,"").replace(/^\.+\/+|^\//,""))
// console.log("./city/edit/index.vue".replaceAll(/\.\.\/|\.\//g,"").replace(/\/[a-zA-Z]*\.vue$/,"").replace(/^\.+\/+|^\//,""))