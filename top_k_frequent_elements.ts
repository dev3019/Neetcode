function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map()
  for (const num of nums) map.set(num, (map.get(num)??0)+1)
  const sortedArray = Array.from(new Set(nums)).sort((a,b)=>map[b]-map[a])
  return sortedArray.splice(0, k);
};

console.log(topKFrequent([1,1,1,2,2,3], 2))