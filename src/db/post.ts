interface postsTypes {
	_useId: number;
	user_url: string;
	userName: string;
	userLink: string;
	image_posted: string;
	comments: number;
	reTweet: number;
	like: number;
	chare_numbers: number;
}
const posts: postsTypes[] = [
	{
		_useId: 1,
		user_url: '',
		userName: 'John Doe',
		userLink: '@johndoe',
		image_posted: '',
		comments: 67,
		reTweet: 4,
		like: 60,
		chare_numbers: 50,
	},
];

export default posts;
