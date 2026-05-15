function setupSpin() {
  var materiaEl = document.getElementById('materia');
  var textEl = document.getElementById('colourTitle');
  var currentClass = 'danger';

  var classList = [
    'danger',
    'info',
    'primary',
    'success',
    'warning',
  ];

  function setClass(newClass) {
    materia.src = `/materia/${newClass}.webp`;
    textEl.classList.remove(`has-text-${currentClass}`);
    textEl.classList.add(`has-text-${newClass}`);
    currentClass = newClass;
  }

  function changeClass() {
    var currentIndex = classList.indexOf(currentClass);
    var newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * classList.length);
    }
    setClass(classList[newIndex]);
  }

  function stopSpin() {
    materiaEl.classList.remove('spin');
  }

  function changeMateria() {
    if (materia.classList.contains('spin')) {
      return
    }
    materia.classList.add('spin')
    window.setTimeout(changeClass, 350);
    window.setTimeout(stopSpin, 1200);
  }

  materiaEl.addEventListener('click', changeMateria);
}

document.addEventListener('DOMContentLoaded', setupSpin);