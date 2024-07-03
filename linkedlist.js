class Node{
    constructor(value=null,next=null){
        this.value = value
        this.next = next
    }
}

class LinkedList{
    constructor(head=null){
        this.head = head;
    }
    head(){
        return this.head;
    }
    tail(){
        if(this.head===null){
            return null;
        }
        let tail = this.head;
        while(tail.next){
            tail = tail.next
        }
        return tail;
    }
    append(value){
        if(head===null){
            this.head = new Node(value)
        }
        else{
            let tail = this.tail();
            tail.next = new Node(value)
        }
    }
    prepend(value){
        if(head===null){
            this.head = new Node(value)
        }
        else{
            let after_head = this.head;
            this.head = new Node(value);
            this.head.next = after_head
        }
    }

    size(){
        let counter = 0;
        let node = this.head
        while(node){
            counter += 1;
            node = node.next;
        }
    }


    pop(){
        if(head!==null){
            if(this.head.next===null){
                this.head = null;
            }
            else if(this.head.next.next==null){this.head.next=null}
            else{
            let before_last= head
            while(before_last.next.next){
                before_last = before_last.next
            }
            before_last.next=null
            }
        }
    }

    at(index){
        counter = 0
        if(this.head==null){return null}
        let node = this.head
        while(node && index!==counter){
            node= node.next;
            counter += 1;
        }
        if(index==counter){
            return node.value;
        }
        return 'Index out of bounds'     
    }

    contains(val){
        if(this.head==null){return null}
        let node = this.head
        while(node){
            if(node.value===val){
                return true;
            }  
            node= node.next; 
        }
        return false;
    }
    find(val){
        counter = 0
        if(this.head==null){return null}
        let node = this.head
        while(node){
            if(node.value===val){
                return counter;
            }   
            node= node.next;
            counter += 1;
        }
        return null
    }

    toString(){
        if(this.head==null){console.log('null')}
        else{
        str = '';
        let node = this.head;
        while(node){
            str += `(${node.value}->)`
            node= node.next;
        }
        str+= 'null'
        
        console.log(str)
        }
    }
}