import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, taste, category, details, photo } = coffee;

    const handleDelete = _id =>{
        console.log(_id);
    }

    return (
        <div>
            <div >
                <div className="hero rounded-xl bg-[#F5F4F1]">
                    <div className="hero-content flex-col lg:flex-row gap-6">
                        <img src={photo} className="w-72 h-60 rounded-lg shadow-2xl" />
                        <div className="md:flex justify-between gap-6">
                            <div className="space-y-3">
                                <h1 className="text-2xl font-semibold">{name}</h1>
                                <p className="text-xl font-medium">Chef : <span className="font-normal">{chef}</span></p>
                                <p className="text-xl font-medium">Details :<span className="font-normal">{details}</span></p>
                                <p className="text-xl font-medium">Category :<span className="font-normal">{category}</span></p>
                            </div>
                            <div>
                                <div className="flex flex-col space-y-3 ">
                                    <button className="btn join-item font-bold  text-white rounded-md bg-[#D2B48C]"><GrView /></button>
                                    <button className="btn join-item font-bold text-white rounded-md bg-[#3C393B]"><CiEdit /></button>
                                    <button className="btn join-item font-bold text-white rounded-md bg-[#EA4744]" onClick={()=> handleDelete(_id)}><MdDeleteForever /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;