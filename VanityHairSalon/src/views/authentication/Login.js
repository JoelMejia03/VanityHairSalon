import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography, Snackbar,Checkbox,FormGroup,FormControlLabel,Button } from '@mui/material';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';

// components
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/admin/shared/logo/Logo';

const Login2 = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleLogin = () => {
    const identificacion = document.getElementById('identificacion').value;
    const clave = document.getElementById('clave').value;

    fetch(`https://localhost:7112/api/Login/${identificacion} ${clave}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        // La respuesta del servidor incluye los datos del usuario si el login fue exitoso
        if (data.idRol == 1 && data.estatus === 'Activo' )
        {
          window.location.assign('/Dashboard');
          localStorage.setItem('identificacion', data.identificacion)
        }
        else if (data.idRol == 2 && data.estatus === 'Activo' ){
          window.location.assign('/Dashboard-emp');
          localStorage.setItem('identificacion', data.identificacion)
        }
        else if (data.idRol == 4 && data.estatus === 'Activo') {
          window.location.assign('/Dashboard-cl');
          localStorage.setItem('identificacion', data.identificacion)
        }
      
      })
      .catch(function (error){
        if(error.response){
            alert('Favor verificar usuario y contraseña');
        }else{
            alert('Favor verificar usuario y contraseña');
        }
    })
  };

  return (
    <PageContainer title="Login" description="Inicio de sesión de usuario">
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
              <Stack>
            <Box>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='username' mb="5px">Usuario</Typography>
                <CustomTextField id="identificacion" variant="outlined" fullWidth />
            </Box>
            <Box mt="25px">
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Clave</Typography>
                <CustomTextField id="clave" type="password" variant="outlined" fullWidth />
            </Box>
            <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Recordar este dispositivo"
                    />
                </FormGroup>
                <Typography
                    component={Link}
                    to="/"
                    fontWeight="500"
                    sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                    }}
                >
                    ¿Olvidaste tu contraseña?
                </Typography>
            </Stack>
        </Stack>
        <Box>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                component={Link}
                type="submit"
                onClick={handleLogin}
            >
                Iniciar sesión 
            </Button>
            </Box>
            <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography color="textSecondary" variant="h6" fontWeight="500">
                    ¿Ya tienes una cuenta? 
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Regístrate
                    </Typography>
                  </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
