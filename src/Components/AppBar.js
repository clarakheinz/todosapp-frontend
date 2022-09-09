

export default function AppBar() {
    // little header for everypage :D
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-violet-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <h1 className="app-title">Get {`{sh}`}It Done</h1>
                    <button
                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    >
                    <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

}