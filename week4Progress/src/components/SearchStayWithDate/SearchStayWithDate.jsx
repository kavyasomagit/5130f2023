import { DateSelector } from "../DateSelector/DateSelector"
import './SearchStayWithDate.css';

export const SearchStayWithDate = () => {
    return (
        <div className="destination-container">
            <div className="destination-options d-flex align-center">
                <div className="location-container">
                        <label className="label">Where</label>
                        <input className="input search-dest" placeholder="Search Destination"/>
                </div>
                <div className="location-container">
                    <label className="label">Check in</label>
                    <DateSelector/>
                </div>
                <div className="location-container">
                    <label className="label">Check Out</label>
                    <DateSelector/>
                </div>
                <div className="location-container">
                    <label className="label">No. of guests</label>
                    <input className="input search-dest" placeholder="Add guests"/>
                </div>
                <div className="search-container d-flex align-center cursor">
                    <span className="search material-icons-outlined">
                        search
                    </span>
                    <span>Search</span>
                </div>
            </div>
        </div>
    )
}