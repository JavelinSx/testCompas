import { defineNuxtRouteMiddleware } from 'nuxt/app';
import { setHistory } from '~/utils/history';

export default defineNuxtRouteMiddleware((to) => {
  const title = to.meta.title && typeof to.meta.title === 'string' ? to.meta.title : 'Unknown';

  // Определение родительских путей
  const parentPaths: Array<{ path: string; name: string }> = [];
  if (to.path.startsWith('/documents') && to.path !== '/documents') {
    parentPaths.push({ path: '/documents', name: 'Документы' });
  }

  setHistory(to.path, title, parentPaths);
});
