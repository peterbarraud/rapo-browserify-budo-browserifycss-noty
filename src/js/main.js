// DOM is ready with plain-old vanilla JS
require('domready')(function () {
    const sayhello = document.getElementById("sayhello");
    const showhello = document.getElementById("showhello");

    sayhello.addEventListener("click", function(){
      const Noty = require('noty');
      new Noty({
          text: 'Some notification text',
      }).show();      
      showhello.innerText = "Allo, allo";
    });
});