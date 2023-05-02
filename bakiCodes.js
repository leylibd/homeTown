document.addEventListener("DOMContentLoaded", function (event) {
    console.log("test hello");

    const hiddenPar = document.querySelector(".hidden"); //query -> looks for element(s) with a class named hidden
    const link = document.getElementById("link");

    console.log(link);
    console.log(hiddenPar);

    link.addEventListener("click", function (event) {
        hiddenPar.classList.remove("hidden"); //class hidden is not class anymore
        link.classList.add("hidden"); //hiding a link ---> link becomes a class named hidden and gets styles of this class(no visibility)
        event.preventDefault(); //???

    });

});