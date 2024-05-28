//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// loader script.js

document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000); // Replace with your actual data loading logic and time

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
});



// right click disable code????


document.oncontextmenu = document.body.oncontextmenu = function() {
  return false;
};



// disable screenshot

document.addEventListener("keyup", function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.which;
          if (keyCode == 44) {
              stopPrntScr();
          }
      });
function stopPrntScr() {

          var inpFld = document.createElement("input");
          inpFld.setAttribute("value", ".");
          inpFld.setAttribute("width", "0");
          inpFld.style.height = "0px";
          inpFld.style.width = "0px";
          inpFld.style.border = "0px";
          document.body.appendChild(inpFld);
          inpFld.select();
          document.execCommand("copy");
          inpFld.remove(inpFld);
      }
     function AccessClipboardData() {
          try {
              window.clipboardData.setData('text', "Access   Restricted");
          } catch (err) {
          }
      }
      setInterval("AccessClipboardData()", 300);