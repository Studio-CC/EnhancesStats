# EnhancedStats

A utility class that extends [`three.js`](https://threejs.org/) `Stats` with real-time rendering diagnostics for draw calls and triangle count.

## Features

- Adds custom panels to the existing `Stats` UI:
  - **Draw Calls** – number of WebGL render calls per frame
  - **Triangles (Tris)** – number of rendered triangles in the scene
- Displays all panels simultaneously in a single row
- Disables click cycling behavior (since all panels are shown)

