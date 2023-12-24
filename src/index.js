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

ll.toString()


