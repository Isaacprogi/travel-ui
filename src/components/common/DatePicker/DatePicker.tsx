import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import "react-datepicker/dist/react-datepicker.css";
import styles from './DatePicker.module.css';

const CustomInput = forwardRef<HTMLInputElement, { value: any; onClick: any }>(
  ({ value, onClick }, ref) => (
    <div className={styles.customInput}>
      <IoCalendarNumberOutline className={styles.calendarIcon} />
      <input type="text" value={value} onClick={onClick} readOnly ref={ref} />
    </div>
  )
);

CustomInput.displayName = 'CustomInput';

const DateTimePicker = () => {
  const [selectedDate, setDate] = useState(new Date());

  return (
    <label>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date) => setDate(date)}
        customInput={<CustomInput value={selectedDate} onClick={() => {}} />}
      />
    </label>
  );
};

export default DateTimePicker
