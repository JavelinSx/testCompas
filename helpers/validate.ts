// Валидация гос.номера автомобиля (без региона)
export function validateCarNumber(value: string) {
  // Пример валидации для гос.номера автомобиля в формате А 123 БВ
  const regex = /^[А-Я]{1}\s\d{3}\s[А-Я]{2}$/i;
  return regex.test(value);
}

// Валидация региона РФ
export function validateRegion(value: string) {
  // Регион должен быть числом от 1 до 997
  const number = parseInt(value, 10);
  return number >= 1 && number <= 997;
}

// Валидация свидетельства ТС
export function validateCertificate(value: string) {
  // Формат 77 АА 123456
  const regex = /^\d{2}\s[А-Я]{2}\s\d{6}$/i;
  return regex.test(value);
}
