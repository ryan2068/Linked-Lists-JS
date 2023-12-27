import Node from "./Node"

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    insertLast(data) {
        let current = this.head 
        while (current.next) {
            current = current.next
        }
        current.next = new Node(data)
    }

    insertAt(data, index) {
        const node =  new Node(data)
        let current = this.head
        let previous
        let count = 0
        while (count < index) {
            previous = current
            count++
            current = current.next
        }
        node.next = current
        previous.next = node
    }

    getAt(index) {
        let current = this.head
        let count = 0
        while (current) {
            if (count === index) {
                console.log(current.data)
            }
            count += 1
            current = current.next
        }
    }

    toString() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

}

const ll = new LinkedList()

ll.insertFirst(200)

ll.insertFirst(300)

ll.insertLast(400)

ll.getAt(0)

ll.toString()


