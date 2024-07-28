
import { AppBar, Toolbar, styled } from "@mui/material";
import { routePath } from "../routes/route";
import { Link } from "react-router-dom";
import logo from "./logo2.png"

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *': {
        marginRight: 20,
        fontSize: 14,
        color: 'inherit',
        textDecoration: 'none'
    }
})

const Header = () => {

    return (
        <StyledAppBar>
            <Toolbar>
                <Link to={routePath.home}>
                    <img src={logo} alt="logo" style={{ width: 150, marginBottom: 1 }} />
                </Link>
                <Link to={routePath.create}>Post a job</Link>
                <Link to={routePath.posts}>Find jobs</Link>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;