
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
  var canvas = document.getElementById ( "canvas" );
  canvas.width = width;
  canvas.height = height;
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

  // Simulate one resize event.
  onResize();

  // Get the canvas element.
  var canvas = document.getElementById ( "canvas" );

  // Get its context.
  var context = canvas.getContext ( "2d" );

  // Start the repeated calls to the draw function.
  window.requestAnimationFrame ( drawCanvas.bind ( context, canvas.width, canvas.height ) );
} );


////////////////////////////////////////////////////////////////////////////////
//
//  Called when the canvas needs to be drawn.
//
////////////////////////////////////////////////////////////////////////////////

var drawCanvas = function ( width, height )
{
  drawScene.call ( this, width, height );
  this.stroke();
  window.requestAnimationFrame ( drawCanvas.bind ( this, width, height ) );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Called when the canvas needs to be drawn.
//
////////////////////////////////////////////////////////////////////////////////

var drawScene = function ( width, height )
{
  this.rect ( 20, 20, width / 3, height / 2 );
};
