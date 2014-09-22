var Invdr = {};

Invdr.Boot = function (game) {
    'use strict';
};

Invdr.Boot.prototype = {
    
    // Initialize settings for game
    init: function () {
        'use strict';
        // Only need one pointer...no multitouch needed!
        this.input.maxPointers = 1;
        
        // Don't pause game if tab the game is in loses focus? Is that what this does?
        this.stage.disableVisibilityChange = true;
        
        // If the player is using a desktop...
        if (this.game.device.desktop) {
            // ...center the game on the page
            this.scale.pageAlignHorizontally = true;
            console.log("YOU ARE ON A DESKTOP!");
        } else {
            // ...Otherwise, the game is on mobile
            // Scale the game appropriately and show all of the game on the screen
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(320, 480, 900, 1350);
            
            // Force the device to be in portrait mode
            this.scale.forcePortrait = true;
            
            // Center the game on the page
            this.scale.pageAlignHorizontally = true;
            
            // Not sure what these two methods are doing
            this.scale.setScreenSize(true);
            this.scale.refresh();
        }
    },
    
    // Load assets for state
    preload: function () {
        'use strict';
        
        // Load assets for the preloader (loading bar)
        this.load.image('preloaderBar', 'assets/loadingBar.png');
    },
    
    // Setup state
    create: function () {
        'use strict';
        
        // Start the Preloader state to load all the assets needed for the game
        this.state.start('Preloader');
    }
};