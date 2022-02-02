//Trie Data Structures By JavaScript

const obj = {
	arr: new Array(26),
	flag: false,
};
const root = obj;

function insert(str) {
	let sz = str.length;
	let node = root;
	for (let i = 0; i < sz; i++) {
		let u = str.charCodeAt(i) - 97;
		if (node.arr[u] == undefined)
			node.arr[u] = { arr: new Array(26), flag: false };
		node = node.arr[u];
		if (i == sz - 1) node.flag = true;
	}
}
function search(str) {
	let sz = str.length;
	let node = root;
	for (let i = 0; i < sz; i++) {
		let u = str.charCodeAt(i) - 97;

		if (node.arr[u] == undefined) return false;
		node = node.arr[u];
	}
	return node.flag;
}

insert("abdc");
insert("abcd");
insert("efgh");
insert("bangladesh");
insert("bangla");
insert("english");
