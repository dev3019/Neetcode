const carFleet1 = function(target, position, speed) {
  if(position.length===1) return 1
  let pairs = []
  for(const i in position){
    const temp = [position[i], speed[i]]
    pairs.push(temp)
  }
  pairs = pairs.sort((a,b)=>b[0]-a[0])
  let fleet = 0
  const fleetsize = []
  for(let i=0;i<pairs.length;i++){
    const distLeft = target - pairs[i][0]
    const time = distLeft/pairs[i][1]
    if(fleetsize.length>0){
      const x = fleetsize[fleetsize.length-1]
      if(x<time){
        fleetsize.pop()
        fleet++
        fleetsize.push(time)
      }
    }else{
      fleetsize.push(time)
    }
  }
  if(fleetsize.length>0)fleet++
  return fleet
}

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  if(position.length===1) return 1
  let pairs = []
  for(const i in position){
    const temp = [position[i], speed[i]]
    pairs.push(temp)
  }
  pairs = pairs.sort((a,b)=>b[0]-a[0])
  let fleet = 1
  const timeArr = []
  for(let i=0;i<pairs.length;i++){
    timeArr.push((target-pairs[i][0])/pairs[i][1])
  }
  let newTime = timeArr[0]
  for(let i=1;i<timeArr.length;i++){
    if(newTime<timeArr[i]){
      fleet++
      newTime = timeArr[i]
    }
  }
  return fleet
};

console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]))
console.log(carFleet(10,[3],[3]))
console.log(carFleet(100,[0,2,4],[4,2,1]))