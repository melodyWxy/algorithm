
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
console.log(tree);


// 前序遍历-递归
const preorderTraversalRecursion = (tree) => {
    let res = [];
    if(tree !== null){
        res.push(tree);
    }
    if(tree?.left){
        res=res.concat(preorderTraversalRecursion(tree.left));
    }
    if(tree?.right){
        res=res.concat(preorderTraversalRecursion(tree.right));
    }
    return res;
}


// 前序遍历+迭代算法
const preorderTraversa = (tree) => {
    if(tree === null){
        return [];
    }
    let res = [];
    const stack = [];
    while(tree && stack.length){
        if(tree){
            res.push(tree.val);
            stack.push(tree.left);
            tree = tree.left;
        }else{
            tree = stack.pop().right;
        }
    }
    return res;
}

// 中序遍历+迭代算法
const middleOrderTraversal = (tree) => {
    if(tree === null){
        return [];
    }
    let res = [];
    const stack = [];
    while(tree && stack.length){
        if(tree){
            stack.push(tree.left);
            tree = tree.left;
        }else{
            const last = stack.pop();
            res.push(last.val);
            tree = last.right;
        }
    }
    return res;
}

// 后序遍历+迭代算法

const postorderTraversal = ( tree ) => {
    if(tree === null){
        return [];
    }
    const res = [];
    const stack = [];
    while(tree && stack.length){
        if(tree){
            res.unshift(tree.val);
            stack.push(tree.left);
            tree = tree.right;
        }else{
            const last = stack.pop();
            tree = last.left;
        }
    }
    return res;

}




