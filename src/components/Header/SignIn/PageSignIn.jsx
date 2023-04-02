import Login from "./Login";
const PageSignIn = (props) => {
    return (
        <div>
            <Login close={props.close}/>
        </div>
    )
}

export default PageSignIn;