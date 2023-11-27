export class TreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    getKey(){
        return(this.key);
    }
    setKey(key){
        this.key = key;
    }
    getRight(){
        return(this.right);
    }
    getLeft(){
        return(this.left);
    }

    setRight(right){
        this.right = right;
    }
    setLeft(left){
        this.left = left;
    }
}