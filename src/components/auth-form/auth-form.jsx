import React, {useState} from "react";
import "./auth.scss"

function AuthForm( {open, visible} ) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (<>
        {
            ///НУЖНО ДЛЯ СОХРАНЕНИЯ СОСТОЯНИЯ ФОРМЫ
            visible && (<div className="auth-wrapper" onMouseDown={() => open(false)}>
            <form onMouseDown={(e) => e.stopPropagation()}>
                <h3><span>Вход</span>\<span>Регистрация</span></h3>
                <input value={email} onChange={(e) =>setEmail(e.target.value)}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Войти</button>
            </form>
        </div>)
        }

</>)
}

export default AuthForm