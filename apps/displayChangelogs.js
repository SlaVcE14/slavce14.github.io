let changelogsContainer = document.getElementById('versions-container')

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

let data = loadJSON(changelogsContainer.getAttribute('srcData')+'/changelogs.json');
data.forEach(l => {

    let changelog = document.createElement('div')
    changelog.classList.add('corner')
    let title = document.createElement('h3')
    title.textContent = l.title
    let log = document.createElement('pre')
    let header = document.createElement('span')
    header.textContent = 'Changelog:'
    header.style.fontSize = '17px'
    let code = document.createElement('code')
    code.textContent = l.changelog.replaceAll(' ', '  ');
    donloadBtn = document.createElement('a')
    donloadBtn.textContent = 'Download'
    donloadBtn.href = './' + changelogsContainer.getAttribute('srcData') + '/versions/' + l.file
    log.appendChild(header)
    log.appendChild(document.createTextNode("\n\n"))
    log.appendChild(code)
    changelog.appendChild(title)
    changelog.appendChild(log)
    changelog.appendChild(donloadBtn)
    changelogsContainer.appendChild(changelog)

})