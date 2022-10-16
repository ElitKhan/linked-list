class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value);
        this.head = node;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp?.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return temp;
    }

    unshift(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp?.next;
        }
        return temp;
    }
}

const list = new LinkedList(4);
list.push(7);
list.unshift(99)
list.unshift(100)
list.unshift(55)
console.log(list.get())