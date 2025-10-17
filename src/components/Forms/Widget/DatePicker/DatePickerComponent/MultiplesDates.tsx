import { useState } from "react";
import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

export function MultiplesDates() {
  const [value, setValue] = useState<any>(new DateObject());

  return (
    <div>
      <DatePicker
        monthYearSeparator="::" 
        inputClass="form-control"
        multiple
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
