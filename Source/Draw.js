
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
var xOffset = 5;
var yOffset = 5;


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
  xPos = xPos + xOffset;
  yPos = yPos + yOffset;

  // Did we go too far to the left?
  if ( xPos < 0 )
  {
    xOffset *= -1;
    xPos = 0;
  }

  // Did we go too far to the right?
  if ( ( xPos + width ) > canvasWidth )
  {
    xOffset *= -1;
    xPos = canvasWidth - width;
  }

  // Did we go too far up?
  if ( yPos < 0 )
  {
    yOffset *= -1;
    yPos = 0;
  }

  // Did we go too far down?
  if ( ( yPos + height ) > canvasHeight )
  {
    yOffset *= -1;
    yPos = canvasHeight - height;
  }
};
