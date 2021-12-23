class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        else if (key < this.key) {
            if (this.left == null) {
                this.left = newBinarySearchTree(key, value, this)
            }
            else {
            this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = newBinarySearchTree(key, value, this)
            }
            else {
                this.right.insert(key, value)
            }
        }
    }
    find(key) {
        if (this.key == key) {
            return this.value;
        }

        else if (key < this.key && this.left) {
            return this.left.find(key)
        }

        else if (key > this.key && this.right) {
            return this.right.find(key)
        }

        else {
            throw new Error('Key Error')
        }
    }
    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMine();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }

            else if (this.left) {
                this._replaceWith(this.left)
            }

            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key)
        }
        else {
            throw new Error('Key Error')
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMine() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

//bst height

function BSTHeight(tree) {
    if (!tree.key) return 0;
    
    let left = 0, right = 0;
  
    if (!tree.left && !tree.right) {
      return 1;
    }
    
    if (tree.left) {
      left = BSTHeight(tree.left);
    }
  
    if (tree.right) {
      right = BSTHeight(tree.right);
    }
  
    return Math.max(left, right) + 1;
  }


//balanced bst

function balancedBST(tree) {
    let leftHeight = 0;
    let rightHeight = 0;
  
    function BSTHeight(tree) {
      if (!tree.key) return 0;
      
      let left = 0, right = 0;
    
      if (!tree.left && !tree.right) {
        return 1;
      }
      
      if (tree.left) {
        left = BSTHeight(tree.left);
      }
    
      if (tree.right) {
        right = BSTHeight(tree.right);
      }
    
      return Math.max(left, right) + 1;
    }
  
    leftHeight = BSTHeight(tree.left);
    rightHeight = BSTHeight(tree.right);
    return leftHeight === rightHeight;
  }
  
//check if a binary search tree

function validBST(tree, min=-Infinity, max=Infinity) {
    if (!tree) return 'empty tree';
    if (tree.key < min || tree.key > max) return false;
  
    if (tree.left && !validBST(tree.left, min, tree.key)) return false;
    if (tree.right && !validBST(tree.right, tree.key, max)) return false;
    return true;
  }
  
  const tree = new BST();
  tree.insert(3);
  tree.insert(1);
  tree.insert(4);
  tree.insert(6);
  tree.insert(9);
  tree.insert(2);
  tree.insert(5);
  tree.insert(7);
  
  const BT = new BST(10);
  BT.left = new BST(8, null, BT);
  BT.right = new BST(3, null, BT);