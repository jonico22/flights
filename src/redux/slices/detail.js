import { createSlice } from "@reduxjs/toolkit";
import format from 'date-fns/format';
import { apiShopping ,apiAuht} from '../../api'
import { objectToArray } from "../../utils";

const initialState = {
	isLoading: false,
	data: [],
	error: {},
	locations: [],
	aircraft:[],
	carriers:[],
	meta:[]
}



const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        fetchDetailStart(state) {
            state.isLoading = true;
        },
        fetchDetailError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchDetailComplete(state, action) {
            state.isLoading = false;
            state.data = action.payload;
        },
		fetchDetailLocations(state,action){
			state.locations = action.payload;
		},
		fetchDetailAircraft(state,action){
			state.aircraft = action.payload;
		},
		fetchDetailCarriers(state,action){
			state.carriers = action.payload;
		},
		fetchDetailMeta(state,action){
			state.meta = action.payload;
		}
    }
});

const { actions, reducer } = detailSlice;
const { fetchDetailComplete,fetchDetailStart,
	fetchDetailLocations,
	fetchDetailAircraft,
	fetchDetailCarriers,
	fetchDetailMeta} = actions;

export const fetchResultsDetail = (data) => async (dispatch) => {
	let params ={
		origin : data.origin,
		destination: data.destination,
		person: data.Adults,
		children: data.kids,
		initDate: format(data.initDate, 'yyyy-MM-dd'),
		endDate:  format(data.endDate, 'yyyy-MM-dd')
	}
	try {
		dispatch(fetchDetailStart())
		let token = await apiAuht()
		let response = await apiShopping(params,token.access_token)
		dispatch(fetchDetailComplete(response.data))
		dispatch(fetchDetailLocations(objectToArray(response.dictionaries.locations)))
		dispatch(fetchDetailAircraft(objectToArray(response.dictionaries.aircraft)))
		dispatch(fetchDetailCarriers(objectToArray(response.dictionaries.carriers)))
		dispatch(fetchDetailMeta(response.meta))
	} catch (error) {
		dispatch(fetchDetailError(error))
	}
}


export const isLoadingDetail = (state) => state.detail.isLoading;
export const detailError = (state) => state.detail.error;
export const detailData = (state) => state.detail.data;
export const carriersData = (state)=> state.detail.carriers;
export const aircraftData = (state)=> state.detail.aircraft;
export const metaData = (state)=> state.detail.meta;

export default reducer