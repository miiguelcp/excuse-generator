window.onload = function() {
  console.log("Loaded excuse");
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

function generateExcuse() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoPosition = Math.floor(Math.random() * who.length);
  let whatPosition = Math.floor(Math.random() * what.length);
  let whenPosition = Math.floor(Math.random() * when.length);

  return who[whoPosition] + " " + what[whatPosition] + " " + when[whenPosition];
}
