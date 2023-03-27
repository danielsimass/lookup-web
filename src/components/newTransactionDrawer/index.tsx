import { Box, Button, FormControl, InputLabel, makeStyles, MenuItem, Select, SwipeableDrawer, TextField, Typography } from "@mui/material"
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, SyntheticEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../../hooks/useUser";
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
  const {user} = useContext(UserContext)
    // const classes = useStyles();
  const [values, setValues] = useState({
    valor: '',
    idCategoria: user.supplier.granatumAccount,
    idContaBancaria: user.supplier.granatumCategorie,
    dataVencimento: '2023-12-06',
    descricao: '',
  });


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
  const handleSubmit = async () => {
    await creatRealese(values, user.supplier.token)
    setIsDrawerOpen(false)
  }

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