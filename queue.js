class queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
		this.Node = class Node {
			constructor(data) {
				this.data = data;
				this.next = null;
			}
		};
	}
	push(data) {
		let node = new this.Node(data);
		if (this.head == null) this.head = this.tail = node;
		else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}
	pop() {
		if (this.head == null) return undefined;

		let node = this.head;
		this.head = this.head.next;
		delete this.node;
		this.size--;
		return node.data;
	}
	traverse() {
		let node = this.head;
		while (node) {
			console.log(node.data);
			if (node == this.tail) break;
			node = node.next;
		}
	}
	empty() {
		return this.size == 0;
	}
	top() {
		return this.head.data;
	}
}
