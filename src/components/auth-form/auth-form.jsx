import React, {useState} from "react";
import "./auth.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, fetchAuthRegister, isAuthSelector} from "../../redux/slices/authSlice";

function AuthForm( {open, visible, setVisible} ) {
    const isAuth = useSelector(isAuthSelector)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login,setLogin] = useState(true)
    const dispatch = useDispatch()
    const onSubmit = async (ev) => {
        ev.preventDefault()
        if (login) {
          const data = await dispatch(fetchAuth({email,password}))
            if (data.payload !== undefined) {
                localStorage.setItem("token",data.payload.token)
                setVisible(false)
                setEmail("")
                setPassword("")
            }
            else {
                window.alert("Ваши данные не верны")
            }
        }
        else {
            const data = await dispatch(fetchAuthRegister({email,password}))
            console.log(data)
            if (data.payload !== undefined) {
                localStorage.setItem("token",data.payload.token)
                setVisible(false)
                setEmail("")
                setPassword("")
            }
            else {
                window.alert("Ваши данные не верны")
            }
        }

    }
    return (<>
        {
            visible && !isAuth && (<div className="auth-wrapper" onMouseDown={() => open(false)}>
            <form onSubmit={onSubmit} onMouseDown={(e) => e.stopPropagation()}>
                <h1>
                    <span onClick={()=>setLogin(true)} className={login && "chosen"}>Вход</span>
                    &nbsp;\&nbsp;
                    <span onClick={()=>setLogin(false)} className={!login && "chosen"}>Регистрация</span>
                </h1>
                <input required type="email" placeholder="e-mail" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                <input required type="password" minLength={5} placeholder="пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {
                    login ?
                        <button className='form-btn' type="submit">Войти</button>
                        :
                        <button className='form-btn' type="submit">Регистрация</button>
                }
            </form>
        </div>)
        }

</>)
}

export default AuthForm