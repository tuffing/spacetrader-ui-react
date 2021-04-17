// should do a dev / staging etc check here. but spacetraders only has the one url endpoint
export const url = 'https://api.spacetraders.io';

export enum Status {
	idle = 'idle',
	loading = 'loading',
	succeeded = 'succeeded',
	failed = 'failed',
}
