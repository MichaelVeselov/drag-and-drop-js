const item = document.querySelector('.item');
const placeHolders = document.querySelectorAll('.placeholder');

function dragStart(event) {
  const target = event.target;
  target.classList.add('hold');
  setTimeout(() => {
    target.classList.add('hide');
  }, 0);
}
function dragEnd(event) {
  const target = event.target;
  target.classList.remove('hold', 'hide');
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  const target = event.target;
  target.classList.add('hovered');
}
function dragLeave(event) {
  const target = event.target;
  target.classList.remove('hovered');
}

function dragDrop(event) {
  const target = event.target;
  target.append(item);
  target.classList.remove('hovered');
}

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeHolders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
});
