<div class="embed">
    <div oe-move="trackInteraction($event)" oe-motion="trackInteraction($event)">
       <span ng-controller="SceneInteractionCtrl">
            <span ng-controller="SceneModelCtrl">
               <div ng-if="$supports.webgl">
                  <span ng-if="!ready && !$supports.iOS" class="anim-fade-inout">
                    <div class="loader loader-1 scene-loader"></div>
                  </span>
                  <div obvi-model class="scene-oemodel" ng-class="{'ready': !!ready}"></div>
               </div>
               <div ng-if="!$supports.webgl">
                  your browser does not support webgl. please try some other?
               </div>
           </span>
       </span>
    </div>
</div>