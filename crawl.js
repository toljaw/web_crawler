// function normalizeURL(url) {
//     let urlHost = new URL(url).host;
//     let urlPath = new URL(url).pathname;
//     let normalUrl = `${urlHost}${urlPath}`;
//
//     if (normalUrl[normalUrl.length - 1] === '/') {
//         let finalUrl;
//         normalUrl = normalUrl.slice(0, normalUrl.length - 1);
//
//     }
//     return normalUrl;
// }
//
// export { normalizeURL };
import {JSDOM} from 'jsdom';

function normalizeURL(url) {
    const urlObj = new URL(url)
    let fullPath = `${urlObj.host}${urlObj.pathname}`
    if (fullPath.slice(-1) === '/') {
        fullPath = fullPath.slice(0, -1)
    }
    return fullPath
}





function getURLsFromHTML(htmlBody) {//, baseURL
    const dom = new JSDOM(htmlBody)
    const listRawURL = dom.window.document.querySelectorAll('a')
    //check if in the array are relative urls -> make them absolute in a new array -> return new array
}


// JUST TESTING SHIT:

let body = `
<html>
<body>
<a href="https://blog.111boot.dev"><span>Go to Boot.dev</span></a>
<a href="https://blog.222boot.dev"><span>Go to Boot.dev</span></a>
<a href="https://blog.333boot.dev"><span>Go to Boot.dev</span></a>
</body>
</html>
`
const dom = new JSDOM(body)
const listRawURL = dom.window.document.querySelectorAll('a')
//console.log(listRawURL)
//console.log(dom.serialize());
//console.log(dom.window.document.querySelector('body'));
const listRawURLArray = Array.from(listRawURL);
const urls = Array.from(listRawURL).map(anchor => anchor.href);
console.log(urls);

export {getURLsFromHTML, normalizeURL};