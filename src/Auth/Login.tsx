import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import Twitter from '../icons/Twitter';
import ErrorMessages from './ErrorMessages';

const LoginSchema = z.object({
	email: z.string().email('Invalid email. Email must be a valid email address'),
	password: z
		.string()
		.min(8, 'Password must not be lesser than 8 characters')
		.max(16, 'Password must not be greater than 16 characters'),
});

type IFormInput = z.infer<typeof LoginSchema>;
const Login = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>({
		resolver: zodResolver(LoginSchema),
	});

	const onSubmit = (data: IFormInput) => {
		console.log(data);
		reset();
	};
	return (
		<div className='bg-gradient-to-tr from-indigo-200 to-blue-500  flex items-center justify-center min-h-screen w-full max-sm:px-6 md:px-3 lg:px-0'>
			<div className='max-w-[25.5rem] w-[100%] px-5 py-2 bg-slate-50 shadow-sm rounded-sm'>
				<div className='flex items-center flex-col py-1 mb-1 '>
					<Twitter className='w-[40px]  h-[40px]' />
					<h1 className='text-[1.8rem] self-start font-semibold'>Login</h1>
					<p className='text-default-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quas.
					</p>
				</div>
				<form className='space-y-2 w-full' onSubmit={handleSubmit(onSubmit)}>
					<div className='max-w-[100%] flex flex-col items-start gap-1'>
						<label className='text-default-500 font-semibold' htmlFor='email'>
							Email
						</label>
						<div className='w-full'>
							<input
								className='w-full h-10 rounded-md text-[15px] font-semibold text-default-600 border-1.5 border-zinc-500 px-0.5'
								type='email'
								autoComplete='off'
								id='email'
								{...register('email')}
							/>
						</div>
						<p className='overflow-hidden'>
							{errors?.email?.message && (
								<ErrorMessages message={errors.email.message} />
							)}
						</p>
					</div>
					<div className='max-w-full flex flex-col items-start gap-1'>
						<label
							className='text-default-500 font-semibold'
							htmlFor='password'
						>
							Password
						</label>
						<div className='w-full'>
							<input
								className='w-full h-10 rounded-md text-[15px] font-semibold text-default-600  border-1.5 border-zinc-500 px-0.5 block'
								type='password'
								autoComplete='off'
								id='password'
								{...register('password')}
							/>
						</div>
						<p className='overflow-hidden'>
							{errors?.password?.message && (
								<ErrorMessages message={errors.password.message} />
							)}
						</p>
					</div>
					<Button type='submit' color='primary' size='sm'>
						Submit
					</Button>
				</form>
				<p className='mt-2 text-small'>
					Don't have an account{' '}
					<Link to='/register' className='mx-1.5 text-blue-500'>
						Register
					</Link>
					there!
				</p>
			</div>
		</div>
	);
};
export default Login;
