import React from "react";
const Pricing = () => {
    return (
        <div className="bg-white">
            <p className="text-5xl text-center max-w-[800px] mx-auto font-bold py-20 font-custom">Find a plan that fits your business best</p>
            {/* <div className="rounded-md border flex w-[200px] max-w-[200px] mx-auto items-center justify-center bg-gray-200"><div>Monthly</div><div>Yearly</div></div> */}
            <div className="flex max-w-[60%] pb-10">
                <div className="border">
                    <p>Basic</p>
                    <p><span className="text-3xl font-bold">$</span>
                        <span className="text-5xl fonty-bold">449</span>
                        /mo</p>
                        <p>Start building your team and hire the most talented workers in the world.</p>
                </div>
                <div>

                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;