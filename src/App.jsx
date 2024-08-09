// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashboardSection from './Components/Dashboard';
import Pros from './Components/Pros';
import Order from './Components/Order';
import OrderStatusScreen from './Components/OrderStatusScreen';
import ExpensesSection from './Components/Expenses';
import CustormersSection from './Components/Customers';
import ServicesSection from './Components/Services';
import ReportsSection from './Components/Reports';
import SettingsSection from './Components/Settings';
function App() {
  return (
    <Router>
      <div className="flex">
        <div className="w-60 min-h-screen  bg-white shadow-md shadow-gray-500 text-gray-700 ">
         <div className="text-center sm:text-2xl py-4 flex items-center border-b border-gray-100">
            <img src="https://media.istockphoto.com/id/2155231611/photo/green-recycle-symbol-on-isolated-on-transparent-background-png-file.jpg?s=2048x2048&w=is&k=20&c=dgrGy0INQn9dRzKo3YM7r6v336sz-GpR4FUBLgaGzDU=" className="h-10 w-10 mx-2" alt="Logo" />
            <span className="font-bold">YB</span> <span className="font-normal pl-1">LAUNDARY</span>
          </div>
          <ul className="text-gray-700 font-semibold flex gap-y-3 flex-col">
            <li className="p-2 flex items-center gap-x-3 mx-2 cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <Link to="/"> Dashboard</Link>
            </li>
            <li className="p-2 flex items-center gap-x-3 mx-2 cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" /></svg>
              <Link to="/pros"> Pros</Link>
            </li>
            <li className="p-2 flex items-center mx-2 gap-x-3 cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" /></svg>
              <Link to="/order">Order</Link>
            </li>
            <li className="p-2 flex items-center mx-2 gap-x-3 cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
              <Link to="/order-status">Order Status Screen</Link>
            </li><li className='flex items-center mx-2 justify-between cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md'>
            <div className="p-2 flex items-center gap-x-3 cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" /></svg>
              <Link to="/expenses">Expenses</Link>
            </div>
             <div className='mx-2'><img src="./Icons/leftArrow.png" className='h-4 w-4'></img></div>
            </li>
            <li className="p-2 flex items-center mx-2 gap-x-3 cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              <Link to="/customers">Customers</Link>
            </li>
          <li className='flex items-center mx-2 justify-between cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md'>
            <div className="p-2 flex items-center gap-x-3">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
              <Link to="/services">Services</Link>
            </div>
            <div className='mx-2'><img src="./Icons/leftArrow.png" className='h-4 w-4'></img></div>
          </li>
           <li className='flex items-center mx-2 justify-between cursor-pointer hover:bg-[#17A2B7] hover:text-white rounded-md'> <div className="p-2 flex items-center gap-x-3">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
              <Link to="/reports">Reports</Link>
            </div>
            <div className='mx-2'><img src="./Icons/leftArrow.png" className='h-4 w-4'></img></div>
          </li>
          <li className='flex items-center px-2 justify-between cursor-pointer  hover:bg-[#17A2B7] hover:text-white rounded-md'>
            <div className="p-2 flex items-center gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
             <Link to="/settings">Settings </Link>
            </div>
            <div className='mx-2'><img src="./Icons/leftArrow.png" className='h-4 w-4'></img></div>
          </li>
          </ul>
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<DashboardSection />} />
            <Route path="/pros" element={<Pros />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-status" element={<OrderStatusScreen />} />
            <Route path="/expenses" element={<ExpensesSection />} />
            <Route path="/customers" element={<CustormersSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/reports" element={<ReportsSection />} />
            <Route path="/settings" element={<SettingsSection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;




