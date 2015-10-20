var CLASS_PROGRESSION =
  [
   'asynchronous',
  'semi-synchronous',
  'frenzy',
   'explode'
  ];

var classIndex = 0;

var numberOfFireflies = 600;

document.addEventListener("DOMContentLoaded", function(event) {
  _.each(_.range(numberOfFireflies), function(i){
     var firefly = document.createElement("div");
     firefly.className = "firefly " + CLASS_PROGRESSION[classIndex];
    var insides = document.createElement("div");
    insides.className = "insides";
    firefly.appendChild(insides);
     firefly.style.left = Math.random() * 100 + '%';
     firefly.style.top = Math.random() * 100 + '%';
     document.body.appendChild(firefly);
   })

  classIndex++;

  var advanceTheOrgy = function(){
    _.each(document.getElementsByClassName("firefly"), function(firefly){
      firefly.className = "firefly " + CLASS_PROGRESSION[classIndex];
    })
        classIndex++;
  };

  document.addEventListener('click', advanceTheOrgy);

  setInterval(advanceTheOrgy, 10000);
});
