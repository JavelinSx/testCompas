import { ref } from 'vue';

interface HistoryItem {
  path: string;
  name: string;
}

const history = ref<HistoryItem[]>([]);

export function setHistory(path: string, name: string, parentPaths: Array<{ path: string; name: string }>) {
  const newHistory: HistoryItem[] = [];

  // Добавляем путь "Главная" в историю
  newHistory.push({ path: '/', name: 'Главная' });

  // Добавляем все родительские пути в историю
  for (const parent of parentPaths) {
    newHistory.push({ path: parent.path, name: parent.name });
  }

  // Добавляем текущий путь в историю
  newHistory.push({ path, name });

  history.value = newHistory;
}

export function useHistory() {
  return { history };
}
