import {Link, useRouteError} from "react-router-dom";

export default function Example() {
    const error = useRouteError();
    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-4xl font-bold text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{error.statusText || error.message}</h1>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/dashboard"
                            className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}