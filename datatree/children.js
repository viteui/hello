function removeEmptyChildren(node, parent, index) {
    const children = node.children
    // console.log(JSON.parse(JSON.stringify(children)))
    if (children.length === 0) {
        console.log(JSON.parse(JSON.stringify( parent.children)), parent.children.length,node,index)
        //删除节点
        // parent.children.splice(index,1)
        delete parent.children[index]
        console.log("parent",JSON.parse(JSON.stringify( parent.children)))
    } else {
        for (let index = 0; index < children.length; index++) {
            const element = children[index];
            if(element.children){
                removeEmptyChildren(element, node, index);
            }
        }
        node.children = filterArr(children);
        // 如果自己也空了，就得找上级
        if(parent.children.length === 0){
            removeEmptyChildren(root, root, 0);
        }
    }

}

removeEmptyChildren(root, root, 0)