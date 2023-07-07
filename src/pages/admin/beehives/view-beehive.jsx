import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {formatDate} from "../../../helpers.js";
import Map from "../../../components/map/Map.jsx";
import {ChartBarSquareIcon} from "@heroicons/react/20/solid/index.js";
import {GET_BEEHIVE} from "../../../graphql/beehives.js";

export default function ViewBeeHive() {
    const {id} = useParams()
    const {loading, error, data} = useQuery(GET_BEEHIVE, {
        variables: {
            _id: id
        }
    })
    const totalYieldHeadings = ['Мед', 'Восък', 'Прополис', 'Прашец', 'Млечице', 'Отрова'];
    const totalYieldInitialValues = [0, 0, 0, 0, 0, 0];
    const totalNutritionHeadings = ['Суха', 'Течна'];
    const totalNutritionInitialValues = [0, 0];

    const notes = [
        { id: 1, date: '11/04/2023', title: 'Първи пролетен', description: 'Първи пролетен преглед, напрвено подбутиелно подхранване.' },
        { id: 2, date: '11/05/2023', title: 'Осведомителен преглед', description: 'Наличие на майка, 6 пити с пило и 2 медови.' },
        { id: 3, date: '11/10/2023', title: 'Третиране за вароатоза', description: 'Третиране с плочки екостоп за вароатоза. 45 дни действие.' },
    ];

    return (
        <div className="view-apiary px-4 py-3">
            <h3 className="font-bold text-md px-4 pt-5">Данни за кошера:</h3>
            <div className="flex flex-wrap w-full ">
                <div className="w-full xl:w-1/4 xl:px-4 mt-4">
                    <div className="apiary-info bg-white p-4 shadow-sm border-gray-200 rounded-lg text-gray-500">
                        <ul>
                            <li>
                                <span className="font-bold">Кошер номер:</span>
                                <span className="px-2">{data?.beehive.beehiveId}</span>
                            </li>
                            <li>
                                <span className="font-bold">Създаден на:</span>
                                <span className="px-2">{formatDate(data?.beehive.createdAt)}</span>
                            </li>
                            <li>
                                <span className="font-bold">Тип на кошера:</span>
                                <span className="px-2">{data?.beehive.beehiveType}</span>
                            </li>
                            <li>
                                <span className="font-bold">Вид семейство:</span>
                                <span className="px-2">{data?.beehive.familyType}</span>
                            </li>
                            <li>
                                <span className="font-bold">Номер на пчелин:</span>
                                <span className="px-2">{data?.beehive.apiary.apiaryId}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full xl:w-2/3 xl:px-4 mt-4">
                    <div className="bg-white p-3 shadow-sm border-gray-200 rounded-lg">
                        <h3 className={"text-md font-bold text-gray-700 mb-3"}>Последни данни за кошер номер: {data?.beehive.beehiveId}</h3>
                        <div className="flex flex-wrap mb-4 text-gray-500">
                            <div className="w-full flex items-center">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Майка:</span>
                                </div>
                                <div className="mb-2 md:w-1/4">
                                    <span className="font-bold">Година:</span>
                                    <span className={"px-2"}>13/05/2022</span>
                                </div>
                                <div className="mb-2 md:w-1/4">
                                    <span className="font-bold">Цвят:</span>
                                    <span className={"px-2"}>жълт</span>
                                </div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Последен преглед:</span>
                                </div>
                                <div className="mb-2 md:w-1/4">
                                    <span>15/06/2023</span>
                                </div>
                                <div className="mb-2 md:w-1/4"></div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Наличие на пило:</span>
                                </div>
                                <div className="mb-2 md:w-1/4">Да</div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Брой рамки в кошера:</span>
                                </div>
                                <div className="mb-2 md:w-1/4">10</div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Сложени рамки за градеж:</span>
                                </div>
                                <div className="mb-2 md:w-1/4">2</div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Брой рамки с мед:</span>
                                </div>
                                <div className="mb-2 md:w-1/4">3</div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Строителна рамка:</span>
                                </div>
                                <div className="mb-2 md:w-1/4">Да</div>
                            </div>
                        </div>
                    </div>
                    <div className="total-season-yield bg-white p-3 shadow-sm border-gray-200 rounded-lg mt-5 overflow-x-auto xl:overflow-x-hidden">
                        <h4 className="text-md font-bold mb-4 flex items-center align-center text-gray-500">
                            <ChartBarSquareIcon className={"w-5 h-5"} />
                            <span className={"px-2"}>Общ добив за целия пчелин през</span>
                        </h4>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead>
                            <tr>
                                {totalYieldHeadings.map((heading) => (
                                    <th key={heading} className="py-2 px-4">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={"border-t"}>
                                {totalYieldInitialValues.map((value, index) => (
                                    <td key={index} className="py-2 px-4">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="total-season-nutrition bg-white p-3 mt-5 shadow-sm border-gray-200 rounded-lg overflow-x-auto xl:overflow-x-hidden">
                        <h4 className="text-md font-bold mb-4 flex items-center align-center text-gray-500">
                            <ChartBarSquareIcon className={"w-5 h-5"} />
                            <span className={"px-2"}>Подхранка за целия пчелин през сезона</span>
                        </h4>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead>
                            <tr>
                                {totalNutritionHeadings.map((heading) => (
                                    <th key={heading} className="py-2 px-4">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={"border-t"}>
                                {totalNutritionInitialValues.map((value, index) => (
                                    <td key={index} className="py-2 px-4">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-md font-bold mb-4">Последни бележки</h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2">Дата</th>
                        <th className="px-4 py-2">Заглавие</th>
                        <th className="px-4 py-2">Описание</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notes.map((note) => (
                        <tr key={note.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-4 py-2">{note.date}</td>
                            <td className="px-4 py-2">{note.title}</td>
                            <td className="px-4 py-2">{note.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}