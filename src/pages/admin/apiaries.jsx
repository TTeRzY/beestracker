import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiaries } from "../../redux/apiaries/actions";
import ApiaryItem from "./apiary-item";
import TableHead from "../../components/tables/table-head";
import FormSearchInput from "../../components/forms/form-search-input";

export default function Apiaries() {
  const dispatch = useDispatch()
  const apiaries = useSelector((state) => state.apiaries)
  const apiariesTableHead = ['Номер', 'Име', 'Бр.Кошери', 'Вид', 'Адрес', 'Опции']

  useEffect(() => {
    dispatch(getApiaries())
  }, [])


  return (
    <div className="dashboard-page">
      <div className="px-4 pt-6">Пчелини</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-6">
        <FormSearchInput htmlFor={"apiaries-search"} label={"Търсене"} id={"apiaries-search"} placeholder={"Търсене на пчелини"}/>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead data={apiariesTableHead} />
          <tbody>
            {apiaries.length > 0 &&
              apiaries.map((apiary) => {
                return (
                  <ApiaryItem
                    key={apiary.apiary_id}
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
