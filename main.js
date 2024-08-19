let url = "http://boot.dev/developer/test"

var pathname = new URL(url).pathname;
var domain = new URL(url).host;

console.log(pathname);
console.log(domain);