import {
	Avatar,
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
	Input,
	Tooltip,
} from '@nextui-org/react';
import { FaImage, FaPoll, FaSmile } from 'react-icons/fa';
import { RiCalendarScheduleFill } from 'react-icons/ri';
import { MdOutlineExpandMore, MdOutlineGifBox } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { useState } from 'react';

interface ModalProps {
	onClose: () => void;
	isOpen: boolean;
	onOpenChange: (isOpen: boolean) => void;
}
const ModalComponent = ({ onClose, isOpen, onOpenChange }: ModalProps) => {
	const [value, setValue] = useState('');

	return (
		<Modal
			onClose={onClose}
			isOpen={isOpen}
			size='xl'
			isDismissable={true}
			isKeyboardDismissDisabled={false}
			onOpenChange={onOpenChange}
			// className='bg-[#252426] text-blue-500'
			placement='top'
		>
			<ModalContent>
				<>
					<ModalHeader className='flex items-center gap-5'>
						<Avatar
							isBordered
							color='primary'
							src='../../src/assets/svg/Logo.svg'
						/>
						<Dropdown>
							<DropdownTrigger>
								<Button
									size='sm'
									endContent={<MdOutlineExpandMore className='w-5 h-5' />}
									color='primary'
									variant='bordered'
									className='font-semibold py-1'
								>
									Everyone
								</Button>
							</DropdownTrigger>

							<DropdownMenu aria-label='Dropdown menu with description'>
								<DropdownSection>
									<DropdownItem className='py-5'>
										<h1 className='font-medium text-[1.5rem]'>
											Chose audience
										</h1>
									</DropdownItem>
								</DropdownSection>
								<DropdownSection>
									<DropdownItem>
										<h2>Somme think</h2>
									</DropdownItem>
								</DropdownSection>
							</DropdownMenu>
						</Dropdown>
					</ModalHeader>
					<ModalBody>
						<Input
							autoFocus
							type='text'
							color='primary'
							size='lg'
							fullWidth={false}
							variant='underlined'
							placeholder='What is happening?!'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</ModalBody>
					<ModalFooter className='justify-between'>
						<div>
							<Tooltip content='Media' placement='bottom'>
								<Button isIconOnly color='primary' variant='light'>
									<FaImage className='w-5 h-5' />
								</Button>
							</Tooltip>
							<Tooltip content='Gif' placement='bottom'>
								<Button isIconOnly color='primary' variant='light'>
									<MdOutlineGifBox className='w-5 h-5' />
								</Button>
							</Tooltip>
							<Tooltip content='Poll' placement='bottom'>
								<Button isIconOnly color='primary' variant='light'>
									<FaPoll className='w-5 h-5' />
								</Button>
							</Tooltip>
							<Tooltip content='emoji' placement='bottom'>
								<Button isIconOnly color='primary' variant='light'>
									<FaSmile className='w-5 h-5' />
								</Button>
							</Tooltip>
							<Tooltip content='schedule' placement='bottom'>
								<Button isIconOnly color='primary' variant='light'>
									<RiCalendarScheduleFill className='w-5 h-5' />
								</Button>
							</Tooltip>
							<Tooltip content='localization' placement='bottom'>
								<Button
									isIconOnly
									color='primary'
									disabled={true}
									variant='light'
								>
									<FaLocationDot className='w-5 h-5' />
								</Button>
							</Tooltip>
						</div>

						<div>
							<Button
								isDisabled={value ? false : true}
								color='primary'
								className='font-semibold'
							>
								Post
							</Button>
						</div>
					</ModalFooter>
				</>
			</ModalContent>
		</Modal>
	);
};
export default ModalComponent;
