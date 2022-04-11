/**
 * @param {number[]} nums
 */
//Prefix Sum
var NumArray = function(nums) {
    this.nums = nums
    let sums = 0
    for (i = 0; i < this.nums.length; i++) {
        
        this.nums[i] = this.nums[i] + sums
        sums = this.nums[i]
    }
    console.log(this.nums)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) {
        return this.nums[right]
    }
    
    return this.nums[right] - this.nums[left - 1]
    
    
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */