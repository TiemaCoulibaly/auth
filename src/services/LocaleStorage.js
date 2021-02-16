export function removeItem(itemToRemove) {
	window.localStorage.removeItem(itemToRemove);
}
export function getItem(item) {
	window.localStorage.getItem(item);
}
export function addItem(localesStorageName, newItem) {
	window.localStorage.addItem(localesStorageName, newItem);
}
