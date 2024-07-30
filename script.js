let sections = document.querySelectorAll('.section');
let menu = document.querySelectorAll('#nav_ul li a');
let navBtn = document.getElementById('nav_btn');

let isNavOpen = false;

window.onscroll = () => {

    document.body.style.setProperty(
        "--scroll",
        (window.scrollY / window.innerHeight).toString()
    );

    sections.forEach(i => {
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        let id = i.getAttribute('id');
        if (top >= offset && top < offset + height){
            menu.forEach(link => {
                link.classList.remove('active');
                document.querySelector('#nav_ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    });
}

document.addEventListener("keydown",  (e)=>{
    if (e.key === "Escape"){
        if (isNavOpen){
            showNav();
            return false;
        }
    }
}, false);

document.getElementById('main').addEventListener('click', function (e){

    if (!isNavOpen && e.target !== this)
        return;
    showNav();
})

function showNav(){
    document.getElementById('nav_ul').classList.toggle("open");
    if (isNavOpen){
        navBtn.style.backgroundImage = "url('../img/icons/menu.png') ";
    }else navBtn.style.backgroundImage = "url('../img/icons/menu_close.png') ";
    isNavOpen = !isNavOpen;
}

