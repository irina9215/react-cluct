/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // step 1. sort the intercals array by the first item in sub_array
    let sorted_intervals = intervals.sort((a, b) => a[0] - b[0]);

    // step 2. compare the previous_sub_array _end with next_sub_array _start and _end
    // if previous_sub_array[_end] > next_sub_array[_start] and previous_sub_array[_end] < next_sub_array[_end] ==>> merge_sub_array = [previous_sub_array[_start], next_sub_array[_end]]
    // if previous_sub_array[_end] > next_sub_array[_start] and previous_sub_array[_end] > next_sub_array[_end] ==>> merge_sub_array = [previous_sub_array[_start], previous_sub_array[_end]]
    for (let index = 0; index < sorted_intervals.length + 1; index++) {
        const previous_sub_array = sorted_intervals[index];
        const next_sub_array = sorted_intervals[index+1];
        if (next_sub_array && (previous_sub_array[previous_sub_array.length -1] > next_sub_array[0])) {
            if (next_sub_array && (previous_sub_array[previous_sub_array.length -1] < next_sub_array[next_sub_array.length-1])) {
                // result.push([previous_sub_array[0], next_sub_array[next_sub_array.length-1]])
                _merge(sorted_intervals, [previous_sub_array[0], next_sub_array[next_sub_array.length-1]], index)
            } else {
                // result.push([previous_sub_array[0], previous_sub_array[previous_sub_array.length-1]])
                _merge(sorted_intervals, [previous_sub_array[0], previous_sub_array[previous_sub_array.length-1]], index)
            }
        } else {
            // result.push(previous_sub_array)
            _merge(sorted_intervals, previous_sub_array, index)
            
        }
    }
    function _merge(array, ele, k) {
        array[k] = ele;
        for (let index = k + 1; index < array.length; index++) {
            array[index] =  array[index+1]
        }
        array.length = array.length - 1
    }
    return sorted_intervals
};