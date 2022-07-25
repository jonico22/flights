import {
	isLoadingDetail,
	detailError,
	detailData,
	carriersData,
	metaData,
} from '../redux/slices/detail'
import { filterCarriers } from '../utils'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Result = () => {
	const data = useSelector(detailData)
	const isLoading = useSelector(isLoadingDetail)
	const error = useSelector(detailError)
	const carriers = useSelector(carriersData)
	const total = useSelector(metaData)

	if (isLoading) {
		return (
			<div className='lds-ring block text-center'>
				<div />
				<div />
				<div />
				<div />
			</div>
		)
	}

	if (Object.keys(error)?.length) {
		return <h6>Ha ocurrido un error</h6>
	}
	return (
		<>
			{data.length ? (
				<>
					<h2 className='text-2xl font-semibold py-5'>ELIGE UN VUELO</h2>
					<hr />
					<p
						className='font-semibold py-5 block'
						style={{ textAlign: 'right' }}
					>
						TOTAL {total.count} REGISTROS ENCONTRADOS
					</p>
				</>
			) : null}
			{data.length
				? data.map((item) => (
						<>
							<strong>
								{item.validatingAirlineCodes
									? filterCarriers(item.validatingAirlineCodes[0], carriers)
									: null}
							</strong>
							<div key={item.id} className='py-5 px-5 border mb-5 flex'>
								<div className='flex-1'>
									<strong className='text-sm font-medium '>
										Asientos disponibles:{' '}
									</strong>
									{item.numberOfBookableSeats} <br />
									<strong className='text-sm font-medium '>
										Ultimo dia para reservar:{' '}
									</strong>
									{item.lastTicketingDate} <br />
								</div>
								<div className='flex-auto'>
									<strong className='font-medium block text-2xl'>
										{item.price.total} {item.price.currency}
									</strong>
									<br />
									<Link
										to={'/detalle/' + item.id}
										className=' px-5 py-3 text-center font-medium text-white btn-link'
									>
										VER ITINERARIO
									</Link>
								</div>
							</div>
						</>
				  ))
				: null}
		</>
	)
}

export default Result
