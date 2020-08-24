// Rover Object Goes Here
// ======================
function rover(direction, x, y, indRover, travelLog) {
  this.direction = direction;
  this.x = x;
  this.y = y;
  this.indRover = indRover;
  this.travelLog = travelLog;
}

// Obstacle
// ======================
function obstacle(x, y) {
  this.x = x;
  this.y = y;
}

const grid = [];

// Create THE grid
// ======================
function createGrid(xLen, yLen, grid) {
  //const grid = [];
  for (let i = 0; i < xLen; i++) {
    grid[i] = [];
    for (let j = 0; j < yLen; j++) {
      grid[i][j] = ".";
    }
  }
}

//Add Obstacle
function addObstacle(obstacleX, obstacleY, grid) {
  grid[obstacleX][obstacleY] = "X";
}
//////////////////////////////////////////////////////
//////// Function handling the rover movement ////////
//////////////////////////////////////////////////////
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  }
}

function moveForward(rover, grid, indRover, otherRover) {
  switch (rover.direction) {
    case "N":
      if (grid[rover.x][rover.y - 1] == "X") {
        console.log(
          `Rover${indRover} have encountered an obstacle at position x: ${
            rover.x
          } y: ${rover.y - 1}`
        );
      } else {
        if (rover.x == otherRover.x && rover.y - 1 == otherRover.y) {
          console.log(
            `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
          );
        } else {
          if (rover.y > 0) {
            rover.y -= 1;
            rover.travelLog[0].push([rover.x]);
            rover.travelLog[1].push([rover.y]);
          } else {
            rover.y = rover.y;
            console.log(`Rover${indRover} Out of limit`);
          }
        }
      }
      break;
    case "S":
      if (grid[rover.x][rover.y + 1] == "X") {
        console.log(
          `Rover${indRover} have encountered an obstacle at position x: ${
            rover.x
          } y: ${rover.y + 1}`
        );
      } else {
        if (rover.x == otherRover.x && rover.y + 1 == otherRover.y) {
          console.log(
            `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
          );
        } else {
          if (rover.y < 9) {
            rover.y += 1;
            rover.travelLog[0].push([rover.x]);
            rover.travelLog[1].push([rover.y]);
          } else {
            rover.y = rover.y;
            console.log(`Rover${indRover} Out of limit`);
          }
        }
      }
      break;
    case "E":
      if (grid[rover.x + 1][rover.y] == "X") {
        console.log(
          `Rover${indRover} have encountered an obstacle at position x: ${rover.x +
            1} y: ${rover.y}`
        );
      } else {
        if (rover.x + 1 == otherRover.x && rover.y == otherRover.y) {
          console.log(
            `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
          );
        } else {
          if (rover.x < 9) {
            rover.x += 1;
            rover.travelLog[0].push([rover.x]);
            rover.travelLog[1].push([rover.y]);
          } else {
            rover.x = rover.x;
            console.log(`Rover${indRover} Out of limit`);
          }
        }
      }
      break;
    case "W":
      if (grid[rover.x - 1][rover.y] == "X") {
        console.log(
          `Rover${indRover} have encountered an obstacle at position x: ${rover.x -
            1} y: ${rover.y}`
        );
      } else {
        if (rover.x - 1 == otherRover.x && rover.y == otherRover.y) {
          console.log(
            `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
          );
        } else {
          if (rover.x > 0) {
            rover.x -= 1;
            rover.travelLog[0].push([rover.x]);
            rover.travelLog[1].push([rover.y]);
          } else {
            rover.x = rover.x;
            console.log(`Rover${indRover} Out of limit`);
          }
        }
      }
      break;
  }
}

function moveBackward(rover, grid, indRover, otherRover) {
  switch (rover.direction) {
    case "N":
      if (grid[rover.x][rover.y + 1] == "X") {
        console.log(
          `Rover${indRover} have encountered an obstacle at position x: ${
            rover.x
          } y: ${rover.y + 1}`
        );
      } else {
        if (rover.x == otherRover.x && rover.y + 1 == otherRover.y) {
          console.log(
            `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
          );
        } else {
          if (rover.y < 9) {
            rover.y += 1;
            rover.travelLog[0].push([rover.x]);
            rover.travelLog[1].push([rover.y]);
          } else {
            rover.y = rover.y;
            console.log(`Rover${indRover} Out of limit`);
          }
        }
      }
      break;
    case "S":
      if (grid[rover.x][rover.y - 1] == "X") {
        console.log(
          `Rover${indRover} have encountered an obstacle at position x: ${
            rover.x
          } y: ${rover.y - 1}`
        );
      } else {
        if (rover.x == otherRover.x && rover.y - 1 == otherRover.y) {
          console.log(
            `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
          );
        } else {
          if (rover.x == otherRover.x && rover.y + 1 == otherRover.y) {
            console.log(
              `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
            );
          } else {
            if (rover.y > 0) {
              rover.y -= 1;
              rover.travelLog[0].push([rover.x]);
              rover.travelLog[1].push([rover.y]);
            } else {
              rover.y = rover.y;
              console.log(`Rover${indRover} Out of limit`);
            }
          }
        }
      }
      break;
    case "E":
      if (grid[rover.x - 1][rover.y] == "X") {
        console.log(
          `Rover${indRover} have encountered an obstacle at position x: ${rover.x -
            1} y: ${rover.y}`
        );
      } else {
        if (rover.x - 1 == otherRover.x && rover.y == otherRover.y) {
          console.log(
            `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
          );
        } else {
          if (rover.x == otherRover.x && rover.y + 1 == otherRover.y) {
            console.log(
              `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
            );
          } else {
            if (rover.x > 0) {
              rover.x -= 1;
              rover.travelLog[0].push([rover.x]);
              rover.travelLog[1].push([rover.y]);
            } else {
              rover.x = rover.x;
              console.log(`Rover${indRover} Out of limit`);
            }
          }
        }
      }
      break;
    case "W":
      if (grid[rover.x + 1][rover.y] == "X") {
        console.log(
          `Rover${indRover} have encountered an obstacle at position x: ${rover.x +
            1} y: ${rover.y}`
        );
      } else {
        if (rover.x + 1 == otherRover.x && rover.y == otherRover.y) {
          console.log(
            `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
          );
        } else {
          if (rover.x == otherRover.x && rover.y + 1 == otherRover.y) {
            console.log(
              `Collision between rover${rover.indRover} and rover${otherRover.indRover}`
            );
          } else {
            if (rover.x < 9) {
              rover.x += 1;
              rover.travelLog[0].push([rover.x]);
              rover.travelLog[1].push([rover.y]);
            } else {
              rover.x = rover.x;
              console.log(`Rover${indRover} Out of limit`);
            }
          }
        }
      }
      break;
  }
}
/////////////////////////////////////////////
///// Function to handle rover movement /////
/////////////////////////////////////////////
function move(rover, commands, numLoop, otherRover) {
  //Checking differents commands and handling moves
  if (commands[numLoop]) {
    if (commands[numLoop] === "f") {
      moveForward(rover, grid, rover.indRover, otherRover);
    } else if (commands[numLoop] === "b") {
      moveBackward(rover, grid, rover.indRover, otherRover);
    } else if (commands[numLoop] === "l") {
      turnLeft(rover);
    } else if (commands[numLoop] === "r") {
      turnRight(rover);
    } else {
      console.log("command not good at position:" + commands[numLoop]);
    }
  } else {
  }
}

/// Main function
function commandRover(commands, commands1) {
  let commandLengthMax = Math.max(commands.length, commands1.length);
  /// Init Rover
  let myRover = new rover("N", 0, 0, "0", [
    ["x", 0],
    ["y", 0]
  ]);
  // Init other Rover
  let myRover1 = new rover("N", 1, 3, "1", [
    ["x", 0],
    ["y", 0]
  ]);
  //Init Grid
  createGrid(10, 10, grid);
  // Init Obstacle
  addObstacle(0, 2, grid);
  addObstacle(3, 4, grid);
  addObstacle(2, 2, grid);
  // Call THE function
  for (let i = 0; i < commandLengthMax; i++) {
    move(myRover, commands, i, myRover1);
    move(myRover1, commands1, i, myRover);
  }
  console.log(`The rover${myRover.indRover} path was: ${myRover.travelLog}`);
  console.log(`The rover${myRover1.indRover} path was: ${myRover1.travelLog}`);
}
//How to call Rover
//commandRover("rffrfflfrff", "rffrfflfrff");