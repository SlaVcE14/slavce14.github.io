
const urlParams = new URLSearchParams(window.location.search);
let noSplash = urlParams.has('noSplash');
if (noSplash){
    let linkNode = document.getElementsByTagName('link')[3];
    linkNode.parentNode.removeChild(linkNode);
    document.getElementById("logo1").style.visibility = "hidden";
}

window.addEventListener("DOMContentLoaded", function () {
    console.log(document.referrer)
    console.log(location.hostname)
    if (document.referrer && !document.referrer.includes(location.hostname)) {
        console.log("User came back from another site!");
    }
});