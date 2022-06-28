class Solution {
    public int search(int[] nums, int target) {
        
        return binarysearch(nums, target, 0, nums.length - 1);
    
    }   
        public int binarysearch(int[] nums, int target, int left, int right) {
        
            if (right >= left && left <= nums.length - 1) {

                int half = (left + right) / 2;
            if (target == nums[half]) {
                return half;
            }
            if (nums[half] > target) {
                return binarysearch(nums, target, left, half - 1);
            }
            return binarysearch(nums, target, half + 1, right);

            
            }
            return -1;

    }
}
