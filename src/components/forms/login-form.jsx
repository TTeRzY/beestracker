import { Link } from "react-router-dom";
import FormInput from "./form-input";

export default function LoginForm() {
  return (
    <form className="space-y-4 md:space-y-6" action="/admin">
      <FormInput
        htmlFor={"email"}
        label={"Имейл"}
        type={"email"}
        name={"email"}
        id={"email"}
        placeholder="name@company.com"
        required={true}
      />
	  <FormInput
        htmlFor={"password"}
        label={"Парола"}
        type={"password"}
        name={"password"}
        id={"password"}
        placeholder="••••••••"
        required={true}
      />
      <div className="flex items-center justify-between">
        <Link
          to="/forgot-password"
          className="text-sm font-medium text-amber-500 hover:underline dark:text-amber-500"
        >
          Забравена парола?
        </Link>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-800"
      >
        Вход
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Нямате създаден профил все още ?
        <Link
          to="/register"
          className="font-medium text-amber-500 hover:underline dark:text-amber-500 px-3"
        >
          Регистрирай се
        </Link>
      </p>
    </form>
  );
}
