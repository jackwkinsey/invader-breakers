Invdr.Preloader = function (game) {
    'use strict';
    
    this.backgroundColor = '#4169E1';
    this.preloadBar = null;
    
    this.ready = false;
};

Invdr.Preloader.prototype = {

    preload: function () {
        'use strict';
        
        // Setup the preloader bar to visually show the loading progress of assets
        this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);
        
        // Load game assets
        this.load.image('player', 'assets/prototype/player.png');
        this.load.image('enemy', 'assets/prototype/enemy.png');
        this.load.image('bullet-bad', 'assets/prototype/bullet-bad.png');
        this.load.image('bullet-good', 'assets/prototype/bullet-good.png');
    },
    
    create: function () {
        'use strict';
        // Once the load has finished we disable the crop because we're going
        // to sit in the update loop for a while as the music decodes
        // DON'T HAVE ANY MUSIC RIGHT NOW SO NOTHING IS HERE
        // this.preloadBar.cropEnabled = false;
        
        this.state.start('Game');
    },
    
    update: function () {
        'use strict';
    }
};