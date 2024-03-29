import React, { useContext, useEffect } from 'react'
import { withLayout } from './layouts/container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Product from './components/product'
import ProductDetail from './components/product/detail'
import Cart from './components/checkout/cart'
import Admin from './pages/admin'
import SignIn from './components/user/signin'
import SignUp from './components/user/signup'
import Category from './components/product/category'
import { CategoryConstant } from './constants'
import PageNotFound from './layouts/pageNotFound'
import Payment from './components/checkout/payment'
import { Context } from './store'
import { SET_CURRENT_USER } from './store/action'
import ConfirmOrder from './components/checkout/confirmOrder'
import Search from './components/product/search'
import OrderHistory from './components/user/orderHistory'
import Profile from './components/user/profile'

const App = () => {
  const [,dispatch] = useContext(Context)

  useEffect(() => {
    const checkSignIn = ()  => {
      const localUser = localStorage.user
      if (localUser) {
        const data = JSON.parse(localUser)
        if (data && data.user) {
          dispatch({ type: SET_CURRENT_USER, payload: data.user })
        }
      }
    }
    checkSignIn()
  }, [dispatch])

  const buildPages = () => {
    return [
      { exact: true, path: '/', key: 'product', render: () => withLayout(<Product />) },
      { path: '/products/:productId', key: 'product-detail', render: () => withLayout(<ProductDetail />) },
      { path: '/cart', key: 'cart', render: () => withLayout(<Cart />) },
      { path: '/payment', key: 'payment', render: () => withLayout(<Payment />) },
      { path: '/confirm-order/:orderNumber', key: 'confirm-order', render: () => withLayout(<ConfirmOrder />) },
      { path: '/search', key: 'search', render: () => withLayout(<Search />) },
      { path: '/order-history', key: 'order-history', render: () => withLayout(<OrderHistory />) },
      { path: '/profile', key: 'profile', render: () => withLayout(<Profile />) },
      { path: '/love', key: 'love', render: () => withLayout(<PageNotFound h1='TBD' h2='Coming soon...' />) },
      { path: '/admin', key: 'admin', render: () => withLayout(<Admin />, true) },
      { path: '/sign-in', key: 'sign-in', render: () => withLayout(<SignIn />) },
      { path: '/sign-up', key: 'sign-up', render: () => withLayout(<SignUp />) },
      { path: `/${CategoryConstant.Climbing}.html`, key: 'climbing', render: () => withLayout(<Category />) },
      { path: `/${CategoryConstant.Camping}.html`, key: 'camping', render: () => withLayout(<Category />) },
      { path: `/${CategoryConstant.Traveling}.html`, key: 'traveling', render: () => withLayout(<Category />) },
      { path: `/${CategoryConstant.Trekking}.html`, key: 'trekking', render: () => withLayout(<Category />) },
      { path: `/${CategoryConstant.OtherThings}.html`, key: 'other-things', render: () => withLayout(<Category />) },
      { path: '/story', key: 'story', render: () => withLayout(<PageNotFound h1='TBD' h2='Coming soon...' />) },
      { path: '/blog', key: 'blog', render: () => withLayout(<PageNotFound h1='TBD' h2='Coming soon...' />) },
      { path: '/not-found', key: 'not-found', render: () => withLayout(<PageNotFound h1='OOPS!' h2='404 - Page not found' />) },
      { render: () => withLayout(<PageNotFound h1='OOPS!' h2='404 - Page not found' />) }
    ]
  }

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {buildPages().map((route) => <Route {...route} />)}
        </Switch>
      </Router>
    </React.Fragment>
  )
}
export default App