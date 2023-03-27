import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { UserView } from "../../../components/UserView"
import { NewUserDrawer } from "../../../components/newUserDrawer"
import { Container } from "./styles"


export const UsersPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
         <Container >
            <NewUserDrawer setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
            <Box id="header-page" sx={{display: 'flex', width: '100%', justifyContent: 'space-between', px:10}}>
                <Typography  variant="h3" fontFamily={'sans-serif'}>
                    Usuários
                </Typography>
                <Button variant="contained" onClick={() => {setIsDrawerOpen(true)}}>
                <Typography  variant="body1" sx={{fontWeight: 'bold'}} fontFamily={'sans-serif'}>
                    Novo Usuário
                </Typography>
                </Button>
            </Box>
            <Box sx={{mt: 5}}>
            <UserView />
            </Box>
        </Container>
    )
}