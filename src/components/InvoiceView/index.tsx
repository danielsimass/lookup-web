import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getReleases } from '../../services/grantumApi';
import { release } from 'os';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 160 },
  { field: 'categoria_id', headerName: 'ID da categoria', width: 160 },
  { field: 'conta_id', headerName: 'ID da conta', width: 160 },
  {
    field: 'data_vencimento',
    headerName: 'Vencimento',
    width: 160,
  },
  {
    field: 'data_pagamento',
    headerName: 'Pago em',
    width: 160,
  },
  {
    field: 'descricao',
    headerName: 'Descrição',
    width: 160,
  },
];


export const ViewInvonce = () => {
  const [rows, setRows] = useState([] as any)
  useEffect(()=>{
    getAndSetRows()
},[])

  const getAndSetRows = async () => {
    const releases = await getReleases(102775)
    setRows(releases)
    
  }
  return (
    <div style={{ height: 400, maxWidth: '80%', margin: 'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{
          boxShadow: 2,
          border: 2,
          bgcolor: '#fff',
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
}