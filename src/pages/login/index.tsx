import { Box } from "@mui/material"
import { SignIn } from "../../components/login"
import { Waves } from "../../components/waves"


export const LogInPage = () => (
        <Box>
            <SignIn />
            <div className="waves">
                <Waves />
            </div>
        </Box>
    )