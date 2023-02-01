import { useState } from "react";
import HomeScreen from "../Components/HomeScreen/HomeScreen";

export default function Home() {
    const [movies, setMovie] = useState([]);
    return (
        <>
            <HomeScreen />
        </>
    )
}
