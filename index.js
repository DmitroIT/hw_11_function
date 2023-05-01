const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            arr.splice(i,1)
            console.log(array)
        }
    }
    return array
}
removeElement(array, 5);
