var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("a Junior Web Developer.")
  .pauseFor(2500)
  .deleteAll()
  .pauseFor(1500)
  .typeString("a retired E-sports Player.")
  .pauseFor(2500)
  .deleteAll()
  .pauseFor(1500)
  .typeString("a Football Player.")
  .pauseFor(2500)
  .start();
