export function FormLogin() {

    /* Não funciona */
    return (
        <>
            <div className="bg-black text-white w-screen h-screen">
                <form action="">
                    {/* login section */}
                    <fieldset>
                        <label htmlFor="login">E-mail:</label>
                        <input type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                            className="bg-black text-white"
                            required />
                    </fieldset>

                    {/* password section */}
                    <fieldset>
                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                            className="bg-black text-white"
                            required />
                    </fieldset>
                </form>
            </div>
        </>
    );
}
