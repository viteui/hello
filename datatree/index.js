


function flattenToTree(data, keys) {
    const root = {};
    data.forEach(item => {
        let currentNode = root;
        keys.forEach((key, i) => {
            const value = item[key].value;
            if (!currentNode[value]) {
                currentNode[value] = i === keys.length - 1 ? item : {};
            }
            currentNode = currentNode[value];
        });
    });

    return findData(data, root);
}

function getValue(obj, str) {
    const strArr = str.split(".")
    let origin = obj;
    strArr.forEach(item => {
        origin = origin[item]
    })
    return origin
}

function setValue(obj, str, value) {
    eval(`obj.${str}=[${value.map(item => JSON.stringify(item)).join(",")}]`)
    return obj;
}

const tree2 = flattenToTree(dataSource, ["cityLevel", "region", "cityTier", "cityName"]);

function findData(dataSource, tree) {
    dataSource.forEach((item) => {
        const str = `${item.cityLevel.value}.${item.region.value}.${item.cityTier.value}.${item.cityName.value}`
        const value = getValue(tree, str)
        if (!Array.isArray(value)) {
            setValue(tree, str, [item])
        } else {
            setValue(tree, str, [...value, item])
        }

    })
    return tree
}


function countLeafNodes(tree) {
    if(Array.isArray(tree)){
        return tree.length
    }
    for (const item in tree) {
        // 最底层
        if(tree.length === undefined){
            tree.length = 0 
        }
        tree.length+=countLeafNodes(tree[item])
    }
    return tree.length
}

console.log(tree2,countLeafNodes(tree2) )





// console.log(dataSource.length)

// const cityLevelTree = (dataSource)=>{
//     const tree = {}
//     dataSource.forEach(element => {

//         const value = element.cityLevel.value
//         if(!Array.isArray(tree[value])){
//             tree[value] =  []
//         }
//         tree[value].push(element)
//     });
//     return tree;
// }

// const regionTree = (data)=>{
//     const tree = {}
//     for (const key in data) {
//         // S,A
//         tree[key] = {}
//         const currentTree =  tree[key]
//         data[key].forEach(element => {
//             const value = element.region.value
//             if(!Array.isArray(currentTree[value])){
//                 currentTree[value]= []
//             }
//             currentTree[value].push(element)
//         });
//     }
//     return tree;
// }

// const tree = cityLevelTree(dataSource)
// console.log(regionTree(tree))

// function buildTree(data, keys) {
//     const root = { children: [] };
//     const map = {};

//     data.forEach(item => {
//         let node = root;
//         keys.forEach(key => {
//             const value = item[key].value;
//             // 先找cityLeve
//             let child = map[value];
//             if (!child) {
//                 child = { value, children: [] };
//                 map[value] = child;
//                 node.children.push(child);
//             }
//             node = child;
//         });
//         node.children.push(item);
//     });

//     return root.children;
// }
// function countLeafNodes(tree) {
//     if (!tree || !Array.isArray(tree)) {
//         return 0;
//     }
//     let count = 0;
//     tree.forEach(node => {
//         if (!node.children || node.children.length === 0) {
//             count++;
//         } else {
//             count += countLeafNodes(node.children);
//         }
//     });

//     return count;
// }


// const tree2 = buildTree(dataSource, ["cityLevel", "region", "cityTier", "cityName"]);

// console.log(tree2)

// function countLeafNodes(tree) {
//     if (tree.children) {
//         let count = 0;
//         for (const item of tree.children) {
//             if (!item.children) {
//                 tree.count = tree.children.length;
//                 return tree.count
//             } else {
//                 count += countLeafNodes(item)
//             }
//         }
//         tree.count = count;
//     }
//     return tree.count
// }
// console.log(1, countLeafNodes({ children: tree }))


// console.log(tree2)
// function buildTree2(flatData, parent, keys) {
//     const tree = [];
//     const childrenKey = keys[0];
//     const remainingKeys = keys.slice(1);
//     for (const item of flatData) {
//         console.log(item[keys[1]])
//       if (item[childrenKey].value === parent) {
//         const children = buildTree2(flatData, item[keys[1]].value, remainingKeys);
//         if (children.length > 0) {
//           item[childrenKey] = children;
//         }
//         tree.push(item);
//       }
//     }
//     return tree;
//   }



// function buildTree2(flatData, levelFields, parent, parentKey = null) {
//     const tree = [];
//     const groupBy = (arr, prop) => arr.reduce((groups, item) => {
//       const val = item[prop];
//       groups[val] = groups[val] || [];
//       groups[val].push(item);
//       return groups;
//     }, {});

  
//     const level = parent ? parent.level + 1 : 1;
//     const childrenKey = parent ? `children_${level}` : 'children_1';
//     const groups = groupBy(flatData, levelFields[level - 1]);
//     Object.entries(groups).forEach(([key, childrenData]) => {
//       const newNode = { [childrenKey]: [] };
//       if (parentKey) {
//         newNode[parentKey] = parent ? parent.id : null;
//       }
//       newNode[levelFields[level - 1]] = key;
//       const children = buildTree2(childrenData, levelFields, newNode, parentKey);
//       if (children.length) {
//         newNode[childrenKey] = children;
//       }
//       tree.push(newNode);
//     });
//     return tree;
//   }
  

// const tree3 = buildTree2(dataSource,["cityLevel", "region", "cityTier", "cityName"]);

// console.log("tree",tree3)