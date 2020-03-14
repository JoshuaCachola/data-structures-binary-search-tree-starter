class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}


class BST {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new TreeNode(val);
		if (!this.root) {
			this.root = newNode;
			return;
		}

		let currentNode = this.root;
		while (currentNode) {
			if (val < currentNode.val) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return;
				}
				currentNode = currentNode.left;

			} else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return;
				}
				currentNode = currentNode.right;
			}
		}
	}

	searchRecur(val, node = null) {
		if (!this.root) return false;
		if (node === null) node = this.root;

		if (val === node.val) {
			return true;
		} else if (val < node.val) {
			if (!node.left) return false;
			return this.searchRecur(val, node.left);
		} else {
			if (!node.right) return false;
			return this.searchRecur(val, node.right);
		}

	}

	searchIter(val) {
		if (!this.root) return false;

		let currentNode = this.root;
		while (currentNode) {
			if (val === currentNode.val) {
				return true;
			} else if (val < currentNode.val) {
				if (!currentNode.left) {
					return false;
				}
				currentNode = currentNode.left;

			} else {
				if (!currentNode.right) {
					return false;
				}
				currentNode = currentNode.right;
			}
		}
	}
}

module.exports = {
	TreeNode,
	BST
};