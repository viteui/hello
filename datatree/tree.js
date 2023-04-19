
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
