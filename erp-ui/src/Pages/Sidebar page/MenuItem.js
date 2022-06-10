import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
    const { name, subMenus, subMenus1, iconClassName, onClick, to, exact } = props;
    const [expand, setExpand] = useState(false);

    

    return (
        // <li onClick={props.onClick}>
        <li onClick={props.onClick} >

            {
                (name == "Dashboard" || name == "Stock") ?

                    <Link
                        exact
                        to={to}
                        // onClick={() => {
                        //   setExpand((e) => !e);
                        // }}
                        className={`menu-item`}
                    >
                        <div className="menu-icon">
                            <i className={iconClassName}></i>
                        </div>
                        <span >{name}</span>
                    </Link>
                    :
                    <span className="menu-item">
                        {/* <Link
                to=''
                // exact
                // to={to}
                // onClick={() => {
                //   setExpand((e) => !e);
                // }}
                className={`menu-item`}
            > */}
                        <div className="menu-icon">
                            <i className={iconClassName}></i>
                        </div>
                        <span >{name}</span>
                        {/* </Link> */}
                    </span>

            }



            {/* {subMenus && subMenus.length  > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
              
            </li>
          ))}
        </ul>
      ) : null} */}

            {subMenus && subMenus.length > 0 ? (
                <ul className={`sub-menu`}>
                    {
                        subMenus.map((menu, index) => (
                            <li key={index}>
                                <NavLink to={menu.to}>{menu.name}</NavLink>

                                {subMenus.subMenus1 && subMenus1.length > 0 ? (
                                    <ul className={`sub-menu`}>
                                        {subMenus1.map((menu, index) => (
                                            <li key={index}>
                                                <NavLink to={menu.to}>{menu.name}</NavLink>

                                            </li>
                                        ))}
                                    </ul>
                                ) : null}

                            </li>
                        ))
                    }


                </ul>
            ) : null}

        </li>
    );
};

export default MenuItem;