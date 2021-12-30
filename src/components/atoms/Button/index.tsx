import { FC, ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	bgColor: 'success' | 'edit' | 'delete'
}

const bgColorButton = {
	success: 'bg-green-900 hover:bg-green-800',
	edit: 'bg-blue-900 hover:bg-blue-700',
	delete: 'bg-red-900 hover:bg-red-700',
}

const Button: FC<IButton> = ({ bgColor, children, ...rest }) => {
	return (
		<button
			className={`py-2 px-4 rounded-md ${bgColorButton[bgColor]} text-white`}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
