function twoSum(nums, target) {
    var _a;
    var map = new Map();
    var array = [];
    for (var i in nums) {
        var complement = target - nums[i];
        if (map.has(complement)) {
            array = [(_a = map.get(complement)) !== null && _a !== void 0 ? _a : 0, parseInt(i, 10)];
            break;
        }
        map.set(nums[i], parseInt(i, 10));
    }
    return array;
}
;
console.log(twoSum([2, 7, 11, 15], 9));
