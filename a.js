


//求一个数在数组中的index
const order=(number,array)=>{
    for (let i=0;i<array.length;i++){
        if(number===array[i]){
            return i
        }
    }
}
// order(3,[1,2,3,4,5,6])




//求数组中最小值的index
function result(number){
    return number[0]>number[1]?number[1]:number[0]
}

const index=(number)=>{
    let index=0
    for (let i=1;i<number.length;i++){
        if(number[index]>number[i]){
            index=i
        }
    }
    return index
}
// minIndex([4,6,8,3,2,7])
//找数组中最小值
const min =(number)=> {
    if (number.length > 2) {
        return min([number[0], min(number.slice(1))])
    }else{
        return result(number)
    }
}
// min([4,6,8,3,2,7])

//选择排序递归
const sort=(number)=> {
    if (number.length > 2) {
        const minValue = min(number)
        const minIndex = index(number)
        number.splice(minIndex, 1)
        return [minValue].concat(sort(number))
    }else{
        return number[1]>number[0]?number:number.reverse()
    }
}
sort([4,6,8,3,2,7])





//选择排序循环改写
const count=(number)=>{
    for(let i=0;i<number.length;i++){
         for(let j=0;j<number.slice(i+1).length;j++){
             if(number[i]>number.slice(i+1)[j]){
                 let tempt=number[i]
                 number[i]=number[i+j+1]
                 number[i+j+1]=tempt
             }
         }
    }
    return number
}
count([5,4,3,2,6,1,7])

//选择排序循环改写二
