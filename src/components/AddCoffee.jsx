const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name , chef , supplier , taste ,category , details , photo};
        console.log(newCoffee);
        form.reset();
    }
    return (
        <div className="bg-[#F4F3F0] px-76 font-playfair">
            <h2 className=" py-8 text-5xl font-semibold text-center">Add New Coffee</h2>
            <p className="pb-8 mx-72 text-[#1B1A1AB3] text-lg text-center ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form className="md:mx-36 pb-12 text-lg" onSubmit={handleAddCoffee}>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
                    <div className="px-2 font-semibold">
                        <p>Name</p> <br />
                        <input type="text" name="name" id="" placeholder="Enter coffee name" className="w-full h-10 rounded-md px-8"/> <br />
                    </div>
                    <div className="px-2 font-semibold">
                        <p>Chef</p> <br />
                        <input type="text" name="chef" id="" placeholder="Enter coffee chef" className="w-full h-10 rounded-md px-8"/> <br />
                    </div>
                    <div className="px-2 font-semibold">
                        <p>Supplier</p> <br />
                        <input type="text" name="supplier" id="" placeholder="Enter coffee supplier" className="w-full h-10 rounded-md px-8"/> <br />
                    </div>
                    <div className="px-2 font-semibold">
                        <p className="px-2 font-semibold">Taste</p> <br />
                        <input type="text" name="taste" id="" placeholder="Enter coffee taste" className="w-full h-10 rounded-md px-8"/> <br />
                    </div>
                    <div className="px-2 font-semibold">
                        <p>Category</p> <br />
                        <input type="text" name="category" id="" placeholder="Enter coffee category" className="w-full h-10 rounded-md px-8"/> <br />
                    </div>
                    <div className="px-2 font-semibold">
                        <p>Details</p> <br />
                        <input type="text" name="details" id="" placeholder="Enter coffee details" className="w-full h-10 rounded-md px-8"/> <br />
                    </div>
                </div>
                <div className="mt-4
                ">
                        <p className="px-2 font-semibold">Photo</p> <br />
                        <input type="text" name="photo" id="" placeholder="Enter photo URL" className="w-full h-10 rounded-md px-8"/> <br />
                    </div>
                    <input type="submit" value="Add Coffee" className="w-full h-12 rounded-lg my-6 bg-[#D2B48C] font-semibold"/>
            </form>
        </div>
    );
};

export default AddCoffee;