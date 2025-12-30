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

let data = loadJSON('/apps/apps.json');
data.forEach(a => {

    let prefix = "https://sj14apps.com/"
    let isExternal = !a.link.startsWith(prefix)


    let link = !isExternal ? "./" + a.link.slice(prefix.length) : a.link;
    let image = !isExternal ? "./" + a.image.slice(prefix.length) : a.image;


    let app = document.createElement('a')
    app.href = link;
    if (isExternal) {
        app.target = '_blank';
    }
    let appContainer = document.createElement('div')
    appContainer.classList.add('corner')
    let img = document.createElement('img')
    img.classList.add('corner-top')
    img.src = image
    img.alt = a.name
    let title = document.createElement('h3')
    title.textContent = a.name
    let subTitle = document.createElement('h4')
    subTitle.textContent = a.type

    appContainer.appendChild(img)
    appContainer.appendChild(title)
    appContainer.appendChild(subTitle)
    app.appendChild(appContainer)

    projectsContainer.appendChild(app)

})