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
}

var myList = new SLL();
myList.addFront(1,2,3,4,5,6).addFront(87,88,89).printAll();
