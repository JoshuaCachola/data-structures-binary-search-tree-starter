// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  let rootIndex = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[rootIndex]);

  root.left = sortedArrayToBST(nums.slice(0, rootIndex));
  root.right = sortedArrayToBST(nums.slice(rootIndex + 1));

  return root;
}
