import { useNavHeaderController } from "./useNavHeaderController";
import logo from '../../../../../assets/logo.svg';

export function NavHeader() {
  const { isMenuOpen, handleToggleMenu } = useNavHeaderController()

  return (
    <nav id="header" className="bg-white  p-4 shadow-[1px_1px_20px_-10px_#000] lg:px-36 text-base font-medium">
      <div className="flex items-center justify-between">
        <div>
          <a href="/">
            <img className="w-12 h-12" src={logo} />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="text-blue-900 focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4 ">
          <a href="#top-cars" className="text-blue-900 py-1  hover:text-blue-300">
            Top Cars
          </a>
          <a href="#aluguel" className="text-blue-900 py-1  hover:text-blue-300">
            Aluguel
          </a>
          <a href="/login" className="bg-blue-100 px-2 py-1 flex items-center justify-center rounded-full text-blue-900 hover:text-blue-300">
            Login
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 ">
          <a href="#top-cars" className="block text-blue-900 hover:text-blue-300">
            Top Cars
          </a>
          <a href="#aluguel" className="block text-blue-900 hover:text-blue-300">
            Aluguel
          </a>
          <a href="/login" className="block text-blue-900 hover:text-blue-300">
            Login
          </a>
        </div>
      )}
    </nav>
  )
}
