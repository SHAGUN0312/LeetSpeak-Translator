//read input
var input = document.querySelector("#input");

//btn translate
var btn = document.querySelector("#convert");

btn.addEventListener("click", onClick);

//show output
var output = document.querySelector("#output");

var url = "	https://api.funtranslations.com/translate/leetspeak.json";

function getTranslationUrl(text) {
  return url + "?text=" + text;
}

function onClick(event) {
  const inputVal = input.value;

  fetch(getTranslationUrl(inputVal))
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      output.innerText = translated;
    })
    .catch(() => alert("Some Error Occured !"));
}
