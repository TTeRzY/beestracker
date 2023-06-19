import {useDispatch, useSelector} from "react-redux"
import BeeHiveItem from "./beehive-list-item"
import TableHead from "../../../components/tables/table-head"
import FormSearchInput from "../../../components/forms/form-search-input"
import { Link } from "react-router-dom"
import {useQuery} from "@apollo/client";
import {BEEHIVES} from "../../../graphql/beehives.js";
import {useEffect} from "react";
import {setBeeHives} from "../../../redux/beehives/actions.js";

export default function BeeHivesList() {
  const dispatch = useDispatch()
  const beehives = useSelector((state) => state.beehives)
  const beeHivesTableHeadInfo = ['Дата', 'Кошер №', 'Пчелин №', 'Място в пчелина', 'Вид', 'Семейство', 'Опции']
  const {loading, error, data} = useQuery(BEEHIVES)
  useEffect(() => {
    if (data && !beehives.length) {
      dispatch(setBeeHives(data?.beehives?.items))
    }
  }, [data, dispatch]);

  return (
    <div className="dashboard-page">
      <div className="px-4 pt-6">Кошери</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-6">
        <div className="flex justify-between mb-5">
          <FormSearchInput htmlFor={"beehives-search"} label={"Търсене"} id={"beehives-search"} placeholder={"Търсене на кошери"}/>
          <Link to={"/dashboard/beehives/add"}>
          <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg">
            Добави кошер
          </button>  
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead data={beeHivesTableHeadInfo} />
          <tbody>
            {beehives.length > 0 &&
              beehives.map((beehive) => {
                return (
                  <BeeHiveItem
                    key={beehive._id}
                    id={beehive._id}
                    createdAt={beehive.createdAt}
                    beehiveId={beehive.beehiveId}
                    apiaryId={beehive?.apiary.apiaryId}
                    location={beehive?.apiary.location}
                    beehiveType={beehive.beehiveType}
                    familyType={beehive.familyType}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
