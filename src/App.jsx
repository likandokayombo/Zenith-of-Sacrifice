import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Homepage from './pages/Homepage';


import Error from './pages/Error.jsx'


// Layout component that includes the Header and nested routes
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />  {/* This renders the nested route components */}
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      
      
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;

};

export default App;