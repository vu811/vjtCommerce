import React from 'react';
import { withContainer, withLayout } from './layouts/container'
import ProductDetail from './components/productDetails/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Product from './components/products';
class App extends React.Component {
  buildPages() {
    return [
      { exact : true, path: '/', key: 'product-1', render: () => withLayout(<Product />, true) },
      { path: '/products/:productId', key: 'product-detail', render: () => withLayout(<ProductDetail />) }
    ]
  }

  render () {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            { this.buildPages().map((route) => <Route {...route} /> ) }
          </Switch>
        </Router>
      </React.Fragment>
     )
  }
}
export default withContainer(App)