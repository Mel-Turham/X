import Twitter from '../icons/Twitter';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ErrorMessages from './ErrorMessages';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const RegisterSchema = z
	.object({
		name: z
			.string()
			.min(8, 'Name must not be lesser than 8 characters')
			.max(18, 'Name must not be lesser than 8 characters'),
		email: z
			.string()
			.trim()
			.email('Invalid email. Email must be a valid email address'),
		password: z
			.string()
			.trim()
			.toLowerCase()
			.regex(
				/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
				{
					message:
						'The password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number and a special character (!@#$%^&*)',
				},
			),
		confirmPassword: z.string().trim().toLowerCase(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Passwords do not match',
	});

type IRegisterForm = z.infer<typeof RegisterSchema>;

const Register = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterForm>({
		resolver: zodResolver(RegisterSchema),
	});

	const onSubmit = (data: IRegisterForm) => {
		console.log(data);
		reset();
	};

	return (
		<div className='bg-gradient-to-tr from-indigo-200 to-blue-500  flex items-center justify-center min-h-screen w-full max-sm:px-6 md:px-3 lg:px-0'>
			<div className='max-w-[25.5rem] w-[100%] px-5 py-2 bg-slate-50 shadow-sm rounded-sm'>
				<div className='flex items-center flex-col py-1 mb-1 '>
					<Twitter className='w-[40px]  h-[40px]' />
					<h1 className='text-[1.8rem] self-start font-semibold'>Register</h1>
					<p className='text-default-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quas.
					</p>
				</div>
				<form className=' w-full' onSubmit={handleSubmit(onSubmit)}>
					<div className='max-w-[100%] flex flex-col items-start gap-1'>
						<label className='text-default-500 font-semibold' htmlFor='name'>
							Name
						</label>
						<div className='w-full'>
							<input
								className='w-full h-10 rounded-md text-[15px] font-semibold text-default-600 border-1.5 border-zinc-500 px-0.5'
								type='text'
								autoComplete='off'
								id='name'
								{...register('name')}
							/>
						</div>
						<p className='overflow-hidden'>
							{errors?.name?.message && (
								<ErrorMessages message={errors.name.message} />
							)}
						</p>
					</div>
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
								<ErrorMessages
									message={errors.password.message.substring(0, 80) + '...'}
								/>
							)}
						</p>
					</div>
					<div className='max-w-full flex flex-col items-start gap-1'>
						<label
							className='text-default-500 font-semibold'
							htmlFor='confirmPassword'
						>
							confirm password
						</label>
						<div className='w-full'>
							<input
								className='w-full h-10 rounded-md text-[15px] font-semibold text-default-600  border-1.5 border-zinc-500 px-0.5 block'
								type='password'
								autoComplete='off'
								id='confirmPassword'
								{...register('confirmPassword')}
							/>
						</div>
						<p className='overflow-hidden'>
							{errors?.confirmPassword?.message && (
								<ErrorMessages message={errors.confirmPassword.message} />
							)}
						</p>
					</div>
					<Button type='submit' color='primary' size='sm' className='mt-2'>
						Register
					</Button>
				</form>
				<p className='mt-2 text-small'>
					Already have an account ?{' '}
					<Link to='/login' className='mx-1.5 text-blue-500'>
						Login
					</Link>
					there!
				</p>
			</div>
		</div>
	);
};
export default Register;
