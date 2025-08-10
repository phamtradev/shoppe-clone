import { useRoutes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterLayout from './layouts/RegisterLayout';

const useRouteElements = () => {
  const routElements = useRoutes([
    {
      path: '/',
      element: <ProductList />,
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      ),
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      ),
    },
  ]);
  return routElements;
};

export default useRouteElements;
