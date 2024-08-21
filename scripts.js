class Node{
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}
class LinkedList{
    constructor(){
        this.listHead = null,
        this.listTail = null
    }
    append(value){
        const node = new Node(value);
        if (this.listHead === null) {
            // If the list is empty, the new node is both the head and tail
            this.listHead = node;
            this.listTail = node;
        } else {
            // Add the new node to the end of the list
            // this.prevNode = this.tail;
            this.listTail.nextNode = node;
            this.listTail = node;
        }
    }
    prepend(value){
        const node = new Node(value);
        if (this.listHead === null) {
            // If the list is empty, the new node is both the head and tail
            this.listHead = node;
            this.listTail = node;
        } else {
            // Add the new node to the end of the list
            node.nextNode = this.listHead;
            this.listHead = node;
        }
    }
    size(){
        let current = this.listHead;
        let counter = 0;
        while(current != null ){
            counter ++;
            current = current.nextNode;
        }
        return counter;
        
    }
    sizeRecursive(current = this.listHead) {
        if (current === null) return 0;
        return 0 + this.size(current.nextNode);
    }
    head(){
        return this.listHead;
    }
    tail(){
        return this.listTail;
    }
    at(index){
        if(index <1) return 'Out of range';

        let current = this.listHead;
        let counter = 1;
        while(counter != index ){
            counter ++;
            current = current.nextNode;
        }
        return current;
    }
    atRecursive(index, current = this.listHead, counter = 1){
        if (index < 1 || current === null) return 'Out of range';
        if (current === index) return current;
        return this.at(index, current.nextNode, counter + 1);
    }
    pop(){
        let current = this.listHead;
        if (this.listHead != null){
            while(current.nextNode !== this.listTail){
                current = current.nextNode;
            }
            const removedNode = this.listTail;
            this.listTail = current;
            this.listTail.nextNode = null;
            return removedNode; // Return the value of the removed node
        } else{
            return "no items to pop"
        }
    }
    contains(value){
        let current = this.listHead;

        // Traverse the list until the end (when current is null)
        while (current !== null) {
            if (current.value === value) {
                return current; // Return the node if the value is found
            }
            current = current.nextNode;
        }

        // Value not found in the list
        return null; // Or return false if you prefer
    }
    containsRecursive(value, current = this.listHead){
        if (current === null) return null;
        if (current.value === value) return current;
        return this.contains(value ,current.nextNode);
    }
    find(value){
        let current = this.listHead;
        let counter = 1;
        while (current !== null) {
            if (current.value === value) {
                return counter; 
            }
            counter ++;
            current = current.nextNode;
        }
    }
    findRecursive(value, current = this.listHead, counter = 1){
        if (current === null) return null;
        if (current.value === value) return counter;
        return this.find(value, current.nextNode, counter + 1);
    }
    toString(){
        let current = this.listHead;
        let result = '';
        while (current !== null) {
            result += current.value;
            if(current.nextNode !== null){
                result += ' => ';
            }
            current = current.nextNode;
        }
        return result;
    }
    toStringRecursive(current = this.listHead){
        if (current === null) return '';
        if (current.nextNode === null) return current.value;
        return `${current.value} => ${this.toString(current.nextNode)}`;
    }
    insertAt(value, index){
        const node = new Node(value);

        // Handle insertion at the head (index 0)
        if (index === 0) {
            node.nextNode = this.listHead;
            this.listHead = node;
            if (this.listTail === null) this.listTail = node; // Update tail if list was empty
            return;
        }

        let current = this.listHead;
        let counter = 0;
        let previous = null;
        // Traverse the list to find the correct insertion point
        while (current !== null && counter < index) {
            previous = current;
            current = current.nextNode;
            counter++;
        }

        // If the index is out of range, return or handle as needed
        if (counter !== index) {
            console.log("Index out of range");
            return;
        }

        // Insert the node
        node.nextNode = current;
        previous.nextNode = node;

        // Update the tail if we're inserting at the end
        if (current === null) {
            this.listTail = node;
        }
    }
    removeAt(index){

    }
}


const list = new LinkedList();



list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("aaa");

console.log(list);

console.log('size',list.size());
console.log('size Recursive',list.sizeRecursive());
console.log('head',list.head());
console.log('tail',list.tail());
console.log('at', list.at(1));
console.log('at Recursive', list.atRecursive(1));
console.log('pop', list.pop(1));

console.log(list);

console.log('contains', list.contains('dog')); 
console.log('contains Recursive', list.containsRecursive('dog')); 
console.log('find', list.find('cat')); 
console.log('find Recursive', list.findRecursive('cat')); 
console.log('toString', list.toString()); 
console.log('toString Recursive', list.toStringRecursive()); 

console.log('insertAt', list.insertAt('insert', 2)); 
// console.log('insertAt Recursive', list.insertAtRecursive()); 
// console.log('removeAt', list.removeAt(3)); 
// console.log('removeAt Recursive', list.removeAtRecursive()); 

console.log('list', list);
console.log('toString', list.toString()); 