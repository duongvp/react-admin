import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './pages/routes';
import Navigator from './components/Navigator';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <div className='grid grid-cols-6 box-sizing: border-box h-full'>
        <Navigator />
        <div className='col-span-5 border-l-2 pl-3 border-slate-700 h-full pt-2'>
          <Routes>
            {
              routes.map(item => {
                return (
                  <Route key={item.path} path={item.path} element={item.element} />
                )
              })
            }
            <Route path="dashboard/subcription" element={<DashBoard />} />
            <Route path="dashboard/revenue" element={<DashBoard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
