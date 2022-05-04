// function XO(str){
//     let arr = str.split('')  
//     console.log(arr)  
//     let answer = arr.reduce((acc, curr) => {
//         if (curr.toLowerCase() === 'x'){
//             acc += 1
//         } else if (curr.toLowerCase() === 'o'){
//             acc -= 1
//         }
//     })
//     console.log(answer)
//     return answer === 0
// }

function XO(str){
    let arr = str.split('');
    let count = 0;
    arr.forEach(item => {
        if (item.toLowerCase() === 'x'){
            count++
        } else if (item.toLowerCase() === 'o'){
            count--
        }
    })
    return count === 0
}