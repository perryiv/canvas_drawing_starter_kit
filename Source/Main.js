
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
//  Main function. Called when the document is ready.
//
////////////////////////////////////////////////////////////////////////////////

jQuery ( document ).ready ( function()
{
  // Set up event handlers.
  jQuery ( window ).bind ( "resize", onResize );

  // Get the canvas element.
  // This sets the global variable.
  details.canvas = document.getElementById ( "canvas" );

  // Get its context.
  // This sets the global variable.
  details.context = details.canvas.getContext ( "2d" );

  // Simulate one resize event.
  onResize();

  // Start the repeated calls to the draw function.
  window.requestAnimationFrame ( drawCanvas.bind ( details.context, details.canvas.width, details.canvas.height ) );
} );


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
  details.canvas.width = width;
  details.canvas.height = height;
};


////////////////////////////////////////////////////////////////////////////////
//
//  Called when the canvas needs to be drawn.
//  http://codetheory.in/why-clearrect-might-not-be-clearing-canvas-pixels/
//
////////////////////////////////////////////////////////////////////////////////

var drawCanvas = function ( width, height )
{
  drawScene.call ( this, width, height );
  window.requestAnimationFrame ( drawCanvas.bind ( this, width, height ) );
};
