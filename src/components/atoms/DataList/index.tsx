import { InputHTMLAttributes } from 'react'

interface IDataList extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  dataList: string[]
}

export default function DataList({
  name,
  label,
  dataList,
  ...rest
}: IDataList) {
  console.log('list', dataList)
  return (
    <div className="w-full">
      <label htmlFor={name} className="leading-7 text-md text-gray-900">
        {label}
      </label>
      <input
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        list={`list-${name}`}
        id={name}
        name={name}
        {...rest}
      />
      <datalist id={`list-${name}`}>
        {dataList.map(item => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  )
}
