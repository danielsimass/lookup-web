import { Box, Button, FormControl, InputLabel, makeStyles, MenuItem, Select, SwipeableDrawer, TextField, Typography } from "@mui/material"
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, SyntheticEvent, useEffect, useState } from "react";
import { creatRealese, getCategories } from "../../services/grantumApi";

interface Categorie {
    id: number;
    descricao: string;
    cor: string;
    wgi_usuario_id: number;
    ativo: boolean;
    categorias_filhas: any[];
}


export const NewTransactionDrawer = ({isDrawerOpen, setIsDrawerOpen}: any) => {
    // const classes = useStyles();
  const [values, setValues] = useState({
    valor: '',
    idCategoria: '',
    idContaBancaria: 102775,
    dataVencimento: '2023-12-06',
    descricao: '',
  });
  const [categories, setCategories] = useState([] as Array<Categorie>)


  const handleChange = (name: string) => (event: { target: { value: any; }; }) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const cleanValues = () => {
    setValues({
    valor: '',
    idCategoria: '',
    idContaBancaria: 102775,
    dataVencimento: '2023-12-06',
    descricao: '',
    })
  }

  const getAndSetCategories = async () => {
    if (categories.length < 2) {
        const cats = await getCategories()
        setCategories(cats)
    }

  }
  const handleSubmit = async () => {
    console.log('aqui')
    await creatRealese(values)
    setIsDrawerOpen(false)
  }
  
  useEffect(() => {
    getAndSetCategories()
  },[])

    return (
        <SwipeableDrawer
            anchor={'right'}
            open={isDrawerOpen} 
            onClose={cleanValues} 
            onOpen={cleanValues}
      >
        <Typography variant='h5' fontFamily={'sans-serif'} sx={{fontWeight: '500', mt: 3, ml: 3}}>
            Criar nova nota
        </Typography>
        <form onSubmit={handleSubmit} style={{maxWidth: '500px', padding: '10px 60px'}}>
      <TextField
        label="Valor"
        type="number"
        value={values.valor}
        onChange={handleChange('valor')}
        margin="normal"
        fullWidth
      />
      <FormControl sx={{ width: "100%", mt: 3 }}>
        <InputLabel htmlFor="idCategoria-select">Categoria</InputLabel>
        <Select
            size='medium'
            sx={{width: '100%'}}
          value={values.idCategoria}
          onChange={handleChange('idCategoria')}
          inputProps={{
            name: 'idCategoria',
            id: 'idCategoria-select',
          }}
        >
          {categories.map((categorie: Categorie) => (
            <MenuItem key={categorie.id} value={categorie.id}>
              {categorie.descricao}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "100%", mt: 3 }}>
        <InputLabel htmlFor="idContaBancaria-select">Conta Bancária</InputLabel>
        <Select   
          size='medium'
          sx={{width: '100%'}}
          value={values.idContaBancaria}
          onChange={handleChange('idContaBancaria')}
          inputProps={{
            name: 'idContaBancaria',
            id: 'idContaBancaria-select',
          }}
        >
            <MenuItem key={102775} value={102775} defaultChecked>
              NU Pagamentos S.A
            </MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Data de Vencimento"
        type="string"
        value={values.dataVencimento}
        onChange={handleChange('dataVencimento')}
        margin="normal"
        fullWidth
        disabled
        defaultValue='2023-12-06'
        />
          <TextField
            label="Descrição"
            type="string"
            value={values.descricao}
            onChange={handleChange('descricao')}
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