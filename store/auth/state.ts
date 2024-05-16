import {I_AuthState} from "~/models/store/auth/interfaces";



const state: I_AuthState = {
    users: [
        {name: 'User', email: 'user@mail.ru', phone: '123123', password: 'password1.', confirmPassword: 'password'},
    ],
    userToken: null
}

export default state