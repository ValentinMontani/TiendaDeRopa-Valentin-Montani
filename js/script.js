// Accordion
function myAccFunc() {
  var x = document.getElementById('demoAcc')
  if (x.className.indexOf('untref-show') == -1) {
    x.className += ' untref-show'
  } else {
    x.className = x.className.replace(' untref-show', '')
  }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById('myBtn').click()

// Open and close sidebar
function untref_open() {
  document.getElementById('mySidebar').style.display = 'block'
  document.getElementById('myOverlay').style.display = 'block'
}

function untref_close() {
  document.getElementById('mySidebar').style.display = 'none'
  document.getElementById('myOverlay').style.display = 'none'
}
