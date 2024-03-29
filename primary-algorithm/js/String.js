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
// function firstUniqChar(str: string): number {
//     let temp:any = {};
//     for (let i = 0; i < str.length; i++) {
//         if (!temp[str[i]]) {
//             temp[str[i]] = 1;
//         } else {
//             temp[str[i]]++;
//         }
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (temp[str[i]] === 1) {
//             return i
//         }
//     }
//     return -1
// };
// firstUniqChar('sdafsda');
// 有效的字母异位词: 异位词是指两个字符串所包含的字母的出现次数都相同,只是顺序不一样;
// 方法一思路: 对于s字符串中的每个字符char，若t中有char，则在t中删除char。最后若t为空，说明刚刚好。
// function isAnagram (s: string, t: string) {
//     if (s.length !== t.length) return false;
//     for (let char of s) {
//         if (t.indexOf(char) !== -1) {
//             let index = t.indexOf(char);
//             t = t.slice(0, index) + t.slice(index + 1);
//         }
//     }
//     if (t) return false;
//     console.log(true);
//     return true;
// };
// isAnagram('anagram', 'nagaram');
// 方法二思路: 将两个字符串转换成数组，然后排序，最后在转换成字符串，比较这两个字符串是否相等即可;
// function isAnagram (s: string, t: string) {
//     if (s.length !== t.length) return false;
//     let array_s = Array.from(s).sort().join(''),
//         array_t = Array.from(t).sort().join('');
//     console.log(true);
//     return array_s === array_t;
// };
// isAnagram('anagram', 'nagaram');
// 验证回文串: 回文串即是将一段字符串中的除了正常字母数字外的字符(空格,标点符号等); 首位每一个字符都应该是对应的;
// 比如: "A man, a plan, a canal: Panama" 首位每一个字符都是对应的;
// function isPalindrome(str:string): boolean {
//     str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase(); //替换后全小写化
//     console.log(str);
//     var left = 0;
//     var right = str.length-1;
//     while(left<right){
//         if(str[left]!=str[right]){
//             console.log(false);
//             return false;
//         }
//         left++;
//         right--;
//     }
//     console.log(true);
//     return true;
// };
// isPalindrome("A man, a plan, a canal: Panama");
// isPalindrome("race a car");
// 字符串转换整数;
// function myAtoi(str: string): number {
//     var numb = parseInt(str, 10);
//     if (isNaN(numb)) {
//         console.log(0);
//         return 0;
//     }else if (numb < Math.pow(-2, 31) || numb > Math.pow(2, 31)-1) {
//         console.log(numb < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31)-1);
//         return numb < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31)-1;
//     }else {
//         console.log(numb);
//         return numb;
//     }
// }
// myAtoi('-91283472332');
// 实现strStr(); strstr方法: 判断第二个字符串中的第一位字符在第一个字符中的索引位, 没有返回-1;
// function strStr(haystack: string, needle: string): number {
//     var ans : number = -1
//     for(var i:number=0;i<=haystack.length-needle.length;){
//         if( needle !== haystack.slice(i,i+(needle.length)) ){
//             i++
//         }else{
//             ans = i
//             console.log(ans);
//             return ans
//         }
//     }
//     console.log(ans);
//     return ans
// }
// strStr('aaaaa', 'bba');
// 外观数列
// function countAndSay(n: number): string{
//     // 参数范围在1-30之间;
//     if(n == 1) {return '1'} else if (n > 30) {return 'false'};
//     // 递归调用取结果;
//     let pre: string = countAndSay(n-1);
//     let result: string = '';
//     let count: number = 1;
//     for(let i = 0; i < pre.length; i++) {
//         if(pre[i] == pre[i + 1]) {
//             //计算有多少个该数
//             count++;
//         } else {
//             result += count + pre[i];
//             //已经将值加给result了，可以恢复为1，继续下一次
//             count = 1;
//         }
//     }
//     return result;
// }
// console.log(countAndSay(4));
// 最长公共前缀
// function longestCommonPrefix(strs: Array<string>): string {
//     interface StrKeyAndArrVal {
//         // 需要定义一个活动的键值来在之后的循环中使用;
//         // key类型必须是string;
//         // val类型必须是array;
//         [strArrStrKeyName: string]: Array<string>;
//     }
//     let globalStr: String = '',
//         globalObj: StrKeyAndArrVal = {},
//         globalLen: number = 0,
//         globalMaxLenArr: string[] = [];
//     for (let i = 0; i < strs.length; i++ ) {
//         let areaStr: string = '',
//             CountTotalLen: number = 0,
//             lenAggregate: string = 'lenAggregate' + i;
//         globalObj[lenAggregate] = [];
//         for (let n = 0; n < strs[i].length; n++) {
//             globalObj[lenAggregate].push(strs[i][n]);
//             // 记录当前数组的长度;
//             CountTotalLen ++;
//         }
//         if(CountTotalLen > globalLen) {
//             // 获取最长的数组
//             globalMaxLenArr = globalObj[lenAggregate];
//             // 记录上一次的数组长度;
//             globalLen = CountTotalLen;
//         }
//     }
//     // 进行遍历每一项数组;
//     for(let arrVal of Object.values(globalObj)) {
//         // 再次进行遍历每一位数组中的每一项;
//         arrVal.forEach( (itemEle:any,ind:any) => {
//             // 用最长的数组, 进行遍历;
//             globalMaxLenArr.forEach(function (item, ind) {
//                 if(itemEle == item) {
//                     // 现在得到出现次数最多字符;
//                     globalStr += item;
//                 }
//             })
//         });
//     }
//     // 以上代码灵感改进于......
//     // globalMaxLenArr.forEach(function (item, ind) {
//     //     // console.log(item);
//     //     for(let key of Object.keys(globalObj)) {
//     //         console.log('\n\n\n');
//     //         for(let arrVal of globalObj[key]) {
//     //             if(arrVal == item) {
//     //                 globalStr += item;
//     //             }
//     //         }
//     //     }
//     // })
//     // console.log(globalStr);
//     interface arbitrarilyObj {
//         [anyName: string ]: string | number
//     }
//     let temporaryObj: arbitrarilyObj = {},
//         temporaryCountArr: Array<any> = [],
//         temporaryCount: number = 0;
//     globalStr.split('').forEach( (item, ind) => {
//         if(temporaryObj[item]) {
//             temporaryObj[item] ++;
//         }else{
//             temporaryObj[item] = 1;
//         }
//     })
//     for(let key in temporaryObj) {
//         if(temporaryCount < temporaryObj[key]){
//             temporaryCount = temporaryObj[key]
//             temporaryCountArr.shift();
//             temporaryCountArr.push(key);
//         }
//         if(temporaryCount == temporaryObj[key] && temporaryCountArr.indexOf(key) == -1){
//             temporaryCountArr.push(key);
//         }
//     }
//     var finalRes = temporaryCountArr.join('');
//     return finalRes;
// };
// console.log(longestCommonPrefix(["flower","flow","flight"]));
