//求一个数在数组中的index
const order = (number, array) => {
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            return i
        }
    }
}

// order(3,[1,2,3,4,5,6])

function result(number) {
    return number[0] > number[1] ? number[1] : number[0]
}

//求数组中最小值的index
const index = (number) => {
    let index = 0
    for (let i = 1; i < number.length; i++) {
        if (number[index] > number[i]) {
            index = i
        }
    }
    return index
}
// index([4,6,8,3,2,7])
//找数组中最小值
const min = (number) => {
    if (number.length > 2) {
        return min([number[0], min(number.slice(1))])
    } else {
        return result(number)
    }
}
// min([4,6,8,3,2,7])

//选择排序递归
const sort = (number) => {
    if (number.length > 2) {
        const minValue = min(number)
        const minIndex = index(number)
        number.splice(minIndex, 1)
        return [minValue].concat(sort(number))
    } else {
        return number[1] > number[0] ? number : number.reverse()
    }
}
// sort([4, 6, 8, 3, 2, 7])


//选择排序循环改写
const count = (number) => {
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < number.slice(i + 1).length; j++) {
            if (number[i] > number.slice(i + 1)[j]) {
                let tempt = number[i]
                number[i] = number[i + j + 1]
                number[i + j + 1] = tempt
            }
        }
    }
    return number
}
// count([5, 4, 3, 2, 6, 1, 7])

//选择排序循环改写二
const index = (number) => {
    let index = 0
    for (let i = 1; i < number.length; i++) {
        if (number[index] > number[i]) {
            index = i
        }
    }
    return index
}
const change = (number, x, y) => {
    if (number[x] > number[y]) {
        const tempt = number[x]
        number[x] = number[y]
        number[y] = tempt
    }
}
const count2 = (number) => {
    for (let i = 0; i < number.length - 1; i++) {
        const minIndex = index(number.slice(i)) + i
        change(number, i, minIndex)
    }
    return number
}
count2([7, 0, 5, 3, 2, 6, 1])


//快速排序
const quickSoft = (number) => {
    if (number.length <= 1) {
        return number
    }
    const index = Math.floor(number.length / 2)
    const pivot = number.splice(index, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < number.length; i++) {
        if (number[i] < pivot) {
            left.push(number[i])
        } else {
            right.push(number[i])
        }
    }
    return quickSoft(left).concat([pivot], quickSoft(right))
}

quickSoft([4, 5, 6, 3, 2, 0])

//归并排序
const mergeSoft = (number) => {
    if (number.length <= 1) return number
    let left = number.slice(0, Math.floor(number.length / 2))
    let right = number.slice(Math.floor(number.length / 2))
    return merge(mergeSoft(left), mergeSoft(right))
}
const merge = (a, b) => {
    if (a.length === 0) return b
    if (b.length === 0) return a
    return a[0] > b[0] ? [b[0]].concat(merge(a, b.slice(1))) : [a[0]].concat(merge(a.slice(1), b))

}
mergeSoft([6, 4, 3, 8, 2, 1, 9])


//计数排序利用hash表
const countSoft = (number) => {
    let hash = {}
    let result = []
    let max = 0
    for (let i = 0; i < number.length; i++) {
        if(!(number[i] in hash)){
            hash[number[i]]=1
        }else{
            hash[number[i]]+=1
        }
        if(max<number[i])max=number[i]
    }
    for(let j=0;j<=max;j++){
       if(j in hash){
           result.push(j)
       }
    }
    return result
}

countSoft([3, 4, 6, 2])





