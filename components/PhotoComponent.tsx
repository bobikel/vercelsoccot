"use client";

import Link from "next/link";

const PhotoComponent = () => {
    return (
        <div className=" relative max-w-[300px] hidden lg:block md:block  ">
            <div className=" shadow-lg  relative rounded-[12px] ">
                <div
                >
                    <div ><img alt="" aria-hidden="true" className="rounded-[12px]"
                        src="/assets/images/profile.jpg"
                    /></div>

                </div>

            </div>
            <div className=" border-2 absolute top-[20px] left-[20px] w-full h-full rounded-[12px] " ></div>
        </div>
    );
};

export default PhotoComponent;
