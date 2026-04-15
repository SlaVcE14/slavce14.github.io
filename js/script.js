let navBtn
let isNavOpen

function addEvents() {
    navBtn = document.getElementById('nav_btn');

    isNavOpen = false;


    window.addEventListener('scroll', () => {
        document.body.style.setProperty(
            "--scroll",
            (window.scrollY / window.innerHeight).toString()
        );
    })


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (isNavOpen) {
                showNav();
                return false;
            }
        }
    }, false);

    document.getElementById('main').addEventListener('click', function (e) {

        if (!isNavOpen && e.target !== this)
            return;
        showNav();
    })
}

function showNav() {
    document.getElementById('nav_ul').classList.toggle("open");
    if (isNavOpen) {
        navBtn.style.backgroundImage = "url('/img/icons/menu.png') ";
    } else navBtn.style.backgroundImage = "url('/img/icons/menu_close.png') ";
    isNavOpen = !isNavOpen;
}

