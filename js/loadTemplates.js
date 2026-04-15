function loadHTML(id, file, callback, onFail) {
    if (document.getElementById(id) == null) {
        console.log(`${id} not found`)
        if (onFail) onFail();
        return
    }

    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .then(()=>{
            if (callback) callback();
        })

}

function loadNav(){
    const ul = document.getElementById("nav_ul");

    navList.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = item.text;
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    });
}

function updateNav(){
    let sections = document.querySelectorAll('.section');
    let menu = document.querySelectorAll('#nav_ul li a');

    window.addEventListener('scroll', () => {

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
    })

    addEvents()
}

function loadSplash(){
    const page = document.body.dataset.page;
    if (page === "home"){
        let script = document.createElement("script");
        script.src = "/js/scriptHome.js";
        document.body.appendChild(script);
    }
}

loadHTML("nav", "/template/nav.html",
    () => {
        loadNav()
        updateNav()
        loadSplash()
    }
)
loadHTML("contacts", "/template/contacts.html")
loadHTML("footer", "/template/footer.html")
