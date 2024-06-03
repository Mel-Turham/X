import { motion, AnimatePresence } from 'framer-motion';

interface ErrorMessageProps {
	message: string | undefined;
}

const ErrorMessages = ({ message }: ErrorMessageProps) => {
	return (
		<AnimatePresence>
			<motion.span
				className='text-red-600 text-[10px]'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.4 }}
			>
				{message}
			</motion.span>
		</AnimatePresence>
	);
};
export default ErrorMessages;
