import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import applelogo from '../../Assets/applelogo.png';
// import Cookies from 'universal-cookie';
import '../styles/sidebar.scss';
import { useLocation, Link } from 'react-router-dom';
import { getItem, setItem } from './localStore';
// import {
//     RESTAURNAT_INDEX,
//     USER_INDEX,
//     USER,
//     RESTAURANT,
// } from '../../components/admin/AdminRouteUrls';
// import {
//     BUDGET_HOME,
//     BUDGET,
//     BUDGET_LOGS,
//     LOGS,
// } from '../../components/budget/budgetRouteUrls';
// import RestaurantSelect from './RestaurantSelect';
// import { getUserRoleNameFromLS, USER_ROLES } from '../utils';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../components/admin/user/_redux/userActions';

// const cookies = new Cookies();
// export const SYSTEMADMINROUTES = [
//     {
//         path: RESTAURNAT_INDEX,
//         text: 'Restaurants',
//         icon: 'fas fa-utensils',
//         dynamicRoute: RESTAURANT,
//     },
//     {
//         path: USER_INDEX,
//         text: 'Users',
//         icon: 'fas fa-users',
//         dynamicRoute: USER,
//     },
// ];
// function budgetRedirection(kwargs) {
//     const { pathname } = kwargs;
//     const splits = pathname.split('/');
//     if (pathname.includes(BUDGET_LOGS)) {
//         return `${this.path}?${this.queryParams}`;
//     } else if (splits[1] === 'budget' && splits.length === 3) {
//         return `${pathname}?${this.queryParams}`;
//     } else return `${this.path}?${this.queryParams}`;
// }
// export const MANAGERROUTES2 = [
//     {
//         path: BUDGET_HOME,
//         text: 'Yearly',
//         icon: 'fas fa-calendar',
//         dynamicRoute: BUDGET,
//         queryParams: 'by=year',
//         redirection: budgetRedirection,
//     },
//     {
//         path: BUDGET_HOME,
//         text: 'Monthly',
//         icon: 'fas fa-calendar-week',
//         dynamicRoute: BUDGET,
//         queryParams: 'by=month',
//         redirection: budgetRedirection,
//     },
//     {
//         path: BUDGET_HOME,
//         text: 'Daily',
//         icon: 'fas fa-calendar-day',
//         dynamicRoute: BUDGET,
//         queryParams: 'by=day',
//         redirection: budgetRedirection,
//     },
// ];

export default function Sidebar(props) {
    // const [menuItem, setMenuItem] = useState([]);
    // // const history = useHistory();
    // const dispatch = useDispatch();
    // const location = useLocation();
    // //destructuring pathname from location
    // const { pathname, search } = location;

    // // const pathComparator = (pathItem) => {
    //     // write custom comparator for route if required
    //     if (pathItem.comparator) {
    //         return pathItem.comparator();
    //     } else if (pathItem.dynamicRoute) {
    //         if (pathname.includes(pathItem.dynamicRoute)) {
    //             if (pathItem.queryParams) {
    //                 const queryParams = new URLSearchParams(search);
    //                 let areAllParamsSame = true;
    //                 pathItem.queryParams.split('&').forEach((param) => {
    //                     let key = param.split('=')[0];
    //                     let value = param.split('=')[1];
    //                     areAllParamsSame &= queryParams.get(key) == value;
    //                 });
    //                 return areAllParamsSame;
    //             } else return true;
    //         } else return false;
    //     } else return pathItem.path === pathname;
    // };

    // let userRoleName = getUserRoleNameFromLS();
    // useEffect(() => {
    //     if (userRoleName) {
    //         if (userRoleName === USER_ROLES.systemAdmin) {
    //             setMenuItem(SYSTEMADMINROUTES);
    //         } else if (userRoleName === USER_ROLES.manager) {
    //             setMenuItem(MANAGERROUTES2);
    //         } else if (userRoleName === USER_ROLES.assistantManager) {
    //             setMenuItem(MANAGERROUTES2);
    //         }
    //     }
    // }, [menuItem]);

    // const signout = () => {
    //     // cookies.remove('Authorization', { path: '/' });
    //     dispatch(logout());
    // };

    const sidebarToggle = () => {
        const $wrapper = document.querySelectorAll('#wrapper');
        $wrapper.forEach((el) => el.classList.toggle('toggled'));
    };

    const isAdmin = (getItem("role") ?? "admin") === "admin";

    return (
        <div id="wrapper">
            <aside id="sidebar-wrapper" className="border-tr-br-xl">
                <div className="sidebar-brand">
                    <h2>BONDS</h2>
                    <hr style={{ color: "grey", height: "10px" }} />
                    {/* <button className='btn btn-danger'>
                        Logout
                    </button> */}
                </div>

                <ul className="sidebar-nav">
                    {/* {menuItem.map((item) => (
                        <li
                            className={pathComparator(item) ? 'active' : ''}
                            key={item.path}
                        >
                            {item.redirection ? (
                                <Link to={item.redirection({ search, pathname })}>
                                    <i className={item.icon + ' icon'}></i>
                                    {item.text}
                                </Link>
                            ) : (
                                <Link to={item.path}>
                                    <i className={item.icon + ' icon'}></i>
                                    {item.text}
                                </Link>
                            )}
                        </li>
                    ))} */}
                    {isAdmin && <li key={'Securities'} onClick={() => { }}>
                        <Link to={'/Securities'}>
                            <i className="fas fa-suitcase icon"></i>
                            Securities
                        </Link>
                    </li>}
                    {isAdmin && <li key={'Books'} onClick={() => { }}>
                        <Link to={'/Books'}>
                            <i className="fas fa-book icon"></i>
                            Books
                        </Link>
                    </li>}
                    {isAdmin && <li key={'Party'} onClick={() => { }}>
                        <Link to={'/Party'}>
                            <i className="fas fa-user icon"></i>
                            Counter Party
                        </Link>
                    </li>}
                    {isAdmin && <li key={'Trades'} onClick={() => { }}>
                        <Link to={'/Trades'}>
                            <i className="fas fa-arrows-h icon"></i>
                            Trades
                        </Link>
                    </li>}
                    {isAdmin && <li key={'Employees'} onClick={() => { }}>
                        <Link to={'/Employees'}>
                            {/* <i className="fas fa-sign-out-alt icon"></i> */}
                            <i className="fas fa-users icon" > </i>
                            Employees
                        </Link>
                    </li>}
                    {!isAdmin && <li key={'Dashboard'} onClick={() => { }}>
                        <Link to={'/Dashboard'}>
                            <i className="fas fa-sign-out-alt icon"></i>
                            Dashboard
                        </Link>
                    </li>}

                    {/* <li key={'logout'} onClick={() => {
                        localStorage.clear();
                    }}>
                        <Link to={'/login'}>
                            <i className="fas fa-sign-out-alt icon"></i>
                            <div className='text-danger'>LOGOUT</div>
                        </Link>
                    </li> */}
                    <div className='px-3 mt-3'>
                        <Link to={'/login'}>
                            <button className='btn btn-danger w-100'>
                                <div className='h5'>Logout</div>
                            </button>
                        </Link>
                    </div>
                </ul>
            </aside>
            <div id="navbar-wrapper">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div
                                style={{ cursor: 'pointer' }}
                                className="navbar-brand"
                                id="sidebar-toggle"
                                onClick={() => sidebarToggle()}
                            >
                                <img
                                    src="/assets/icons/menu.png"
                                    alt="Menu"
                                    width="auto"
                                    height="20px"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
