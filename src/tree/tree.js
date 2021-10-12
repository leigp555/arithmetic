const createNode = (value) => {
    return {
        date: value,
        children: null,
        parent:null
    }
}
//添加一个子节点
const addNode = (node, newNode) => {
    node.children = node.children || []
    node.children.push(newNode)
    newNode.parent=node
}
//遍历
const eachNode = (tree, fn) => {
    fn(tree)
    if (!tree.children) {
        return;
    }
    for (let i = 0; i < tree.children.length; i++) {
        eachNode(tree.children[i], fn)
    }
}
//删除节点
const removeNode=(tree,node)=>{
    const siblings=node.parent.children
    let index=0
    for(let i=0;i<siblings.length;i++){
        if(siblings[i]===node){
            index=i
        }
    }
    siblings.splice(index,1)

}
const a = createNode(10);
const b = createNode(20);
const c = createNode(30);
const d = createNode(40);
const e = createNode(100);
const f = createNode(200);
const g = createNode(300);
addNode(a, b)
addNode(a, c)
addNode(a, d)
addNode(b, e)
addNode(b, f)
addNode(b, g)
console.log(a)
removeNode(a,e)