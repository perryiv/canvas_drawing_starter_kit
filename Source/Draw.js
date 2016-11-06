
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2016, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Variables that keep their value between calls to the draw function.
//
////////////////////////////////////////////////////////////////////////////////

var xPos = 0;
var yPos = 0;
var xSpeed = 5; // Pixels/frame
var ySpeed = 5;


////////////////////////////////////////////////////////////////////////////////
//
//  Change this function to draw whatever you want.
//
////////////////////////////////////////////////////////////////////////////////

var drawScene = function ( canvasWidth, canvasHeight )
{
  background ( 200, 200, 200 );

  // Set our width and height.
  var width = canvasWidth / 5;
  var height = canvasHeight / 5;

  // Draw our rectangle.
  fillColor ( 10, 100, 10 );
  fillRect ( xPos, yPos, width, height );

  // Increment for next time.
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  // Did we go too far to the left?
  if ( xPos < 0 )
  {
    xSpeed *= -1; // Change direction.
    xPos = 0;     // Reset the position.
  }

  // Did we go too far to the right?
  if ( ( xPos + width ) > canvasWidth )
  {
    xSpeed *= -1;               // Change direction.
    xPos = canvasWidth - width; // Reset the position.
  }

  // Did we go too far up?
  if ( yPos < 0 )
  {
    ySpeed *= -1; // Change direction.
    yPos = 0;     // Reset the position.
  }

  // Did we go too far down?
  if ( ( yPos + height ) > canvasHeight )
  {
    ySpeed *= -1;                 // Change direction.
    yPos = canvasHeight - height; // Reset the position.
  }

  rect(379, 679, 788, 891);
  rect(357, 567, 789, 235);
  rect(356, 567, 567, 578);
  rect(273, 579, 468, 458);
  rect(900, 400, 100, 300);
  rect(200, 600, 680, 496);
  








  var i;


  for ( i = 0; i < 10; ++i )
  {
    rect(50*58*i+49, i+37, i+29, i+10);
  }




  for ( i = 0; i < 10; ++i )
  {
    rect(5*5*i+40, i+30, i+299, i+10);
  }    


   
 
  for ( i = 0; i < 10; ++i )
  {
    rect(19*5*i+40, i+30, i+299, i+10);
  }
  

 
  for ( i = 0; i < 10; ++i )
  {
    rect(8*5*i+40, i+30, i+299, i+10);
  }
  
  rect(855*6, 7-3, 88*4, 55+7);  
 





  rect(6*89, 3*90, 50*39, 29*90);







};












