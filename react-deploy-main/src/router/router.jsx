import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import PageHome from '@Pages/PageHome';
import PageProducts from '@Pages/PageProducts';
import PageProductDetails from '@Pages/PageProductDetails';
import MainMenu from '@layout/MainMenu';


export const routes = [
  { title: 'Home', path: '/', component: PageHome, isShowMenu: true },
  { title: 'Products', path: '/products', component: PageProducts, isShowMenu: true },
  { title: 'Details Product', path: '/product/:id', component: PageProductDetails, isShowMenu: false },
]

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainMenu />}>
    {routes.map(i => 
        <Route key={i.path} path={i.path} element={<i.component />} />)
    }
  </Route>
), {basename: "/react-deploy"});


 export {router}