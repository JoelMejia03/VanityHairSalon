import {
   IconLayoutDashboard, IconCalendar, IconCalendarDue, IconUser, IconUserExclamation,IconUserCheck,IconListDetails,IconUserX,IconCheckupList,IconCards,IconUsers
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
   {
    navlabel: true,
    subheader: 'Reservas',
  },
  {
    id: uniqueId(),
    title: 'Citas',
    icon: IconCalendar,
    href: '/citas',
  },
  {
    id: uniqueId(),
    title: 'Historial',
    icon: IconCalendarDue,
    href: '/historial-citas',
  },
 
  {
    navlabel: true,
    subheader: 'Mantenimiento',
  },
  {
    id: uniqueId(),
    title: 'Personas',
    icon: IconUser,
    href: '/personas',
  },
  {
    id: uniqueId(),
    title: 'Clientes',
    icon: IconUserExclamation,
    href: '/clientes',
  },
  {
    id: uniqueId(),
    title: 'Empleados',
    icon: IconUserCheck,
    href: '/empleados',
  },
  {
    id: uniqueId(),
    title: 'Especialidades',
    icon: IconListDetails,
    href: '/especialidades',
  },
  {
    id: uniqueId(),
    title: 'Roles',
    icon: IconUserX,
    href: '/roles',
  },
  {
    id: uniqueId(),
    title: 'Servicios',
    icon: IconCheckupList,
    href: '/servicios',
  },
  {
    id: uniqueId(),
    title: 'Tipo de Identificacion',
    icon: IconCards,
    href: '/tipoidentificaciones',
  },
  {
    id: uniqueId(),
    title: 'Usuarios',
    icon: IconUsers,
    href: '/usuarios',
  },
];

export default Menuitems;
