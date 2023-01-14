var restrictedSites = accessItems();

const generateHTML = (pageName) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Study Block</title>
    </head>
    <body>
        <div>
            <h2>Study Block</h2>
            <ul>
                <li id = 'concert'></li>
            </ul>
        </div>
        
    </body>
    <script src = "script.js"></script>
    </html>`
};
const generateCSS = () => {
    return ``
};

let sites = Object.values(restrictedSites);
console.log(window.location.hostname);
sites.forEach((site) => {
    switch (window.location.hostname) {
        case site["items"]:
            alert("NEW SITE");
            break;
    }
  });

switch (window.location.hostname) {
    case "www.youtube.com":
       // document.body.innerHTML = generateHTML("YouTube");
        alert('restrictedSites[i]["item"]');
        break;
    case "www.facebook.com":
        alert('THis is YOUTUBE')
        break;
}