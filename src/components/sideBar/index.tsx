import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { RoleTypeEnum } from "../../common/enums/roleType.enum";

interface ISideBar {
    role: RoleTypeEnum
}
export const SideBar = ({role}: ISideBar) => {
    console.log(role)
    console.log(RoleTypeEnum.ADMIN)
    return (
        <Sidebar style={{ height: "100vh", position: "fixed", paddingTop: "65px", backgroundColor: "rgba(224, 224, 224, 0.74)" }}>
            <Menu>
                {(role === RoleTypeEnum.ADMIN) ? (
                    <>
                    <MenuItem component={<Link to="/users" />}> Usários </MenuItem>
                    <MenuItem component={<Link to="/companies" />}> Empresas </MenuItem>
                    </>
                ) : role === RoleTypeEnum.COMPANY ?(
                <MenuItem component={<Link to="/suppliers" />}> Fornecedores </MenuItem>
                    ) : (
                <MenuItem component={<Link to="/releases" />}> Notas </MenuItem>
                    )}
            </Menu>
        </Sidebar>
    )
}