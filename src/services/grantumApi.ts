import axios from "axios";
const acess_token = 'b3447ff8e13e018e6b10a404490e7c959c3b13434c4fdfc43bab8b26c30e8113'
const url = 'https://api.granatum.com.br/v1'
const api = axios.create();
// var request = require('request');

export const getReleases = async (accountId: number) => {
    const url = 'https://api.granatum.com.br/v1/lancamentos?access_token=b3447ff8e13e018e6b10a404490e7c959c3b13434c4fdfc43bab8b26c30e8113&conta_id=102775';
    const config = {
      method: 'GET',
      url: url,
    };
    const res = await axios(config);
    console.log(res.data)
    return res.data
}

export const getCategories = async () => {
  
  const url = 'https://api.granatum.com.br/v1/categorias?access_token=b3447ff8e13e018e6b10a404490e7c959c3b13434c4fdfc43bab8b26c30e8113';
    const config = {
      method: 'GET',
      url: url,
    };
    const res = await axios(config);
    console.log(res.data)
    return res.data
}

export const creatRealese = async ({valor, idCategoria, idContaBancaria, dataVencimento, descricao}: any ) => {
  const url = 'https://api.granatum.com.br/v1/lancamentos?access_token=b3447ff8e13e018e6b10a404490e7c959c3b13434c4fdfc43bab8b26c30e8113';
    const config = {
      method: 'POST',
      url: url,
      data: {
        descricao: descricao,
        conta_id: idContaBancaria,
        categoria_id: idCategoria,
        valor: valor,
        data_vencimento: dataVencimento
      }
    };
    console.log(config.data)
  axios(config);
}