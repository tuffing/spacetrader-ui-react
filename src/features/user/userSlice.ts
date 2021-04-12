import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { authCall } from './api';

export interface UserState {
	username: string;
	credits: number;
	token?: string;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error?: string;
}

export const initialState: UserState = {
	username: '',
	credits: 0,
	status: 'idle',
};

// fetch the user token
export const authenticate = createAsyncThunk('user/authenticate', async (username: string) => {
	return authCall(username);
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		setUserName: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setCredits: (state, action: PayloadAction<number>) => {
			state.credits = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authenticate.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(authenticate.fulfilled, (state, action) => {
				state.token = action.payload.token;
				state.credits = action.payload.user.credits;
				state.username = action.payload.user.username;

				state.status = 'idle';
			})
			.addCase(authenticate.rejected, (state, action) => {
				state.status = 'failed';
				if ('message' in action.error) state.error = action.error.message;
				else state.error = 'undefined error';
				//else if ('error' in action.error) state.error = action.error.error.message;
			});
	},
});

export const { setUserName, setAccessToken, setCredits } = userSlice.actions;

export default userSlice.reducer;
