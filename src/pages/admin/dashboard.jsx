import { useSelector } from "react-redux";
import {
  ArchiveBoxIcon,
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Panel from "../../components/admin/panel";
import { Link } from "react-router-dom";
import Stats from "../../components/stats/stats";

export default function Dashboard() {
  const apiaries = useSelector((state) => state.apiaries);
  const beehives = useSelector((state) => state.beehives);

  return (
    <div className="dashboard-page">
      <div className="px-4 pt-6">Табло</div>
      <div className="flex flex-wrap w-full px-4 pt-3">
        <div className="w-full xl:w-2/3">
          <div className="grid  grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
            <Panel
              icon={<Squares2X2Icon className="w-8 h-8" />}
              counter={apiaries.length}
              title={"Добавени пчелини"}
              className="flex justify-between bg-sky-500 text-white p-2 border border-b-0 border-gray-200 rounded-t-lg"
              href={"/dashboard/apiaries"}
            />
            <Panel
              icon={<ArchiveBoxIcon className="w-8 h-8" />}
              counter={beehives.length}
              title={"Добавени кошери"}
              className="flex justify-between bg-amber-500 text-white p-2 border border-b-0 border-gray-200 rounded-t-lg"
              href={"/dashboard/beehives"}
            />
            <Panel
              icon={<UserIcon className="w-8 h-8" />}
              counter={1}
              title={"Настройки на профила"}
              className="flex justify-between bg-pink-500 text-white p-2 border border-b-0 border-gray-200 rounded-t-lg"
              href={"/account"}
            />
          </div>
          <Stats />
        </div>
        <div className="w-full xl:w-1/3 xl:px-4 mt-4">
          <div>
            <div className="shadow-sm border-gray-200 flex flex-col items-center">
              <div className="bg-white flex justify-center p-3 border border-gray-200 border-b-0 rounded-t-lg w-full">
                <img src="./beegarden_img.png" alt="BeeGarden Image" />
              </div>
              <div className="text-center text-white px-2 py-4 bg-sky-500 border border-t-0 border-gray-200 rounded-b-lg w-full">
                <Link to={"/dashboard/apiaries/add"}>Добави пчелин</Link>
              </div>
            </div>
            <div className="shadow-sm border-gray-200 flex flex-col items-center mt-5">
              <div className="bg-white flex justify-center p-3 border border-gray-200 border-b-0 rounded-t-lg w-full">
                <img src="./hives_img.png" alt="BeeHives Image" />
              </div>
              <div className="text-center text-white px-2 py-4 bg-amber-500 border border-t-0 border-gray-200 rounded-b-lg w-full">
                <Link to={"/dashboard/beehives/add"}>Добави Кошер</Link>
              </div>
            </div>
            <div className="shadow-sm border-gray-200 flex flex-col items-center mt-5">
              <div className="bg-white flex justify-center p-3 border border-gray-200 border-b-0 rounded-t-lg w-full">
                <img src="./notebook_img.png" alt="NoteBook Image" />
              </div>
              <div className="text-center text-white px-2 py-4 bg-green-500 border border-t-0 border-gray-200 rounded-b-lg w-full">
                <Link to={"/notebooks/add"}>Добави Записка</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
