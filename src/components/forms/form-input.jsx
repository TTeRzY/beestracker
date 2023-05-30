import { Field } from "formik";

export default function FormInput({
  label,
  htmlFor,
  type,
  name,
  id,
  placeholder = "",
  required = "",
  error = "",
  labelClass = "",
  fieldClass = "",
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClass}`}
      >
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${fieldClass}`}
        placeholder={placeholder}
        required={required}
      />
      {error && <div className="mt-2 text-pink-600 text-sm">{error}</div>}
    </div>
  );
}
