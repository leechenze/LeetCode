"use strict";
// 反转字符串
// function reverseString(strArr: string): void {
//     let result: string = strArr.split('').reverse().join('');
//     console.log(result);
// };
// reverseString('hello');
// 整数反转;
// 方法一;
// function reverse(num: number): number {
//     let tempArr: Array<any> = [];
//     let transStr: any = num.toString();
//     for(let i = 0; i < transStr.length; i++) {
//         if(i == 0 && transStr[i] != 0) {
//             // 开头数字不是零追加;
//             tempArr.push(transStr[i]);
//         }else if(i == transStr.length - 1 && transStr[i] != 0) {
//             // 结尾数字不是零追加;
//             tempArr.push(transStr[i]);
//         }else{
//             // 中间数进行追加;
//             tempArr.push(transStr[i]);
//         }
//     }
//     let resultStr: string = tempArr.reverse().join('');
//     resultStr.split('').forEach((item, ind) => {
//         if(item == '-' && ind == resultStr.length - 1) {
//             resultStr = '-' + resultStr.substring(0, ind);
//         }
//     })
//     console.log(parseInt(resultStr));
//     return parseInt(resultStr);
// };
// reverse(102);
// 方法二;
// function reverse(num: number): number {
//     debugger;
//     let resultArr: Array<string> = [];
//     let intToStr: string = num.toString();
//     for(let i = intToStr.length-1;i > 0;i--){
//         resultArr.push(intToStr[i]);
//     }
//     if(intToStr[0] == "-"){
//         resultArr.unshift("-");
//     }
//     resultArr.push(intToStr[0]);
//     let resultNum: number = parseInt(resultArr.join(""));
//     // 这一步, 防止数字过大导致的计算进度不准;
//     // if(resultNum <= Math.pow(-2,31) || resultNum >= Math.pow(2,31) - 1 ){
//     //     return 0;
//     // }
//     console.log(resultNum);
//     return resultNum;
// };
// reverse(102);
// 字符串中的第一个唯一字符;
// 方法一: 耗时最快, 效率最高的一段程序;
// function firstUniqChar(str: string): number {
//     const alpha = 'abcdefghijklmnopqrstuvwxyz';
//     let first = str.length;
//     for (let i = 0; i < alpha.length; ++i) {
//         let index = str.indexOf(alpha[i]);
//         if (index !== -1 && index === str.lastIndexOf(alpha[i])) {
//             if (index < first) {
//                 first = index;
//             }
//         }
//     }
//     console.log(first);
//     return first === str.length ? -1 : first;
// };
// firstUniqChar('asdaf');
// 方法二: 
// function firstUniqChar(str: string): number {
//     const length = str.length;
//     for (let i = 0; i < length; i++) {
//         if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
//             console.log(i);
//             return i
//         }
//     }
//     return -1
// };
// firstUniqChar('sdafsda');
// 方法三:
function firstUniqChar(str) {
    let temp = {};
    for (let i = 0; i < str.length; i++) {
        if (!temp[str[i]]) {
            temp[str[i]] = 1;
        }
        else {
            temp[str[i]]++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (temp[str[i]] === 1) {
            console.log(i);
            return i;
        }
    }
    return -1;
}
;
firstUniqChar('sdafsda');
