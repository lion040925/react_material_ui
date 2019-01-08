import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { auth, googleAuthProvider } from './firebase'

class LoginModule extends Component {
    render() {
        return (
            <div>
                <Button color="secondary" variant="raised" onClick={( ) => auth.signInWithPopup(googleAuthProvider)}>
                    Signup/Login
                </Button>    
            </div>
        );
    }
}

export default LoginModule;
