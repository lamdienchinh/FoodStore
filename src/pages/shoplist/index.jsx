import { lastestproduct, listproduct } from "../../const"
import LatestProduct from "./lastestproduct"
import Product from "./product"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "./rangeslider/RangeSlider.css"
import { useState } from "react";
import ReactPaginate from 'react-paginate';
import "./ShopList.css"

function ShopList() {
    const [valueFilter, setValueFilter] = useState([0, 8000]);
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 15;

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };

    const offset = currentPage * productsPerPage;
    const currentProducts = listproduct.slice(offset, offset + productsPerPage);
    const pageCount = Math.ceil(listproduct.length / productsPerPage);

    return (
        <div>
            <div className="py-[160px] custom-bg flex flex-column justify-center items-center flex-col">
                <h1 className="font-['Helvetica'] text-[48px] font-[700] leading-[56px] text-[#FFF] pb-20px">
                    Our Shop
                </h1>
                <div className="font-['Inter'] text-[20px] font-[400] leading-[28px] text-[#FFF]">
                    Home {`>`} <span className="text-primary-orange">Shop</span>
                </div>
            </div>
            <div className="flex flex-col gap-[12px] px-[152px] py-[80px] bg-[#FFF]">
                <div className="flex flex-row gap-[12px] mb-[12px]">
                    <div>
                        <label className="pr-[12px]" for="sort">Sort by:</label>
                        <select className="text-[#E0E0E0] border py-[4px] pl-[5px] pr-[60px]" name="sort" id="sort">
                            <option value="newest">Newest</option>
                            <option value="newest">Oldest</option>
                        </select>
                    </div>
                    <div>
                        <label className="pr-[12px]" for="show">Show:</label>
                        <select className="text-[#E0E0E0] border py-[4px] pl-[5px] pr-[60px]" name="show" id="show">
                            <option value="default">Default</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-row gap-[22px]">
                    <div className="w-[70%] flex flex-col">
                        <div className="grid grid-cols-3 gap-[12px]">
                            {currentProducts.map((item, index) => (
                                <Product item={item} key={index}></Product>
                            ))}
                        </div>
                        <div className="flex justify-center align-center mt-[35px]">
                            <ReactPaginate
                                pageClassName="pageClassname"
                                activeClassName="activeClassName"
                                pageLinkClassName="pageLinkClassName"
                                activeLinkClassName="activeLinkClassName"
                                previousClassName="previousClassName"
                                previousLinkClassName="previousLinkClassName"
                                nextLinkClassName="nextLinkClassName"
                                nextClassName="nextClassName"
                                className="flex flex-row gap-[20px]"
                                breakLabel="..."
                                nextLabel=">>"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="<<"
                                renderOnZeroPageCount={null}
                            />

                        </div>
                    </div>
                    <div className="border border-gray-300 p-[16px] rounded-[6px]">
                        <div className="bg-[#FF9F0D1A] flex flex-row mb-[20px]">
                            <input placeholder="Search Product" className="w-[80%] text-[12px] py-[10px] px-[16px] bg-transparent focus:outline-none"></input>
                            <div className=" flex items-center justify-center w-[20%] py-[8px] px-[8px] bg-primary-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.7026 13.7031L17.4996 17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="text-[18px] font-[700] pb-[18px]">Category</div>
                            <div className="flex flex-col gap-[10px] mb-[14px] ">
                                <div className="flex gap-[8px]">
                                    <input className="customize-checkbox" type="checkbox"></input>
                                    <label >Sandwiches</label>
                                </div>
                                <div className="flex gap-[8px]">
                                    <input className="customize-checkbox" type="checkbox"></input>
                                    <label>Burger</label>
                                </div>
                                <div className="flex gap-[8px]">
                                    <input className="customize-checkbox" type="checkbox"></input>
                                    <label>Chicken Chup</label>
                                </div>
                                <div className="flex gap-[8px]">
                                    <input className="customize-checkbox" type="checkbox"></input>
                                    <label>Drink</label>
                                </div>
                                <div className="flex gap-[8px]">
                                    <input className="customize-checkbox" type="checkbox"></input>
                                    <label>Pizza</label>
                                </div>
                                <div className="flex gap-[8px]">
                                    <input className="customize-checkbox" type="checkbox"></input>
                                    <label>Thi</label>
                                </div>
                                <div className="flex gap-[8px]">
                                    <input className="customize-checkbox" type="checkbox"></input>
                                    <label>Non Veg</label>
                                </div>
                                <div className="flex gap-[8px]">
                                    <input className="customize-checkbox" type="checkbox"></input>
                                    <label>Uncategorized</label>
                                </div>
                            </div>
                            <div className="relative bg-[url('')] text-[#FFF]">
                                <img className="object-cover" alt="quảng cáo" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693882336/deshypo5hch8tmn9ab4n.png"></img>
                                <div className="absolute top-[10%] left-[12px] font-[600]">
                                    Perfect Taste
                                </div>
                                <div className="absolute top-[20%] left-[12px] font-[700] text-[20px]">
                                    Classic Restaurant
                                </div>
                                <div className="absolute top-[35%] left-[12px] font-[600] text-primary-orange">
                                    45.00$
                                </div>
                                <div className="cursor-pointer absolute top-[80%] left-[12px] flex flex-row gap-[8px] justify-center items-center">
                                    Shop Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M10.4731 12.6517L13.1248 10L10.4731 7.34839" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.875 10H13.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div className="font-[700] mt-[18px] text-[18px] mb-[20px]">
                                    Filter By Price
                                </div>
                                <div>
                                    <RangeSlider step={1} min={0} max={8000} id="range-slider-yellow" onInput={(value, userInteraction) => { setValueFilter(value) }} />
                                    <div className="flex flex-row mt-[16px]">
                                        <div className="w-[70%]">
                                            From ${valueFilter[0]} to ${valueFilter[1]}
                                        </div >
                                        <div className="w-[30%] text-right">Filter</div>
                                    </div>
                                </div>
                                <div className="mb-[12px] font-[700] mt-[18px] text-[18px]">
                                    Lastest Products
                                </div>
                                <div className="flex flex-col gap-[12px]">
                                    {
                                        lastestproduct && lastestproduct.map((item, index) => (
                                            <LatestProduct item={item} key={index}></LatestProduct>
                                        ))
                                    }
                                </div>
                                <div className="font-[700] mt-[18px] text-[18px] mb-[12px]">
                                    Product Tags
                                </div>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex flex-row gap-[6px]">
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Services
                                        </div>
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white  shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Our Menu
                                        </div>
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white  shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Pizza
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[6px]">
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white  shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Cupcake
                                        </div>
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white  shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Burger
                                        </div>
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white  shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Cookies
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[6px]">
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white  shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Our Shop
                                        </div>
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white  shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Tandoori
                                        </div>
                                        <div className="hover:text-primary-orange shadow-lg border-b border-white  shadow-black-500/40 py-[2px] px-[2px] hover:border-b hover:border-primary-orange cursor-pointer">
                                            Chicken
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopList