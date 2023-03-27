import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../assets/logo.png'
import { Paper, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/auth.context';
import { useContext } from 'react';
import { RoleTypeEnum } from '../../common/enums/roleType.enum';
import { UserContext } from '../../hooks/useUser';

export const SignIn = () => {
  const {login} = useContext(AuthContext);
  const { handleSetUser } = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = `${data.get('email')}`
    const password = `${data.get('password')}`
    if (email && password) {
      const response = await login({
        email,
        password
      });
      if (response.user) {
        handleSetUser(response?.user)
        switch (response?.user.type) {
          case RoleTypeEnum.ADMIN:
            history.push("/users")
            break;
          
          case RoleTypeEnum.SUPPLIER:
            history.push("/releases")
            break;

          case RoleTypeEnum.COMPANY:
            history.push("/suppliers")
            break;
        }
      }
    }
  };

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
              {/* <Link to="/view"> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textDecoration: null }}
            >
                ACESSAR
            </Button>
              {/* </Link> */}
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