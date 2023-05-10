import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import FormCheckBox from "../../components/forms/form-checkbox";

export default function BeeHiveItem({
  date,
  beehive_id,
  apiary_id,
  apiary_place,
  type,
  family_type,
  bee_queen,
}) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <FormCheckBox
          id={`checkbox-apiary-item-${apiary_id}`}
          htmlFor={`checkbox-apiary-item-${apiary_id}`}
        />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {date}
      </th>
      <td className="px-6 py-4">{beehive_id}</td>
      <td className="px-6 py-4">{apiary_id}</td>
      <td className="px-6 py-4">{apiary_place}</td>
      <td className="px-6 py-4">{type}</td>
      <td className="px-6 py-4">{family_type}</td>
      <td className="px-6 py-4">{bee_queen}</td>
      <td className="px-6 py-4 flex items-center">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
        >
          <PencilIcon className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
        >
          <TrashIcon className="w-6 h-6" stroke="red" />
        </a>
      </td>
    </tr>
  );
}
