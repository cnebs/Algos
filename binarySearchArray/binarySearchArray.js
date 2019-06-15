/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {

    let n = array.length
    let right = n-1;
    let left = array[0];

    while (left <= right) {
        let mid = Math.floor( (left+right)/2 )

        if (array[mid] < target) {
            left = mid + 1;

        } else if (array[mid] > target) {
            right = mid - 1;

        } else { return mid }
    }

    return 'error';
};

