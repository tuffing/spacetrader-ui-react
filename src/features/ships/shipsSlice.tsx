import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../api/api';
import { availableShips, Ship } from '../../api/ships';

export interface ShipsState {
	availableShips: Ship[];
	status: Status;
	error?: string;
	//eventually put users bought ships here? Or store on User object?
}

export const initialState: ShipsState = {
	availableShips: [],
	status: Status.idle
};

// fetch available ships. @todo change thunk to instead pull this directly from reducers
export const getAvailableShips = createAsyncThunk('ships/getAvailableShips', async (token: string) => {
	return availableShips(token);
});

export const shipsSlice = createSlice({
	name: 'ships',
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		setAvailableShips: (state, action: PayloadAction<Ship[]>) => {
			state.availableShips = action.payload;
		},
		setStatus: (state, action: PayloadAction<Status>) => {
			state.status = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAvailableShips.pending, (state, action) => {
				state.status = Status.loading;
			})
			.addCase(getAvailableShips.fulfilled, (state, action) => {
				state.availableShips = action.payload.ships;

				state.status = Status.idle;
			})
			.addCase(getAvailableShips.rejected, (state, action) => {
				state.status = Status.failed;
				state.error = action.error.message;
			});
	}
});

export const { setAvailableShips, setStatus } = shipsSlice.actions;

export default shipsSlice.reducer;
