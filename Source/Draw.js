
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
};
