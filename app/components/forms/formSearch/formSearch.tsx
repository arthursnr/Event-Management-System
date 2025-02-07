export function FormSearch() {
    return (
        <>
            <form>
                <fieldset>
                    <div className="w-full py-3 bg-[#F5F5F5] rounded-lg opacity-60">
                        <label htmlFor="search" className="flex items-start gap-2 cursor-pointer w-full">
                            <button type="submit">
                                <img 
                                src="/assets/search.svg" 
                                alt="Buscar"
                                className="size-6" />
                            </button>
                            <input
                                type="search"
                                id="search"
                                name="search"
                                placeholder="Search for your events"
                                className="bg-transparent border-none outline-none w-full" />
                        </label>
                    </div>
                </fieldset>
            </form>
        </>
    )
}