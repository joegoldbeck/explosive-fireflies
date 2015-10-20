var CLASS_PROGRESSION =
    [
      'asynchronous',
      'semi-synchronous',
      'frenzy',
      'explode'
    ];

var classIndex = 0;

var numberOfFireflies = 500;

document.addEventListener("DOMContentLoaded", function (event) {
  _.each(_.range(numberOfFireflies), function (i) {
    var firefly = document.createElement("div");
    firefly.className = "firefly " + CLASS_PROGRESSION[classIndex];
    var insides = document.createElement("div");
    insides.className = "insides";
    firefly.appendChild(insides);
    var r = Math.random();
    var theta = Math.random() * 2 * Math.PI;
    firefly.style.left = (50 + 70 * r * Math.sin(theta)) + '%';
    firefly.style.top = (50 + 70 * r * Math.cos(theta)) + '%';
    document.body.appendChild(firefly);
  });

  document.body.className = CLASS_PROGRESSION[classIndex];

  classIndex++;

  var advanceTheOrgy = function () {
    _.each(document.getElementsByClassName("firefly"), function (firefly) {
      firefly.className = "firefly " + CLASS_PROGRESSION[classIndex];
    });
    document.body.className = CLASS_PROGRESSION[classIndex];
    classIndex++;
  };

  document.addEventListener('click', advanceTheOrgy);

  setInterval(advanceTheOrgy, 10000);
});
