import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import App from './App'
import Cart from './components/pages/Cart'
import CustomerService from './components/pages/CustomerService'
import Home from './components/pages/Home'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
// import Show from './context/Show'
// import Show2 from './context2/Show2'
// import Pg3 from './finalcontext/Pg3'

import FormV from './FormValidation/FormV'
import FormValidation from './FormValidation/FormValidation'
// import Count from './hooks/Count'
// import DataFetch from './hooks/DataFetch'
// import Main from './hooks/Main'
// import Test from './hooks/Test'
import Confirm from './components/pages/Confirm'
import ForgetPassword from './components/pages/ForgetPassword'
import ResetPassword from './components/pages/ResetPassword'
import AdminRoute from './components/auth/AdminRoute'
import AdminDashboard from './components/auth/AdminDashboard'
import PrivateRoute from './components/auth/PrivateRoute'
import UserDashboard from './components/auth/UserDashboard'
import Category from './components/auth/Category/Category'
import AddCategory from './components/auth/Category/AddCategory'
import EditCategory from './components/auth/Category/EditCategory'
import CategoryUpdateSuccess from './components/auth/Category/CategoryUpdateSuccess'
import AddProduct from './components/auth/Products/AddProduct'
import AllProducts from './components/auth/Products/AllProducts'
import ProductDetail from './components/pages/ProductDetail'
import Deals from './components/pages/Deals'
import Checkout from './components/pages/Checkout'
import ConfirmOrder from './components/pages/ConfirmOrder'
import PaymentElement from './components/pages/PaymentElement'
import OrderSuccess from './components/pages/OrderSuccess'

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/deals" component={Deals}/>

                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/email/confirmation/:token" component={Confirm} />
                    <Route exact path="/forgotpassword" component={ForgetPassword} />
                    <Route exact path="/user/resetpassword/:token" component={ResetPassword} />


                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/customerservice" component={CustomerService} />
                    <Route exact path="/productdetail/:productId" component={ProductDetail}/>

                    {/* admin  */}
                    <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />

                    {/* category  */}
                    <AdminRoute exact path="/admin/category" component={Category} />
                    <AdminRoute exact path="/admin/category/add" component={AddCategory} />
                    <AdminRoute exact path="/admin/category/edit/:id" component={EditCategory} />
                    <AdminRoute exact path="/admin/category/update/success" component={CategoryUpdateSuccess} />

                    {/* Product */}
                    <AdminRoute exact path="/admin/product/add" component={AddProduct}/>
                    <AdminRoute exact path="/admin/products" component = {AllProducts}/>

                    {/* user  */}
                    <PrivateRoute exact path="/user/profile" component={UserDashboard} />
                    <PrivateRoute exact path="/user/checkout" component={Checkout}/>
                    <PrivateRoute exact path="/user/confirmorder" component={ConfirmOrder}/>
                    <PrivateRoute exact path="/payment" component={PaymentElement} />
                     <PrivateRoute exact path="/success" component={OrderSuccess} />


                    {/* Validation  */}
                    <Route exact path="/form" component={FormValidation} />
                    <Route exact path="/form2" component={FormV} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes
