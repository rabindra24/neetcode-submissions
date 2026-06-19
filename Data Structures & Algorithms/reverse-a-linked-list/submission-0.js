/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;

        let curr = head;

        while (curr !== null) {

            const next = curr.next; // store next node

            curr.next = prev;       // reverse link

            prev = curr;            // move prev forward

            curr = next;            // move curr forward

        }

        return prev;
    }
}
