
//     let playerShip = document.getElementById("box");
//     let world = document.getElementById("game_window");
//     let playerShipPosX = playerShip.offsetLeft;
//     let playerShipPosY = playerShip.offsetTop;
//     var speed = 42;
//     const MAXUP_BORDER = 6;
//     const MAXDOWN_BORDER = 342;
//     const MAXLEFT_BORDER = 28;
//     const MAXRIGHT_BORDER = 500;
    
//     playerShip.onmouseover = (evt) => {
    
//         function flipShip(evt) {
//            evt.target.classList.toggle("flip-box");
//         }

//         flipShip(evt);
//     };


// function createBullet(posX, posY){
//  console.log(`posX: ${posX}, posY: ${posY}`);
//   const newBullet = document.createElement("div");
//   newBullet.classList.add("bullet-box");
//   newBullet.innerHTML += `<div> </div>`;
//   newBullet.style.top = posX +'px';
//   newBullet.style.left = posY  +'px';
//   world.appendChild(newBullet);

//      var idBullMove = setInterval(BulletMove, 100);

//     function BulletMove(){
//         var newBulletMove = newBullet.offsetTop;
//           if(  newBulletMove > MAXUP_BORDER){
//             newBullet.style.top = (newBulletMove + speed * -1 ) + 'px';
//             console.log("toto");
//         } else {
//             world.removeChild(newBullet);
//             clearInterval(idBullMove);
//          }
//     }
// };



//     document.addEventListener('keydown', function(event) {
//         let shipRight = playerShip.offsetLeft;
//         let shipLeft = playerShip.offsetLeft;
//         let shipUp = playerShip.offsetTop;
//         let shipDown = playerShip.offsetTop;

//       //  Space hit;
//         if(event.keyCode === 32 ){
//             //playerShip.classList.toggle("flip-box");
//             createBullet(shipUp, shipLeft);
//         }

//         //Move Right
//         if(event.keyCode === 39 ){       
           
//             if(  shipRight < MAXRIGHT_BORDER){
//                 playerShip.style.left = (shipRight + speed *1 ) + 'px';
//             }
//             else {
//                 playerShip.classList.toggle("flip-box")
//             }
//         }

//         //Move Left
//         if(event.keyCode === 37 ){
//             console.log("Horiz direction: ", playerShip.offsetLeft);
           
//             if(  shipLeft > MAXLEFT_BORDER){
//                 console.log(shipLeft);
//               playerShip.style.left = (shipLeft + speed *-1 ) + 'px';
//             }  else {
//                 playerShip.classList.toggle("flip-box")
//             }
//         }


//         //Move Up
//         if(event.keyCode === 38 ){
//             console.log("Vertical direction: ", playerShip.offsetTop);
//             if(  shipUp > MAXUP_BORDER){
//                 playerShip.style.top = (shipUp + speed * -1 ) + 'px';
//             } else {
//                 playerShip.classList.toggle("flip-box-top")
//             }
//         }
       
//         //Move Down
//         if(event.keyCode === 40 ){
//             if(  shipDown < MAXDOWN_BORDER){
//                 playerShip.style.top = (shipDown + speed  ) + 'px';
//             }else {
//                 playerShip.classList.toggle("flip-box-top")
//             }
//         }

//     });


    import {World} from "./world.js";
    let world = document.getElementById("game_window");


    const newGame = new World(world.offsetHeight, world.offsetWidth);

    newGame.initGame();

