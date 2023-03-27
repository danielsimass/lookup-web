import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { CompanyView } from "../../../components/CompanyView"
import { Container } from "./styles"
import { NewCompanyDrawer } from "../../../components/newCompanyDrawer"


export const CompaniesPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
         <Container >
            <NewCompanyDrawer setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
            <Box id="header-page" sx={{display: 'flex', width: '100%', justifyContent: 'space-between', px:10}}>
                <Typography  variant="h3" fontFamily={'sans-serif'}>
                    Empresas
                </Typography>
                <Button variant="contained" onClick={() => {setIsDrawerOpen(true)}}>
                <Typography  variant="body1" sx={{fontWeight: 'bold'}} fontFamily={'sans-serif'}>
                    Nova empresa
                </Typography>
                </Button>
            </Box>
            <Box sx={{mt: 5}}>
            <CompanyView />
            </Box>
        </Container>
    )
}