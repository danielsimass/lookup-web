import { Box } from "@mui/material"
import { SingUp } from "../../components/singup"
import { Waves } from "../../components/waves"


export const SingUpPage = () => (
        <Box>
            <SingUp />
            <div className="waves">
                <Waves />
            </div>
        </Box>
    )