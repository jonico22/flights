import {
	isLoadingDetail,
	detailError,
	detailData,
	carriersData,
} from '../redux/slices/detail'
import { filterCarriers } from "../utils";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Result = () => {
	const data = useSelector(detailData)
	const isLoading = useSelector(isLoadingDetail)
	const error = useSelector(detailError)
	const carriers = useSelector(carriersData)

	if (isLoading) {
		return <div>Cargando...</div>
	}

	if (Object.keys(error)?.length) {
		return <h6>Ha ocurrido un error</h6>
	}
	console.log(data.length)
	return (
		<>
			<h2 className='text-4xl font-lato font-bold'>Resultados</h2>
			{data.length
				? data.map((item) => (
						<div key={item.id}>
							Asientos disponibles: {item.lastTicketingDate}
							<div>Ultimo dia para reservar: {item.numberOfBookableSeats}</div>
							<strong>{item.price.total}</strong>
							<br />
							<strong>{item.price.currency}</strong>
							<button>VER ITENERARIO</button>
                            <Link to={"/detalle/" + item.id}>About</Link>
							{filterCarriers(item.validatingAirlineCodes[0],carriers)}
						</div>
				  ))
				: 'no cargo'}
		</>
	)
}

export default Result
