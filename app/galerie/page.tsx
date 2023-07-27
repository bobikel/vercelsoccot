import PhotoComponent from "@/components/PhotoComponent"
import { ProductData } from '@/data/productData'



export default function Galerie() {
    return (
        <main className="px-6 lg:px-16 md:px-10  h-full pt-[40px] w-full pb-[100px] ">
            <div className="grid justify-between gap-x-3 md:gap-y-[7rem] gap-y-[3rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {
                    ProductData.map((product, index) => {
              
                        return (
                            <div key={index} className=" relative max-w-[300px] hidden lg:block md:block  ">
                                <div className=" shadow-lg  relative rounded-[12px] ">
                                    <div
                                    >
                                        <div ><img alt="" aria-hidden="true" className="rounded-[12px]"
                                            src="/assets/images/vlc.png"
                                        /></div>

                                    </div>

                                </div>
                                <div className=" border-2 absolute top-[20px] left-[20px] w-full h-full rounded-[12px] " ></div>
                            </div>
                        )
                    })

                }

            </div>

        </main>
    )
}
