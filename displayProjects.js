let sj14appsProjectsContainer = document.getElementById('projects_sj14apps_container')
let projectsContainer = document.getElementById('projects_container')

function loadJSON(filePath) {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', filePath, false);
    xhr.send(null);
    if (xhr.status === 200) {
        return JSON.parse(xhr.responseText);
    } else {
        console.error('Error loading JSON:', xhr.status);
        return null;
    }
}

function createCard(a){

    let app = document.createElement('a')
    app.href = a.link;
    app.target = '_blank';

    let appContainer = document.createElement('div')
    appContainer.classList.add('corner')
    let img = document.createElement('img')
    img.classList.add('corner-top')
    img.src = a.image
    img.alt = a.name
    let title = document.createElement('h3')
    title.textContent = a.name
    let subTitle = document.createElement('h4')
    subTitle.textContent = a.type

    appContainer.appendChild(img)
    appContainer.appendChild(title)
    appContainer.appendChild(subTitle)
    app.appendChild(appContainer)
    return app
}

let data2 = loadJSON('./apps/apps.json');
data2.forEach(a => {
    let app = createCard(a)
    console.log(app)
    projectsContainer.appendChild(app)
})

let data = loadJSON('https://sj14apps.com/apps/apps.json');
data.forEach(a => {
    let app = createCard(a)
    sj14appsProjectsContainer.appendChild(app)
})