import logo from "../assets/logo.svg"
import bars_logo from "../assets/bars-solid-full.svg"
export const Navbar = () => {

    return <div className="w-full p-5 flex justify-around border-t-1 border-b-1 border-slate-200">
        <div className="flex items-center">
            <img src={logo} className="max-h-[100px] w-[150px] cursor-pointer  " />
        </div>
        <div className="flex gap-10 items-center">
            <div >
                <ul className="flex flex-row gap-10 items-center">
                    <li>
                        <a className="text-slate-500 hover:text-blue-500 cursor-pointer" href="">Signup</a>
                    </li>
                    <li>
                        <a className="text-slate-500 hover:text-blue-500 cursor-pointer" href="">About</a>
                    </li>
                    <li>
                        <a className="text-slate-500 hover:text-blue-500 cursor-pointer" href="">Product</a>
                    </li>
                    <li>
                        <a className="text-slate-500 hover:text-blue-500 cursor-pointer" href="">Pricing</a>
                    </li>
                    <li>
                        <a className="text-slate-500 hover:text-blue-500 cursor-pointer" href="">Support</a>
                    </li>

                </ul>
            </div>


            <img src={bars_logo} className=" w-[20px]  md:w-[30px] cursor-pointer" />
        </div>



    </div>
}