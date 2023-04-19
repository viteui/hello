// function buildTree(data) {
//     const root = { id: "root", children: [] };
//     const createdNodes = {};

//     function createNode(parentId, nodeData, level) {
//         const field = ["cityLevel", "region", "cityTier", "cityName"][level];
//         const value = nodeData[field].value;
//         const id = `${level}_${value}_${parentId}`;
//         if (createdNodes[id]) {
//             return createdNodes[id];
//         }
//         const node = {
//             id,
//             parentId,
//             value,
//             children: [],
//         };
//         createdNodes[id] = node;
//         if (parentId === "root") {
//             root.children.push(node);
//         } else {
//             const parent = createdNodes[parentId];
//             parent.children.push(node);
//         }
//         return node;
//     }

//     for (const nodeData of data) {
//         let parent = root;
//         for (let i = 0; i < 4; i++) {
//             const field = ["cityLevel", "region", "cityTier", "cityName"][i];
//             const value = nodeData[field].value;
//             if (!value) {
//                 break;
//             }
//             const parentId = parent.id;
//             parent = createNode(parentId, nodeData, i);
//         }
//     }

//     function mergeNodes(nodes) {
//         const mergedNodes = {};
//         for (const node of nodes) {
//             const parentId = node.parentId;
//             if (!parentId) {
//                 continue;
//             }
//             const parent = mergedNodes[parentId];
//             if (parent) {
//                 parent.children.push(node);
//                 delete createdNodes[node.id];
//             } else {
//                 mergedNodes[node.id] = node;
//             }
//         }
//         return Object.values(mergedNodes);
//     }

//     for (let i = 3; i >= 0; i--) {

//         const nodes = Object.values(createdNodes).filter((item)=>!Array.isArray(item)).filter(node => node.id.startsWith(`${i}_`));
//         const mergedNodes = mergeNodes(nodes);
//         createdNodes[i === 0 ? "root" : `${i}_`] = mergedNodes;
//     }

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
function convertToTreeData(arr) {
    const root = { children: [] };
    const map = {};
  
    for (const item of arr) {
      const keys = ["cityLevel", "region", "cityTier", "cityName"];
      let parent = root;
      let i = 0;
  
      while (i < keys.length) {
        const key = keys[i];
        const value = item[key].value;
        const parentId = parent.id || null;
        const id = parentId ? `${parentId}_${key}_${value}` : `${key}_${value}`;
  
        if (!map[id]) {
          const node = {
            id,
            label: value,
            value,
            children: [],
          };
          map[id] = node;
          parent.children.push(node);
        }
  
        parent = map[id];
        i++;
      }
    }
  
    return root.children;
  }
  

const tree = convertToTreeData(dataSource)
console.log(tree)



function flatToTree(data) {
    const root = { children: [] };
    const map = new Map();
  
    // 第一次遍历，将节点按照每一层的值存储在 map 中
    data.forEach(item => {
      let currentLevel = root;
      ["cityLevel", "region", "cityTier", "cityName"].forEach(field => {
        const value = item[field].value;
        if (!map.has(currentLevel)) {
          map.set(currentLevel, new Map());
        }
        if (!map.get(currentLevel).has(value)) {
          const newNode = { value, children: [] };
          map.get(currentLevel).set(value, newNode);
          currentLevel.children.push(newNode);
        }
        currentLevel = map.get(currentLevel).get(value);
      });
    });
  
    // 第二次遍历，将没有子节点的节点的 children 属性设置为 null
    const setNullChildren = node => {
      if (node.children.length === 0) {
        node.children = null;
      } else {
        node.children.forEach(child => setNullChildren(child));
      }
    };
    setNullChildren(root);
  
    // 验证所有叶子节点的数量是否等于原来数组中的所有元素
    const leafCount = countLeaves(root);
    if (leafCount !== data.length) {
      console.warn(`Warning: leaf node count (${leafCount}) is not equal to input data count (${data.length})`);
    }
  
    return root.children;
  }
  
  function countLeaves(node) {
    if (!node.children) {
      return 1;
    } else {
      let count = 0;
      node.children.forEach(child => count += countLeaves(child));
      return count;
    }
  }
  
  const tree2 =flatToTree(dataSource)
  console.log(tree2)
