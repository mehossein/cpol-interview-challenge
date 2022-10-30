import { quickAction } from '@app/dashboard/shared/interface';

export const QUICK_ACTION: quickAction[] = [
  {
    index: 0,
    icon: 'person',
    hoverText: 'پروفایل',
    link: '/dashboard/profile/',
  },
  {
    index: 1,
    icon: 'dashboard',
    hoverText: 'صفحه اصلی',
    link: '/dashboard/main-page/',
  },
];
