// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,node=null){
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        let node = new Node(data);
        if(this.head == null) {
            this.head = node;
        } else {
            this
        }
    }
}

module.exports = { Node, LinkedList };
