import React from 'react';
import {useState,useEffect} from 'react';
import { Grid, Box, Card, Typography, Stack,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/admin/shared/logo/Logo';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import { variables } from '../../Variables.js'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Register2 = () => {

  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          variables.API_URL +'TipoIdentificaciones'
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  const handleLogin = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const identificacion = document.getElementById('identificacion').value;
    const correo = document.getElementById('correo').value;
    const tipoidentificacion = 1;
    const clave = document.getElementById('clave').value;
    const idrol = 4;
    const estatus = "Activo";

    fetch(variables.API_URL+'SignUp/CrearPersona?clave='+clave+'&cliCedula='+identificacion,{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
      },
      body: JSON.stringify({
          nombre:nombre,
          apellido:apellido,
          telefono:telefono,
          identificacion:identificacion,
          correo:correo,
          idTipoIde:tipoidentificacion,
          idUsuarioNavigation:{
            clave: clave,
            estatus: estatus,
            idRol:idrol
          }

      })
      })
      .then(response=>response.json())
      .then((result)=>{
        if (result.status === 400){
          alert('Este usuario ya existe.');
        }
      })
      .catch(function (error){
        if(error.response){
            alert('Este usuario ya existe.');
        } 
        else{
            window.location.assign('/auth/login');
            alert('Usuario registrado.');
        }})
  };
  
  return (
  <PageContainer title="Register" description="Registro de usuario">
    <Box
      sx={{
        position: 'relative',
        '&:before': {
          content: '""',
          background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: '0.3',
        },
      }}
    >
      <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Logo />
            </Box>
            <Box>
            <Stack mb={3}>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px">Nombre</Typography>
                <CustomTextField id="nombre" variant="outlined" fullWidth />
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='lastname' mb="5px">Apellido</Typography>
                <CustomTextField id="apellido" variant="outlined" fullWidth />
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='phone' mb="5px">Telefono</Typography>
                <CustomTextField id="telefono" variant="outlined" fullWidth />
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='id' mb="5px">Identificacion</Typography>
                <CustomTextField id="identificacion" variant="outlined" fullWidth />
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Correo electrónico </Typography>
                <CustomTextField id="correo" variant="outlined" fullWidth />
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='tipoidentificacion' mb="5px" mt="25px">Tipo de Identificacion </Typography>
                      <TextField
                        id="tipoidentificacion"
                        select
                      >
                        {data && data.map((option) => (
                        <MenuItem key={'option.idTipoIde'} value={option.idTipoIde} >
                          {option.tipoIdentificacion1}
                        </MenuItem>
                      ))}
                      </TextField>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='clave' mb="5px" mt="25px">Clave</Typography>
                <CustomTextField id="clave" variant="outlined" fullWidth />
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth component={Link} onClick={handleLogin}>
            Registrarse 
            </Button>
          </Box>
                <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
                  <Typography color="textSecondary" variant="h6" fontWeight="400">
                  ¿Ya tienes una cuenta? 
                  </Typography>
                  <Typography 
                    component={Link}
                    to="/auth/login"
                    fontWeight="500"
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                  Inicia sesión 
                  </Typography>
                </Stack>
             
          </Card>
        </Grid>
      </Grid>
    </Box>
  </PageContainer>
 );
};
export default Register2;
