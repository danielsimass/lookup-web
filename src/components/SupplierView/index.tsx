import { useEffect, useState } from 'react';
import { getSuppliers, getUsers } from '../../services/grantumApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 160 },
  { field: 'email', headerName: 'ID da conta', width: 160 },
  { field: 'paymentMethod', headerName: 'Método de pagamento', width: 160 },
  // { field: 'companyId', headerName: 'Empresa mãe', width: 160 },
  { field: 'bank', headerName: 'Banco', width: 160 },
  { field: 'account', headerName: 'Conta', width: 160 },
  { field: 'agency', headerName: 'Agência', width: 160 },
  { field: 'pixtype', headerName: 'Tipo Pix', width: 160 },
  { field: 'pixKey', headerName: 'Chave Pix', width: 160 },
];


export const SupplierView = () => {
  const [rows, setRows] = useState([] as any)
  useEffect(()=>{
    getAndSetRows()
},[])

  const getAndSetRows = async () => {
    const suppliers = await getSuppliers()
    setRows(suppliers)
    
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