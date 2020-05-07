import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/',
    icon: 'home',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Entities',
    icon: 'th-list',
    children: [
      {
        name: 'Region',
        url: 'region',
        icon: 'asterisk'
      },
      {
        name: 'Country',
        url: 'country',
        icon: 'asterisk'
      },
      {
        name: 'Location',
        url: 'location',
        icon: 'asterisk'
      },
      {
        name: 'Department',
        url: 'department',
        icon: 'asterisk'
      },
      {
        name: 'Task',
        url: 'task',
        icon: 'asterisk'
      },
      {
        name: 'Employee',
        url: 'employee',
        icon: 'asterisk'
      },
      {
        name: 'Job',
        url: 'job',
        icon: 'asterisk'
      },
      {
        name: 'Job History',
        url: 'job-history',
        icon: 'asterisk'
      }
    ]
  },
  {
    title: true,
    name: 'Maintenance'
  },
  {
    name: 'Country',
    url: 'country',
    icon: 'binoculars'
  },
  {
    name: 'Administration',
    icon: 'user-plus',
    children: [
      {
        name: 'User management',
        url: 'admin/user-management',
        icon: 'user'
      },
      {
        name: 'Metrics',
        url: 'admin/metrics',
        icon: 'tachometer-alt'
      },
      {
        name: 'Health',
        url: 'admin/health',
        icon: 'heart'
      },
      {
        name: 'Configuration',
        url: 'admin/configuration',
        icon: 'list'
      },
      {
        name: 'API',
        url: 'admin/docs',
        icon: 'book'
      },
      {
        name: 'Logs',
        url: 'admin/logs',
        icon: 'tasks'
      },
      {
        name: 'Audits',
        url: 'admin/audits',
        icon: 'bell'
      }
    ]
  }
];
