const elements = document.getElementsByClassName('element')

Array.from(elements).forEach(element => {
  element.addEventListener('click', () => {
    logInfo(element);
  });
});

function logInfo(element) {
  console.log(element);
  console.log(element.classList[2]);
  console.log(element.children);
  console.log(element.children[1].innerText);
}