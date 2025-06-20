
const Navbar = () => {
  return (
    <nav className="fixed z-100 top-0 self-auto w-[1024px] ">
      <div className="flex justify-between justify-center self-auto items-center mt-2 mb-2">
        <ul className="flex w-fit h-[auto] px-4 flex-shrink-0 rounded-[8px] font-medium text-turquoise-900 border-[1px] border-[solid] border-[_rgba(255,_255,_255,_0.20)] border-opacity-90 bg-[linear-gradient(153deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.00)_100%)] backdrop-filter backdrop-blur-[21px]">
          <li className="flex px-3 py-4"><a href="#hero">About</a></li>
          <li className="flex px-3 py-4"><a href="#case-studies">Portfolio</a></li>
          <li className="flex px-3 py-4"><a href="#github-portfolio">GitHub Projects</a></li>
          <li className="flex px-3 py-4"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar