import React from "react";

const BrandAwards = () => {
    return (
        <>
            <div className="relative">
                <h2 className="text-[54px] font-semibold text-center">Brand Awards</h2>
                <img src="/image/about/p2-offset-img1.webp" alt="Error" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            <div className="mt-10 custom_container">
                <div className="grid lg:grid-cols-3 gap-14 lg:gap-20 custom_container max-lg:px-10">
                    <div className="col-span-1">
                        <div className="flex items-end gap-5">
                            <div className="w-[100px] h-[100px]">
                                <img src="/image/about/p2-icon-img2.webp" alt="" className="" />
                            </div>
                            <h5 className="text-2xl font-semibold">Behance x4<br />
                                Award</h5>
                        </div>
                        <div className="mt-5">
                            <p>Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Enisit amet venenatis urna cursus eget nunc sceler isque.</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-end gap-5">
                            <div className="w-[100px] h-[100px]">
                                <img src="/image/about/p2-icon-img1.webp" alt="" className="" />
                            </div>
                            <h5 className="text-2xl font-semibold">Design x3<br />
                                Award</h5>
                        </div>
                        <div className="mt-5">
                            <p>Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Enisit amet venenatis urna cursus eget nunc sceler isque.</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-end gap-5">
                            <div className="w-[100px] h-[100px]">
                                <img src="/image/about/p2-icon-img3.webp" alt="" className="" />
                            </div>
                            <h5 className="text-2xl font-semibold">Painting x3<br />
                                Award</h5>
                        </div>
                        <div className="mt-5">
                            <p>Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Enisit amet venenatis urna cursus eget nunc sceler isque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandAwards;
