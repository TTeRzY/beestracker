export default function Sidebar() {
	return(
		<>

			<aside id="logo-sidebar"
			       className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
			       aria-label="Sidebar">
				<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<li>
							<a href="#"
							   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<span className="ml-3">Dashboard</span>
							</a>
						</li>
						<li>
							<a href="#"
							   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
								<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
							</a>
						</li>
						<li>
							<a href="#"
							   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
								<span
									className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
							</a>
						</li>
						<li>
							<a href="#"
							   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<span className="flex-1 ml-3 whitespace-nowrap">Users</span>
							</a>
						</li>
						<li>
							<a href="#"
							   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<span className="flex-1 ml-3 whitespace-nowrap">Products</span>
							</a>
						</li>
						<li>
							<a href="#"
							   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
							</a>
						</li>
						<li>
							<a href="#"
							   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
								<span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>

		</>
	)
}