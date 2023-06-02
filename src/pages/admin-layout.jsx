import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/admin/navbar";
import Sidebar from "../components/admin/sidebar";

export default function AdminLayout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const noNavbarAndSidebarPaths = ["/login", "/register", "/forgot-password"];

  return (
    <div>
      {noNavbarAndSidebarPaths.includes(currentPath) && <Outlet />}
      {!noNavbarAndSidebarPaths.includes(currentPath) && (
        <div className="admin-page">
          <Navbar />
          <div className="flex pt-16 overflow-hidden">
            <Sidebar />
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
