import FormCheckBox from "../../components/forms/form-checkbox";

export default function ApiaryItem({ apiary_id, name, beehives, type, address }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <FormCheckBox id={`checkbox-apiary-item-${apiary_id}`} htmlFor={`checkbox-apiary-item-${apiary_id}`} />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {apiary_id}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{beehives}</td>
      <td className="px-6 py-4">{type}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}
