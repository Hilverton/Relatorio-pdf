interface INavigation {
  icon: string
  title: string
  link: string
}

export default function Navigation({ icon, title, link }: INavigation) {
  return (
    <div className="group flex flex-col justify-center items-center bg-white text-center h-72 w-80 rounded-md cursor-pointer">
      <i
        className={`${icon} text-6xl mb-4 transition-all duration-300 group-hover:-translate-y-4`}
      />
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  )
}
