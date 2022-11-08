import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Router/Router/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router = {router}></RouterProvider>
      <ToastContainer
          position="top-center"
          autoClose={3000} />
    </div>
  );
}

export default App;
