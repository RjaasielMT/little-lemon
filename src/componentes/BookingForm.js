import { useState } from "react";

function BookingForm() {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const [date, setDate] = useState("");
    const [time, setTime] = useState("default");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("occasion");

    const isFormValid = () => {
        return (
            date && time !== "default" && guest && occasion !== "occasion"
        );
    };

    const clearForm = () => {
        setDate("");
        setTime("default");
        setGuest("");
        setOccasion("occasion");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking Completed!");
        clearForm();
    };

    return (
        <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: 500, gap: 10, margin: '0 auto', padding: 30}}>
            <label htmlFor="res-date" className="form-label fw-semibold">Choose Date</label>
            <input type="date" className="form-control mb-4" id="res-date" value={date} onChange={(e) => {setDate(e.target.value)}} />

            <label htmlFor="res-time" className="form-label fw-semibold">Choose Time</label>
            <select id="res-time" className="form-select mb-4" value={time} onChange={(e) => {setTime(e.target.value)}} >
                <option value="default">Choose time</option>
                {
                    availableTimes.map((time) => {
                        return <option key={time}>{time}</option>
                    })
                }
            </select>

            <label htmlFor="guests" className="form-label fw-semibold">Number of Guests</label>
            <input type="number" className="form-control mb-4" placeholder="Number of Diners" min="1" max="10" id="guests" value={guest} onChange={(e) => {setGuest(e.target.value)}} />

            <label htmlFor="occasion" className="form-label fw-semibold">Occasion</label>
            <select id="occasion" className="form-select mb-4" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                <option value="occasion">Choose Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" className="btn btn-warning" disabled={!isFormValid()} />
        </form>
    )
}

export default BookingForm;