import Home from './pages/home/Home'
import UserList from './pages/Users/UserList'
import NewUser from './pages/NewUser/NewUser'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Analytics from './pages/Analytics/Analytics'
let routes=[
    {path:'/' , element:<Home/>},
    {path:'/analytics' , element:<Analytics/>},
    {path:'/userlist' , element:<UserList/>},
    {path:'/newuser',element:<NewUser/>},
    {path:'/products', element:<Products/>},
    {path:"/product/:productId" , element:<Product/>}
]

export default routes