import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Panel({ icon, counter, title, className }) {
  return (
    <div className="shadow-sm border-gray-200">
      <div className={className}>
        {icon}
        <div className="text-right">
          <div className="font-bold">{counter}</div>
          <div>{title}</div>
        </div>
      </div>
      <div className="flex justify-between px-2 py-4 bg-white border border-t-0 border-gray-200 rounded-b-lg">
        <span>Списък</span>
        <Link to={"/apiaries"}>
          <ArrowRightCircleIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
