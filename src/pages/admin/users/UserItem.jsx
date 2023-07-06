import {useMutation, useQuery} from "@apollo/client";
import FormCheckBox from "../../../components/forms/form-checkbox.jsx";
import {Link} from "react-router-dom";
import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline/index.js";
import {DELETE_USER, GET_USERS} from "../../../graphql/users.js";

export default function UserItem({ _id, firstName, lastName, email, occupation, roles }) {
    const [deleteItem, { loading, error }] = useMutation(DELETE_USER);
    const {refetch} = useQuery(GET_USERS)
    const handleDelete = (_id) => {
        deleteItem({
            variables: {
                _id: _id
            },
        })
            .then((response) => {
                refetch()
            })
            .catch((error) => {
                // Handle error
                console.log(error)
            });
    };
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <FormCheckBox id={`checkbox-apiary-item-${_id}`} htmlFor={`checkbox-apiary-item-${_id}`} />
            </td>
            <td className="px-6 py-4">{firstName}</td>
            <td className="px-6 py-4">{lastName}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">{occupation}</td>
            <td className="px-6 py-4">{roles.map((role, index) => {
                return `${index !== 0 ? ', ' : ''}${role}`
            })}</td>
            <td className="px-6 py-4 flex items-center">
                <Link
                    to={`/dashboard/user/edit/${_id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
                >
                    <PencilIcon className="w-6 h-6" />
                </Link>
                <Link
                    tabIndex={"0"}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
                    onClick={() => handleDelete(_id)}
                >
                    <TrashIcon className="w-6 h-6" stroke="red" />
                </Link>
            </td>
        </tr>
    );
}
