import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { useState } from "react";
const DisabledDatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();
  const tomorrow = addDays(today, 1);

  const disabledDates: Date[] = [today, tomorrow];
  return (
    <DatePicker
      className="form-control"
      selected={selectedDate}
      onChange={(date: Date) => setSelectedDate(date)}
      excludeDates={disabledDates}
      placeholderText="Select a date other than today or yesterday"
    />
  );
};

export default DisabledDatePickerComponent;
