# EnhancedStats

A utility class that extends [`three.js`](https://threejs.org/) `Stats` with real-time rendering diagnostics for draw calls and triangle count.

## Features

- Adds custom panels to the existing `Stats` UI:
  - **Draw Calls** – number of WebGL render calls per frame
  - **Triangles (Tris)** – number of rendered triangles in the scene
- Displays all panels simultaneously in a single row
- Disables click cycling behavior (since all panels are shown)

## Installation

Ensure you have the `stats.module.js` from the `three` examples:

```js
import Stats from 'three/addons/libs/stats.module.js'
import { EnhancedStats } from './EnhancedStats.js'

## Usage

```js
const enhancedStats = new EnhancedStats(renderer, scene)

document.body.appendChild(enhancedStats.dom)

function animate() {

  enhancedStats.begin()

  renderer.render(scene, camera)

  enhancedStats.end()

  requestAnimationFrame(animate)

}

## API

### `new EnhancedStats(renderer, scene)`

- **renderer**: a `THREE.WebGLRenderer` instance  
- **scene**: the root `THREE.Scene` to count triangles from

### Properties

- **dom**: `HTMLElement` containing the stats UI

### Methods

- **begin()**: Start timing (call at frame start)
- **end()**: End timing and update custom panels (call at frame end)
