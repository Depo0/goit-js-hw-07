  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  const controls = document.querySelector("#controls")
  const input = document.querySelector('input')
  const clickCreate = document.querySelector('[data-create]')
  const clickDestroy = document.querySelector('[data-destroy]')
  const boxes = document.querySelector('#boxes');
  let amount = 0;


  input.addEventListener('input', handlerInput);
    function handlerInput(evt) {
      amount = parseInt(evt.target.value);
  };


  clickCreate.addEventListener('click', handlerClickCreate);
  clickDestroy.addEventListener('click', handlerClickDestroy);


  function createBoxes(amount) {
  boxes.innerHTML = '';

    for (let i = 0; i < amount; i++){
      const newBox = document.createElement('div');
      const size = 30 + i * 10;
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.margin = '5px';
      
      boxes.insertAdjacentElement('beforeend', newBox) 
    }
    
  }

  function handlerClickCreate() {
    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert('Введите число от 1 до 100');
      return;
    } else {
      createBoxes(amount);
      input.value = '';
    }
  }


  function handlerClickDestroy() {
    boxes.innerHTML = '';
  }