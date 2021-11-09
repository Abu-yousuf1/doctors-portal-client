import authInitialize from "../Pages/Login/firebase/firebase.init"
import { getAuth, updateProfile, signInWithPopup, getIdToken, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

authInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth();

    //Google sign in...................
    const googleSignIn = (location, history) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                console.log(user);
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError("")
            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false))
    }

    // user Sign up..................
    const registration = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                setError("")
                history.replace('/')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // user sign in..................
    const userSignIn = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError("")
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    //user observation .................
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else {
                setUser({})

            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // log out user...............
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setError("")
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // save user in database................
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())

    }


    return {
        user,
        isLoading,
        registration,
        googleSignIn,
        userSignIn,
        logout,
        error,
        admin,
        token
    }


}
export default useFirebase;