function randomPosition() {
  const stageWidth = 480; // Ширина сцени
  const stageHeight = 360; // Висота сцени
  const sprite = getTargetSprite(); // Отримати спрайт, до якого буде застосовано зміну позиції
  
  // Згенерувати випадкові координати
  const randomX = Math.floor(Math.random() * (stageWidth - 1)) - stageWidth / 2;
  const randomY = Math.floor(Math.random() * (stageHeight - 1)) - stageHeight / 2;
  
  // Змінити позицію спрайта
  sprite.x = randomX;
  sprite.y = randomY;
}

// Додати новий блок "Перемістити у випадкову позицію" до меню блоків
Scratch.extensions.register('Random Position', {
  blocks: [
    {
      opcode: 'randomPosition',
      blockType: Scratch.BlockType.COMMAND,
      text: 'перемістити у випадкову позицію',
    }
  ],
  // Функція, яку буде викликано при виконанні блоку
  randomPosition: randomPosition,
});
