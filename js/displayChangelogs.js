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

function displayVersions() {
    changelogsContainer.innerHTML = '';

    let data = loadJSON(changelogsPath + '/changelogs.json');
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
        downloadBtn = document.createElement('a')
        downloadBtn.textContent = 'Download'
        downloadBtn.href = './' + changelogsPath + '/versions/' + l.file
        let timestamp = document.createElement('span')
        timestamp.textContent = new Date(l.timestamp).toLocaleDateString(undefined, {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });  
        log.appendChild(header)
        log.appendChild(document.createTextNode("\n\n"))
        log.appendChild(code)
        changelog.appendChild(title) 
        if (l.timestamp !== undefined)
            changelog.appendChild(timestamp)
        changelog.appendChild(log)
        if (l.file !== undefined)
            changelog.appendChild(downloadBtn)

        changelogsContainer.appendChild(changelog)

    })
}
changelogsPath = pageName;
displayVersions()

