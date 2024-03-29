import React, { useContext } from 'react'
import noAvatar from '../assets/images/no-avatar.png'
import AuthService from '../services/auth.service'
import { useHistory } from 'react-router-dom'
import { Context } from '../store'
import { LOG_OUT } from '../store/action'
import { beginLoading, endLoading } from '../services/loadingBar.service'

import './scss/_userCircle.scss'

const UserCircle = ({ currentUser }) => {
    const history = useHistory()
    const [state, dispatch] = useContext(Context)

    const goToOrder = () => {
        history.push('/order-history')
    }

    const goToProfile = () => {
        history.push('/profile')
    }

    const signOut = () => {
        beginLoading(dispatch)
        dispatch({ type: LOG_OUT })
        AuthService.signOut()
        history.push('/')
        endLoading(dispatch)
    }

    return currentUser ? (
        <React.Fragment>
            <div className='user-circle'>
                <img src={currentUser?.avatarUrl ?? noAvatar} alt='Avatar' />
                <span>{currentUser?.name ?? currentUser?._id}</span>
            </div>
            <div className='profile-menu'>
                <div className='profile-menu-content'>
                    <span onClick={goToOrder}><p>Đơn hàng của tôi</p></span>
                    <span onClick={goToProfile}><p>Tài khoản của tôi</p></span>
                    <span onClick={signOut}><p>Đăng xuất</p></span>
                </div>
            </div>
        </React.Fragment>
    ) : null
}
export default UserCircle