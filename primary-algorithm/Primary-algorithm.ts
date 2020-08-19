// 壹.数组类目



    // 删除排序数组中的重复项
        // 方法一:
            // function removeDuplicates(nums: number[]): number {
            //     let arrLen: number | null = nums.length,
            //         newArr: Array<number> = [];
            //     if(arrLen == 0) {
            //         return arrLen;
            //     }else{
            //         for(let i = 0; i < arrLen; i++) {
            //             if(newArr.indexOf(nums[i]) == -1){
            //                 newArr.push(nums[i])
            //             }
            //         }
            //         console.log(newArr);
            //         return newArr.length;
            //     }
            // };
            // console.log(removeDuplicates([1,1,2]));
        // 方法二: 
            // function removeDuplicates(nums: number[]): number | any {
            //     let newArr: any[] = [];
            //     if(nums.length == 0){
            //         return nums.length;
            //     }else{
            //         for(let i = 0; i < nums.length; i++) {
            //             if(nums[i] != newArr[newArr.length - 1]){
            //                 newArr.push(nums[i]);
            //             }
            //         }
            //         console.log(newArr);
            //         return newArr.length;
            //     }
            // };
            // console.log(removeDuplicates([1,1,2,3,4,5,6,6,6,7,7,7,8,8]));
        // 方法三:
            // function removeDuplicates(nums: number[]): number | any {
            //     let newSet:any = [...new Set(nums)];
            //     console.log(newSet);
            //     return newSet.length;
            // };
            // console.log(removeDuplicates([1,1,2,3,4,5,6,6,6,7,7,7,8]));
            







    // 买卖股票的最佳时机 II
        // class Solution {
        //     static maxProfit(prices: number[]): number {
        //         let profit = 0;
        //         for(let i = 0; i < prices.length; i++) {
        //             let diff = prices[i] - prices[i-1]
        //             if(diff > 0){
        //                 profit += diff
        //             }
        //         }
        //         return profit
        //     }
        // }
        // console.log(Solution.maxProfit([7,1,5,3,6,4]))








    // 旋转数组;
        // function rotate(nums: number[], k: number): void {
        //     for(let i = 0; i < k; i++) {
        //         nums.unshift(nums.pop());
        //     }
        //     console.log(nums);
        // };
        // rotate([1,2,3,4,5,6,7], 3)








    // 判断是否存在重复元素;
        // function containsDuplicate(nums: number[]): any {
        //     nums.sort();
        //     for(let i = 0; i < nums.length; i++) {
        //         if(nums[i] === nums[i + 1]){
        //             return true;
        //         }else{
        //             return false;
        //         }
        //     }
        // };
        // console.log(containsDuplicate([1,3,4,2]));









    // 只出现一次的数字;
        // 方法一
            // function singleNumber(nums: number[]): number {
            //     let tempobj: object = {};
            //     for(let i = 0; i < nums.length; i++) {
            //         if(!tempobj[nums[i]]){
            //             tempobj[nums[i]] = 1;
            //         }else{
            //             tempobj[nums[i]]++;
            //         }
            //     }
            //     for(let keys in tempobj) {
            //         if(tempobj[keys] == 1) {
            //             console.log(keys);
            //         }
            //     }
            // };
            // singleNumber([2,1,1]);
        // 方法二
            // function singleNumber(nums: number[]): number {
            //     let res: Array<any> = [];
            //     for (let i = 0; i < nums.length; i++) {
            //         if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            //             console.log(nums[i]);
            //             return nums[i];
            //         }
            //     }
            // };
            // singleNumber([2,7,1,4,6,2,6,7,9,1,4]);









    // 两个数组的交集 II
        // 方法一
            // function intersect(nums1: Array<number>, nums2: Array<number>): number[] {
            //     let temp: Array<number> = [],
            //         bigArr: Array<number> = [],
            //         smArr: Array<number> = [];

            //     if(nums1.length > nums2.length) {
            //         bigArr = nums1;   
            //         smArr = nums2
            //     }else{
            //         bigArr = nums2;   
            //         smArr = nums1
            //     }
                
            //     for(let i = 0; i < smArr.length; i++) {
            //         if(bigArr.indexOf(smArr[i]) != -1) {
            //             temp.push(smArr[i]);
            //         }
            //     }
            //     console.log(temp);
            //     return temp;
            // };
            // intersect([4,9,5],[9,4,9,8,4]);
            
        // 方法二;
            // function intersect(nums1: Array<number>, nums2: Array<number>): number[] {
            //     let temp: Array<number> | number = [], arr: Array<number> = [];
            //     if (nums1.length > nums2.length) {
            //         temp = nums1
            //         nums1 = nums2
            //         nums2 = temp
            //     }

            //     for(let key of nums1){
            //         temp = nums2.indexOf(key)
            //         if(temp > -1) {
            //             arr.push(key);
            //             nums2.splice(temp,1)
            //         }
            //     }
            //     console.log(arr);
            //     return arr
            // };
            // intersect([4,9,5],[9,4,9,8,4]);
            // intersect([9,4,9,8,4],[4,9,5]);



    // 加一;
        // function plusOne(digits: number[]): number[] {
        //     debugger;
        //     for (let i: number = digits.length - 1; i >= 0; i--) {
        //         if (digits[i] !== 9) {
        //             digits[i]++;
        //             return digits;
        //         } else {
        //             digits[i] = 0;
        //         };
        //     };

        //     let result: number[] = [1, ...digits];
        //     return result;
        // }
        // console.log(plusOne([9,9,9,9,9]));
        // // console.log(plusOne([1,2,3,4,9]));



    


        
        


    // 移动零;
        // function moveZeroes(nums: number[]): void {
        //     for(let key of nums) {
        //         if(key == 0) {
        //             nums.splice(nums.indexOf(key), 1);
        //             nums.push(0);
        //         }
        //     }
        //     console.log(nums);
        // };
        // moveZeroes([0,1,0,3,12]);

    
    


    



    // 两数之和
        // 方法一
            // function twoSum(nums: Array<number>, target: number): number[] {
            //     let result: Array<number> = [];
            //     for(let i = 0; i < nums.length; i++) {
            //         for(let n = 0; n < nums.length; n++) {
            //             if(nums[i] + nums[n] == target) {
            //                 return [i, n];
            //             }
            //         }
            //     }
            //     // return result;
            // };
            // console.log(twoSum([2, 7, 11, 15], 9));
        // 方法二(太绕了, 双循环简单暴力明确一点);
            // function twoSum(nums: number[], target: number): number[] {
            //     let tempObj: any = {};
            //     for(let i = 0; i < nums.length; i++) {
            //         let comp = target - nums[i];
            //         if(tempObj[comp] == undefined){
            //             tempObj[nums[i]] = i;
            //         }else{
            //             return [tempObj[comp], i];
            //         }
            //     }
            // };
            // console.log(twoSum([2, 7, 11, 15], 9));





    
    // 有效的数独
        // function isValidSudoku(board: string[][]): boolean {
        // function isValidSudoku(board: Array<Array<string>>): boolean {
            
        //     // 检测每一行;
        //     for (let arr of board) {
        //         let tempRowArr: Array<string> = [];
        //         for (let item of arr) {
        //             if (item != '.') tempRowArr.push(item);
        //         }
        //         let set: any = new Set(tempRowArr);
        //         if(set.size != tempRowArr.length) return false;
        //     }
            
        //     // 检测每一列;
        //     for(let i = 0; i < board.length; i++) {
        //         let tempColArr: Array<string> = [];
        //         board.forEach((item, ind) => {
        //             if(item[i] != '.') tempColArr.push(item[i]);
        //         });
        //         let set: any = new Set(tempColArr);
        //         if(set.size != tempColArr.length) return false;
        //     }
            
        //     // 检测九宫格;
        //     for(let x = 0; x < board.length; x += 3) {
        //         for(let y = 0; y < board.length; y += 3) {
        //             let tempBoxArr: Array<string> = [];
        //             // console.log('===================');
        //             for(let xbox = x; xbox < x+3; xbox++) {
        //                 for(let ybox = y; ybox < y+3; ybox++) {
        //                     if(board[xbox][ybox] != '.') tempBoxArr.push(board[xbox][ybox]);
        //                 }
        //             }
        //             let set = new Set(tempBoxArr);
        //             if(set.size != tempBoxArr.length) return false;
        //         }
        //     }
            
        //     return true;
        // };
        // console.log(isValidSudoku(
        //     [
        //         ["5","3",".",".","7",".",".",".","."],
        //         ["6",".",".","1","9","5",".",".","."],
        //         [".","9","8",".",".",".",".","6","."],
        //         ["8",".",".",".","6",".",".",".","3"],
        //         ["4",".",".","8",".","3",".",".","1"],
        //         ["7",".",".",".","2",".",".",".","6"],
        //         [".","6",".",".",".",".","2","8","."],
        //         [".",".",".","4","1","9",".",".","5"],
        //         [".",".",".",".","8",".",".","7","9"],
        //     ]
        // ));
    






    
    
    
    
    // 旋转图像;
        function rotate(matrix: number[][]): void {
            let arr=[];
            for(let i=0;i<matrix.length;i++){
                let [...arr1]=matrix[i];
                arr.push(arr1);
            }
            
            for(let i = 0 ; i < arr.length; i++){
                for(let j = 0; j < arr[i].length; j++){
                    let column = arr[i].length - 1 - i;
                    matrix[j][column] = arr[i][j];
                }
            }
            console.log(matrix);
        };
        rotate(
            [
                [1,2,3],
                [4,5,6],
                [7,8,9],
            ]
        )