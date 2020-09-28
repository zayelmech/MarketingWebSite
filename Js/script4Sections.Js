var b1section = document.getElementById("b1-Section");
var b2section = document.getElementById("b2-Section");
var b3section = document.getElementById("b3-Section");
var b4section = document.getElementById("b4-Section");
var section1 = document.getElementById("Section1");
var section2 = document.getElementById("Section2");
var section3 = document.getElementById("Section3");
var section4 = document.getElementById("Section4");


section1.style.display = "inline";
section2.style.display = "none";
section3.style.display = "none";
section4.style.display = "none";
b1section.style.borderBottom = "solid gray 2px";
b1section.style.borderRadius = "0px";
b1section.style.fontWeight = "700";

function resetSectionVisual() {

    b1section.style.border = "none";
    b2section.style.border = "none";
    b3section.style.border = "none";
    b4section.style.border = "none";
    b1section.style.fontWeight = "400";
    b2section.style.fontWeight = "400";
    b3section.style.fontWeight = "400";
    b4section.style.fontWeight = "400";

    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
}

b1section.addEventListener("click", function() {

    resetSectionVisual();
    section1.style.display = "block";
    b1section.style.borderBottom = "solid gray 2px";
    b1section.style.borderRadius = "0px";
    b1section.style.fontWeight = "700";
});


b2section.addEventListener("click", function() {

    resetSectionVisual();
    section2.style.display = "block";
    b2section.style.borderBottom = "solid gray 2px";
    b2section.style.borderRadius = "0px";
    b2section.style.fontWeight = "700";



});

b3section.addEventListener("click", function() {

    resetSectionVisual();
    section3.style.display = "block";
    b3section.style.borderBottom = "solid gray 2px";
    b3section.style.borderRadius = "0px";
    b3section.style.fontWeight = "700";

});

b4section.addEventListener("click", function() {

    resetSectionVisual();
    section4.style.display = "block";
    b4section.style.borderBottom = "solid gray 2px";
    b4section.style.borderRadius = "0px";
    b4section.style.fontWeight = "700";
});