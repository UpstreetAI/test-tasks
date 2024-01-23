# Engine Architect Overview

The project provided contains a setup with React and a WASM WebGL module using cmake and emscripten

## Task

The final output of this task will be an animated cube with the following properties:

1. The time delta input and animation loop must come from javascript
2. The cube should be textured with UV coordinates
3. The cube should twist over sin(t)
4. Final positions of each point should be displayed in the react UI (this can be a simple DIV, just needs to be readable) and updated every frame