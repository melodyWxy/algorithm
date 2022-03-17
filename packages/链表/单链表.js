/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-03-17 15:33:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-03-17 15:37:39
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

