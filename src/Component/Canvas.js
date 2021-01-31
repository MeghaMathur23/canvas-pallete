import React,{ useEffect } from 'react';

function Canvas(){

    

    
  
   
    function CheckForSpaces(inGrid,width,height,currentPos) //Checks for available spaces then returns back all available spaces
    {
        let availableSpaces = [];
        
        if(currentPos.x > 0)
        {
            if(inGrid[currentPos.x - 1][currentPos.y] === 0)
            {
                availableSpaces.push({x:currentPos.x - 1, y:currentPos.y});
            }
        }
        else if(inGrid[width - 1][currentPos.y] === 0)
        {
            availableSpaces.push({x:width - 1, y:currentPos.y});
        }
        
        if(currentPos.x < width - 1)
        {
            if(inGrid[currentPos.x + 1][currentPos.y] === 0)
            {
                availableSpaces.push({x:currentPos.x + 1, y:currentPos.y});
            }
        }
        else if(inGrid[0][currentPos.y] === 0)
        {
            availableSpaces.push({x:0, y:currentPos.y});
        }
        
        if(currentPos.y > 0)
        {
            if(inGrid[currentPos.x][currentPos.y - 1] === 0)
            {
                availableSpaces.push({x:currentPos.x, y:currentPos.y - 1});
            }
        }
        else if(inGrid[currentPos.x][height - 1] === 0)
        {
            availableSpaces.push({x:currentPos.x,y: height - 1});
        }
        
        if(currentPos.y < height - 1)
        {
            if(inGrid[currentPos.x][currentPos.y + 1] === 0)
            {
                availableSpaces.push({x:currentPos.x,y: currentPos.y + 1});
            }
        }
        else if(inGrid[currentPos.x][0] === 0)
        {
            availableSpaces.push({x:currentPos.x, y:0});
        }
        //  console.log(availableSpaces)
        return availableSpaces;
    }
    
    
  useEffect(() => {
    let canvas = null;
    let ctx = null;
    let width; //canvas width
    let height; //canvas height
    let imageData;
    let currentPos;
    let prevPositions;
      
    let colorSteps = 32;
   
   
    let grid=[];
    let colors = []; //Array of all colors

  
    let drawImageToCanvas =()=>
    {
      
        canvas = document.getElementById('canvas'); // Get the HTML element with the ID of 'canvas'
        width = canvas.width;
        height = canvas.height;
        ctx = canvas.getContext('2d'); // This is necessary, but I don't know exactly what it does
        
        imageData = ctx.createImageData(width,height); //Needed to do pixel manipulation
        
       
       
        prevPositions = []; //Array of previous positions, used for the recursive backtracker algorithm
        let colorObj ={}
        for(let r = 0; r < colorSteps; r++)
        {
            for(let g = 0; g < colorSteps; g++)
            {
                for(let b = 0; b < colorSteps; b++)
                {
                    colorObj={
                        r:Math.floor(r * 255 / (colorSteps - 1)),
                        g:Math.floor(g * 255 / (colorSteps - 1)),
                        b:Math.floor(b * 255 / (colorSteps - 1))
                    }
                    colors.push(colorObj)
                    
                }
            }
        }
        
  
        for(let x = 0; x < width; x++)
        {
            grid.push([]);
            for(let y = 0; y < height; y++)
            {
                grid[x].push(0); //Set up the grid
              
            }
        }
       
        currentPos = {x:Math.floor(Math.random() * width),y:Math.floor(Math.random() * height)}; 
        
        grid[currentPos.x][currentPos.y] = 1;
       
        prevPositions.push(currentPos);
                  
            do
            {
                let notFilled = true;
                while(notFilled)
                {
                     let availableSpaces = CheckForSpaces(grid,width,height,currentPos);
                    
                    if(availableSpaces.length > 0)
                    {
                         let test = availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
                         prevPositions.push(currentPos);
                         currentPos = test;
                         grid[currentPos.x][currentPos.y] = 1;
                        let colorPop =colors && colors.pop()
                        // console.log(colorPop)
                        imageData.data[((currentPos.x + (currentPos.y * width)) * 4) + 0] = colorPop.r;
                        imageData.data[((currentPos.x + (currentPos.y * width)) * 4) + 1] = colorPop.g;
                        imageData.data[((currentPos.x + (currentPos.y * width)) * 4) + 2] = colorPop.b;
                        imageData.data[((currentPos.x + (currentPos.y * width)) * 4) + 3] = 255;
                       
                        notFilled = false;
                    }
                    else
                    {
                        if(prevPositions.length !==0)
                        {
                            currentPos = prevPositions.pop();
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
            while(prevPositions.length > 0)
            ctx.putImageData(imageData,0,0);
        
       
    }
    
    drawImageToCanvas();
  }, []);

  return (
    <div>
<canvas id="canvas" width="256" height="128">
        Sorry your browser does not support Canvas, try Firefox or Chrome!	
    </canvas>
  </div>
  )
}


export default Canvas;
