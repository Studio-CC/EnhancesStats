import Stats from 'three/addons/libs/stats.module.js';

export class EnhancedStats {

   constructor(renderer, scene) {

      this.stats = new Stats();

      this.enhanceStats(this.stats, renderer, scene);

   }


   enhanceStats(stats, renderer, scene) {


      // Add DrawCalls Panel

      let drawCallsPanel = stats.addPanel(new Stats.Panel('Draw Calls', '#ff8', '#221'));


      // Add Triangle Count Panel

      let trianglesPanel = stats.addPanel(new Stats.Panel('Tris', '#ff1a8a', '#471a32'));


      // Piggyback on stats.end to update panels

      let originalStatsEnd = stats.end.bind(stats);


      // Get Tri's Count

      const getTriangleCount = (scene) => {

         let triangleCount = 0;

         scene.traverse(function (object) {
            if (object.isMesh) {
               triangleCount += object.geometry.attributes.position.count / 3;
            }
         })

         return triangleCount;

      }


      // Update Custom Panels

      stats.end = () => {
         drawCallsPanel.update(renderer.info.render.calls, 10);
         trianglesPanel.update(getTriangleCount(scene), 500);
         originalStatsEnd();
      };


      //


      // Display panels in line
      stats.dom.style.display = 'flex';
      stats.dom.querySelectorAll('canvas').forEach((canvas) => {
         canvas.style.setProperty('display', 'block', 'important');
         canvas.style.setProperty('position', 'relative', 'important');
      });

      this.disableClick(stats.dom)

   }

   // Disable click ( since all panels are shown )
   disableClick(container) {

      container.addEventListener('click', function (event) {
         event.stopPropagation();
      }, true);

   }

   // Proxy the Stats instance methods
   begin() {
      this.stats.begin();
   }

   end() {
      this.stats.end();
   }

   get dom() {
      return this.stats.dom;
   }

}