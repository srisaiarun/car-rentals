import React from "react";

const DateTimePicker = ({ place, setPlace, dateTime, setDateTime }) => {
  return (
    <div className="bg-gray-200 py-4 flex justify-center space-x-4">
      {/* Place Input */}
      <input
        type="text"
        placeholder="Enter Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Date & Time Input */}
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DateTimePicker;
