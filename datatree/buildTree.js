function buildTree(data, groupByKeys) {
    // 创建根节点
    const rootNode = { children: [] };
  
    // 递归函数
    function buildSubtree(parentNode, level, levelData) {
      // 如果已经到达最后一层，则将符合条件的元素加入父节点的 children 列表
      if (level >= groupByKeys.length) {
        parentNode.children = levelData.filter(item => {
          return item[groupByKeys[groupByKeys.length -1]].value === parentNode.name;
        });
        return;
      }
      // 将当前层级的数据按照当前层级字段分组
      const groups = groupBy(levelData, groupByKeys[level]);
      // 遍历每个分组，递归构建子树
      for (const key in groups) {
        const group = groups[key]
        const childNode = { name: group[0][groupByKeys[level]].value, children: [] };
        parentNode.children.push(childNode);
        buildSubtree(childNode, level + 1, group);
      }
    }
  
    // 调用递归函数开始构建树形结构
    buildSubtree(rootNode, 0, data);
  
    return rootNode.children;
  }
  
  function groupBy(data, key) {
    return data.reduce((groups, item) => {
      const value = item[key].value;
      if (!groups[value]) {
        groups[value] = [];
      }
      groups[value].push(item);
      return groups;
    },{});
  }


function countLeafNodes(tree) {
    if (tree.children) {
        let length = 0;
        for (const item of tree.children) {
            if (!item.children) {
                tree.length = tree.children.length;
                return tree.length
            } else {
              length += countLeafNodes(item)
            }
        }
        tree.length = length;
    }
    return tree.length
}
const tree = buildTree(dataSource,groupByKeys)


  console.log(tree,countLeafNodes({children:tree}))