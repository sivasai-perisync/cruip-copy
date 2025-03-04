import React from "react";
import data from "../../../Data/Questions.json"
const Questions = () => {
    return (
        <div className=" py-20 max-w-7xl  mx-auto p-4">
            <div className="max-w-3xl  mx-auto">
                <h2 className="text-5xl font-extrabold font-custom py-2 ">Frequently asked questions</h2>
                {data.map((items, i) => {
                    return (
                        <div key={i}>  <h4 className="font-bold font-custom text-lg pb-1 pt-6">{items.head}</h4>
                            <p className="text-gray-500">{items.para}</p> </div>
                    )
                })}



            </div>
        </div>
    )
}
export default Questions;