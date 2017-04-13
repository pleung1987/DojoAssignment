function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;
    this.addFront = function(fval, ...values){  //... ...somearguement gets to chain in all the values that are passed in.
        if(!this.head){
            this.head = new Node(fval);
            var length = values.length;
            if(length > 0){
                for(var i = 0; i < length; i++){
                    var temp = new Node(values[i])  //runs the constructor when you add 'new'
                    temp.next = this.head;
                    this.head = temp;
                }
            }
        }
        else{
            var newNode = new Node(fval);
            newNode.next = this.head;
            this.head = newNode;
            var length = values.length;
            if(length > 0){
                for(var i = 0; i < length; i++){
                    var temp = new Node(values[i]);  //runs the constructor when you add 'new'
                    temp.next = this.head;
                    this.head = temp;
                }
            }
        }
        return this;
    }
    this.printAll = function(){
        if(!this.head){
            return this;
        }
        else{
            var runner = this.head;
            while(runner){
                console.log(runner.val);
                runner = runner.next;
            }
            return this;
        }
    }
    this.removeFront = function(){
        if(this.head == null){
            return null;
        }
        this.head = this.head.next;
        return this;
    }

    this.contains = function(val){
        if(!this.head){
            return false
        }
        var runner = this.head
        while(runner){
            if(runner.val == val) {
                return true
            }
            runner = runner.next;
        }
        return false;
    }

    this.front = function(){
        if(!this.head){
            return null;
        }
        return this.head.val
    }
    this.InsertAtSecond = function(val){
        if(!this.head){
            this.head = new Node(val);
        }
        var newNode = new Node(val);
        newNode.next = this.head.next
        this.head.next = newNode;
        return this
    }
    this.removeBack = function(num=1){
        if(typeof(num) === "number"  && num % 1 === 0){
        if(!this.head || num===0){
            return this;
        }
        else if(!this.head.next){
            this.head = null;
            return this;
        }
            var runner = this.head;
            while(runner.next.next){
                runner = runner.next;
            }
            runner.next = null;
            return this.removeBack(num-1);
            }
            else{
                console.log("Invalid input!")
                return this
            }
        }
    this.addBack = function(val){
        if(!this.head){
            this.head = new Node(val)
                return this;
            }
        var runner = this.head
        while(runner.next){
            runner = runner.next;
        }
        runner.next = new Node(val);
        return this;
        }
}



var myList = new SLL();
myList.addFront(1,2,3,4,5,6).addFront(87,88,89).removeFront().InsertAtSecond(2).removeBack(1.5).addBack(20).printAll();
// console.log(myList.contains(88))
// console.log(myList.front())
//last out = head
