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
function reverse(num) {
    debugger;
    let resultArr = [];
    let intToStr = num.toString();
    for (let i = intToStr.length - 1; i > 0; i--) {
        resultArr.push(intToStr[i]);
    }
    if (intToStr[0] == "-") {
        resultArr.unshift("-");
    }
    resultArr.push(intToStr[0]);
    let resultNum = parseInt(resultArr.join(""));
    if (resultNum <= Math.pow(-2, 31) || resultNum >= Math.pow(2, 31) - 1) {
        return 0;
    }
    console.log(resultNum);
    return resultNum;
}
;
reverse(102);