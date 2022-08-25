console.log('DOM');

const curr = document.querySelector('.js-curr');
console.dir(curr)

if (curr) {

  const parentCurr = curr.parentNode
  console.dir(parentCurr)

  const button = document.createElement('button')
  button.innerText = 'Usuń z koszyka'
  parentCurr.appendChild(button)

  const parentCurrChildren = curr.parentElement.children
  console.dir(parentCurrChildren) // HTMLCollection

  const arrayFromParentCurrChildren = [...parentCurrChildren]

  arrayFromParentCurrChildren.forEach(element => {
    if (element !== curr) {
      element.setAttribute('class', 'siblings')
    }
  }
  )

  const parentCurrSibling = curr.parentElement.nextElementSibling
  console.log(parentCurrSibling)
  parentCurrSibling.setAttribute('title', 'nextElementSibling')

  const lastArticle = parentCurr.nextElementSibling.nextElementSibling

  const lastButton = lastArticle.children[2]
  // lastButton = lastArticle.children-1
  console.log(lastButton)

  const lastP = document.createElement('p')
  lastP.innerText = 'lorem'
  lastArticle.insertBefore(lastP, lastButton)

  let newFirstArticle = document.createElement('article')
  newFirstArticle = parentCurr.cloneNode(true)
  console.log(newFirstArticle)
  parentCurr.parentElement.insertBefore(newFirstArticle, parentCurr)

};







