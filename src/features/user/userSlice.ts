import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../api/api';
import { requestToken } from '../../api/user';

export interface UserState {
	username: string;
	credits: number;
	token?: string;
	status: Status;
	error?: string;
}

export const initialState: UserState = {
	username: '',
	credits: 0,
	status: Status.idle
};

// fetch the user token
export const authenticate = createAsyncThunk('user/authenticate', async (username: string) => {
	return requestToken(username);
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
		setStatus: (state, action: PayloadAction<Status>) => {
			state.status = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(authenticate.pending, (state, action) => {
				state.status = Status.loading;
			})
			.addCase(authenticate.fulfilled, (state, action) => {
				if ('error' in action.payload) {
					//validation errors etc return as 200s. So validation here..
					state.error = action.payload.error.message;
					state.status = Status.failed;
					return;
				}

				state.token = action.payload.token;
				state.credits = action.payload.user.credits;
				state.username = action.payload.user.username;

				state.status = Status.idle;
			})
			.addCase(authenticate.rejected, (state, action) => {
				state.status = Status.failed;
				if ('message' in action.error) state.error = action.error.message;
				else state.error = 'undefined error';
			});
	}
});

export const { setUserName, setAccessToken, setCredits, setStatus } = userSlice.actions;

export default userSlice.reducer;
