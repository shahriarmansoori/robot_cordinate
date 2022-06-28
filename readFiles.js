const fs = require('fs')
let robot_cordinate_x = 0
let robot_cordinate_y = 0
let Arrows = new Array('NORTH','SOUTH','WEST','EAST')
function readF () {
  fs.readFile('./commands_file_1.txt', 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }
    const data1 = String(data);
    let res = data1.split('\n');
    let firstState = res[0];
    firstState = firstState.split(" ")
    let stateDetails = firstState[1].split(",");
    if(stateDetails[2].toLowerCase() === 'north'){
      robot_cordinate_x += parseInt(stateDetails[0])
      robot_cordinate_y += parseInt(stateDetails[1])
      console.log(robot_cordinate_x)
      console.log(robot_cordinate_y)
        for(let i in res){
          if(i === 0)
              continue
          else if(res[i].toLowerCase() === 'move')
              robot_cordinate_y += 1
          else if(res[i].toLowerCase() === 'left')
              console.log('turn left')
          else if(res[i].toLocaleLowerCase() === 'right')
              console.log('turn right')
          else if(res[i].toLocaleLowerCase() === 'report'){
            console.log("x: ",robot_cordinate_x)
            console.log("y: ",robot_cordinate_y)
          }
        }
    }
    if(stateDetails[2].toLowerCase() === 'south'){
      robot_cordinate_x += parseInt(stateDetails[0])
      robot_cordinate_y += parseInt(stateDetails[1])
      console.log(robot_cordinate_x)
      console.log(robot_cordinate_y)
        for(let i in res){
          if(i === 0)
              continue
          else if(res[i].toLowerCase() === 'move')
              robot_cordinate_y -= 1
          else if(res[i].toLowerCase() === 'left')
              console.log('turn left')
          else if(res[i].toLocaleLowerCase() === 'right')
              console.log('turn right')
          else if(res[i].toLocaleLowerCase() === 'report'){
            console.log("x: ",robot_cordinate_x)
            console.log("y: ",robot_cordinate_y)
          }
        }
    }
    if(stateDetails[2].toLowerCase() === 'west'){
      robot_cordinate_x += parseInt(stateDetails[0])
      robot_cordinate_y += parseInt(stateDetails[1])
      console.log(robot_cordinate_x)
      console.log(robot_cordinate_y)
        for(let i in res){
          if(i === 0)
              continue
          else if(res[i].toLowerCase() === 'move')
              robot_cordinate_x -= 1
          else if(res[i].toLowerCase() === 'left')
              console.log('turn left')
          else if(res[i].toLocaleLowerCase() === 'right')
              console.log('turn right')
          else if(res[i].toLocaleLowerCase() === 'report'){
            console.log("x: ",robot_cordinate_x)
            console.log("y: ",robot_cordinate_y)
          }
        }
    }
    if(stateDetails[2].toLowerCase() === 'east'){
      robot_cordinate_x += parseInt(stateDetails[0])
      robot_cordinate_y += parseInt(stateDetails[1])
      console.log(robot_cordinate_x)
      console.log(robot_cordinate_y)
        for(let i in res){
          if(i === 0)
              continue
          else if(res[i].toLowerCase() === 'move')
              robot_cordinate_x += 1
          else if(res[i].toLowerCase() === 'left')
              console.log('turn left')
          else if(res[i].toLocaleLowerCase() === 'right')
              console.log('turn right')
          else if(res[i].toLocaleLowerCase() === 'report'){
            console.log("x: ",robot_cordinate_x)
            console.log("y: ",robot_cordinate_y)
          }
        }
    }
  })
  
}
readF()
module.exports.readF = readF
