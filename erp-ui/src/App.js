// import Form from "./Pages/Login page/Form";
import './Pages/Sidebar page/sidebar.css'
import {useState} from 'react'
import SideMenu from './Pages/Sidebar page/SideMenu';
import Company from './Pages/Company Page/Company';
import Customer from './Pages/Customer Page/Customer';
import Supplier from './Pages/Suppliers Page/Supplier';
import CreateProduct from './Pages/Product Page/CreateProduct';
import AllProduct from './Pages/Product Page/AllProduct';
import NewParchase from './Pages/Purchase page/NewParchase';
import Allpurchase from './Pages/Purchase page/Allpurchase';
import Stock from './Pages/Stock Page/Stock';
import NewSales from './Pages/Sales Page/NewSales';
import AllSales from './Pages/Sales Page/AllSales';
import Party from './Pages/Work order Page/Party';
import NewAdvance from './Pages/Work order Page/NewAdvance';
import AllAdvance from './Pages/Work order Page/AllAdvance';
import DepositCategory from './Pages/Deposit Page/DepositCategory';
import AllDeposit from './Pages/Deposit Page/AllDeposit';
import ExpensesCategory from './Pages/Expense Page/ExpensesCategory';
import AllExpenses from './Pages/Expense Page/AllExpenses';
// import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
//   const Dashboard = () => <h1>Dashboard</h1>;
// const Content = () => <h1>Content</h1>;
// const Courses = () => <h1>Content/Courses</h1>;
// const Videos = () => <h1>Content/Videos</h1>;
// const Design = () => <h1>Design</h1>;
// const Content2 = () => <h1>Content2</h1>;
// const Courses2 = () => <h1>Content/Courses 2</h1>;
// const Videos2 = () => <h1>Content/Videos 2</h1>;
// const Design2 = () => <h1>Design 2</h1>;
  const Dashboard = () => {
    return <h1>Dashboard</h1>
  }
  const Peoples = () => {
    return <h1>Peoples</h1>
  }
  // const Company = () => {
  //   return <Company/>
  // }
  // const Customer = () => {
  //   return <Customer/>
  // }
  // const Supplier = () => {
  //   return <h1>Peoples/Supplier</h1>
  // }
  const Products = () => {
    return <h1>Products</h1>
  }
  // const CreateProduct = () => {
  //   return <h1>Create Product</h1>
  // }
  // const AllProduct = () => {
  //   return <h1>All Product</h1>
  // }
  const Purchase = () => {
    return <h1>Purchase</h1>
  }
  // const Newpurchase = () => {
  //   return <h1>New Purchase</h1>
  // }
  // const Allpurchase = () => {
  //   return <h1>All Purchase</h1>
  // }
  // const Stock = () => {
  //   return <h1>Stock</h1>
  // }
  const Sales = () => {
    return <h1>Sales</h1>
  }
  // const NewSales = () => {
  //   return <h1>New Sales</h1>
  // }
  // const AllSales = () => {
  //   return <h1>All Sales</h1>
  // }
  const Advance = () => {
    return <h1>Advance</h1>
  }
  // const Party = () => {
  //   return <h1>Party</h1>
  // }
  // const NewAdvance = () => {
  //   return <h1>NewAdvance</h1>
  // }
  // const AllAdvance = () => {
  //   return <h1>AllAdvance</h1>
  // }
  const Deposit = () => {
    return <h1>Deposit</h1>
  }
  // const DepositCategory = () => {
  //   return <h1>DepositCategory</h1>
  // }
  // const AllDeposit = () => {
  //   return <h1>allDeposit</h1>
  // }
  const Expenses = () => {
    return <h1>Expenses</h1>
  }
  // const ExpensesCategory = () => {
  //   return <h1>ExpensesCategory</h1>
  // }
  // const AllExpenses = () => {
  //   return <h1>AllExpenses</h1>
  // }
  const OpeningBlance = () => {
    return <h1>OpeningBlance</h1>
  }
  const UpdateopeningBalance = () => {
    return <h1>UpdateopeningBalance</h1>
  }
  const DailyOpeningBalance = () => {
    return <h1>DailyOpeningBalance</h1>
  }
  const Report = () => {
    return <h1>Report</h1>
  }
  const DepositExpenses = () => {
    return <h1>DepositExpenses</h1>
  }
  const SalesProfitLoss = () => {
    return <h1>SalesProfitLoss</h1>
  }
  const Employee = () => {
    return <h1>Employee</h1>
  }
  const [inactive,setInactive]=useState(false)
  return (
    <div className="App">
    
      {/* <Form/> */}

      <Router>
        <SideMenu 
        onCollapse={(inactive)=>{
          console.log("inactive");
          setInactive(inactive)
        }} />
        <div className={`container ${inactive ? "inactive": ""}`}>
        {/* {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))} */}
        <Routes>
          <Route exact path={"/"} element={<Dashboard />}>
            
          </Route>
          <Route exact path={"/peoples"}element={<Peoples />}>
            
          </Route>
          <Route  path={"/peoples/company"}element={<Company />}>
            
          </Route>
          <Route path={"/peoples/customer"}element={<Customer />}>
            
          </Route>
          <Route path={"/peoples/supplier"}element={<Supplier />}>
            
            </Route>
          <Route path={"/products"}element={<Products />}>
            
          </Route>
          <Route path={"/products/createProduct"}element={<CreateProduct />}>
            
          </Route>
          <Route path={"/products/allProduct"}element={<AllProduct />}>
            
          </Route>
          <Route path={"/Purchase"}element={<Purchase />}>
            
          </Route>
          <Route path={"/Purchase/newPurchase"}element={<NewParchase />}>
            
          </Route>
          <Route path={"/Purchase/allPurchase"}element={<Allpurchase />}>
            
          </Route>
          <Route path={"/Stock"}element={<Stock />}>
            
          </Route>
          <Route path={"/Sales"}element={<Sales />}>
            
          </Route>
          <Route path={"/Sales/newSales"}element={<NewSales />}>
            
          </Route>
          <Route path={"/Sales/allSales"}element={<AllSales />}>
            
          </Route>
          <Route path={"/Advance"}element={<Advance />}>
            
          </Route>
          <Route path={"/Advance/party"}element={<Party />}>
            
            </Route>
          <Route path={"/Advance/newAdvance"}element={<NewAdvance />}>
            
            </Route>
          <Route path={"/Advance/allAdvance"}element={<AllAdvance />}>
            
            </Route>
          <Route path={"/Deposit"}element={<Deposit />}>
            
            </Route>
          <Route path={"/Deposit/Category"}element={<DepositCategory />}>
            
            </Route>
          <Route path={"/Deposit/allDeposit"}element={<AllDeposit />}>
            
            </Route>
          <Route path={"/Expenses"}element={<Expenses />}>
            
            </Route>
          <Route path={"/Expenses/Category"}element={<ExpensesCategory />}>
            
            </Route>
          <Route path={"/Expenses/allExpenses"}element={<AllExpenses />}>
            
            </Route>
          <Route path={"/OpeningBlance/updateopeningbalance"}element={<UpdateopeningBalance />}>
            
            </Route>
          <Route path={"/OpeningBlance"}element={<OpeningBlance />}>
            
            </Route>
          <Route path={"/OpeningBlance/dailyopeningbalance"}element={<DailyOpeningBalance />}>
            
            </Route>
          <Route path={"/report"}element={<Report />}>
            
            </Route>
          
          <Route path={"/report/deposit&expenses"}element={<DepositExpenses />}>
            
            </Route>
          <Route path={"/report/salesprofitloss"}element={<SalesProfitLoss />}>
            
            </Route>
          <Route path={"/Employee"}element={<Employee />}>
            
            </Route>
          
        </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
