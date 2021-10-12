//链表
//创建一个节点
const creatNode = (value) => {
    return {
        date: value,
        next: null
    }
}
//增加一个节点
const appendTo = (node1, node2) => {
    node2.next = node1
    return node2
}
//遍历一个节点
const eachNode = (node, fn) => {
    while (node.next !== null) {
        fn(node)
        node = node.next
    }
    fn(node)
}
//删除一个节点
const deleteNode = (list, node) => {
    while (list.next !== node) {
        list = list.next
    }
    list.next = node.next
    node.next=null
}
//修改一个节点
const modifiedNode = (list, oldNode, newNode) => {
    while (list.next !== oldNode) {
        list = list.next
    }
    list.next = newNode
    newNode.next=oldNode.next

}
const node1 = creatNode(10)
const node2 = creatNode(20)
const node3 = creatNode(30)
const node4 = creatNode(40)
const node5 = creatNode(50)
appendTo(node2, node1)
appendTo(node3, node2)
appendTo(node4, node3)
eachNode(node1, (node) => {
    console.log(node)
})
modifiedNode(node1,node3,node5)
deleteNode(node1, node2)
console.log("----");
eachNode(node1, (node) => {
    console.log(node)
})
