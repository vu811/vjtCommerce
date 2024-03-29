import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Header from './header'
import Footer from './footer'
import ContactBox from './contactBox'
import ScrollTop from '../components/common/scrollTop'
import { Context } from '../store'
import color from '../assets/scss/_colors.scss'
import LoadingBar from 'react-top-loading-bar'
import { SET_LOADING_BAR } from '../store/action'

import './scss/_defaultLayout.scss'

const DefaultLayout = (props) => {

  const [state, dispatch] = useContext(Context)

  return (
    <React.Fragment>
      <Header />
      <main className='wrap'>
        <Container className='main'>
          {props.children}
        </Container>
      </main>
      <Footer />
      <ContactBox />
      <ScrollTop />
      <LoadingBar
        height={3}
        waitingTime={600}
        color={color.loading_bar_color}
        progress={state.progress}
        onLoaderFinished={() => dispatch({ type: SET_LOADING_BAR, payload: 0 })} 
      />
    </React.Fragment>
  )
}

export default DefaultLayout
