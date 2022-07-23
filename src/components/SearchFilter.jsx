import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Dropdown from './Dropdown'
import DateSelect from './DateSelect'
import DropdownSimple from './DropdownSimple'
import { fetchResultsDetail } from '../redux/slices/detail'
import { useDispatch, useSelector } from "react-redux";

const dataType = [
    {
        value: 'LIM',
        iata: 'RIJ',
        label: 'LIMA',
        city: 'Rioja',
        state: 'San-Martin',
        country: 'PE',
        elevation: 2707,
        lat: -6.0678601265,
        lon: -77.1600036621,
        tz: 'America/Lima',
    },
    {
        value: 'MEX',
        iata: '',
        name: 'Pampa Grande Airport',
        city: 'Pampa Grande',
        label: 'MEXICO',
        country: 'PE',
        elevation: 8727,
        lat: -7.5999999046,
        lon: -78.0500030518,
        tz: 'America/Lima',
    },
]
let listPerson = [
    {
        value: 1,
        label: 1,
    },
    {
        value: 2,
        label: 2,
    },
    {
        value: 3,
        label: 3,
    },
    {
        value: 4,
        label: 4,
    },
    {
        value: 5,
        label: 5,
    },
    {
        value: 6,
        label: 6,
    },
]
let listKids = [
    {
        value: 0,
        label: 0,
    },
    {
        value: 1,
        label: 1,
    },
    {
        value: 2,
        label: 2,
    },
    {
        value: 3,
        label: 3,
    },
    {
        value: 4,
        label: 4,
    },
    {
        value: 5,
        label: 5,
    },
    
]
const SearchFilter = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		//enableReinitialize: true,
		initialValues: {
			initDate: '',
			endDate: '',
			origin: '',
			destination: '',
			Adults: 1,
			kids: 0,
		},
		validationSchema: Yup.object({
			initDate: Yup.string().required('La ida es Obligatorio'),
			endDate: Yup.string().required('El retorno es Obligatorio'),
			origin: Yup.string().required('El origen es Obligatorio'),
			destination: Yup.string().required('El destino es Obligatorio'),
		}),
		onSubmit: async (valores) => {
            dispatch(fetchResultsDetail(valores));
		},
	})
	useEffect(() => {
		console.log(dataType)
	}, [])

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Dropdown
					onChange={(value) => formik.setFieldValue('origin', value.value)}
					options={dataType}
				/>
				{formik.touched.origin && formik.errors.origin ? (
					<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
						<p className='font-bold'>Error</p>
						<p>{formik.errors.origin} </p>
					</div>
				) : null}
				<Dropdown
					onChange={(value) => formik.setFieldValue('destination', value.value)}
					options={dataType}
				/>
				<DateSelect
					value={formik.values.initDate}
					handle={(val) => {
						formik.setFieldValue('initDate', val)
					}}
				/>
				{formik.touched.initDate && formik.errors.initDate ? (
					<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
						<p className='font-bold'>Error</p>
						<p>{formik.errors.initDate} </p>
					</div>
				) : null}
				<DateSelect
					value={formik.values.endDate}
					handle={(val) => {
						formik.setFieldValue('endDate', val)
					}}
				/>
                {formik.touched.endDate && formik.errors.endDate ? (
					<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
						<p className='font-bold'>Error</p>
						<p>{formik.errors.endDate} </p>
					</div>
				) : null}
				<div className='px-3 py-2'>
					<label className='font-bold'>Adultos</label>
					<DropdownSimple
						value={formik.values.Adults}
						options={listPerson}
						handleChange={formik.handleChange}
					/>
				</div>
                <div className='px-3 py-2'>
					<label className='font-bold'>Niños</label>
					<DropdownSimple
						value={formik.values.kids}
						options={listKids}
						handleChange={formik.handleChange}
					/>
				</div>
				<button
					type='submit'
					className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
				>
					Guardar de
				</button>
			</form>
		</>
	)
}

export default SearchFilter
