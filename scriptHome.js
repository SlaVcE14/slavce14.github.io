
const urlParams = new URLSearchParams(window.location.search);
let noSplash = urlParams.has('noSplash');
if (noSplash){
    let linkNode = document.getElementsByTagName('link')[3];
    linkNode.parentNode.removeChild(linkNode);
    document.getElementById("logo1").style.visibility = "hidden";
}

window.addEventListener("popstate", function(event) {
    console.log("Back button was pressed!");
});

window.addEventListener("beforeunload", function(event) {
    console.log("User is leaving the page!");
});