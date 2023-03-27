import axios from "axios";
import { api_url } from "../common/constants";

const api = axios.create({
  baseURL: api_url,
  timeout: 5000,
});

export const getReleases = async (accountId: number, access_token: string) => {
    const res = await api.get(`/granatum/releases?access_token=${access_token}&accountId=${accountId}`);
    return res.data
}

export const getCategories = async () => {
    const res = await api.get ('/granatum/categories');
    return res.data
}

export const creatRealese = async ({valor, idCategoria, idContaBancaria, dataVencimento, descricao}: any, access_token: string ) => {
    const data = {
      description: descricao,
      value: valor,
      accountId: idContaBancaria,
      categoryId: idCategoria,
      dueDate: 2023-10-10
    }
    const res = await api.post(`/granatum/releases?access_token=${access_token}`, data);
    return res.data
}

export const getUsers = async () => {
  const res = await api.get('/users');
  return res.data
}

export const getCompanies = async () => {
  const res = await api.get('/companies');
  console.log(res.data)
  return res.data
}

export const createUser = async (data: any) => {
  console.log(data)
  const res = await api.post('/users', data)
  console.log(res)
  return res.data
}

export const getSuppliers = async () => {
  const res = await api.get('/suppliers');
  console.log(res.data)
  return res.data
}

export const createCompany = async (data: any) => {
  console.log(data)
  const res = await api.post('/companies', data)
  console.log(res)
  return res.data
}

export const createSupplier = async (data: any) => {
  console.log(data)
  const res = await api.post('/suppliers', data)
  console.log(res)
  return res.data
}

export const getAllAccounts = async (access_token: string) => {
  const res = await api.get(`/granatum/accounts?access_token=${access_token}`)
  console.log(res)
  return res.data
}

export const getAllCategories = async (access_token: string) => {
  const res = await api.get(`/granatum/categories?access_token=${access_token}`)
  console.log(res)
  return res.data
}