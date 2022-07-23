import { detailData, carriersData, aircraftData } from '../redux/slices/detail'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { filterCarriers, detailFilter, filterAircraft } from '../utils'
import { es } from 'date-fns/locale'
import { formatInTimeZone } from 'date-fns-tz'

const Detail = () => {
	const [itemDetail, setItemDetail] = useState([])
	const data = useSelector(detailData)
	const carriers = useSelector(carriersData)
	const aircraft = useSelector(aircraftData)
	const { id } = useParams()

	useEffect(() => {
		setItemDetail(detailFilter(id, data))
	}, [id])
	return (
		<>
			<h1>Itinerarios</h1>
			{itemDetail.length ? (
				<>
					{itemDetail.map((item) => (
						<div key={item.id}>
							<strong>Duracion : </strong> {item.duration}
							{item.segments.map((seg) => (
								<>
									<div key={seg.id}>
										<div>
											{seg.departure.iataCode} <br />
											{formatInTimeZone(
												seg.departure.at,
												'America/Lima',
												'dd MMMM yyyy',
												{ locale: es }
											)}
											<br />
											{formatInTimeZone(
												seg.departure.at,
												'America/Lima',
												' HH:mm',
												{ locale: es }
											)}hrs
											<br />
											{seg.departure.terminal && (
												<strong> terminal {seg.departure.terminal}</strong>
											)}
										</div>
										<div>
											{seg.arrival.iataCode} <br />
											{formatInTimeZone(
												seg.arrival.at,
												'America/Lima',
												'dd MMMM yyyy',
												{ locale: es }
											)}
											<br />
											{formatInTimeZone(
												seg.arrival.at,
												'America/Lima',
												' HH:mm',
												{ locale: es }
											)}hrs
											<br />
											{seg.arrival.terminal && (
												<strong> Terminal {seg.arrival.terminal}</strong>
											)}
										</div>
										vuelo {seg.number} <br />
										avion {filterAircraft(seg.aircraft.code, aircraft)} <br />
										aerolinea {filterCarriers(seg.carrierCode, carriers)} <br />
										duracion {seg.duration}
									</div>
								</>
							))}
						</div>
					))}
				</>
			) : null}
		</>
	)
}
export default Detail
