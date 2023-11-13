import { Navbar } from "../../components"
import { HotelCard } from "../../components"
import "./Home.css"
import axios from "axios"
import { useEffect, useState, Fragment } from "react"

export const Home = () => {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        (async  () => {
            try {
                const {data} = await axios.get("https://real-goat-stole.cyclic.app/api/hotels");
                console.log(data)
                setHotels(data);
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])


    return (
        <>
        <Navbar/>
        <main className="main d-flex align-center wrap gap-larger">
            {
                hotels && hotels.map((hotel) => <HotelCard key={hotel._id} hotel= {hotel}/>)
            }
        </main>
        </>
        
    )
}