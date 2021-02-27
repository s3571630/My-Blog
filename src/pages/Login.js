import React from 'react';

export default function Login(props){
    return (
        <div className="login">
            <form>
                <div className="logo">Login</div>
                <div className="form-input">
                    <i className="fas fa-user"/>
                    <input type="text" placeholder="帳號"/>
                </div>
                <div className="form-input">
                    <i class="fas fa-lock"></i>
                    <input type="text" placeholder="密碼"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
