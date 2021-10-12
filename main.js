const get = document.querySelector("#get")
const call = document.querySelector("#call")
const now = document.querySelector("#now")
const all = document.querySelector("#all")
const screen = document.querySelector("#screen")

let n = 0
const array = []


get.onclick = () => {
    n = n + 1
    array.push(n)
    now.innerText = n
    all.innerText = JSON.stringify(array)
}
call.onclick = () => {
    const x = array.shift()
    all.innerText = JSON.stringify(array)
    if (x !== undefined) {
        screen.innerText = `请${x}号就餐`
    }else {
        alert("没有客人啦")
    }
}