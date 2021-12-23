//linear search

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
} 

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
}

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    dfs(values=[]) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }
    bfs(tree, values = []) {
        const queue = new Queue();
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue();
            values.push(node.value);

            if (node.left) {
                queue.enqueue(node.left);
            }

            if (node.right) {
                queue.enqueue(node.right);
            }
        }
    return values;
    }
    preOrder(result=[]) {
        if (!this.left && !this.right) {
          return result.push(this.key);
        }
        result.push(this.key);
        if (this.left) {
          this.left.preOrder(result);
        }
        if (this.right) {
          this.right.preOrder(result);
        }
        return result;
      }
    
      postOrder(result=[]) {
        if (!this.left && !this.right) {
          return result.push(this.key);
        }
        
        if (this.left) {
          this.left.postOrder(result);
        }
        if (this.right) {
          this.right.postOrder(result);
        }
        result.push(this.key);
        return result;
      }
}

function maxProfit(arr) {
    let profit = -Infinity;
    let buy = arr[0];
    let currentPrice, currentProfit;
  
    for (let i=1; i<arr.length; i++) {
      currentPrice = arr[i];
      currentProfit = currentPrice - buy;
  
      if (currentProfit > profit) {
        profit = currentProfit;
      }
      if (currentPrice < buy) {
        buy = currentPrice;
      }
    }
    
    return profit;
  }

  const orgTree = new BST('Captain Picard');
  orgTree.left = new BST('Commander Riker');
  orgTree.left.left = new BST('Lt. Cmdr. Worf');
  orgTree.left.right = new BST('Lt. Cmdr. LaForge');
  orgTree.left.left.left = new BST('Lieutenant security-officer');
  
  orgTree.right = new BST('Commander Data');
  orgTree.right.right = new BST('Lt. Cmdr. Crusher');
  orgTree.right.right.left = new BST('Lieutenant Selar');
  
  console.log(orgTree.bfs());