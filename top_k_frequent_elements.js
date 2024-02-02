function topKFrequent(nums, k) {
    var _a;
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        console.log(num);
    }
    for (var _b = 0, nums_2 = nums; _b < nums_2.length; _b++) {
        var num = nums_2[_b];
        map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var sortedArray = Array.from(new Set(nums)).sort(function (a, b) { return map[b] - map[a]; });
    return sortedArray.splice(0, k);
}
;
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
