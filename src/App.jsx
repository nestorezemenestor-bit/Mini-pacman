import { useState, useEffect } from "react";
import "./App.css";

function Wall({ x, y, width, height }) {
  return (
    <div
       className="wall"
       style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`  
       }}
       ></div>
  );
}

function App() {
  const [position, setPosition] = useState({
    x:239,
    y:655
  });

  const [pellets, setPellets] =
  useState([
    //Top
    { x: 13, y: 136 },
    { x: 40, y: 136 },
    { x: 80, y: 136 },
    { x: 120, y: 136 },
    { x: 160, y: 136 },
    { x: 200, y: 136 },
    { x: 240, y: 136 },
    { x: 280, y: 136 },
    { x: 320, y: 136 },
    { x: 360, y: 136 },
    { x: 395, y: 136 },
    { x: 430, y: 136 },
    { x: 458, y: 136 },

    //Left side
    { x: 13, y: 111 },
    { x: 13, y: 162 },
    { x: 13, y: 188 },
    { x: 13, y: 214 },
    { x: 13, y: 240 },
    { x: 13, y: 272 },
    { x: 13, y: 300 },
    { x: 13, y: 327 },
    { x: 13, y: 354 },
    { x: 13, y: 380 },
    
    //Sub top 
    { x: 40, y: 187 },
    { x: 80, y: 187 },
    { x: 120, y: 187 },
    { x: 160, y: 187 },
    { x: 200, y: 187 },
    { x: 240, y: 187 },
    { x: 280, y: 187 },
    { x: 320, y: 187 },
    { x: 360, y: 187 },
    { x: 395, y: 187 },
    { x: 431, y: 187 },
    { x: 458, y: 187 },

    { x: 40, y: 300 },
    { x: 80, y: 300 },
    { x: 120, y: 300 },
    { x: 160, y: 300 },
    { x: 200, y: 300 },
    { x: 240, y: 300 },
    { x: 280, y: 300 },
    { x: 320, y: 300 },
    { x: 360, y: 300 },
    { x: 395, y: 300 },
    { x: 430, y: 300 },
    { x: 457, y: 300 },

    { x: 482, y: 108 },
    { x: 482, y: 136 },
    { x: 482, y: 164 },
    { x: 482, y: 188 },
    { x: 482, y: 216 },
    { x: 482, y: 244 },
    { x: 482, y: 272 },
    { x: 482, y: 300 },
    { x: 482, y: 327 },
    { x: 482, y: 354 },
    { x: 482, y: 380 },
  ]);

  const [direction, setDirection] = useState("right");
  const [moving, setMoving] = useState(false);
  const [score, setScore] = useState(0);
  const mazeWidth = 700;
  const mazeHeight = 1200;
  const pacmanSize = 30;
  const speed = 10;
  const borderClearance = 10;

  const middleHorizontalWalls = [
    //Left horizontal wall
    {
      id: "middle-horizontal-left",
      x: 205,
      y: 145,
      width: 85,
      height: 25
    },

    // Right horizontal wall
    {
      id: "middle-horizontal-right",
      x: 410,
      y: 145,
      width: 85,
      height: 25
    }
  ];

  const walls = [
    // Left border-portruding wall
    {
      x: -5,
      y: 90,
      width: 105,
      height: 50,
      borderless: true
    },

    // Right border-portruding wall
    {
      x: 607,
      y: 90,
      width: 88,
      height: 49,
      borderless: true
    },

      // Second left protruding black wall
    {
      x: -5,
      y: 235,
      width: 105,
      height: 103,
      borderless: true
    },

    // Second right protruding black wall
    {
      x: 607,
      y: 235,
      width: 88,
      height: 103,
      borderless: true
    },

    // Third left protruding black border
    {
      x: -5,
      y: 370,
      width: 105,
      height: 73,
      borderless: true  
    },

    // Third right protruding black border
    {
      x: 608,
      y: 370,
      width: 87,
      height: 73,
      borderless: true
    },

   //Fourth left protruding black border
    {
      x: -5,
      y: 475,
      width: 105,
      height: 73,
      borderless: true
    },

    //Fourth right protruding black border
    {
      x: 607,
      y: 475,
      width: 88,
      height: 73,
      borderless: true
    },

    //Fifth left protruding black border
    {
      x: -5,
      y: 580,
      width: 105,
      height: 73,
      borderless: true
    },

    //Fifth right protruding black border
    {
      x: 607,
      y: 580,
      width: 88,
      height: 73,
      borderless: true
    },
 ];

  const mazeShapes = [
   {
    id: "top-left",
    x: 30,
    y: 30,
    width: 281.3,
    height: 85,
    viewBox: "0 0 281.3 85",
    path:`
      M 5 5
      H 276.3
      V 26
      H 195
      V 80
      H 170
      V 26
      H 5
      Z
      `,

      collisionBoxes: [
        //Horizontal section
        { x: 2, y: 2, width: 277.3, height: 27 },

        //Downward vertical stem
        { x: 167, y: 26, width: 31, height: 57 }
      ]
    },
  // Middle left horizontal wall
  {
    id: "middle-horizontal-left",
    x: 197,
    y: 145,
    width: 137,
    height: 58,
    viewBox: "0 0 137 58",

    path: `
    M 3 3
    H 134
    V 56
    H 3
    Z
    `,

    collisionBoxes: [
      { x: 0, y: 0, width: 137, height: 58 }
    ]
  },

  // Middle-right horizontal wall
  {
    id: "middle-horizontal-right",
    x: 366,
    y: 145,
    width: 148,
    height: 59,
    viewBox: "0 0 148 59",

    path: `
    M 3 3
    H 145
    V 56
    H 3
    Z
    `,

    collisionBoxes: [
      { x: 0, y: 0, width: 148, height: 59 }
    ]
  
   },
      
   {
  id: "top-center",
  x: 297.8,
  y: 30,
  width: 120,
  height: 90,
  viewBox: "0 0 120 90",
  path: `
    M 47 5
    H 73
    V 63
    H 153
    V 81
    H -35
    V 63
    H 47
    Z
  `,
   

   collisionBoxes: [
     // Vertical stem
     { x: 44, y: 2, width: 32,  height: 58 },

     //Lower horizontal section
     { x: -38, y: 60, width: 194, height: 24 }
  ]
},

  {
    id: "top-right",
    x: 436,
    y: 30,
    width: 224,
    height: 85,
    viewBox: "0 0 224 85",

    path: `
      M -26.8 5
      H 218
      V 26
      H 74
      V 81
      H 53
      V 26
      H -26.8
      Z
      `,
  

  collisionBoxes: [
     // Horizontal bar
     { x: -29.8, y: 2, width: 250.8, height: 27 },

     // Vertical stem
     { x: 50, y: 24, width: 27, height: 60 }
  ]
  },
  // Left L-shaped wall
   {
    id: "middle-left-L",
    x: 49,
    y: 88,
    width: 129,
    height: 117,
    viewBox: "0 0 129 117",

    path: `
    M 86 5
    H 113
    V 112
    H -13
    V 87
    H 86
    Z
    `,

    collisionBoxes: [
      // Vertical section
      { x: 83, y: 2, width: 33, height: 113 },

      // Horizontal section 
      { x: -16, y: 84, width: 132, height: 31 }
    ]
  },

  //Right L-shaped wall
  {
    id:"middle-right-L",
    x: 542,
    y: 89,
    width: 117,
    height: 117,
    viewBox: "0 0 117 117",
    
    path: `
    M 5 5
    H 28.5
    V 85
    H 113
    V 110
    H 5
    Z
    `,
  
  collisionBoxes: [
    // Vertical section 
    { x: 2, y: 2, width: 31.5, height: 113 },

    //Horizontal section
    { x: 2, y: 82, width: 113, height: 31 }  
  ]

},

  //Lower central-left horizontal wall
  {
    id: "lower-central-left",
    x: 132,
    y: 235,
    width: 201,
    height: 25,
    viewBox: "0 0 201 25",

    path:`
    M 3 3
    H 198
    V 22
    H 3
    Z
  `,

  collisionBoxes: [
    { x: 0, y: 0, width: 201, height: 25 }
  ]
  },

  //Lower central-right horizontal wall
    {
      id: "lower-central-right",
      x: 366,
      y: 235,
      width: 210,
      height: 25,
      viewBox: " 0 0 210 25",

      path: `
      M 3 3
      H 207
      V 22
      H 3
      Z
      `,

      collisionBoxes: [
        { x: 0, y: 0, width: 210, height: 25 }
      ]
    },

   {
    id: "lower-block-1",
    x: 132,
    y: 293,
    width: 85,
    height: 45,
    viewBox: "0 0 85 45",
    path: `
    M 3 3
    H 82
    V 42
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 85, height: 45 }
    ]
  },

  {
    id: "lower-block-2",
    x: 249,
    y: 293,
    width: 85,
    height: 45,
    viewBox: "0 0 85 45",
    path: `
    M 3 3
    H 82
    V 42
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 85, height: 45 }
    ]
  },

  {
    id: " lower-block-3",
    x: 366,
    y: 293,
    width: 85,
    height: 45,
    viewBox: "0 0 85 45",
    path: `
    M 3 3
    H 82
    V 42
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 85, height: 45 }
    ]
  },

  {
    id: "lower-block-4",
    x: 483,
    y: 292,
    width: 93,
    height: 47,
    viewBox: "0 0 93 47",
    path: `
    M 3 3
    H 90
    V 44
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 93, height: 47 }
    ]
  },

   //Upper horizontal bar
   {
    id: "central-upper-bar",
    x: 189,
    y: 370,
    width: 329,
    height: 28,
    viewBox: "0 0 329 28",
    path: `  
    M 3 3
    H 326
    V 25
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 329, height: 28 }
    ]
   },

   //Middle horizontal bar
   {
    id: "central-middle-bar",
    x: 157,
    y: 430,
    width: 361,
    height: 28,
    viewBox: "0 0 361 28",
    path: `
    M 0 3
    H 358
    V 25
    H 0
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 361, height: 28 }
    ]
   },
   
   {
    id: "central-bottom-bar",
    x: 189,
    y: 490,
    width: 360,
    height: 28,
    viewBox: "0 0 360 28",
    path: `
    M 3 3
    H 360
    V 25
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 360, height: 28 }
    ]
   },

  {
    id: "central-u-frame",

    x: 132,
    y: 370,

    width: 443,
    height: 208,

    viewBox: "0 0 443 208",

    path: `
    M 3 3
    H 22
    V 183
    H 418
    V 3
    H 440
    V 205
    H 3
    Z
    `,

    collisionBoxes: [
      //Left vertical section
      { x: 0, y: 0, width: 25, height: 208 },

      //Right vertical section
      { x: 418, y: 0, width: 25, height: 208 },

      //Bottom horizontal section
      { x: 0, y: 180, width: 443, height: 28 }
    ]
  },

  // Block 1 beneath the U svg
  {
    id: "bottom-block-1",
    x: 132,
    y: 610,
    width: 85,
    height: 43,
    viewBox: "0 0 85 43",
    path: `
    M 3 3
    H 82
    V 40
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 85, height: 43 }
    ]
  },
  
  // Second rectangular SVG beneath the U 
  {
    id: "bottom-block-2",
    x: 249,
    y: 610,
    width: 85,
    height: 43,
    viewBox: "0 0 85 43",
    path: `
    M 3 3
    H 82
    V 40
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 85, height: 43 }
    ]
  },

  // Third rectangular SVG beneath the U
  {
    id: "bottom-block-3",
    x: 366,
    y: 610,
    width: 85,
    height: 43,
    viewBox: "0 0 85 43",
    path: `
    M 3 3
    H 82
    V 40
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 85, height: 43 }
    ]
  },

  // Fourth rectangular SVG beneath the U
  {
    id: "bottom-block-4",
    x: 483,
    y: 610,
    width: 92,
    height: 43,
    viewBox: "0 0 92 43",
    path: `
    M 3 3
    H 89
    V 40
    H 3
    Z
    `,
    collisionBoxes: [
      { x: 0, y: 0, width: 92, height: 43 }
    ]
  },

  {
    id: "bottom-central-stepped",
    x: 132,
    y: 685,
    width: 443,
    height: 83,
    viewBox: "0 0 443 83",

    path: `
    M 3 3
    H 440
    V 28
    H 288
    V 80
    H 155
    V 28
    H 3
    Z
    `,

    collisionBoxes: [
      //Upper horizontal section
      { x: 0, y: 0, width: 443, height: 31 },

      //Central downward extension
      { x: 152, y: 25, width: 139, height: 58 }
    ]
  },

  {
    id: "bottom-left-sideways-T",
    x: 32,
    y: 722,
    width: 80,
    height: 83,
    viewBox: "0 0 80 83",

    path: `
    M 3 3
    H 25
    V 30
    H 77
    V 53
    H 25
    V 80
    H 3
    Z
    `,

    collisionBoxes: [
      { x: 0, y: 0, width: 28, height: 83 },
      { x: 25, y: 27, width: 55, height: 29 }
    ]
  },

  {
    id: "bottom-right-sideways-T",
    x: 588,
    y: 722,
    width: 80,
    height: 83,
    viewBox: "0 0 80 83",

    path: `
    M 55 3
    H 77
    V 80
    H 55
    V 53
    H 3
    V 30
    H 55
    Z
    `,

    collisionBoxes: [
      { x: 52, y: 0, width: 28, height: 83 },
      { x: 0, y: 27, width: 55, height: 29 }
    ]
  },

  ];

  const svgCollisionWalls = mazeShapes.flatMap((shape) => 
  (shape.collisionBoxes || []).map((box) => ({
    x: shape.x + box.x,
    y: shape.y + box.y,
    width: box.width,
    height: box.height,
    invisible: true
  }))
);

const allWalls = [...walls, ...svgCollisionWalls];

    function checkCollision(x, y) {
    const pacman = {
      x,
      y,
      width: pacmanSize,
      height: pacmanSize
    };
    
    return allWalls.some((wall) => {
      return (
        pacman.x < wall.x + wall.width &&
        pacman.x + pacman.width > wall.x &&
        pacman.y < wall.y + wall.height &&
        pacman.y + pacman.height > wall.y
      );
    });
    
  }
  useEffect(() => {

    let animationFrame;

    const keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };

    let requestedDirection = null;
    let currentDirection = null;

    function handleKeyDown(event) {
         console.log("KEY:", event.key);

      if (event.key in keys) {
        keys[event.key] = true;
        setMoving(true);
        event.preventDefault();
        }
     
      if (event.key === "ArrowUp") {
        requestedDirection = "up";
      } else if (event.key === "ArrowDown") {
        requestedDirection = "down";
      } else if (event.key === "ArrowLeft")  {
        requestedDirection = "left";
      } else if (event.key === "ArrowRight") {
        requestedDirection = "right";
      }
    }
    

    function handleKeyUp(event) {

      if (event.key in keys) {
        keys[event.key] = false;
      }
    }

    function movePacman() {

      setPosition((oldPosition) => {

        let newX = oldPosition.x;
        let newY = oldPosition.y;
        
        const smoothSpeed = 2.5;

         // Check whether Pac-Man can move in a direction
       function canMove(direction) {

        let testX = oldPosition.x;
        let testY = oldPosition.y;

        //Test movement in the requested direction
        if (direction === "up") {
          testY -= smoothSpeed;
        }
        else if (direction === "down") {
          testY += smoothSpeed;
        }
        else if (direction === "left") {
          testX -= smoothSpeed;
        }
        else if (direction === "right") {
          testX += smoothSpeed;
        }

        // Keep Pac-Man inside the maze
        if (testX < 0) return false;

        if (testX > mazeWidth - pacmanSize - borderClearance) {
          return false;
        }

        if (testY < 0) 
          return false;
        
        if (testY > mazeHeight - pacmanSize - borderClearance) {
          return false;
        }

        // Check collision with walls
        const testPacman = {
          x: testX,
          y: testY,
          width: pacmanSize,
          height: pacmanSize
        };

        const collision = allWalls.some((wall) => {
          return (
            testPacman.x < wall.x + wall.width &&
            testPacman.x + testPacman.width > wall.x &&
            testPacman.y < wall.y + wall.height &&
            testPacman.y + testPacman.height > wall.y
          );
        });

        return !collision;
      }
         
         // Try to turn in the requested direction
         
         if (requestedDirection &&
          canMove(requestedDirection)) {
              currentDirection = requestedDirection;
          }

        // Movement using the most recently requested direction
        
        if (currentDirection === "up") {

          if (canMove("up")) {
              newY -= smoothSpeed;
              setDirection("up");
          }

        } else if (currentDirection === "down") {
          
          if (canMove("down")) {
            newY += smoothSpeed;
            setDirection("down");
          }
          
        } else if (currentDirection === "left") {
          
          if (canMove("left")) {
              newX -= smoothSpeed;
              setDirection("left");
          }

        } else if (currentDirection === "right") {

            if (canMove("right")) {
                newX += smoothSpeed;
                setDirection("right");
            }
        }
        // Try the requested direction first

        // If Pac-Man has no direction yet, don't move


        
        // Keep Pac-Man inside the maze

        if (newX < 0) {
          newX = 0;
        }

        if (newX > mazeWidth - pacmanSize) {
          newX = mazeWidth - pacmanSize;
        }

        // Check collision with walls

        const pacman = {
          x: newX,
          y: newY,
          width: pacmanSize,
          height: pacmanSize
        };

        const collision = allWalls.some((wall) => {
          return (
            pacman.x < wall.x + wall.width &&
            pacman.x + pacman.width > wall.x &&
            pacman.y < wall.y + wall.height &&
            pacman.y + pacman.height > wall.y
          );
        });

        
       if (collision) {
      return oldPosition;
     }

        // Pellet collision

           setPellets((currentPellets) => currentPellets.filter((pellet) => {
            const pacmanCenterX = newX + pacmanSize / 2;
            const pacmanCenterY = newY + pacmanSize / 2;

            const pelletCenterX = pellet.x + 4;
            const pelletCenterY = pellet.y + 4;

            const distanceX = pacmanCenterX - pelletCenterX;
            const distanceY = pacmanCenterY - pelletCenterY;
            
            const distance = Math.sqrt(
              distanceX * distanceX +
              distanceY * distanceY
            );
            
               return distance > 14
           })
        ); 
    
        return {
          x: newX,
          y:newY
        };
      });

      animationFrame = requestAnimationFrame(movePacman);
    }
    
    //Start keyboard listeners
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Start Pac-Man animation
    animationFrame = requestAnimationFrame(movePacman);

    // Cleanup
    return () => {

      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);

      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
    
  return (
    <div className="game">
      <h1>Mini Pac-Man</h1>

      <div 
        className="maze"
        style={{
          position: "relative",
          width: `${mazeWidth}px`,
          height: `${mazeHeight}px`
        }}
        >

        {allWalls.map((wall, index) => (
          !wall.invisible && (
          <Wall
          key={index}
          x={wall.x}
          y={wall.y}
          width={wall.width}
          height={wall.height}
          />
          )
        ))}

        {mazeShapes.map((shape) => (
    <svg
      key={shape.id}
      className="maze-shape"
      style={{
        left: `${shape.x}px`,
        top: `${shape.y}px`,
        width: `${shape.width}px`,
        height: `${shape.height}px`
      }}
      viewBox={shape.viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={shape.path}
        fill="black"
        stroke="#101ccb"
        strokeWidth="6"
        strokeLinejoin="miter"
      />
    </svg>
  ))}

       
        {false &&pellets.map((pellet, index) => (
          <div
            key={index}
            className="pellet"
            style={{
              left: `${pellet.x}px`,
              top: `${pellet.y}px`
            }}
            ></div>
        ))}

        <div
          className={`pacman ${direction} ${moving ? "moving" : ""}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
          >
            </div> 
 
      </div>
    </div>
  );
}

export default App;