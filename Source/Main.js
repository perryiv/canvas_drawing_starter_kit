
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2016, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Main source file.
//
////////////////////////////////////////////////////////////////////////////////

// Make zepto seem like jQuery.
var jQuery = $;

// Global variables, sort of.
var program = {
  canvas: null,
  context: null
};


////////////////////////////////////////////////////////////////////////////////
//
//  Called when the window is resized.
//
////////////////////////////////////////////////////////////////////////////////

var onResize = function()
{
  // Get the div that holds the canvas.
  var container = jQuery ( document.getElementById ( "container" ) );

  // Get the new width and height.
  var width = container.width();
  var height = container.height();

  // Set the size of the canvas.
  program.canvas.width = width;
  program.canvas.height = height;
};


////////////////////////////////////////////////////////////////////////////////
//
//  Main function. Called when the document is ready.
//
////////////////////////////////////////////////////////////////////////////////

jQuery ( document ).ready ( function()
{
  // Set up event handlers.
  jQuery ( window ).bind ( "resize", onResize );

  // Get the canvas element.
  // This sets the global variable.
  program.canvas = document.getElementById ( "canvas" );

  // Get its context.
  // This sets the global variable.
  program.context = program.canvas.getContext ( "2d" );

  // Simulate one resize event.
  onResize();

  // Start the repeated calls to the draw function.
  window.requestAnimationFrame ( drawCanvas.bind ( program.context, program.canvas.width, program.canvas.height, 0 ) );
} );


////////////////////////////////////////////////////////////////////////////////
//
//  Convert the number to hexadecimal.
//  http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
//
////////////////////////////////////////////////////////////////////////////////

var toHex = function ( num )
{
  var hex = num.toString ( 16 );
  return hex.length == 1 ? "0" + hex : hex;
};


////////////////////////////////////////////////////////////////////////////////
//
//  Set the fill color.
//
////////////////////////////////////////////////////////////////////////////////

var setFillColor = function ( red, green, blue )
{
  program.context.fillStyle = "#" + toHex ( red ) + toHex ( green ) + toHex ( blue );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Fill in the canvas with the color.
//  http://codetheory.in/why-clearrect-might-not-be-clearing-canvas-pixels/
//
////////////////////////////////////////////////////////////////////////////////

var background = function ( red, green, blue )
{
  setFillColor ( red, green, blue );
  program.context.beginPath();
  program.context.fillRect ( 0, 0, program.canvas.width, program.canvas.height );
  program.context.stroke();
  program.context.closePath();
};


////////////////////////////////////////////////////////////////////////////////
//
//  Called when the canvas needs to be drawn.
//
////////////////////////////////////////////////////////////////////////////////

var drawCanvas = function ( width, height, frameCount )
{
  console.log ( "frame:", frameCount );
  this.clearRect ( 0, 0, width, height );
  drawScene.call ( this, width, height, frameCount );
  this.stroke();
  window.requestAnimationFrame ( drawCanvas.bind ( this, width, height, ++frameCount ) );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Called when the canvas needs to be drawn.
//
////////////////////////////////////////////////////////////////////////////////

var drawScene = function ( width, height, frameCount )
{
  background ( 20, 40, 60 );

  var x = frameCount;
  if ( x > ( width / 2 ) )
  {
    x = 0;
  }

  this.beginPath();
  this.rect ( x, 0, width / 3, height / 2 );
  this.stroke();
  this.closePath();
};
