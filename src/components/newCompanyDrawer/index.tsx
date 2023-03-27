import { Box, Button, capitalize, FormControl, InputLabel, makeStyles, MenuItem, Select, SwipeableDrawer, TextField, Typography } from "@mui/material"
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, SyntheticEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RoleTypeEnum } from "../../common/enums/roleType.enum";
import { createCompany, createUser, creatRealese, getCategories, getCompanies } from "../../services/grantumApi";

interface Company {
  id: number;
  name: string;
  cnpj: string;
  whatsapp: string;
  email: string;
  token: string;
}


export const NewCompanyDrawer = ({isDrawerOpen, setIsDrawerOpen}: any) => {
    // const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    cnpj: "",
    whatsapp: "",
    email: "",
    token: "",
  });


  const handleChange = (name: string) => (event: { target: { value: any; }; }) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const cleanValues = () => {
    setValues({
      name: "",
      cnpj: "",
      whatsapp: "",
      email: "",
      token: "",
    })
  }

  const handleSubmit = async () => {
    const response = await createCompany(values)
    if (response) {
      toast.success('Empresa criada com sucesso!')
      setIsDrawerOpen(false)
    }
  }

    return (
        <SwipeableDrawer
            anchor={'right'}
            open={isDrawerOpen} 
            onClose={cleanValues} 
            onOpen={cleanValues}
        >
        <Typography variant='h5' fontFamily={'sans-serif'} sx={{fontWeight: '500', mt: 3, ml: 3}}>
            Criar nova empresa
        </Typography>
        <form onSubmit={handleSubmit} style={{maxWidth: '500px', padding: '10px 60px'}}>
        <TextField
          label="Nome"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="CNPJ"
          type="text"
          value={values.cnpj}
          onChange={handleChange('cnpj')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Whatsapp"
          type="text"
          value={values.whatsapp}
          onChange={handleChange('whatsapp')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="email"
          type="text"
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Token Granatum"
          type="text"
          value={values.token}
          onChange={handleChange('token')}
          margin="normal"
          fullWidth
        />

        <Box sx={{position: 'absolute', width: '400px', bottom: 35, display: 'flex', gap: 5}}>
        <Button variant="contained" color="primary" sx={{width: '100px'}} onClick={() => {handleSubmit()}}>
          Enviar
        </Button>
        <Button variant="contained" color="inherit" sx={{width: '100px'}} onClick={() => {setIsDrawerOpen(false)}}>
          Cancelar
        </Button>
        </Box>
      </form>
    </SwipeableDrawer>
    )
}