/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-03-17 15:33:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-03-17 20:23:19
 * @FilePath: /react18/algorithm/packages/链表/单链表.js
 * @Description: update here
 */


// 闭环检测


// 启用hash表
var hasCycle = function(head) {
//     const map = new Map();
//     let cuIndex = 0;
//     map.set(head, cuIndex)
//     while(head?.next){
//         head = head.next;
//         cuIndex ++;
//         const t = map.get(head);
//         if(t || t === 0){
//             return true;
//         }
//         map.set(head, cuIndex);
//     }
//     return false

// 启用双指针
    let index1 = index2 = head;
    while(index2?.next){
        index2 = index2.next;
        index1 = index1.next;
        if(!index2){
            return false;
        }
        index2 = index2.next;
        if(index1 === index2){
            return true;
        }
    }
    return false;
}


// 单链表反转
// 基于栈
//  var reverseList = function(head) {
//     if (head == null || head.next == null) {
//         return head;
//     }
//     const stack = [];
//     while(head){
//         stack.push(head);
//         head = head.next;
//     }
//     let next = stack.pop();
//     let res = next;
//     while(stack.length){
//         next.next = stack.pop();
//         next = next.next;
//     }
//     next.next = null;
//     return res;
   
// };
// 双链表
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let result = null;
    let pre = null;
    while (head != null) {
        //temp用来记录head前一个元素
        pre = head;
        head = pre.next;
        pre.next = result;
        //result为第二个节点的头节点
        result = pre;
    }
    return result;
};