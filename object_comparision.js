console.clear();
function arrayCompare(arr1, arr2) {
	if (arr1.length != arr2.length) return false;
	let flag = true;
	for (let i = 0; i < arr1.length; i++) {
		if (typeof arr1[i] != typeof arr2[i]) {
			return false;
		} else if (Array.isArray(arr1[i]) && Array.isArray(arr2[i]))
			flag = flag && arrayCompare(arr1[i], arr2[i]);
		else if (typeof arr1[i] == "number") flag = flag && arr1[i] == arr2[i];
		else if (typeof arr1[i] == "string") flag = flag && arr1[i] == arr2[i];
		else if (typeof arr1[i] == "boolean") flag = flag && arr1[i] == arr2[i];
		else if (arr1[i] == null && arr2[i] == null) flag = flag;
		else if (typeof arr1[i] == "object")
			flag = flag && objectCompare(arr1[i], arr2[i]);
	}
	return flag;
}
function objectCompare(obj1, obj2) {
	let key = Object.keys(obj1).length;
	let key2 = Object.keys(obj2).length;
	if (key != key2) {
		return false;
	}
	for (let prop in obj1) {
		if (typeof obj1[prop] != typeof obj2[prop]) {
			return false;
		}
		if (obj2[prop] == undefined && obj1[prop] != undefined) {
			return false;
		}
	}
	let flag = true;
	for (let prop in obj1) {
		let type = typeof obj1[prop];
		if (type == "number" || type == "string" || type == "boolean")
			flag = flag && obj1[prop] === obj2[prop];
		else if (Array.isArray(obj1[prop]) && Array.isArray(obj2[prop])) {
			flag = flag && arrayCompare(obj1[prop], obj2[prop]);
		} else if (obj1[prop] == null && obj2[prop] == null) {
			flag = flag && true;
		} else {
			flag = flag && objectCompare(obj2[prop], obj1[prop]);
		}
		if (flag == false) {
			return false;
		}
	}
	return flag;
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
		arrOfobj: [
			{ name: "hello", id: 12 },
			{ id: 12, name: "hello" },
			{
				address: {
					zilla: "ctg",
					union: "nanupur",
				},
			},
		],
	},
};
let obj1 = {
	name: "sharif",
	id: 11,
	schools: ["cuet", "dccc", "gmhs", "ps"],
	address: {
		zilla: "ctg",
		upazilla: "fatickchari",
		union: "nanupur",
		arr: [56, 89, 78, 123],
		arrOfobj: [
			{ name: "hello", id: 12 },
			{ id: 12, name: "hello" },
			{
				address: {
					union: "nanupur",
					zilla: "ctg",
				},
			},
		],
		zipcode: {
			nanupur: 89,
			ctg: 200,
		},
	},
};

// console.log(obj1);
console.log(objectCompare(obj1, obj2));
