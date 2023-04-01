import React from 'react';
import style from './order.module.css'
// import {useAuth} from "../../../../hooks/use-auth";
// Маш, я тут добавила хук по тому зареган пользователь или нет, чуть ниже сделала пример логики как должно работать
// import {removeUser} from '../../../../store/slices/userSlice'
// its logout - maybe for another page?
// import {useDispatch} from 'react-redux'

const Order = (props) => {
// const {isAuth, email} = useAuth();
    // // наверноое надо добавить еще остальные поля, но я их не добавляла - адрес и тд
//     const dispatch = useDispatch();
// return  isAuth ? (
//         <div>
//
// // (тут надо написать код чтчо будет если пользователь зареган, все вейлю должны идти из ее внесенных данных)
//  //   (ниже кнопка для разлогирования)
//             <button
//                 onClick={()=> dispatch(removeUser())}
//             >Log out from {email}</button>
//         </div>
//     ) : (
//         <Redirect to="/login" />
    // // its redirect to login
//     )
    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={()=>props.close()}></button>
                    <p>Your order</p>
                <div className={style.inputs_area}>
                    <label>Cleaner</label>
                    <input placeholder="Name" type="text" value={props.name}/>
                   <label>Address</label>
                    <input placeholder="Address" type="text" value={'Shavei Tsion 1'}/>
                    <label>Time</label>
                    <input type={"time"} value={props.time}/>
                    <label>Phone number</label>
                    <input placeholder={"Phone"} type={"text"}/>
                    <label>Email</label>
                    <input placeholder="Enter email" type="email"/>
                </div>
            </form>
        </div>
    );
};

export default Order;