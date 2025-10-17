import { useState } from "react";
import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
const MyDatePicker = () => {
  const [value, setValue] = useState<any>(new DateObject());

  return (
    <DatePicker
      inputClass="form-control"
      range
      value={value}
      onChange={setValue}
    />
  );
};

export default MyDatePicker;
