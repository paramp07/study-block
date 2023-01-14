var restrictedSites = [{"item":"www.youtube.com", "status":0}];

let sites = Object.values(restrictedSites);

sites.forEach((site) => {
    switch (window.location.hostname) {
        case site["items"]:
            alert("NEW SITE");
            break;
    }
  });

switch (window.location.hostname) {
    case "www.facebook.com":
        alert('THis is YOUTUBE')
        break;
}