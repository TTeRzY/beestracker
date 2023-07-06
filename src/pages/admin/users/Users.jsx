import TableHead from "../../../components/tables/table-head.jsx";
import {useQuery} from "@apollo/client";
import {GET_USERS} from "../../../graphql/users.js";
import UserItem from "./UserItem.jsx";

export default function Users() {
    const usersTableHead = ['Име', 'Фамилия', 'Имейл', 'Локация', 'Роли', 'Опции']
    const {loading, error, data} = useQuery(GET_USERS)



    return (
        <div className="apiaries-list">
            <div className="px-4 pt-6">Потребители</div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-6">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHead data={usersTableHead}/>
                    <tbody>
                    {data && Object.keys(data?.users).length > 0 &&
                        data?.users.items.map((user) => {
                            return (
                                <UserItem
                                    key={user._id}
                                    _id={user._id}
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    email={user.email}
                                    occupation={user.occupation}
                                    roles={user.roles}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}