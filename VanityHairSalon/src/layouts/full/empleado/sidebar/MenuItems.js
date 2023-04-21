import {
   IconLayoutDashboard, IconCalendar, IconCalendarDue, IconUser, IconUserExclamation,IconUserCheck,IconListDetails,IconUserX,IconCheckupList,IconCards,IconUsers
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Inicio',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard-emp',
  },
  {
    navlabel: true,
    subheader: 'Reservas',
  },
  {
    id: uniqueId(),
    title: 'Citas',
    icon: IconCalendar,
    href: '/citas-emp',
  },
  {
    id: uniqueId(),
    title: 'Historial',
    icon: IconCalendarDue,
    href: '/historial-citas-emp',
  },
 
  {
    navlabel: true,
    subheader: 'Mantenimiento',
  },
  {
    id: uniqueId(),
    title: 'Personas',
    icon: IconUser,
    href: '/personas-emp',
  },
  {
    id: uniqueId(),
    title: 'Clientes',
    icon: IconUserExclamation,
    href: '/clientes-emp',
  },

];

export default Menuitems;
