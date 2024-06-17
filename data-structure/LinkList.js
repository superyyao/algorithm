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
}

let linkList = new LinkNodeList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
console.log(linkList.length)
console.log(linkList.print())
console.log(linkList)
