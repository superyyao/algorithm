// 定义二叉树节点
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// 递归计算二叉树最大深度
function maxDepth(root) {
    if (root === null) {
        return 0; // 空树深度为0
    }
    // 递归计算左右子树的最大深度，然后取较大值加1（加上根节点这一层）
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// 示例用法
// 构造一棵二叉树
//      1
//     / \
//    2   3
//   /
//  4
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(maxDepth(root)); // 输出 3