// function addingEventListener() {
//     alert('I was clicked!');
// }

// const input = document.getElementById('input');
// input.addEventListener('click', addingEventListener)

const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}