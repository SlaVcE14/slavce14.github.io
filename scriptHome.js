
const urlParams = new URLSearchParams(window.location.search);
let noSplash = urlParams.has('noSplash');
if (noSplash){
    let linkNode = document.getElementsByTagName('link')[2];
    linkNode.parentNode.removeChild(linkNode);
    document.getElementById("logo1").style.visibility = "hidden";
}
