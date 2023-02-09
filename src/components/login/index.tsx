import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../assets/logo.png'
import { Paper, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

export const SignIn = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    history.push("/view")
  };

  const history = useHistory()

  return (
    
      <Container component="main" maxWidth="xs">
       
        <CssBaseline />
        <Paper
          sx={{
            p: 5,
            marginTop: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fafafac'
          }}
        >
            <img src={logo} alt='' style={{width: '230px'}}/>
            <Typography variant='h5' color="secondary.main">
              Bem vindo!
            </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              name="email"
              autoComplete="email"
              autoFocus
              variant='standard'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              variant='standard'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ACESSAR
            </Button>
            <Link to="/singup" >
              <Typography color={'primary.main'} style={{textDecoration: 'none'}} >
                Registre-se
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Container>
  );
}