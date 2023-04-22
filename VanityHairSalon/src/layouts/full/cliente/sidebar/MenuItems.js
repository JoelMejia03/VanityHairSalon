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
    href: '/citas-cl',
  },
  {
    id: uniqueId(),
    title: 'Historial',
    icon: IconCalendarDue,
    href: '/historial-citas-cl',
  },
 
];

export default Menuitems;
