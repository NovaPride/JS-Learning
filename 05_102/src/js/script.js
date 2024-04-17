window.addEventListener('DOMContentLoaded', function() {
    const calculator = require('./modules/calculator'),
          cards      = require('./modules/cards'),
          forms      = require('./modules/forms'),
          modal      = require('./modules/modal'),
          slider     = require('./modules/slider'),
          tabs       = require('./modules/tabs'),
          timer      = require('./modules/timer');
        
    calculator();
    cards();
    forms();
    modal();
    slider();
    tabs();
    timer();
});