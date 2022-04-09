(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        function peet() {
            createPlatform(
                110, 660, 0.2, 0.2
            );
            setTimeout(peetTwo(), 1000);
        }
        function peetTwo() {
            createPlatform(
                190, 650, 0.2, 0.2
            );
            setTimeout(peetThree(), 1000);
        }
        function peetThree() {
            createPlatform(
                270, 640, 0.2, 0.2
            );
            setTimeout(peetFour(), 1000);
        }
        function peetFour() {
            createPlatform(
                350, 630, 0.2, 0.2
            );
            setTimeout(peetFive(), 1000);
        }
        function peetFive() {
            createPlatform(
                430, 620, 0.2, 0.2
            );
            setTimeout(peetSix(), 1000);
        }
        function peetSix() {
            createPlatform(
                510, 610, 0.2, 0.2
            );
        }
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE
        
        
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);