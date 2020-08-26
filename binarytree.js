class Node{
 constructor(data){
  this.data = data;
  this.left = null;
  this.right = null;
 }
}
class Binarytree{
 constructor(){
  this.root = null;
 }
 addnode(data){
  var newnode = new Node(data);
  if(this.root === null){
     this.root = newnode;
     console.log("Binarytree root :" + " " + this.root.data);
  }// fin if
  else
       this.addnewnode(this.root, newnode);
 }// fin addnode
 addnewnode(node, newnode){
  if(node.data > newnode.data){
    console.log("left subnet tree");
    if(node.left === null){
       node.left = newnode;
       console.log("left subnet tree data : " + " " + newnode.data + " " + "root : " + " " + node.data);
    }
    else 
      this.addnewnode(node.left, newnode);
  }
  else if(node.data < newnode.data){
    console.log("right subnet tree");
    if(node.right === null){
       node.right = newnode;
       console.log("right subnet tree data : " + " " + newnode.data + " " + "root : " + " " + node.data);
    }
    else 
      this.addnewnode(node.right, newnode);
 //} 
  }
 }
} // fin Binarytree
var test = new Binarytree();
    test.addnode(10);
    test.addnode(7);
    test.addnode(8);
    test.addnode(15);
    test.addnode(12);
