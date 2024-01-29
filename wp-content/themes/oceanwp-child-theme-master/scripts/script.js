//Code pour fermer la popup
let test = document.getElementsByClassName("popup-close");
console.log(test);

jQuery(".popup-close").on("click", function () {
  jQuery(".popup-overlay").hide();
});
