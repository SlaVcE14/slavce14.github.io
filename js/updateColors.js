async function updateColors() {
    let proj = typeof projectName !== 'undefined' ? projectName : '';
    let page = typeof pageName !== 'undefined' ? pageName : '';

    if (!proj && !page) return;

    let data = [];
    try {
        let res1 = await fetch('/projects.json');
        if (res1.ok) {
            let data1 = await res1.json();
            data = data.concat(data1);
        }
    } catch(e){}

    let project = data.find(p => p.name === proj || (p.link && p.link.includes(page)));
    if (project && project.accentColor !== undefined) {
        let color = project.accentColor;
        document.documentElement.style.setProperty("--accent", color);
        
        document.body.style.backgroundColor = `hsl(${color}, 60%, 25%)`;
        document.body.style.backgroundBlendMode = "multiply";
        let bg = document.getElementById("bg");
        if (bg) {
            bg.style.backgroundColor = "transparent";
        }

        let metaThemeColor = document.querySelector("meta[name=theme-color]");
        if (metaThemeColor) {
             metaThemeColor.setAttribute("content", `hsl(${color}, 100%, 40%)`);
        }
    }
}
updateColors();
