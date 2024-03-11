/**
 * @param {Array} friends
 * @return {Array}
 */

const randomGifts = function(friends){
  const dict = {}
  const ans = []
  friends.forEach((friend) => {
    randomIndx = Math.floor(Math.random()*friends.length)
    while(friend===friends[randomIndx] || dict[friends[randomIndx]]){
      randomIndx = Math.floor(Math.random()*friends.length)
    }
    dict[friends[randomIndx]] = friend
    ans.push([friend, friends[randomIndx]])
  })
  return ans
}

console.log(randomGifts(['barney', 'wilma', 'Fred', 'feeby', 'Bam']))