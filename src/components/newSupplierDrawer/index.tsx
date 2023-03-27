import { Box, Button, capitalize, FormControl, InputLabel, makeStyles, MenuItem, Select, SwipeableDrawer, TextField, Typography } from "@mui/material"
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, SyntheticEvent, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RoleTypeEnum } from "../../common/enums/roleType.enum";
import { UserContext } from "../../hooks/useUser";
import { createCompany, createSupplier, createUser, creatRealese, getAllAccounts, getAllCategories, getCategories, getCompanies } from "../../services/grantumApi";

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


export const NewSupplierDrawer = ({isDrawerOpen, setIsDrawerOpen}: any) => {
  const {user} = useContext(UserContext)
    // const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    cnpj: "",
    whatsapp: "",
    email: "",
    paymentMethod: "",
    company: null,
    bank: "",
    account: "",
    agency: "",
    pixtype: "",
    pixKey: "",
    token: user?.company.token,
    granatumAccount: null,
    granatumCategorie: null,
  });
  const [companies, setCompanies] = useState([] as Array<Company>)
  const [accounts, setAccounts] = useState([] as any)
  const [categories, setCategories] = useState([] as any)

  const handleChange = (name: string) => (event: { target: { value: any; }; }) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const cleanValues = () => {
    setValues({
      name: "",
      cnpj: "",
      whatsapp: "",
      email: "",
      paymentMethod: "",
      company: null,
      bank: "",
      account: "",
      agency: "",
      pixtype: "",
      pixKey: "",
      token: user?.company.token,
      granatumAccount: null,
      granatumCategorie: null,
    })
  }

  const getAndSetCompanies = async () => {
    const response = await getCompanies()
    setCompanies(response)
  }

  const getAndSetAccounts = async () => {
    const response = await getAllAccounts(user?.company.token)
    console.log(response)
    setAccounts(response)
  }

  const getAndSetCategories = async () => {
    const response = await getAllCategories(user?.company.token)
    console.log(response)
    setCategories(response)
  }

  useEffect(() => {
    getAndSetCompanies()
    getAndSetAccounts()
    getAndSetCategories()
  },[])

  const handleSubmit = async () => {
    const response = await createSupplier(values)
    if (response) {
      toast.success('Fornecedor criado com sucesso!')
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
            Criar novo fornecedor
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
          label="Método de pagamento"
          type="text"
          value={values.paymentMethod}
          onChange={handleChange('paymentMethod')}
          margin="normal"
          fullWidth
        />
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
        <TextField
          label="Banco"
          type="text"
          value={values.bank}
          onChange={handleChange('bank')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Agência"
          type="text"
          value={values.agency}
          onChange={handleChange('agency')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Conta"
          type="text"
          value={values.account}
          onChange={handleChange('account')}
          margin="normal"
          fullWidth
        />
        <FormControl sx={{ width: "100%", mt: 3 }}>
        <InputLabel htmlFor="idCategoria-select">Tipo chave Pix</InputLabel>
        <Select
            size='medium'
            sx={{width: '100%'}}
            value={values.pixtype}
            onChange={handleChange('pixtype')}
        >
          <MenuItem key={'cellphone'} value={'cellphone'}>
            Telefone
          </MenuItem>
          <MenuItem key={'cnpj'} value={'cnpj'}>
            CNPJ
          </MenuItem>
          <MenuItem key={'email'} value={'email'}>
            Email
          </MenuItem>
            
        </Select>
      </FormControl>
        <TextField
          label="Chave Pix"
          type="text"
          value={values.pixKey}
          onChange={handleChange('pixKey')}
          margin="normal"
          fullWidth
        />

        <FormControl sx={{ width: "100%", mt: 3 }}>
        <InputLabel htmlFor="idCategoria-select">Conta da granatum</InputLabel>
        <Select
            size='medium'
            sx={{width: '100%'}}
            value={values.granatumAccount}
            onChange={handleChange('granatumAccount')}
        >
          {accounts && accounts.map((account: { id: number; descricao: string; }) => (
            <MenuItem key={account.id} value={account.id}>
            {account.descricao}
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "100%", mt: 3 }}>
        <InputLabel htmlFor="idCategoria-select">Categoria Granatum</InputLabel>
        <Select
            size='medium'
            sx={{width: '100%'}}
            value={values.granatumCategorie}
            onChange={handleChange('granatumCategorie')}
        >
          {categories && categories.map((category: { id: number; descricao: string; }) => (
            <MenuItem key={category.id} value={category.id}>
            {category.descricao}
          </MenuItem>
          ))}
        </Select>
      </FormControl>

        <Box sx={{width: '400px', display: 'flex', gap: 5, mt: 5}}>
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