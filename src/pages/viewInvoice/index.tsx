import { Box, Button, Typography } from "@mui/material"
import { Console } from "console"
import { useEffect, useState } from "react"
import { AppTopBar } from "../../components/appBar"
import { ViewInvonce } from "../../components/InvoiceView"
import { NewTransactionDrawer } from "../../components/newTransactionDrawer"
import { Container } from "./styles"



export const ViewInvoicePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    useEffect(()=> {console.log(isDrawerOpen)},[isDrawerOpen])

    return (
        <Container >
            <AppTopBar />
            <NewTransactionDrawer setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
            <Box id="header-page" sx={{display: 'flex', width: '100%', justifyContent: 'space-between', px:10}}>
                <Typography  variant="h3" fontFamily={'sans-serif'}>
                    Suas Notas
                </Typography>
                <Button variant="contained" onClick={() => {setIsDrawerOpen(true)}}>
                <Typography  variant="body1" sx={{fontWeight: 'bold'}} fontFamily={'sans-serif'}>
                    Nova nota
                </Typography>
                </Button>
            </Box>
            <Box sx={{mt: 5}}>
                <ViewInvonce />
            </Box>
        </Container>
    )
}