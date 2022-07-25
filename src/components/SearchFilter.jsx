import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Dropdown from './Dropdown'
import DateSelect from './DateSelect'
import DropdownSimple from './DropdownSimple'
import { fetchResultsDetail } from '../redux/slices/detail'
import { useDispatch } from 'react-redux'
import ContainerForm from './ContainerForm'

import { getDataAirport } from '../utils'

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
	const [dataAir,setDataAir] = useState([]) 
	const dispatch = useDispatch()
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
			Adults: Yup.string().required('La persona es Obligatorio'),
			origin: Yup.string().required('El origen es Obligatorio'),
			destination: Yup.string().required('El destino es Obligatorio'),
		}),
		onSubmit: async (valores) => {
			dispatch(fetchResultsDetail(valores))
		},
	})
	useEffect(() => {
		setDataAir(getDataAirport())
	}, [])

	return (
		<>
			<form onSubmit={formik.handleSubmit} className='mx-auto   px-5 py-5 relative border search bg-white rounded-lg'>
				<div className='flex space-x-4'>
					<ContainerForm name={'ORIGEN'}>
						<Dropdown
							onChange={(value) => formik.setFieldValue('origin', value.value)}
							options={dataAir}
						/>
						{formik.touched.origin && formik.errors.origin ? (
							<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
								<p className='font-bold'>Error</p>
								<p>{formik.errors.origin} </p>
							</div>
						) : null}
					</ContainerForm>
					<ContainerForm name={'DESTINO'}>
						<Dropdown
							onChange={(value) =>
								formik.setFieldValue('destination', value.value)
							}
							options={dataAir}
						/>
						{formik.touched.destination && formik.errors.destination ? (
							<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
								<p className='font-bold'>Error</p>
								<p>{formik.errors.destination} </p>
							</div>
						) : null}
					</ContainerForm>
					<ContainerForm name={'IDA'}>
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
					</ContainerForm>
				</div>
				<div className='flex space-x-4'>
					<ContainerForm name={'RETORNO'}>
						<DateSelect
							value={formik.values.endDate}
							handle={(val) => {
								formik.setFieldValue('endDate', val)
							}}
						/>
					</ContainerForm>
					<ContainerForm name={'ADULTOS'}>
						<DropdownSimple
							value={formik.values.Adults}
							options={listPerson}
							handleChange={formik.handleChange}
						/>
						{formik.touched.Adults && formik.errors.Adults ? (
							<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
								<p className='font-bold'>Error</p>
								<p>{formik.errors.Adults} </p>
							</div>
						) : null}
					</ContainerForm>
					<ContainerForm name={'NIÑOS'}>
						<DropdownSimple
							value={formik.values.kids}
							options={listKids}
							handleChange={formik.handleChange}
						/>
					</ContainerForm>
				</div>

				<button
					type='submit' className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
				>
					BUSCAR
				</button>
			</form>
		</>
	)
}

export default SearchFilter
