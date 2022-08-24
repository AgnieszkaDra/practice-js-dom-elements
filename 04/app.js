console.log('DOM');



// const nav = document.querySelector('nav')

// const ulEl= document.createElement('ul')

// const liEl = document.createElement('li')

// const linkEl = document.createElement('a')

// liEl.appendChild(linkEl)
// ulEl.appendChild(liEl)
// nav.appendChild(ulEl)

// linkEl.innerText = 'start'
// linkEl.setAttribute('href', '/')

// const liEl1 = liEl.cloneNode(true)
// const linkEl1 = document.querySelector('a')
// linkEl1.innerText = 'gallery'
// linkEl1.href = '/gallery'

// ulEl.appendChild(liEl1)

// const liEl2 = liEl.cloneNode(true)
// const linkEl2 = document.querySelector('a')
// linkEl2.innerText = 'kontakt'
// linkEl2.href = '/contact'

// ulEl.appendChild(liEl2)

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav')

const UlElem = document.createElement('ul')
nav.appendChild(UlElem)
menuItems.forEach(function(el){
    const liElem = document.createElement('li')
    UlElem.appendChild(liElem)
   
    const linkEl = document.createElement('a')
    liElem.appendChild(linkEl)
    linkEl.innerText = el.text
    linkEl.setAttribute('href', 'el.url')
    linkEl.href = el.url
    
})



















