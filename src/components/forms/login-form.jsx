import {Link} from "react-router-dom";

export default function LoginForm() {
	return(
		<form className="space-y-4 md:space-y-6" action="/admin">
			<div>
				<label htmlFor="email"
				       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your email
				</label>
				<input type="email" name="email" id="email"
				       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				       placeholder="name@company.com" required=""/>
			</div>
			<div>
				<label htmlFor="password"
				       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
				<input type="password" name="password" id="password" placeholder="••••••••"
				       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				       required=""/>
			</div>
			<div className="flex items-center justify-between">
				<Link to="/forgot-password"
				      className="text-sm font-medium text-amber-500 hover:underline dark:text-amber-500">
					Forgot password?
				</Link>
			</div>
			<button type="submit"
			        className="w-full text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-800"
			>
				Sign in
			</button>
			<p className="text-sm font-light text-gray-500 dark:text-gray-400">
				Don’t have an account yet?
				<Link to="/register"
				      className="font-medium text-amber-500 hover:underline dark:text-amber-500 px-3"
				>
					Sign up
				</Link>
			</p>
		</form>
	)
}