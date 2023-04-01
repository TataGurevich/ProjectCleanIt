import{useDispatch} from 'react-redux';
import {setUser} from '../../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SignInForm from "./SignInForm";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    // token: user.accessToken,
                }))
                push('/')
            })
            .catch(() => alert('Invalid User'))
    }
        return(
            <SignInForm
            handleClick={handleLogin}
            />
        )

}

export default Login