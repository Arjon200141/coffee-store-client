import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const update = useLoaderData();
    console.log(update);
    const { _id, name, chef, supplier, taste, category, details, photo } = update;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(updatedCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully!!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }

    return (
        <div className="font-playfair  bg-[#F4F3F0] py-12">
            <h2 className="text-4xl text-center font-semibold">Update Details of : {name}</h2>

            <div className="">
                <form className="md:mx-36 py-10 text-lg" onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
                        <div className="px-2 font-semibold">
                            <p>Name</p> <br />
                            <input type="text" name="name" id="" defaultValue={name} placeholder="Enter coffee name" className="w-full h-12 rounded-md px-8" /> <br />
                        </div>
                        <div className="px-2 font-semibold">
                            <p>Chef</p> <br />
                            <input type="text" name="chef" id="" defaultValue={chef} placeholder="Enter coffee chef" className="w-full h-12 rounded-md px-8" /> <br />
                        </div>
                        <div className="px-2 font-semibold">
                            <p>Supplier</p> <br />
                            <input type="text" name="supplier" defaultValue={supplier} id="" placeholder="Enter coffee supplier" className="w-full h-12 rounded-md px-8" /> <br />
                        </div>
                        <div className="px-2 font-semibold">
                            <p className="px-2 font-semibold">Taste</p> <br />
                            <input type="text" name="taste" id="" defaultValue={taste} placeholder="Enter coffee taste" className="w-full h-12 rounded-md px-8" /> <br />
                        </div>
                        <div className="px-2 font-semibold">
                            <p>Category</p> <br />
                            <input type="text" name="category" defaultValue={category} id="" placeholder="Enter coffee category" className="w-full h-12 rounded-md px-8" /> <br />
                        </div>
                        <div className="px-2 font-semibold">
                            <p>Details</p> <br />
                            <input type="text" name="details" defaultValue={details} id="" placeholder="Enter coffee details" className="w-full h-12 rounded-md px-8" /> <br />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="px-2 font-semibold">Photo</p> <br />
                        <input type="text" name="photo" id="" defaultValue={photo} placeholder="Enter photo URL" className="w-full h-12 rounded-md px-8" /> <br />
                    </div>
                    <input type="submit" value="Update Coffee Details" className="w-full h-12 rounded-lg my-8 bg-[#D2B48C] font-semibold" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;