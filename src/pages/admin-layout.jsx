import {Outlet, useLocation} from "react-router-dom";
import Navbar from "../components/admin/navbar";
import Sidebar from "../components/admin/sidebar";
import {useEffect, useState} from "react";
import MobileDetect from "mobile-detect";
import {CURRENT_USER} from "../graphql/user.js";
import {useQuery} from "@apollo/client";
import {setCurrentUser} from "../redux/user/actions.js";
import {useDispatch, useSelector} from "react-redux";
import {GET_APIARIES} from "../graphql/apiaries.js";
import {setApiaries} from "../redux/apiaries/actions.js";
import {GET_BEEHIVES} from "../graphql/beehives.js";
import {setBeeHives} from "../redux/beehives/actions.js";

export default function AdminLayout() {
    const md = new MobileDetect(window.navigator.userAgent);
    const isMobile = md.mobile();
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPath = location.pathname;

    const noNavbarAndSidebarPaths = ["/login", "/register", "/forgot-password"];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const currentUser = useSelector(state => state.currentUser)

    const {loading: userLoading, error: userError, data: userData} = useQuery(CURRENT_USER);
    const {loading: apiariesLoading, error: apiariesError, data: apiariesData} = useQuery(GET_APIARIES)
    const {loading: beehivesLoading, error: beehivesError, data: beehivesData} = useQuery(GET_BEEHIVES)

    useEffect(() => {
        if (userData) {
            dispatch(setCurrentUser(userData?.currentUser))
        }
    }, [userData, dispatch])

    useEffect(() => {
        if (apiariesData) {
            dispatch(setApiaries(apiariesData?.apiaries?.items))
        }
    }, [apiariesData, dispatch]);

    useEffect(() => {
        if (beehivesData) {
            dispatch(setBeeHives(beehivesData?.beehives?.items))
        }
    }, [beehivesData, dispatch]);

    function toggleMobileMenu(value) {
        setMobileMenuOpen(value)
    }


    return (
        <div>
            {noNavbarAndSidebarPaths.includes(currentPath) && <Outlet/>}
            {!noNavbarAndSidebarPaths.includes(currentPath) && (
                <div className="admin-page">
                    <Navbar toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} isMobile={isMobile}
                            currentUser={currentUser}/>
                    <div className="flex pt-16 overflow-hidden">
                        <Sidebar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu}/>
                        <div
                            className="fixed inset-0 z-10 hidden "
                            id="sidebarBackdrop"
                        ></div>
                        <div className="relative w-full h-full overflow-y-auto lg:ml-64">
                            <main>
                                <Outlet/>
                            </main>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
