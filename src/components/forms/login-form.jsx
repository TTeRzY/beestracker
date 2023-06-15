import { Link, useNavigate } from "react-router-dom";
import FormInput from "./form-input";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import {Form, Formik, replace} from "formik";
import { useMutation } from '@apollo/client'
import { saveUserToken } from "../../utils/token";
import { LOGIN_MUTATION } from "../../graphql/user.js";

export default function LoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loginUser, { loading, error, data }] = useMutation(LOGIN_MUTATION);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    saveUserToken(data.login)
    navigate("/dashboard", {
      replace: true
    });
  }


  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("loginPage.emailValidation"))
      .required(t("loginPage.requiredFieldValidation")),
    password: Yup.string()
      .min(6, t("loginPage.passwordValidation"))
      .required(t("loginPage.requiredFieldValidation")),
  });

  const onSubmit = formValues => {
    loginUser({ variables: formValues }).then(() => {
      console.log('success login')
    })
  }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={values  => {
        onSubmit(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4 md:space-y-6">
          <FormInput
            htmlFor={"email"}
            label={t("loginPage.email")}
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder="name@company.com"
            error={errors.email && touched.email && errors.email}
          />
          <FormInput
            htmlFor={"password"}
            label={t("loginPage.password")}
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder="••••••••"
            error={errors.password && touched.password && errors.password}
          />
          {/* <div className="flex items-center justify-between">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-amber-500 hover:underline dark:text-amber-500"
            >
              Забравена парола?
            </Link>
          </div> */}
          <button
            type="submit"
            className="w-full text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-800"
          >
            {t("loginPage.login")}
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {t("loginPage.signUpText")}
            <Link
              to="/register"
              className="font-medium text-amber-500 hover:underline dark:text-amber-500 px-3"
            >
              {t("loginPage.register")}
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
