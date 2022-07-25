import { detailData, carriersData, aircraftData } from '../redux/slices/detail'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { filterCarriers, detailFilter, filterAircraft } from '../utils'
import { es } from 'date-fns/locale'
import { formatInTimeZone } from 'date-fns-tz'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate} from 'react-router-dom';

const Detail = () => {
	const [itemDetail, setItemDetail] = useState([])
	const data = useSelector(detailData)
	const carriers = useSelector(carriersData)
	const aircraft = useSelector(aircraftData)
	const navigate = useNavigate();
	const { id } = useParams()
	useEffect(() => {
		setItemDetail(detailFilter(id, data))
	}, [id])
	return (
		<>
			<Header />
			<div className='flex justify-center items-center bg-home'>
				<h1 className='text-white font-bold text-2xl'>Itinerarios</h1>
			</div>
			<main className='container mx-auto w-2/4 py-5 px-5 mt-5'>
				<button className='block px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100' onClick={() => navigate(-1)}> {'< REGRESAR' }</button>
				<div className='font-medium text-white py-5 px-5 flex ' style={{flexDirection: 'row-reverse'}}>
					{
						itemDetail.price ? 
						<div>
							<strong className='block text-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'>
							{itemDetail.price.currency} {itemDetail.price.total} 
							</strong>
							<span className='block py-2' style={{color: '#15b115'}}>
								{itemDetail.numberOfBookableSeats} asientos disponibles en esta tarifa
							</span>
						</div>
						 : null
					}
					
				</div>
				{itemDetail.itineraries ? (
					<>
						{itemDetail.itineraries.map((item) => (
							<div key={item.id}>
								{item.segments.map((seg) => (
									<>
										<div className='title-flight font-medium text-white py-2 px-2'>
											{filterCarriers(seg.carrierCode, carriers)} -
											{filterAircraft(seg.aircraft.code, aircraft)}
										</div>
										<div key={seg.id} className='py-5 px-5 border mb-5 flex'>
											<div className='flex'>
												<div className='flex-1'>
													<span className='text-center block text-xs font-medium text-gray-700'>
														SALIDA
													</span>
													<span className='block text-center hour-flight'>
														{formatInTimeZone(
															seg.departure.at,
															'America/Lima',
															' HH:mm',
															{ locale: es }
														)}{' '}
														({seg.departure.iataCode} )
													</span>
													<span className='block text-center'>
														{formatInTimeZone(
															seg.departure.at,
															'America/Lima',
															'dd MMMM yyyy',
															{ locale: es }
														)}
													</span>
													{seg.departure.terminal && (
														<span className='block'>
															terminal {seg.departure.terminal}
														</span>
													)}
												</div>
												<div className='flex-1 text-center text-sm font-medium py-4 px-5 relative w-line'>
													<hr className='line-flight' />
													<span className='text-sm font-medium'>
														VUELO {seg.number} <br />
														{seg.duration}
													</span>
												</div>
												<div className='flex-1'>
													<span className='text-center block text-xs font-medium text-gray-700'>
														LLEGADA
													</span>
													<span className='block text-center hour-flight'>
														{formatInTimeZone(
															seg.arrival.at,
															'America/Lima',
															' HH:mm',
															{ locale: es }
														)}
														({seg.arrival.iataCode})
													</span>
													<span className='block text-center'>
														{formatInTimeZone(
															seg.arrival.at,
															'America/Lima',
															'dd MMMM yyyy',
															{ locale: es }
														)}
													</span>

													{seg.arrival.terminal && (
														<span className='block text-center'>
															Terminal {seg.arrival.terminal}
														</span>
													)}
												</div>
											</div>
										</div>
									</>
								))}
							</div>
						))}
					</>
				) : null}
			</main>
			<Footer />
		</>
	)
}
export default Detail
