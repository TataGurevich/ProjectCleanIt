import {useSelector} from "react-redux";
export function useAuth() {
    const {email, token, id} = useSelector(state => state.user);
    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}

// этот хук будет позволять смотреть авторизован пользователь или нет, нам это надо для формы заказа