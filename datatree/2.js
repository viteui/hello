// function buildTree(data, levelFields) {
//     // 创建根节点
//     const root = { children: [] };

//     // 递归函数
//     function buildNode(parentNode, levelFields, level) {
//       // 获取当前层级的字段
//       const field = levelFields[level];

//       // 分组
//       const groups = {};
//       for (const item of data) {
//         const value = item[field].value;
//         if (!groups[value]) {
//           groups[value] = [];
//         }
//         groups[value].push(item);
//       }

//       // 创建子节点
//       for (const [value, groupData] of Object.entries(groups)) {
//         const node = { [field]: value, children: [] };
//         parentNode.children.push(node);

//         // 如果不是最后一层，则继续递归创建子节点
//         if (level < levelFields.length - 1) {
//           buildNode(node, levelFields, level + 1);
//         } else {
//           // 如果是最后一层，则将子节点的数据合并到当前节点
//           for (const item of groupData) {
//             Object.assign(node, item);
//           }
//         }
//       }
//     }

//     // 开始创建树形结构
//     buildNode(root, levelFields, 0);

//     return root.children;
//   }
// function buildTree(data, levelFields) {
//     // 创建根节点
//     const root = { children: [] };

//     // 递归函数
//     function buildNode(parentNode, levelFields, level, parentValue) {
//       // 获取当前层级的字段
//       const field = levelFields[level];
//       // 分组
//       const groups = {};
//       for (const item of data) {
//         const value = item[field].value;
//         if (!groups[value]) {
//           groups[value] = [];
//         }
//         groups[value].push(item);
//       }

//       // 创建子节点
//       for (const [value, groupData] of Object.entries(groups)) {
//         const nodeValue = { [field]: value, ...parentValue };
//         let node = parentNode.children.find((n) => {
//           return Object.entries(nodeValue).every(([k, v]) => n[k] === v);
//         });
//         if (!node) {
//           node = { ...nodeValue, children: [] };
//           parentNode.children.push(node);
//         }

//         // 如果不是最后一层，则继续递归创建子节点
//         if (level < levelFields.length - 1) {
//           buildNode(node, levelFields, level + 1, nodeValue);
//         } else {
//           // 如果是最后一层，则将子节点的数据合并到当前节点
//           for (const item of groupData) {
//             const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//             if (valid) {
//               Object.assign(node, item);
//             }
//           }
//         }
//       }
//     }

//     // 开始创建树形结构
//     buildNode(root, levelFields, 0, {});

//     return root.children;
//   }



// function buildTree(data, levelFields) {
//     // 创建根节点
//     const root = { children: [] };

//     // 递归函数
//     function buildNode(parentNode, levelFields, level, parentValue) {
//         // 获取当前层级的字段
//         const field = levelFields[level];

//         // 分组
//         const groups = {};
//         for (const item of data) {
//             const value = item[field].value;
//             if (!groups[value]) {
//                 groups[value] = [];
//             }
//             groups[value].push(item);
//         }

//         // 创建子节点
//         for (const [value, groupData] of Object.entries(groups)) {
//             const nodeValue = { [field]: value, ...parentValue };
//             let node = parentNode.children.find((n) => {
//                 return Object.entries(nodeValue).every(([k, v]) => n[k] === v);
//             });
//             if (!node) {
//                 node = { ...nodeValue, children: [] };
//                 parentNode.children.push(node);
//             }

//             // 将当前层级的子节点分组
//             const childGroups = {};
//             for (const item of groupData) {
//                 const childValue = { ...nodeValue, [field]: item[field] };
//                 if (!childGroups[item[field]]) {
//                     childGroups[item[field]] = {
//                         value: item[field],
//                         data: [],
//                         nodeValue: childValue,
//                     };
//                 }
//                 childGroups[item[field]].data.push(item);
//             }

//             // 如果不是最后一层，则递归创建子节点
//             if (level < levelFields.length - 1) {
//                 for (const [value, childData] of Object.entries(childGroups)) {
//                     const childNode = { ...childData.nodeValue, children: [] };
//                     node.children.push(childNode);
//                     buildNode(childNode, levelFields, level + 1, childData.nodeValue);
//                 }
//             } else {
//                 // 如果是最后一层，则将子节点的数据合并到当前节点
//                 for (const item of groupData) {
//                     const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//                     if (valid) {
//                         Object.assign(node, item);
//                     }
//                 }
//             }
//         }
//     }

//     // 开始创建树形结构
//     buildNode(root, levelFields, 0, {});

//     return root.children;
// }

// function buildTree(data, levelFields) {
//     // 创建根节点
//     const root = { children: [] };

//     // 递归函数
//     function buildNode(parentNode, levelFields, level, parentValue) {
//       // 获取当前层级的字段
//       const field = levelFields[level];

//       // 分组
//       const groups = {};
//       for (const item of data) {
//         const value = item[field].value;
//         if (!groups[value]) {
//           groups[value] = [];
//         }
//         groups[value].push(item);
//       }

//       // 创建子节点
//       for (const [value, groupData] of Object.entries(groups)) {
//         const nodeValue = { [field]: value, ...parentValue };
//         let node = parentNode.children.find((n) => {
//           return Object.entries(nodeValue).every(([k, v]) => n[k] === v);
//         });
//         if (!node) {
//           node = { ...nodeValue, children: [] };
//           parentNode.children.push(node);
//         }

//         // 如果不是最后一层，则递归创建子节点
//         if (level < levelFields.length - 1) {
//           for (const item of groupData) {
//             const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//             if (valid) {
//               buildNode(node, levelFields, level + 1, { ...nodeValue, [field]: item[field] });
//             }
//           }
//         } else {
//           // 如果是最后一层，则将子节点的数据合并到当前节点
//           for (const item of groupData) {
//             const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//             if (valid) {
//               Object.assign(node, item);
//             }
//           }
//         }
//       }
//     }

//     // 开始创建树形结构
//     buildNode(root, levelFields, 0, {});

//     return root.children;
//   }


// function buildTree(data, levelFields) {
//     // 创建根节点
//     const root = { children: [] };

//     // 递归函数
//     function buildNode(parentNode, levelFields, level, parentValue) {
//       // 获取当前层级的字段
//       const field = levelFields[level];

//       // 分组
//       const groups = {};
//       for (const item of data) {
//         const value = item[field].value;
//         if (!groups[value]) {
//           groups[value] = [];
//         }
//         groups[value].push(item);
//       }

//       // 创建子节点
//       for (const [value, groupData] of Object.entries(groups)) {
//         const nodeValue = { [field]: value, ...parentValue };
//         let node = parentNode.children.find((n) => {
//           return Object.entries(nodeValue).every(([k, v]) => n[k] === v);
//         });
//         if (!node) {
//           node = { ...nodeValue, children: [] };
//           parentNode.children.push(node);
//         }

//         // 如果不是最后一层，则递归创建子节点
//         if (level < levelFields.length - 1) {
//           for (const item of groupData) {
//             const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//             if (valid) {
//               buildNode(node, levelFields, level + 1, { ...nodeValue, [field]: item[field] });
//             }
//           }
//         } else {
//           // 如果是最后一层，则将子节点的数据合并到当前节点
//           for (const item of groupData) {
//             const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//             if (valid) {
//               let childNode = node.children.find((n) => {
//                 return Object.entries(item).every(([k, v]) => n[k] === v);
//               });
//               if (!childNode) {
//                 childNode = { ...item, children: [] };
//                 node.children.push(childNode);
//               }
//             }
//           }
//         }
//       }
//     }

//     // 开始创建树形结构
//     buildNode(root, levelFields, 0, {});

//     return root.children;
//   }

//   备选方案有点问题
//function filterArr(arr) {

//     const result = []
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== undefined && arr[i]) {
            
//             count++
//             result.push(arr[i])
//         }
//     }
//     result.length = count
//     console.log("result",result)
//     return result
// }
// function buildTree(data, levelFields) {
//     // 创建根节点
//     const root = { children: [] };

//     // 递归函数
//     function buildNode(parentNode, levelFields, level, parentValue) {
//         // 获取当前层级的字段
//         const field = levelFields[level];

//         // 分组
//         const groups = {};
//         for (const item of data) {
//             const value = item[field].value;
//             if (!groups[value]) {
//                 groups[value] = [];
//             }
//             groups[value].push(item);
//         }

//         // 创建子节点
//         for (const [value, groupData] of Object.entries(groups)) {
//             const nodeValue = { [field]: value, ...parentValue };
//             let node = parentNode.children.find((n) => {
//                 return Object.entries(nodeValue).every(([k, v]) => n[k] === v);
//             });
//             if (!node) {
//                 node = { ...nodeValue, children: [] };
//                 parentNode.children.push(node);
//             }

//             // 如果不是最后一层，则递归创建子节点
//             if (level < levelFields.length - 1) {
//                 let hasValidChild = false;
//                 for (const item of groupData) {
//                     const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//                     if (valid) {
//                         const childNode = buildNode(node, levelFields, level + 1, { ...nodeValue, [field]: item[field] });
//                         if (childNode) {
//                             hasValidChild = true;
//                         }
//                     }
//                 }
//                 if (!hasValidChild && node.children.length === 0) {
//                     parentNode.children.pop();
//                 }
//             } else {
//                 // 如果是最后一层，则将子节点的数据合并到当前节点
//                 for (const item of groupData) {
//                     const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//                     if (valid) {
//                         let childNode = node.children.find((n) => {
//                             return Object.entries(item).every(([k, v]) => n[k] === v);
//                         });
//                         if (!childNode) {
//                             childNode = { ...item };
//                             node.children.push(childNode);
//                         }
//                     }
//                 }
//             }
//         }
//         return parentNode;
//     }

//     // 开始创建树形结构
//     buildNode(root, levelFields, 0, {});
//     function removeEmptyChildren(node, parent, index) {
//         const children = node.children
//         // console.log(JSON.parse(JSON.stringify(children)))
//         if (children.length === 0) {
//             console.log(JSON.parse(JSON.stringify( parent.children)), parent.children.length,node,index)
//             //删除节点
//             // parent.children.splice(index,1)
//             delete parent.children[index]
//             console.log("parent",JSON.parse(JSON.stringify( parent.children)))
//         } else {
//             for (let index = 0; index < children.length; index++) {
//                 const element = children[index];
//                 if(element.children){
//                     removeEmptyChildren(element, node, index);
//                 }
//             }
//             node.children = filterArr(children);
//             // 如果自己也空了，就得找上级
//             if(parent.children.length === 0){
//                 removeEmptyChildren(root, root, 0);
//             }
//         }
    
//     }
    
//     removeEmptyChildren(root, root, 0)
//     return root.children;
// }


// function buildTree(data, levelFields) {
//     // 创建根节点
//     const root = { children: [] };

//     // 递归函数
//     function buildNode(parentNode, levelFields, level, parentValue, createdNodes) {
//       // 获取当前层级的字段
//       const field = levelFields[level];

//       // 分组
//       const groups = {};
//       for (const item of data) {
//         const value = item[field].value;
//         if (!groups[value]) {
//           groups[value] = [];
//         }
//         groups[value].push(item);
//       }

//       // 创建子节点
//       for (const [value, groupData] of Object.entries(groups)) {
//         const nodeValue = { [field]: value, ...parentValue };
//         let node = createdNodes[level].find((n) => {
//           return Object.entries(nodeValue).every(([k, v]) => n[k] === v);
//         });
//         if (!node) {
//           node = { ...nodeValue, children: [] };
//           parentNode.children.push(node);
//           createdNodes[level].push(node);
//         }

//         // 如果不是最后一层，则递归创建子节点
//         if (level < levelFields.length - 1) {
//           let hasValidChild = false;
//           for (const item of groupData) {
//             const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//             if (valid) {
//               const childNode = buildNode(node, levelFields, level + 1, { ...nodeValue, [field]: item[field] }, createdNodes);
//               if (childNode) {
//                 hasValidChild = true;
//               }
//             }
//           }
//           if (!hasValidChild && node.children.length === 0) {
//             parentNode.children.pop();
//             createdNodes[level].pop();
//           }
//         } else {
//           // 如果是最后一层，则将子节点的数据合并到当前节点
//           for (const item of groupData) {
//             const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//             if (valid) {
//               let childNode = node.children.find((n) => {
//                 return Object.entries(item).every(([k, v]) => n[k] === v);
//               });
//               if (!childNode) {
//                 childNode = { ...item, children: [] };
//                 node.children.push(childNode);
//               }
//             }
//           }
//         }
//       }

//       // 将相同层级的节点合并
//       if (level > 0) {
//         const field = levelFields[level - 1];
//         const mergeNodes = {};
//         for (const node of createdNodes[level]) {
//           const value = node[field];
//           if (!mergeNodes[value]) {
//             mergeNodes[value] = node;
//           } else {
//             mergeNodes[value].children.push(...node.children);
//             const index = parentNode.children.indexOf(node);
//             parentNode.children.splice(index, 1);
//           }
//         }
//         createdNodes[level - 1] = Object.values(mergeNodes);
//       }

//       return parentNode;
//     }

//     // 开始创建树形结构
//     const createdNodes = levelFields.map(() => []);
//     buildNode(root, levelFields, 0, {}, createdNodes);
//     function removeEmptyChildren(node) {
//         if(node && !node.children ) return
//         if (node.children.length === 0) {
//             delete node.children;
//         } else {
//             for (const child of node.children) {
//                 removeEmptyChildren(child);
//             }
//         }
//     }
//     removeEmptyChildren(root);
//     return root.children;
//   }



// function buildTree(data, levelFields) {
//     // 创建根节点
//     const root = { children: [] };

//     // 递归函数
//     function buildNode(parentNode, levelFields, level, parentValue, createdNodes) {
//         // 获取当前层级的字段
//         const field = levelFields[level];

//         // 分组
//         const groups = {};
//         for (const item of data) {
//             const value = item[field].value;
//             if (!groups[value]) {
//                 groups[value] = [];
//             }
//             groups[value].push(item);
//         }

//         // 创建子节点
//         let hasValidChild = false;
//         for (const [value, groupData] of Object.entries(groups)) {
//             const nodeValue = { [field]: value, ...parentValue };
//             let node = createdNodes[level].find((n) => {
//                 return Object.entries(nodeValue).every(([k, v]) => n[k] === v);
//             });
//             if (!node) {
//                 node = { ...nodeValue, children: [] };
//                 parentNode.children.push(node);
//                 createdNodes[level].push(node);
//             }

//             // 如果不是最后一层，则递归创建子节点
//             if (level < levelFields.length - 1) {
//                 let childHasValid = false;
//                 for (const item of groupData) {
//                     const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//                     if (valid) {
//                         const childNode = buildNode(node, levelFields, level + 1, { ...nodeValue, [field]: item[field].value }, createdNodes);
//                         if (childNode) {
//                             childHasValid = true;
//                             hasValidChild = true;
//                         }
//                     }
//                 }
//                 if (!childHasValid) {
//                     node.children = [];
//                 }
//             } else {
//                 // 如果是最后一层，则将子节点的数据合并到当前节点
//                 for (const item of groupData) {
//                     const valid = Object.entries(parentValue).every(([k, v]) => item[k] === v);
//                     if (valid) {
//                         let childNode = node.children.find((n) => {
//                             return Object.entries(item).every(([k, v]) => n[k] === v);
//                         });
//                         if (!childNode) {
//                             childNode = { ...item, children: [] };
//                             node.children.push(childNode);
//                         }
//                     }
//                 }
//             }
//         }

//         // 将相同层级的节点合并
//         if (level > 0) {
//             const field = levelFields[level - 1];
//             const mergeNodes = {};
//             for (const node of createdNodes[level]) {
//                 const value = node[field];
//                 if (!mergeNodes[value]) {
//                     mergeNodes[value] = node;
//                 } else {
//                     mergeNodes[value].children.push(...node.children);
//                     const index = parentNode.children.indexOf(node);
//                     parentNode.children.splice(index, 1);
//                 }
//             }
//             createdNodes[level - 1] = Object.values(mergeNodes);
//         }

//         return hasValidChild ? parentNode : null;
//     }

//     // 开始创建树形结构
//     const createdNodes = levelFields.map(() => []);
//     buildNode(root, levelFields, 0, {}, createdNodes);

//     //删除空的 children 属性
//     function removeEmptyChildren(node) {
//         if (node.children.length === 0) {
//             delete node.children;
//         } else {
//             for (const child of node.children) {
//                 removeEmptyChildren(child);
//             }
//         }
//     }
//     removeEmptyChildren(root);

//     return root.children;
// }




const tree = buildTree(dataSource, ['cityLevel', 'region', 'cityTier', 'cityName'])
console.log(tree)

// const treetest = {
//     children:[
//         {
//             name: "1",
//             children: [
//                 {
//                     name: "2",
//                     children: [{
//                         name: "3",
//                         children: [
//                             {
//                             name: "4",
//                             children: [{ name: "sds" }]
//                         }
//                     ]
//                     },
//                     {
//                         name: "459475974",
//                         children: []
//                     }]
//                 },
//                 {
//                     name: "4545",
//                     children: [{name:'4545再来'}]
//                 }
//             ]
//         },
//         {
//             name: "we",
//             children: [
//                 {
//                     name: "df",
//                     children: [{
//                         name: "c",
//                         children: [{
//                             name: "g",
//                             children: [{ name: "h" }]
//                         }]
//                     }]
//                 },
//                 {
//                     name: "7878797",
//                     children: []
//                 }
//             ]
//         }
//     ]
    
// }





// function removeEmptyChildren(node, parent, index) {
//     const children = node.children
//     // console.log(JSON.parse(JSON.stringify(children)))
//     if (node.children.length === 0) {
//         console.log(JSON.parse(JSON.stringify( parent.children)), parent.children.length,node,index)
//         //删除节点
//         parent.children.splice(index,1)
//         console.log("parent",JSON.parse(JSON.stringify( parent.children)))
//     } else {
//         for (let index = 0; index < children.length; index++) {
//             const element = children[index];
//             if(element.children){
//                 removeEmptyChildren(element, node, index);
//             }
//         }
//         // 如果自己也空了，就得找上级
//         if(parent.children.length === 0){
//             removeEmptyChildren(treetest, treetest, 0);
//         }
//     }

// }

// removeEmptyChildren(treetest, treetest, 0)

// console.log(treetest)