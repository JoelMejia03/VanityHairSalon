import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/admin/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/admin/FullLayout')));
const FullLayout_cl = Loadable(lazy(() => import('../layouts/full/cliente/FullLayout')));
const FullLayout_emp = Loadable(lazy(() => import('../layouts/full/empleado/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
//Admin
const Citas = Loadable(lazy(() => import('../views/reservas/admin/citas')))
const Historial = Loadable(lazy(() => import('../views/reservas/admin/historial')))
const Cliente = Loadable(lazy(() => import('../views/mantenimientos/admin/cliente')))
const Empleado = Loadable(lazy(() => import('../views/mantenimientos/admin/empleado')))
const Especialidad = Loadable(lazy(() => import('../views/mantenimientos/admin/especialidad')))
const Persona = Loadable(lazy(() => import('../views/mantenimientos/admin/persona')))
const Rol = Loadable(lazy(() => import('../views/mantenimientos/admin/rol')))
const Servicio = Loadable(lazy(() => import('../views/mantenimientos/admin/servicio')))
const TipoIdentificacion = Loadable(lazy(() => import('../views/mantenimientos/admin/tipoidentificacion')))
const Usuario = Loadable(lazy(() => import('../views/mantenimientos/admin/usuario')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

//Cliente
const Citas_cl = Loadable(lazy(() => import('../views/reservas/cliente/citas_cl')))
const Historial_cl = Loadable(lazy(() => import('../views/reservas/cliente/historial_cl')))

//Empleado
const Citas_emp = Loadable(lazy(() => import('../views/reservas/empleado/citas_emp')))
const Historial_emp = Loadable(lazy(() => import('../views/reservas/empleado/historial_emp')))
const Persona_emp = Loadable(lazy(() => import('../views/mantenimientos/empleado/persona_emp')))
const Cliente_emp = Loadable(lazy(() => import('../views/mantenimientos/empleado/cliente_emp')))

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      //admin
      { path: '/', element: <Navigate to="/auth/login" /> },
      { path: '/citas', exact: true, element: <Citas /> },
      { path: '/historial-citas', exact: true, element: <Historial /> },
      { path: '/clientes', exact: true, element: <Cliente /> },
      { path: '/empleados', exact: true, element: <Empleado /> },
      { path: '/especialidades', exact: true, element: <Especialidad /> },
      { path: '/personas', exact: true, element: <Persona /> },
      { path: '/roles', exact: true, element: <Rol /> },
      { path: '/servicios', exact: true, element: <Servicio /> },
      { path: '/usuarios', exact: true, element: <Usuario /> },
      { path: '/tipoidentificaciones', exact: true, element: <TipoIdentificacion /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },

    ],
  },
  {
    path: '/',
      element: <FullLayout_cl />,
      children: [
        //cliente
    { path: '/citas-cl', exact: true, element: <Citas_cl /> },
    { path: '/historial-citas-cl', exact: true, element: <Historial_cl /> },
        

      ],
    },

    {
      path: '/',
        element: <FullLayout_emp />,
        children: [
        //empleado
        { path: '/citas-emp', exact: true, element: <Citas_emp /> },
        { path: '/historial-citas-emp', exact: true, element: <Historial_emp /> },
        { path: '/clientes-emp', exact: true, element: <Cliente_emp /> },
        { path: '/personas-emp', exact: true, element: <Persona_emp /> },
  
        ],
      },

  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
