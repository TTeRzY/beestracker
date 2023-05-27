import { Outlet } from "react-router-dom";

export default function ApiariesLayout() {
  return (
    <div className="apiaries-wrapper">
        <Outlet />
    </div>
  );
}
