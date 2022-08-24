console.log('DOM');

const linksWithDataURL = document.querySelectorAll('a[data-url]')
console.log(linksWithDataURL)

linksWithDataURL.forEach(function (element) {
    const containWithDataUrl = element.getAttribute('data-url')
    element.setAttribute(
    'href',
    containWithDataUrl
   )
})




