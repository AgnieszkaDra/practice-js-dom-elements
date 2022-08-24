console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}



const section = document.querySelector('section')
console.log(section)

const button = document.createElement('button')

section.appendChild(button)

function setAttribute(which, where){
    for (const property in which) {
        const value = which[property]
       where[property] = value
  }
}

setAttribute(buttonSettings.attr, button)
setAttribute(buttonSettings.css, button.style)
button.innerText = buttonSettings.text











