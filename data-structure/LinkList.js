class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkNodeList {
    constructor() {
        this.head = null
        this.length = 0
    }
    append(val) {
        let node = new Node(val)
        let p = this.head
        if (this.head) {
            // 找到链表最后一个节点， 把这个节点的.next属性赋值为node
            while (p.next) {
                p = p.next
            }
            p.next = node

        } else {
            // 如果没有head节点， 链表是空的， 把创建的节点赋值给head
            this.head = node
        }
        this.length++
    }
    print() {
        let p = this.head
        if (this.head) {
            let str = ''
            do {
                str += p.val + '=>'
                p = p.next
            } while (p.next)
            return str += p.val
        } else {
            console.log("empty")
        }
    }
    addCycle(val) {
        let p = this.head
        let ele = null
        while (p.next) {
            if (val === p.val) {
                ele = p
            }
            p = p.next
        }
        if (ele) {
            p.next = ele
        }
    }
    // 移除某个元素
    removeElements(val) {
        // 利用哨兵 => 1 =>2 => 3
        let ele = {
            next: this.head
        }
        let p = ele
        while(p.next) {
            if (p.next.val=== val) {
                p.next= p.next.next
            } else {
                p = p.next
            }
        }
        // 返回新的链表
        this.head = ele.next
    }

    // 检查回环
    hasCycle() {
        // let cache = new Set()
        // let p = this.head
        // // 检查回环
        // while (p) {
        //     if (cache.has(p)) {
        //         return true
        //     } else {
        //         cache.add(p)
        //     }
        //     p = p.next
        // }
        // return false


        // 双指针检查回环
        let fast = this.head
        let slow = this.head
        while(fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
            
            if (slow === fast) {
                return true
            }
        }
        return false
    }
}

let linkList = new LinkNodeList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)

console.log(linkList.length)
console.log(linkList.print())
console.log(linkList)

//linkList.removeElements(1)
//console.log(linkList.print())

// 定义回环
linkList.addCycle(2)
console.log(linkList.hasCycle())

