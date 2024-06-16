// Форматирование для свидетельства ТС в формате 77 АА 123456
export function formatCertificate(value: string) {
  let cleaned = value.replace(/\s+/g, '').toUpperCase();
  let formatted = '';

  if (cleaned.length > 2) {
    formatted += cleaned.slice(0, 2) + ' ';
    cleaned = cleaned.slice(2);
  }
  if (cleaned.length > 2) {
    formatted += cleaned.slice(0, 2) + ' ';
    cleaned = cleaned.slice(2);
  }
  formatted += cleaned;

  return formatted.slice(0, 12); // Ограничение длины до 12 символов
}

// Форматирование для гос.номера автомобиля (без региона)
export function formatCarNumber(value: string) {
  let cleaned = value.replace(/\s+/g, '').toUpperCase();
  let formatted = '';

  if (cleaned.length > 1) {
    formatted += cleaned.slice(0, 1) + ' ';
    cleaned = cleaned.slice(1);
  }
  if (cleaned.length > 3) {
    formatted += cleaned.slice(0, 3) + ' ';
    cleaned = cleaned.slice(3);
  }
  formatted += cleaned;

  return formatted.slice(0, 8); // Ограничение длины до 8 символов
}

// Форматирование для региона РФ
export function formatRegion(value: string) {
  let cleaned = value.replace(/\D+/g, '');
  if (cleaned.length === 1 && cleaned !== '0') {
    cleaned = '00' + cleaned;
  } else if (cleaned.length === 2) {
    cleaned = '0' + cleaned;
  } else if (cleaned.length === 3) {
    return cleaned;
  }
  return cleaned.slice(0, 3); // Ограничение длины до 3 символов
}
