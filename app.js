// Try edit message


// utils
function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    console.log(sel)
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function getMiddleElements(firstEl, lastEl) {
  let middleEls = []

  let nextEl = firstEl.nextElementSibling

  console.log(nextEl)
  while (nextEl !== lastEl) {
    console.log(nextEl)
    middleEls.push(nextEl)
    nextEl = nextEl.nextElementSibling
  }

  console.log(middleEls)

  return middleEls

}

const editable = document.getElementById('editable')

const boldBtn = document.getElementById('bold-btn')
boldBtn.addEventListener('click', (e) => {
  
  // wrapping element
  const boldElement = document.createElement('b')
  
  // get selected text
  const currentSelection = window.getSelection()
  const range = currentSelection.getRangeAt(0)

  // 1st selected element --- ok!!
  const firstElementRange = document.createRange()
  const firstElement = currentSelection.anchorNode
  firstElementRange.selectNodeContents(firstElement)
  const anchorOffsetOf1stElement = currentSelection.anchorOffset
  firstElementRange.setStart(firstElement, anchorOffsetOf1stElement)
  
  console.log(firstElement.nextSibling)
  //firstElementRange.surroundContents(boldElement)

  // middle selected element ---
  const lastElement = currentSelection.focusNode
  const middleElements = getMiddleElements(firstElement, lastElement)

  // last selected element



  // extract selected text in cross-boundary
  //const df = range.extractContents()
  //document.getElementById('controller').appendChild(df)


  // wrap it with <b>
   
})

editable.addEventListener('keyup', (event) => {
  if (event.key === "Enter") {
    const newPElement = document.createElement('p')
    const textNode = document.createTextNode('')
    newPElement.appendChild(textNode)
    editable.appendChild(newPElement)

    const currentFocusedElement = document.activeElement
    currentFocusedElement.blur()
    newPElement.focus()
    selectElementContents(newPElement)
  }
})
