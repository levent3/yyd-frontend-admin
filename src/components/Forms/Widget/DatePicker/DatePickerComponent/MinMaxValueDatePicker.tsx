import { useState } from "react";
import DatePicker from "react-datepicker";

const MinMaxValueDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      className="form-control flatpickr-input"
      selected={startDate}
      onChange={(date:Date) => setStartDate(date)}
      minDate={new Date()} 
      maxDate={new Date(new Date().setDate(new Date().getDate() + 5))}
      placeholderText="Select a date in February 2020"
    />
  );
};

export default MinMaxValueDatePicker;
