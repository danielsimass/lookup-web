import { useEffect, useState } from 'react';
import { getUsers } from '../../services/grantumApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 160 },
  { field: 'type', headerName: 'Tipo', width: 160 },
  { field: 'email', headerName: 'ID da conta', width: 160 },
  {
    field: 'companyId',
    headerName: 'Empresa',
    width: 160,
  },
  {
    field: 'supplierId',
    headerName: 'Fornecedor',
    width: 160,
  },
];


export const UserView = () => {
  const [rows, setRows] = useState([] as any)
  useEffect(()=>{
    getAndSetRows()
},[])

  const getAndSetRows = async () => {
    const releases = await getUsers()
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