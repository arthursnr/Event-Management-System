import { BackButton } from "../components/buttons/backButton/backButton";

export default function EventPage() {

    return (
        <div>
            <BackButton />
            <div>
                <img src="/assets/img1.png" alt="Event Image" />
                <h1>event title</h1>
                <p>event description</p>
                <a href="https://www.google.com"></a>
            </div>
        </div>
    )
}