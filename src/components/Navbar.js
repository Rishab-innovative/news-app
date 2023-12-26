import { Link } from "react-router-dom";
const Navbar = () => {
  const date = new Date();
  return (
    <>
      <header className="text-gray-600 body-font px-6 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 gap-2">
            <Link to="/">
              <span className=" text-xl font-bold text-green-800">
                DailyNews
              </span>
            </Link>

            <li className="ml-5 text-slate-500 font-bold list-none">
              {date.toDateString()}
            </li>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/business">
              <li className="mr-5 hover:text-rose-300 list-none">Business</li>
            </Link>

            <Link to="/entertainment">
              <li className="mr-5 hover:text-rose-300 list-none">
                entertainment
              </li>
            </Link>

            <Link to="/general">
              <li className="mr-5 hover:text-rose-300 list-none">general</li>
            </Link>

            <Link to="/health">
              <li className="mr-5 hover:text-rose-300 list-none">health</li>
            </Link>

            <Link to="/science">
              <li className="mr-5 hover:text-rose-300 list-none">science</li>
            </Link>

            <Link to="/sports">
              <li className="mr-5 hover:text-rose-300 list-none">sports</li>
            </Link>

            <Link to="/technology">
              <li className="mr-5 hover:text-rose-300 list-none">technology</li>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
