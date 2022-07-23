import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateSelect = ({ handle, value }) => {
	return (
		<>
			<DatePicker
				selected={value === '' ? null : value}
				onChange={handle}
				dateFormat='yyyy-MM-dd'
			/>
		</>
	)
}

export default DateSelect
