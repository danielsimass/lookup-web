import { Box, Button, capitalize, FormControl, InputLabel, makeStyles, MenuItem, Select, SwipeableDrawer, TextField, Typography } from "@mui/material"
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, SyntheticEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RoleTypeEnum } from "../../common/enums/roleType.enum";
import { createUser, creatRealese, getCategories, getCompanies, getSuppliers } from "../../services/grantumApi";

interface Company {
  id: number;
  name: string;
  cnpj: string;
  whatsapp: string;
  email: string;
  token: string;
}

interface Company {
  id: number;
  name: string;
  cnpj: string;
  whatsapp: string;
  email: string;
  paymentMethod: string;
  companyId: number;
  bank: string;
  account: string;
  agency: string;
  pixType: string;
  pixKey: string;
}


export const NewUserDrawer = ({isDrawerOpen, setIsDrawerOpen}: any) => {
    // const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
    company: null,
    supplier: null
  });
  const [companies, setCompanies] = useState([] as Array<Company>)
  const [suppliers, setSuppliers] = useState([] as Array<Company>)


  const handleChange = (name: string) => (event: { target: { value: any; }; }) => {
    console.log(event.target.value)
    setValues({ ...values, [name]: event.target.value });
  };

  const cleanValues = () => {
    setValues({
      name: '',
      email: '',
      password: '',
      type: '',
      company: null,
      supplier: null
    })
  }

  const getAndSetCompanies = async () => {
    const response = await getCompanies()

    setCompanies(response)

  }

  const getAndSetSuppliers = async () => {
    const response = await getSuppliers()

    setSuppliers(response)

  }

  const handleSubmit = async () => {
    const response = await createUser(values)
    if (response) {
      toast.success('Usuário criado com sucesso!')
      setIsDrawerOpen(false)
    }
  }
  
  useEffect(() => {
    getAndSetCompanies()
    getAndSetSuppliers()
  },[])

    return (
        <SwipeableDrawer
            anchor={'right'}
            open={isDrawerOpen} 
            onClose={cleanValues} 
            onOpen={cleanValues}
      >
        <Typography variant='h5' fontFamily={'sans-serif'} sx={{fontWeight: '500', mt: 3, ml: 3}}>
            Criar novo usuário
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
      <FormControl sx={{ width: "100%", mt: 3 }}>
        <InputLabel htmlFor="idCategoria-select">Categoria</InputLabel>
        <Select
            size='medium'
            sx={{width: '100%'}}
          value={values.type}
          onChange={handleChange('type')}
        >
          <MenuItem key={RoleTypeEnum.ADMIN} value={RoleTypeEnum.ADMIN}>
              Administrador
          </MenuItem>
          <MenuItem key={RoleTypeEnum.COMPANY} value={RoleTypeEnum.COMPANY}>
              Empresa
          </MenuItem>
          <MenuItem key={RoleTypeEnum.SUPPLIER} value={RoleTypeEnum.SUPPLIER}>
              Fornecedor
          </MenuItem>
        </Select>
      </FormControl>
      
      <TextField
        label="E-mail"
        type="string"
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Senha"
        type="password"
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"
        fullWidth
      />
      {values.type === RoleTypeEnum.COMPANY && (
        <FormControl sx={{ width: "100%", mt: 3 }}>
        <InputLabel htmlFor="idCategoria-select">Empresa</InputLabel>
        <Select
            size='medium'
            sx={{width: '100%'}}
          value={values.company}
          onChange={handleChange('company')}
        >
          {companies && companies.map(company => (
            <MenuItem key={company.id} value={company.id}>
            {capitalize(company.name)}
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      )}

        {values.type === RoleTypeEnum.SUPPLIER && (
          <FormControl sx={{ width: "100%", mt: 3 }}>
          <InputLabel htmlFor="idCategoria-select">Fornecedor</InputLabel>
          <Select
              size='medium'
              sx={{width: '100%'}}
              value={values.supplier}
              onChange={handleChange('supplier')}
          >
          {suppliers && suppliers.map(supplier => (
            <MenuItem key={supplier.id} value={supplier.id}>
              {capitalize(supplier.name)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      )}

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