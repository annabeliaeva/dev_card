export type LocalGitubUser = {
	login: string,
	id: number,
	avatar: string,
	name: string,
	company: string,
	blog: string,
	location: string,
	bio: string,
	twitter: string
	public_repos: number,
	followers: number,
	following: number,
	created: string
}



export type GithubUser = {
	login: string,
	id: number,
	avatar_url: string,
	name: string,
	company: string,
	blog: string,
	location: string,
	bio: string,
	twitter_username: string
	public_repos: number,
	followers: number,
	following: number,
	created_at: string
}

export type GithubError = {
	message: string,
	dcumentation_url: string
}