function cloneArray(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let type = typeof arr[i];
		if (
			type == "number" ||
			type == "string" ||
			type == "boolean" ||
			type == "function"
		) {
			newArr.push(arr[i]);
		} else if (Array.isArray(arr[i])) newArr.push(cloneArray(arr[i]));
		else if (arr[i] == null) newArr.push(null);
		else if (type == "object") newArr.push(cloneObject(arr[i]));
	}
	return newArr;
}
function cloneObject(obj) {
	let newObj = {};
	for (let prop in obj) {
		let type = typeof obj[prop];
		if (
			type == "number" ||
			type == "string" ||
			type == "boolean" ||
			type == "function"
		) {
			newObj[prop] = obj[prop];
		} else if (Array.isArray(obj[prop])) newObj[prop] = cloneArray(obj[prop]);
		else if (obj[prop] == null) newObj[prop] = null;
		else if (type == "object") newObj[prop] = cloneObject(obj[prop]);
	}
	return newObj;
}
let obj2 = {
	name: "sharif",
	id: 11,
	schools: ["cuet", "dccc", "gmhs", "ps"],
	address: {
		zilla: "ctg",
		upazilla: "fatickchari",
		union: "nanupur",
		arr: [56, 89, 78, 123],
		zipcode: {
			nanupur: 89,
			ctg: 200,
		},
	},
};
let obj1 = cloneObject(obj2);
console.log(obj1);
