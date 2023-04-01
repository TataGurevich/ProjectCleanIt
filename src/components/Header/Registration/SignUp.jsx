import {useDispatch} from 'react-redux';
import RegistrationForm from './RegistrationForm';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../../store/slices/userSlice";
import {useNavigate} from 'react-router-dom';
import TESTFormRegister from "./TESTFormRegister";


const SignUp = () => {
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleSignUp = (email, password) => {
        const auth = getAuth();
        console.log(email);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                // dispatch(setUser({
                //     email: user.email,
                //     id: user.uid
                // }));
                push("/test");
            })
            .catch(console.error)
            // (({user}) => {
                // console.log(user);
                // dispatch(setUser({
                //     email: user.email,
                //     id: user.uid,
                //     // token: user.accessToken,
                // }))
                // push('/')
            // })
            // .catch(console.error)
    }
    return(
        // <RegistrationForm
        //     handleClick={handleSignUp}
        // />
        <RegistrationForm
            handleClick={handleSignUp}
        />
    )
}


export default SignUp;
