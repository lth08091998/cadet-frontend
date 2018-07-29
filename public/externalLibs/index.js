/** 
 * Load a given external library, as a javascript file
 * to run in the global scope, by adding it to the DOM
 */
function dynamicallyLoadScript(url) {
  var script = document.createElement("script"); 
  script.src = url; 
  /** Forces scripts to be loaded in order. */
  script.async = false
  script.defer = true
  document.head.appendChild(script); 
}

/**
 * Loads all the required libraries
 */
function loadLibs() {
  const files = [
    // commonly used functions
    '/externalLibs/misc.js',
    '/externalLibs/list.js',
    // sound
    '/externalLibs/sound/sounds.js',
    '/externalLibs/sound/soundToneMatrix.js',
    '/externalLibs/sound/riffwave.js',
    // graphics
    '/externalLibs/graphics/gl-matrix.js',
    '/externalLibs/graphics/webGLhi_graph.js',
    '/externalLibs/graphics/webGLhi_graph_ce.js',
    '/externalLibs/graphics/webGLgraphics.js',
    '/externalLibs/graphics/webGLcurve.js',
    '/externalLibs/graphics/webGLrune.js',
    // list visualizer
    '/externalLibs/visualizer/KineticJS.js',
    '/externalLibs/visualizer/visualizer.js',
    // deathcube
    '/externalLibs/deathcube/common/object.js',
    '/externalLibs/deathcube/common/inheritance.js',
    '/externalLibs/deathcube/common/globals.js',
    '/externalLibs/deathcube/common/dcgraphics.js',
    '/externalLibs/deathcube/common/classes.js',
    '/externalLibs/deathcube/common/engine.js',
    '/externalLibs/deathcube/mission/layout16a.js',
    '/externalLibs/deathcube/mission/layout16b.js',
    '/externalLibs/deathcube/mission/mission16functions.js',
  ];

  for (var i = 0; i < files.length; i++) {
    dynamicallyLoadScript(files[i]);
  }
}

loadLibs();
