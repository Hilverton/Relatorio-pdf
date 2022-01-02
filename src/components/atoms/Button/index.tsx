import { FC, ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: 'success' | 'edit' | 'delete'
  hasOutline?: boolean
}

const bgColorButton = {
  success: 'bg-green-900 hover:bg-green-800 text-white',
  edit: 'bg-blue-900 hover:bg-blue-700 text-white',
  delete: 'bg-red-900 hover:bg-red-700 text-white',
}

const bgColorButtonOutline = {
  success:
    'bg-transparent border border-green-900 text-green-900 hover:bg-green-800 hover:text-white',
  edit: 'bg-transparent border border-blue-900 text-blue-900 hover:bg-blue-700 hover:text-white',
  delete:
    'bg-transparent border border-red-900 text-red-900 hover:bg-red-700 hover:text-white',
}

const Button: FC<IButton> = ({
  bgColor,
  hasOutline = false,
  children,
  ...rest
}) => {
  return (
    <button
      className={`py-2 px-4 rounded-md ${
        hasOutline ? bgColorButtonOutline[bgColor] : bgColorButton[bgColor]
      } `}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
