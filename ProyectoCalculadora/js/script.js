//Logica para hacer funcionar la calculadoraa

const buttons = document.querySelectorAll("input[type='button']");
const form = document.forms["calculator"];
const clean = document.getElementById("cleaner");


buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (this.value === "=" ) {
      //give me the result
      form.screen.value = eval(form.screen.value);
    }
    else {
      form.screen.value += this.value;
    }

  });
});

clean.addEventListener("click", function (){
  form.screen.value = "";
});
