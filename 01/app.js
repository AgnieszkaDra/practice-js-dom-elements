console.log('DOM');

let searchElement = document.querySelector(`.comments__item.comments__item--newest`)

let dataInfoElements = searchElement.querySelectorAll(`[data-info]`).length

console.log(dataInfoElements)
