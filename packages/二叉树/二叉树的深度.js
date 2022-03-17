/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-03-16 21:34:50
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-03-16 21:34:51
 * @FilePath: /react18/algorithm/packages/二叉树/二叉树的深度.js
 * @Description: update here
 */
// 递归 - 求深度
var maxDepth = function(root, lv = 0, max = 1) {
    if(!root){
        return lv;
    }
    lv = lv +1 ;
    max = lv > max? lv: max;  
    if(root.left){
        const next =  maxDepth(root.left, lv, max);
        max =next > max? next: max;
    }
    if(root.right){
        const next =  maxDepth(root.right, lv, max);
        max =next > max? next: max;
    }
    return max;
};