import React, { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful')
        }).catch(error => console.log(error))
    }
    return (
        <div>{authUser ? <><p data-testid='auth-signed-in'>{`Signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p data-testid='auth-signed-out'>Signed Out</p>}</div>
    )
}

export default AuthDetails;