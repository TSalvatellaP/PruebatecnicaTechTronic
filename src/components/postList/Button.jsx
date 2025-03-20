import { IoIosArrowForward } from "react-icons/io";
const Button = () => {


return (
    <div className="flex justify-center mt-6 text-center">
<button className="flex flex-row items-center bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
    Más artículos <IoIosArrowForward />
</button>
    </div>
);

}

export default Button;