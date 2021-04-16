/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // step 1. sort the intercals array by the first item in sub_array
    let sorted_intervals = intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    result.push(sorted_intervals[0])
    // step 2. compare the previous_sub_array _end with next_sub_array _start and _end
    // if previous_sub_array[_end] > next_sub_array[_start] and previous_sub_array[_end] < next_sub_array[_end] ==>> merge_sub_array = [previous_sub_array[_start], next_sub_array[_end]]
    // if previous_sub_array[_end] > next_sub_array[_start] and previous_sub_array[_end] > next_sub_array[_end] ==>> merge_sub_array = [previous_sub_array[_start], previous_sub_array[_end]]
    for (let index = 1; index < sorted_intervals.length; index++) {
        const previous_sub_array = result[result.length - 1];
        const next_sub_array = sorted_intervals[index];
        if (previous_sub_array && next_sub_array && (previous_sub_array[previous_sub_array.length -1] >= next_sub_array[0])) {
            result[result.length - 1] = [previous_sub_array[0], Math.max(previous_sub_array[previous_sub_array.length -1], next_sub_array[next_sub_array.length-1])]
        } else {
            result.push(next_sub_array)
            // _merge(sorted_intervals, previous_sub_array, index)
            
        }
    }
    
    return result
};