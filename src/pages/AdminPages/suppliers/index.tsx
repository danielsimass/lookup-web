import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { Container } from "./styles"
import { SupplierView } from "../../../components/SupplierView"
import { NewSupplierDrawer } from "../../../components/newSupplierDrawer"


export const SuppliersPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
         <Container >
            <NewSupplierDrawer setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
            <Box id="header-page" sx={{display: 'flex', width: '100%', justifyContent: 'space-between', px:10}}>
                <Typography  variant="h3" fontFamily={'sans-serif'}>
                    Fornecedores
                </Typography>
                <Button variant="contained" onClick={() => {setIsDrawerOpen(true)}}>
                <Typography  variant="body1" sx={{fontWeight: 'bold'}} fontFamily={'sans-serif'}>
                    Novo fornecedor
                </Typography>
                </Button>
            </Box>
            <Box sx={{mt: 5}}>
            <SupplierView />
            </Box>
        </Container>
    )
}