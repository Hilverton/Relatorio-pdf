import { InputHTMLAttributes } from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
}

export default function Input({ name, label, type, ...rest }: IInput) {
  return (
    <div>
      <label htmlFor="full-name" className="leading-7 text-md text-gray-900">
        {label}
      </label>

      <input
        type={type}
        name={name}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        {...rest}
      />
    </div>
  )
}
