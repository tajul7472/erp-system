import { useState, useEffect } from 'react'
import logo from '../../Icons/logo.png'
import MenuItem from './MenuItem'


export const menuItems = [
    {
        name: "Dashboard",
        exact: true,
        to: "/",
        iconClassName: "bi bi-speedometer2",
    },
    {
        name: "Peoples",
        exact: true,
        to: `/peoples`,
        iconClassName: "bi bi-people",
        subMenus: [
            {
                name: "Company",
                exact: true,
                to: "/peoples/company",
                
                subMenus1: [
                    { name: "Courses1", to: "/peoples/Courses1" },
                    { name: "Courses2", to: "/peoples/Courses2" },
                ]
            },
            { name: "Customer", to: "/peoples/customer", },
            { name: "Supplier", to: "/peoples/supplier" },
        ],

    },
    {
        name: "Products",
        to: `/products`,
        iconClassName: "bi bi-file-earmark-plus",

        subMenus: [
            { name: "Create Product", to: "/products/createProduct", },
            { name: "All Product", to: "/products/allProduct" },
        ]

    },
    {
        name: "Purchase",
        to: `/Purchase`,
        iconClassName: "bi bi-cart-plus-fill",
        subMenus: [
            { name: "New Purchase", to: "/Purchase/newPurchase", },
            { name: "All Purchase", to: "/Purchase/allPurchase" },
        ]
       
    },
    {
        name: "Stock",
        to: `/Stock`,
        iconClassName: "bi bi-stack",
       
    },
    {
        name: "Sales",
        to: `/Sales`,
        iconClassName: "bi bi-box-arrow-right",
        subMenus: [
            { name: "New Sales", to: "/Sales/newSales", },
            { name: "All Sales", to: "/Sales/allSales" },
        ]
       
    },
    {
        name: "Work Order",
        to: `/Advance`,
        // iconClassName: "bi bi-box-arrow-in-right",
        iconClassName: "bi bi-plus-square",
        subMenus: [
            {
                name: "Create Party",
                exact: true,
                to: "/Advance/party",
                
                subMenus1: [
                    { name: "Courses1", to: "/Advance/Courses1" },
                    { name: "Courses2", to: "/Advance/Courses2" },
                ]
            },
            { name: "New Work Order", to: "/Advance/newAdvance", },
            { name: "All WOrk Order", to: "/Advance/allAdvance" },
        ],
       
    },
    {
        name: "Deposit",
        to: `/Deposit`,
        // iconClassName: "bi bi-box-arrow-in-right",
        iconClassName: "bi bi-bag-plus-fill",
        subMenus: [
            {
                name: "Deposit Category",
                exact: true,
                to: "/Deposit/Category",
                
                subMenus1: [
                    { name: "Courses1", to: "/Deposit/Courses1" },
                    { name: "Courses2", to: "/Deposit/Courses2" },
                ]
            },
            { name: "All Deposit", to: "/Deposit/allDeposit", },
            
        ],
       
    },
    {
        name: "Expenses",
        to: `/Expenses`,
        // iconClassName: "bi bi-box-arrow-in-right",
        iconClassName: "bi bi-bag-dash-fill",
        subMenus: [
            {
                name: "Expenses Category",
                exact: true,
                to: "/Expenses/Category",
                
                subMenus1: [
                    { name: "Courses1", to: "/Expenses/Courses1" },
                    { name: "Courses2", to: "/Expenses/Courses2" },
                ]
            },
            { name: "All Expenses", to: "/Expenses/allExpenses", },
            
        ],
       
    },
    {
        name: "Opening Balance",
        to: `/OpeningBlance`,
        // iconClassName: "bi bi-box-arrow-in-right",
        iconClassName: "bi bi-currency-dollar",
        subMenus: [
            {
                name: " Update Opening Balance",
                exact: true,
                to: "/OpeningBlance/updateopeningbalance",
                
                subMenus1: [
                    { name: "Courses1", to: "/Expenses/Courses1" },
                    { name: "Courses2", to: "/Expenses/Courses2" },
                ]
            },
            { name: "Daily Opening & Closing Balance", to: "/OpeningBlance/dailyopeningbalance", },
            
        ],
       
    },
    {
        name: "Report",
        to: `/report`,
        // iconClassName: "bi bi-box-arrow-in-right",
        iconClassName: "bi bi-file-earmark-text",
        subMenus: [
            {
                name: " Deposit & Expenses",
                exact: true,
                to: "/report/deposit&expenses",
                
                subMenus1: [
                    { name: "Courses1", to: "/Expenses/Courses1" },
                    { name: "Courses2", to: "/Expenses/Courses2" },
                ]
            },
            { name: "Sales Profit Loss", to: "/report/salesprofitloss", },
            
        ],
       
    },
    {
        name: "Employee Details",
        to: `/Employee`,
        iconClassName: "bi bi-person-check",
       
    },
  
    // {
    //   name: "Content 2",
    //   exact: true,
    //   to: `/content-2`,
    //   iconClassName: "bi bi-speedometer2",
    //   subMenus: [
    //     { name: "Courses", to: "/content-2/courses" },
    //     { name: "Videos", to: "/content-2/videos" },
    //   ],
    // },
    // { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
    // { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
    // { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if (inactive) {
            removeActiveClassFromSubMenu();
        }

        props.onCollapse(inactive);
    }, [inactive]);

    //just an improvment and it is not recorded in video :(
    const removeActiveClassFromSubMenu = () => {
        document.querySelectorAll(".sub-menu").forEach((el) => {
            el.classList.remove("active");
        });
    };

    /*just a little improvement over click function of menuItem
      Now no need to use expand state variable in MenuItem component
    */
    useEffect(() => {
        let menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((el) => {
            el.addEventListener("click", (e) => {
                const next = el.nextElementSibling;
                removeActiveClassFromSubMenu();
                menuItems.forEach((el) => el.classList.remove("active"));
                el.classList.toggle("active");
                console.log(next);
                if (next !== null) {
                    next.classList.toggle("active");
                }
            });
        });
    }, []);

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="webscript" />
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                    {inactive ? (
                        <i class="bi bi-arrow-right-square-fill"></i>
                    ) : (
                        <i class="bi bi-arrow-left-square-fill"></i>
                    )}
                </div>
            </div>

            <div className="search-controller">
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>

                <input type="text" placeholder="search" />
            </div>

            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    {menuItems.map((menuItem, index) => (

                        // console.log(menuItem?.subMenus) 

                        <MenuItem
                            key={index}
                            name={menuItem.name}
                            exact={menuItem.exact}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            subMenus1={menuItem?.subMenus?.subMenus1 || []}
                            iconClassName={menuItem.iconClassName}
                            onClick={(e) => {
                                if (inactive) {
                                    setInactive(false);
                                }
                            }}
                        />
                    ))}

                    {/* <li>
              <a className="menu-item">
                <div className="menu-icon">
                  <i class="bi bi-speedometer2"></i>
                </div>
                <span>Dashboard</span>
              </a>
            </li>
            <MenuItem
              name={"Content"}
              subMenus={[{ name: "Courses" }, { name: "Videos" }]}
            />
            <li>
              <a className="menu-item">
                <div className="menu-icon">
                  <i class="bi bi-vector-pen"></i>
                </div>
                <span>Design</span>
              </a>
            </li> */}
                </ul>
            </div>


        </div>

    );
};

export default SideMenu;