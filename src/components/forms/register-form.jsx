import { Link } from "react-router-dom";
import FormInput from "./form-input";

export default function RegisterForm() {
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <FormInput
        htmlFor={"name"}
        label={"Имена"}
        type={"text"}
        name={"name"}
        id={"name"}
        placeholder="Вашите имена"
        required={true}
      />
	  <FormInput
        htmlFor={"username"}
        label={"Потребителско име"}
        type={"text"}
        name={"username"}
        id={"username"}
        placeholder="Вашето потребитлеско име"
        required={true}
      />
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
      <button
        type="submit"
        className="w-full text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-800"
      >
        Регистрация
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Вече имате профил?
        <Link
          to="/login"
          className="font-medium text-amber-500 hover:underline dark:text-amber-500 px-3"
        >
          Вход
        </Link>
      </p>
    </form>
  );
}
