import { useEffect, useState } from 'react';
import { getCompanies, getUsers } from '../../services/grantumApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 160 },
  { field: 'name', headerName: 'Nome', width: 160 },
  { field: 'email', headerName: 'ID da conta', width: 160 },
  {
    field: 'cnpj',
    headerName: 'CNPJ',
    width: 160,
  },
  {
    field: 'whatsapp',
    headerName: 'Whastapp',
    width: 160,
  },
];


export const CompanyView = () => {
  const [rows, setRows] = useState([] as any)
  useEffect(()=>{
    getAndSetRows()
},[])

  const getAndSetRows = async () => {
    const releases = await getCompanies()
    setRows(releases)
    
  }
  return (
    <div style={{ height: 400, maxWidth: '90%', margin: 'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{
          boxShadow: 2,
          border: 2,
          bgcolor: '#fafafac0',
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
}