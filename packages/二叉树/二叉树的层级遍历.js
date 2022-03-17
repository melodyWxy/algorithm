/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-03-16 18:06:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-03-16 18:38:33
 * @FilePath: /react18/algorithm/packages/二叉树/二叉树的层级遍历.js
 * @Description: update here
 */


// 递归
const lvTraversalRecursion = (tree, lv = 0, res = []) => {
    if(tree){
        if(!res[lv]){
            res[lv] = [tree.val];
        }else{
            res[lv].push(tree.val);
        }
    }
    if(tree?.left){
        lvTraversalRecursion(tree.left, lv+1, res)
    }
    if(tree?.right){
        lvTraversalRecursion(tree.right, lv+1, res)
    }
    return res;
}


// 迭代 - 层序遍历直接用队列
const lvTraversal = (tree) => {
    if(!tree){
        return [];
    }
    const res = [];
    const queue = [tree];
    let i = 0;
    while(queue.length){
        res[i] = [];
        const cuLength = queue.length;
        let cuIndex = 0;
        while(cuIndex < cuLength){
            res[i].push(queue[0].val);
            if(queue[0].left){
                queue.push(queue[0].left)
            }
            if(queue[0].right){
                queue.push(queue[0].right)
            }
            queue.shift();
            cuIndex ++;
        }
        i ++;
    }
    return res;
}


// 用例

class Tree {
    constructor(arr){
        this.source = arr;
        this.queue = [];
        return this.createTree();
    };
    createNode = (val) => {
        if(val != null){
            return {
                val,
                left: null,
                right: null
            }
        }
        return null;
    }
    createTree = () => {
        const root = this.createNode(this.source[0]);
        this.queue = [root];
        let i = 1;
        while( i <= this.source.length-1){
            const nodel = this.createNode(this.source[i]);
            this.queue.push(nodel);
            this.queue[0].left = nodel;
            i ++;
            const noder = this.createNode(this.source[i]);
            this.queue.push(noder);
            this.queue[0].right = noder;
            i ++;
            console.log(i, nodel, noder)
            this.queue.shift();
        }
        return root;
    }

}
// 用例
const tree = new Tree([1,2,3,4,5,6]);

console.log(lvTraversal(tree));