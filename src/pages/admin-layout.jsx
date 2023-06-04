import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/admin/navbar";
import Sidebar from "../components/admin/sidebar";
import { useState } from "react";
import MobileDetect from "mobile-detect";

export default function AdminLayout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const noNavbarAndSidebarPaths = ["/login", "/register", "/forgot-password"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile();

  function toggleMobileMenu(value) {
    setMobileMenuOpen(value)
  }

  return (
    <div>
      {noNavbarAndSidebarPaths.includes(currentPath) && <Outlet />}
      {!noNavbarAndSidebarPaths.includes(currentPath) && (
        <div className="admin-page">
          <Navbar toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} isMobile={isMobile} />
          <div className="flex pt-16 overflow-hidden">
            <Sidebar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            <div
              className="fixed inset-0 z-10 hidden "
              id="sidebarBackdrop"
            ></div>
            <div className="relative w-full h-full overflow-y-auto lg:ml-64">
              <main>
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
