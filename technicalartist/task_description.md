# Technical Artist

Inside the project is a react + three.js project, which contains a bare, untextured terrain. This terrain geometry was exported from the Upstreet terrain system and is a close approximation of the real geometry in Upstreet's infinite procedural terrain system.

The task is to write a shader for the terrain that meets the following criteria:

1. Fits one of the following biomes: jungle, snowy mountains, marsh, volcanic

2. Features dynamic and efficient use of different terrain types. For example, in the snow biome, steep faces might be rocky, while peaks are snowy.

3. The shader should establish a look while prioritizing performance 

4. The shader should be able to tile infinitely and not be bound to the model.
