

const Dashboardlayout = ({children}: {children: React.ReactNode;}) => {
  return (
    <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-blue-400">
            hello slider
        </div>
        <div className="md:pl-72">
            {children}
        </div>
    </div>
  )
}

export default Dashboardlayout