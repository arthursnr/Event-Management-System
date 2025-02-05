export function FormSearch() {
    return (
        <>
            <form>
                <fieldset>
                    <div className="w-full px-3.5 py-3 bg-cyan-950 rounded-lg opacity-60">
                        <label htmlFor="search" className="flex items-center gap-2 cursor-pointer w-full">
                            <img src="/assets/search.svg" alt="Buscar" />
                            <input
                                type="search"
                                id="search"
                                name="search"
                                placeholder="Search for your events"
                                className="bg-transparent border-none outline-none w-full"/>
                        </label>
                    </div>
                </fieldset>
                <button type="submit">Search</button>
            </form>
        </>
    )
}