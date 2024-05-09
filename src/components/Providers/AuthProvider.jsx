import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";

export const authContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createuser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const userInfo = {
        user,
        loading,
        createuser,
    }
    
    return (
        <div>
            <authContext.Provider value={userInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;