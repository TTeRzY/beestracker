import { Outlet } from "react-router-dom";

export default function BeeHivesLayout() {
  return (
    <div className="beehives-wrapper">
        <Outlet />
    </div>
  );
}
