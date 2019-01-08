import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        리액트 유아이 연습
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;