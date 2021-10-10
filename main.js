let n = 0

//求最小值
const min = function (number) {
    // console.log("---")
    // n+=1
    // console.log(`第${n}次`)
    if (number.length > 2) {
        // console.log(`压栈过程${number}`)
        let x = min([number[0], min(number.slice(1))])
        // console.log(`第${n}次${x}`);
        return x
    } else {
        // console.log(`弹栈过程${number}`)
        return result(number)
    }
}
const result = function (number) {
    // console.log(`我是result中的${number}`)
    return number[0] < number[1] ? number[0] : number[1]
}
// min([1,4,66,75,76,97,100])

//求对应的index
const index = (x, number) => {
    return number.indexOf(x)
}
const reverse = (number) => {
    return number[0] > number ? number.reverse() : number
}


//数组排序  方法一
// let arr=[]
// const sort=(number)=> {
//     if (number.length > 1) {
//         let minValue = min(number);
//         let minIndex = index(minValue, number)
//         number.splice(minIndex, 1)
//         arr.push(minValue)              //从小到大
//         sort(number)
//         // return arr.push(minValue)    //从大到小
//     }else{
//        return arr.push(number[0])
//     }
// return arr
// }
// sort([1,4,266,999,75,76,97,100])


//方法二 不多创建一个变量arr,我们通过concat链接他们组成一个新数组
const sort=(number)=> {
    if (number.length > 2) {
        let minValue = min(number)
        let minIndex = index(minValue, number)
        number.splice(minIndex, 1)
        return [minValue].concat(sort(number))
    }else{
        return reverse(number)
    }
}
sort([1,4,266,999,75,76,97,100])