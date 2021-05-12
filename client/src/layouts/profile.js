import React, { useContext } from 'react'
import avatar from '../assets/images/avatar.jpg'
import AuthService from '../services/auth.service'
import { useHistory } from 'react-router-dom'
import { Context } from '../store/store'
import { LOG_OUT } from '../store/action'

import './scss/_profile.scss'

const Profile = ({ currentUser }) => {
    const history = useHistory()
    const [state, dispatch] = useContext(Context)

    const signOut = () => {
        dispatch({ type: LOG_OUT })
        AuthService.signOut()
        history.push('/')
    }

    return currentUser ? (
        <React.Fragment>
            <div className="profile">
                <img src={avatar} alt="Avatar" />
                <span>Vu Nguyen</span>
            </div>
            <div className="profile-menu">
                <div className="profile-menu-content">
                    <span><p>Đơn hàng của tôi</p></span>
                    <span><p>Tài khoản của tôi</p></span>
                    <span onClick={signOut}><p>Đăng xuất</p></span>
                </div>
            </div>
        </React.Fragment>
    ) : null
}
export default Profile