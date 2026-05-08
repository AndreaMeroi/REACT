export default function AppHeader({ logo }) {



    return (
        <header>

            <div className="logo">
                {logo}            </div>

            <form >
                <input type="search" placeholder="Search.." />
                <button>Search</button>

            </form>
        </header>

    )
}