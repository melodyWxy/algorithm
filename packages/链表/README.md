<!--
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-03-17 15:33:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-03-17 15:36:47
 * @FilePath: /react18/algorithm/packages/链表/README.md
 * @Description: update here
-->


## 单链表闭环检测

```js
// 启用hash表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
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
};

```

