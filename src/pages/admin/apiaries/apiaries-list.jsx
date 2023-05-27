import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiaries } from "../../../redux/apiaries/actions";
import ApiaryItem from "./apiary-list-item";
import TableHead from "../../../components/tables/table-head";
import FormSearchInput from "../../../components/forms/form-search-input";
import { Link } from "react-router-dom";

export default function ApiariesList() {
  const dispatch = useDispatch()
  const apiaries = useSelector((state) => state.apiaries)
  const apiariesTableHead = ['Номер', 'Име', 'Бр.Кошери', 'Вид', 'Адрес', 'Опции']

  useEffect(() => {
    dispatch(getApiaries())
  }, [])


  return (
    <div className="apiaries-list">
      <div className="px-4 pt-6">Пчелини</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-6">
      <div className="flex justify-between mb-5">
          <FormSearchInput htmlFor={"apiaries-search"} label={"Търсене"} id={"apiaries-search"} placeholder={"Търсене на пчелини"}/>
          <Link to={"/apiaries/add"}>
          <button class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg">
            Добави пчелин
          </button>  
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead data={apiariesTableHead} />
          <tbody>
            {apiaries.length > 0 &&
              apiaries.map((apiary) => {
                return (
                  <ApiaryItem
                    key={apiary.apiary_id}
                    id={apiary.id}
                    apiary_id={apiary.apiary_id}
                    name={apiary.name}
                    beehives={apiary.beehives}
                    type={apiary.type}
                    address={apiary.address}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
