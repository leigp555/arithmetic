
//求最小值
const min = function (number) {

    if (number.length > 2) {
        return min([number[0], min(number.slice(1))])

    } else {
        return result(number)
    }
}
const result = function (number) {
    return number[0] < number[1] ? number[0] : number[1]
}
min([1,4,66,75,76,97,100])

//求对应的index 方法一
// const index = (x, number) => {
//     return number.indexOf(x)
// }

//求对应的index 方法二
const index=function(x,number){
    for (let i=0;i<number.length;i++){
        if(x===number[i]){
            return i
        }
    }
}
const reverse = (number) => {
    return number[0] > number ? number.reverse() : number
}
//找数组中最小数字的下标
const minIndex=(number)=>{
    let index=0
    for (let i=1;i<number.length;i++){
        if(number[index]>number[i]){
            index=i
        }
    }
    return index
}
// minIndex([5,67,5,0,2,33,0])

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
//         arr.push(number[0])
//     }
// return arr
// }
// sort([1,4,266,999,75,76,97,100])


//方法二 归并排序 不多创建一个变量arr,我们通过concat链接他们组成一个新数组
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
// console.log(sort([1, 4, 266, 999, 75, 76, 97, 100]));




let n=0

const cat=function(number){
    n+=1
    if(number.length>2) {
        return cat( [number[0],cat(number.slice(1))])
    }else{
        return number[0]>number[1]?number[1]:number[0]
    }
}
console.log(cat([13, 4, 5, 632, 54, 0,4335, 67, 63, 43]));

