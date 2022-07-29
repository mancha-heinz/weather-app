import React from "react";
import propType from 'prop-types';

function Card({ data }) {
    const {
        location,
        current,
    } = data;
    return (
        <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
            <div className="text-center">
                <span className="block text-xl font-bold text-slate-700">{location.name}</span>
                <span className="text-slate-400 text-sm font-medium">
                    {`${location.region}, ${location.country}`}
                </span>
            </div>

            <div className="font-bold text-slate-700 flex justify-center mt-4 mb-2 ">
                <span className="text-8xl">{current.temp_c}</span>
                <span className="text-3xl mt-2">ºC</span>
            </div>

            <div className="flex justify-center flex-col itens-center">
                <img src={current.condition.icon} alt="weather icon" />
                <samp className="text-slate-700 fony-medium">{current.condition.text}</samp>
            </div>
        </div>
    );
}

export default Card;

Card.prototype = {
    data: propType.object,
}.isRequired;