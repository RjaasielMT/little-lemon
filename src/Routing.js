import {Routes, Route} from 'react-router-dom';
import Homepage from './componentes/Homepage';
import Booking from './componentes/Booking';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element= {
            <Homepage />
            } />

            <Route path="/booking" element={
            <Booking />
            } />
        </Routes>
    );
}