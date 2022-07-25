import DatePicker from 'react-datepicker'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { addDays, format } from 'date-fns'
import { forwardRef } from 'react'

const ButtonInput = forwardRef(({ value, onClick }, ref) => (
	<button
		onClick={onClick}
		ref={ref}
		type='button'
		className='inline-flex justify-start w-full px-3 py-2 pl-10 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500'
	>
		{format(new Date(value), 'dd MMMM yyyy')}
	</button>
))
const DateSelect = ({ handle, value }) => {
	return (
		<>
			<div className='relative w-40'>
				<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
					<svg
						aria-hidden='true'
						className='w-5 h-5 text-gray-500 dark:text-gray-400'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
				<DatePicker
					selected={value === '' ? new Date() : value}
					onChange={handle}
					minDate={addDays(new Date(), 1)}
					nextMonthButtonLabel='>'
					previousMonthButtonLabel='<'
					popperClassName='react-datepicker-left'
					customInput={<ButtonInput />}
					renderCustomHeader={({
						date,
						decreaseMonth,
						increaseMonth,
						prevMonthButtonDisabled,
						nextMonthButtonDisabled,
					}) => (
						<div className='flex items-center justify-between px-2 py-2'>
							<span className='text-lg text-gray-700'>
								{format(date, 'MMMM yyyy')}
							</span>

							<div className='space-x-2'>
								<button
									onClick={decreaseMonth}
									disabled={prevMonthButtonDisabled}
									type='button'
									className={`
                                            ${prevMonthButtonDisabled &&'cursor-not-allowed opacity-50'} inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
								>
									<ChevronLeftIcon className='w-5 h-5 text-gray-600' />
								</button>

								<button
									onClick={increaseMonth}
									disabled={nextMonthButtonDisabled}
									type='button'
									className={`
                                            ${nextMonthButtonDisabled &&'cursor-not-allowed opacity-50'	}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
								>
									<ChevronRightIcon className='w-5 h-5 text-gray-600' />
								</button>
							</div>
						</div>
					)}
				/>
			</div>
		</>
	)
}

export default DateSelect
