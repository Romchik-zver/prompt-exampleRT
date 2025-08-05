const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const resultDiv = document.getElementById('result');

generateBtn.onclick = () => {
  // Получаем значения
  const taskType = document.getElementById('taskType').value;
  const description = document.getElementById('taskDescription').value.trim();
  const communicationType = document.querySelector(
    'input[name="communicationType"]:checked'
  ).value;
  const requirePrecision = document.getElementById('requirePrecision').checked;
  const requireConciseness =
    document.getElementById('requireConciseness').checked;
  const useExamples = document.getElementById('useExamples').checked;

  // Проверка обязательных полей
  if (!taskType || !description) {
    alert('Пожалуйста, заполните все обязательные поля.');
    return;
  }

  // Формируем промпт
  let prompt = `Задача: ${taskType}\n`;
  prompt += `Описание: ${description}\n`;
  prompt += `Стиль общения: ${communicationType}\n`;

  // Добавляем дополнительные требования
  const requirements = [];
  if (requirePrecision) requirements.push('требовать точность');
  if (requireConciseness) requirements.push('быть кратким');
  if (useExamples) requirements.push('использовать примеры');

  if (requirements.length > 0) {
    prompt += `Дополнительные требования: ${requirements.join(', ')}.\n`;
  }

  // Выводим результат
  resultDiv.textContent = prompt;
  copyBtn.disabled = false;
};

copyBtn.onclick = () => {
  const text = resultDiv.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Промпт скопирован в буфер обмена!');
  });
};
