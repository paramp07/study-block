// runs everytime we open up a new website
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


switch (window.location.hostname) {
    case "www.youtube.com":
        document.body.innerHTML =  generateHTML("YouTube");
        break;
    case "www.facebook.com":
        alert('THis is YOUTUBE')
        break;
}