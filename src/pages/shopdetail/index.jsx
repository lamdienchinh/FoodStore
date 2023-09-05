import { useState } from "react";
import { similarproduct } from "../../const";
import Product from "../shoplist/product"

function ShopDetail() {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <div className="py-[160px] custom-bg flex flex-column justify-center items-center flex-col">
                <h1 className="font-['Helvetica'] text-[48px] font-[700] leading-[56px] text-[#FFF] pb-20px">
                    Shop Details
                </h1>
                <div className="font-['Inter'] text-[20px] font-[400] leading-[28px] text-[#FFF]">
                    Home {`>`} <span className="text-primary-orange">Shop details</span>
                </div>
            </div>
            <div className="py-[80px] px-[152px] bg-[#FFF]">
                <div className="flex flex-row">
                    <div className="flex flex-row gap-[22px] w-[50%]">
                        <div className="flex flex-col gap-[22px]">
                            <img alt="Ảnh chi tiết món ăn" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693896251/sw000dsukmil4lmkcwzx.png"></img>
                            <img alt="Ảnh chi tiết món ăn" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693896251/s9okz9gnsfhqct4flzst.png"></img>
                            <img alt="Ảnh chi tiết món ăn" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693896240/y0g2jy9a16pmcytlymtt.png"></img>
                            <img alt="Ảnh chi tiết món ăn" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693896227/eltcvyvrpfpd6slxtjtr.png"></img>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693896252/gidazdd998xr0lkhgk69.png" alt="Ảnh món ăn chínhchính"></img>
                        </div>
                    </div>
                    <div className="w-[50%] pl-[50px]">
                        <div className="flex flex-row font-['Inter']">
                            <div className="w-[50%] flex items-center justify-start">
                                <div className="w-[30%] bg-primary-orange text-[#FFF] py-[4px] px-[6px] rounded-[6px]">
                                    In stock
                                </div>
                            </div>
                            <div className="w-[50%] text-right flex flex-row gap-[32px] justify-end">
                                <div className="flex flex-row gap-[12px] font-['Inter'] text-[#828282]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20.25 12L3.75 12" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.5 18.75L3.75 12L10.5 5.25" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> Prev
                                </div>
                                <div className="flex flex-row gap-[12px] font-['Inter'] text-[#828282]">
                                    Next <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.75 12L20.25 12" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[18px]">
                            <h1 className="font-['Helvetica'] text-[#333] font-[700] text-left">Yummy Chicken Chup</h1>
                        </div>
                        <div className="text-left font-['Inter'] mt-[12px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </div>
                        <div className="w-[100%] h-[2px] bg-[#E0E0E0] my-[20px]"></div>
                        <div className="text-left text-[#333] font-[700] font-['Helvetica'] text-[26px]">
                            54.00 $
                        </div>
                        <div className="flex flex-row text-[#828282] mt-[12px]">
                            <div className="flex flex-row gap-[4px] pr-[12px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86703 1.87012 9.73716 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55093 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z" fill="#FF9F0D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86703 1.87012 9.73716 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55093 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z" fill="#FF9F0D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86703 1.87012 9.73716 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55093 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z" fill="#FF9F0D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86703 1.87012 9.73716 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55093 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z" fill="#FF9F0D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86703 1.87012 9.73716 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55093 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z" fill="#FF9F0D" />
                                </svg>
                            </div>
                            <div className="border-x border-[#A9A9A9] px-[12px]">
                                5.0 Rating
                            </div>
                            <div className="px-[12px]">
                                22 Review
                            </div>
                        </div>
                        <div className="font-['Inter'] text-[16px] text-[#333] text-left mt-[12px]">
                            Dictum/cursus/Risus
                        </div>
                        <div className="flex flex-row items-center text-center mt-[18px] gap-[18px]">
                            <div className="w-[30%] border border-[#828282] flex flex-row font-['Helvetica']">
                                <div onClick={() => setNumber(number - 1)} className="cursor-pointer text-[28px] font-[400] w-[33.33%] flex items-center justify-center">
                                    -
                                </div>
                                <div className="text-[18px] font-[400] w-[33.33%] border-x border-[#828282] py-[8px] flex items-center justify-center">
                                    {number}
                                </div>
                                <div onClick={() => setNumber(number + 1)} className="cursor-pointer text-[28px] font-[400] w-[33.33%] flex items-center justify-center">
                                    +
                                </div>
                            </div>
                            <div className="cursor-pointer w-[30%] text-[#FFF] bg-primary-orange flex justify-center items-center py-[11px] gap-[12px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M16.875 5.625H3.125C2.77982 5.625 2.5 5.90482 2.5 6.25V16.25C2.5 16.5952 2.77982 16.875 3.125 16.875H16.875C17.2202 16.875 17.5 16.5952 17.5 16.25V6.25C17.5 5.90482 17.2202 5.625 16.875 5.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.875 8.125V5.625C6.875 4.7962 7.20424 4.00134 7.79029 3.41529C8.37634 2.82924 9.1712 2.5 10 2.5C10.8288 2.5 11.6237 2.82924 12.2097 3.41529C12.7958 4.00134 13.125 4.7962 13.125 5.625V8.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Add to cart
                            </div>
                        </div>
                        <div className="w-[100%] h-[2px] bg-[#E0E0E0] my-[20px] mt-[32px]"></div>
                        <div className="flex flex-row gap-[18px]">
                            <div className="flex flex-row gap-[8px] justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 16.875C10 16.875 2.1875 12.5 2.1875 7.18751C2.18766 6.24855 2.51301 5.33863 3.10824 4.61244C3.70347 3.88626 4.53183 3.38863 5.45249 3.20418C6.37315 3.01972 7.32928 3.15982 8.15832 3.60066C8.98736 4.04149 9.63814 4.75585 10 5.62227L9.99999 5.62228C10.3619 4.75585 11.0126 4.04149 11.8417 3.60066C12.6707 3.15983 13.6268 3.01973 14.5475 3.20418C15.4682 3.38863 16.2965 3.88625 16.8918 4.61244C17.487 5.33863 17.8123 6.24855 17.8125 7.18751C17.8125 12.5 10 16.875 10 16.875Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Add to Wishlist
                            </div>
                            <div className="flex flex-row gap-[8px] justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.3125 16.875C16.5206 16.875 17.5 15.8956 17.5 14.6875C17.5 13.4794 16.5206 12.5 15.3125 12.5C14.1044 12.5 13.125 13.4794 13.125 14.6875C13.125 15.8956 14.1044 16.875 15.3125 16.875Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.3127 12.5L15.3126 9.36571C15.3125 8.3712 14.9174 7.41744 14.2142 6.71421L11.25 3.75" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.25 6.875V3.75H14.375" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.6875 7.5C5.89562 7.5 6.875 6.52062 6.875 5.3125C6.875 4.10438 5.89562 3.125 4.6875 3.125C3.47938 3.125 2.5 4.10438 2.5 5.3125C2.5 6.52062 3.47938 7.5 4.6875 7.5Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.6875 7.5L4.68763 10.6343C4.68767 11.6288 5.08275 12.5826 5.78598 13.2858L8.75019 16.25" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.75 13.125V16.25H5.625" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Compare
                            </div>
                        </div>
                        <div className="text-left mt-[8px]">
                            Category: Pizza
                        </div>
                        <div className="text-left mt-[8px]">
                            Tag: Our Shop
                        </div>
                        <div className="text-left mt-[16px] flex flex-row gap-[8px]">
                            Share:
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_308_10882)">
                                    <path d="M13.9241 11.7996L11.2289 10.542C10.9937 10.4328 10.8005 10.5552 10.8005 10.8156V13.1844C10.8005 13.4448 10.9937 13.5672 11.2289 13.458L13.9229 12.2004C14.1593 12.09 14.1593 11.91 13.9241 11.7996ZM12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM12.0005 16.68C6.10367 16.68 6.00047 16.1484 6.00047 12C6.00047 7.85158 6.10367 7.31998 12.0005 7.31998C17.8973 7.31998 18.0005 7.85158 18.0005 12C18.0005 16.1484 17.8973 16.68 12.0005 16.68Z" fill="#4F4F4F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_308_10882">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_308_10874)">
                                    <path d="M11.522 0.00195312C5.15997 0.00195312 0.00195312 5.27219 0.00195312 11.7726C0.00195312 17.6467 4.21409 22.5155 9.72235 23.402V15.1758H6.79598V11.7726H9.72235V9.17926C9.72235 6.22689 11.4425 4.59884 14.0727 4.59884C15.3332 4.59884 16.6535 4.8284 16.6535 4.8284V7.72308H15.1972C13.7686 7.72308 13.3216 8.63187 13.3216 9.56302V11.7702H16.5141L16.0037 15.1735H13.3216V23.3996C18.8298 22.5179 23.042 17.6479 23.042 11.7726C23.042 5.27219 17.8839 0.00195312 11.522 0.00195312Z" fill="#4F4F4F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_308_10874">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_308_10880)">
                                    <path d="M12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM16.6865 9.91678C16.6913 10.0152 16.6925 10.1136 16.6925 10.2096C16.6925 13.2096 14.4113 16.6668 10.2377 16.6668C9.00442 16.6688 7.79683 16.3146 6.76007 15.6468C6.93647 15.6684 7.11767 15.6768 7.30127 15.6768C8.36447 15.6768 9.34247 15.3156 10.1189 14.706C9.64573 14.6967 9.18727 14.54 8.8074 14.2578C8.42753 13.9756 8.14517 13.5819 7.99967 13.1316C8.33946 13.1962 8.68949 13.1826 9.02327 13.092C8.50973 12.9881 8.04791 12.7099 7.71612 12.3044C7.38433 11.8989 7.203 11.3911 7.20287 10.8672V10.8396C7.50887 11.0088 7.85927 11.112 8.23127 11.124C7.74983 10.8035 7.40901 10.3112 7.27852 9.74774C7.14803 9.18429 7.23773 8.59228 7.52927 8.09278C8.09922 8.79358 8.80998 9.36688 9.61555 9.77555C10.4211 10.1842 11.3035 10.4192 12.2057 10.4652C12.091 9.97835 12.1403 9.46727 12.3461 9.01139C12.5518 8.5555 12.9024 8.18037 13.3434 7.9443C13.7843 7.70823 14.2909 7.62445 14.7843 7.70599C15.2778 7.78752 15.7305 8.02981 16.0721 8.39518C16.5799 8.29471 17.0668 8.10845 17.5121 7.84438C17.3428 8.37014 16.9885 8.81659 16.5149 9.10078C16.9647 9.0466 17.4039 8.92567 17.8181 8.74198C17.5139 9.19785 17.1306 9.59571 16.6865 9.91678Z" fill="#4F4F4F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_308_10880">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_308_10884)">
                                    <path d="M12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM16.4309 13.4772C16.4309 13.4772 17.4497 14.4828 17.7005 14.9496C17.7077 14.9592 17.7113 14.9688 17.7137 14.9736C17.8157 15.1452 17.8397 15.2784 17.7893 15.378C17.7053 15.5436 17.4173 15.6252 17.3189 15.6324H15.5189C15.3941 15.6324 15.1325 15.6 14.8157 15.3816C14.5721 15.2112 14.3321 14.9316 14.0981 14.6592C13.7489 14.2536 13.4465 13.9032 13.1417 13.9032C13.103 13.9031 13.0645 13.9092 13.0277 13.9212C12.7973 13.9956 12.5021 14.3244 12.5021 15.2004C12.5021 15.474 12.2861 15.6312 12.1337 15.6312H11.3093C11.0285 15.6312 9.56567 15.5328 8.26967 14.166C6.68327 12.492 5.25527 9.13438 5.24327 9.10318C5.15327 8.88598 5.33927 8.76958 5.54207 8.76958H7.36007C7.60247 8.76958 7.68167 8.91718 7.73687 9.04798C7.80167 9.20038 8.03927 9.80638 8.42927 10.488C9.06167 11.5992 9.44927 12.0504 9.76007 12.0504C9.81835 12.0497 9.87559 12.0349 9.92687 12.0072C10.3325 11.7816 10.2569 10.3356 10.2389 10.0356C10.2389 9.97918 10.2377 9.38878 10.0301 9.10558C9.88127 8.90038 9.62807 8.82238 9.47447 8.79358C9.53664 8.70779 9.61855 8.63823 9.71327 8.59078C9.99167 8.45158 10.4933 8.43118 10.9913 8.43118H11.2685C11.8085 8.43838 11.9477 8.47318 12.1433 8.52238C12.5393 8.61718 12.5477 8.87278 12.5129 9.74758C12.5021 9.99598 12.4913 10.2768 12.4913 10.608C12.4913 10.68 12.4877 10.7568 12.4877 10.8384C12.4757 11.2836 12.4613 11.7888 12.7757 11.9964C12.8167 12.0221 12.8641 12.0358 12.9125 12.036C13.0217 12.036 13.3505 12.036 14.2409 10.5084C14.5155 10.0167 14.7541 9.50575 14.9549 8.97958C14.9729 8.94838 15.0257 8.85238 15.0881 8.81518C15.1341 8.7917 15.1852 8.77976 15.2369 8.78038H17.3741C17.6069 8.78038 17.7665 8.81518 17.7965 8.90518C17.8493 9.04798 17.7869 9.48358 16.8113 10.8048L16.3757 11.3796C15.4913 12.5388 15.4913 12.5976 16.4309 13.4772Z" fill="#4F4F4F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_308_10884">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_308_10876)">
                                    <path d="M23.3246 6.90662C23.3115 5.9241 23.1273 4.95136 22.7802 4.03189C22.4792 3.25632 22.0194 2.55197 21.4303 1.96383C20.8412 1.3757 20.1357 0.916711 19.3588 0.616199C18.4496 0.275483 17.4892 0.091251 16.5183 0.0713495C15.2682 0.0155672 14.8719 0 11.6987 0C8.52551 0 8.11879 8.69882e-08 6.87784 0.0713495C5.90738 0.0913974 4.94735 0.275627 4.03861 0.616199C3.26163 0.916501 2.55599 1.37541 1.96685 1.96358C1.37771 2.55174 0.918028 3.2562 0.617226 4.03189C0.275258 4.93885 0.0911196 5.89749 0.0727677 6.86641C0.0168925 8.11567 0 8.51133 0 11.6792C0 14.8472 -9.68145e-09 15.2519 0.0727677 16.4921C0.092259 17.4624 0.275477 18.4198 0.617226 19.3292C0.918533 20.1046 1.37855 20.8088 1.96789 21.3967C2.55723 21.9847 3.26293 22.4434 4.0399 22.7436C4.94617 23.098 5.90636 23.2954 6.87914 23.3274C8.13049 23.3831 8.52681 23.4 11.7 23.4C14.8732 23.4 15.2799 23.4 16.5209 23.3274C17.4917 23.3083 18.4523 23.1245 19.3614 22.7838C20.1381 22.4829 20.8434 22.0238 21.4325 21.4357C22.0215 20.8477 22.4814 20.1435 22.7828 19.3681C23.1245 18.46 23.3077 17.5027 23.3272 16.531C23.3831 15.283 23.4 14.8874 23.4 11.7182C23.3974 8.55025 23.3974 8.1481 23.3246 6.90662ZM11.6909 17.67C8.37218 17.67 5.68367 14.986 5.68367 11.6728C5.68367 8.35955 8.37218 5.67552 11.6909 5.67552C13.2841 5.67552 14.8121 6.30737 15.9387 7.43207C17.0652 8.55677 17.6981 10.0822 17.6981 11.6728C17.6981 13.2633 17.0652 14.7887 15.9387 15.9134C14.8121 17.0381 13.2841 17.67 11.6909 17.67ZM17.9372 6.85213C17.1615 6.85213 16.5365 6.22686 16.5365 5.45369C16.5365 5.27013 16.5727 5.08836 16.643 4.91877C16.7134 4.74918 16.8165 4.59509 16.9465 4.46529C17.0766 4.3355 17.2309 4.23254 17.4008 4.16229C17.5706 4.09204 17.7527 4.05589 17.9366 4.05589C18.1204 4.05589 18.3025 4.09204 18.4724 4.16229C18.6423 4.23254 18.7966 4.3355 18.9266 4.46529C19.0566 4.59509 19.1598 4.74918 19.2301 4.91877C19.3005 5.08836 19.3367 5.27013 19.3367 5.45369C19.3367 6.22686 18.7104 6.85213 17.9372 6.85213Z" fill="#4F4F4F" />
                                    <path d="M11.6912 15.5687C13.8463 15.5687 15.5934 13.8245 15.5934 11.673C15.5934 9.5215 13.8463 7.77734 11.6912 7.77734C9.53612 7.77734 7.78906 9.5215 7.78906 11.673C7.78906 13.8245 9.53612 15.5687 11.6912 15.5687Z" fill="#4F4F4F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_308_10876">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[152px] bg-[#FFF] pb-[80px]">
                <div className="flex flex-row">
                    <div className="cursor-pointer w-[14%] bg-primary-orange py-[8px] px-[4px] text-[#FFF] flex justify-center items-center">
                        Description
                    </div>
                    <div className="cursor-pointer hover:bg-primary-orange hover:text-[#FFF] w-[14%] py-[8px] px-[4px] ml-[32px] flex justify-center items-center">
                        Reviews (24)
                    </div>
                </div>
                <div className="font-['Inter'] text-[#828282] text-left mt-[24px]">
                    Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
                    <br />
                    <br />
                    Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
                    <br />
                    <br />
                    <h3 className="text-[#4F4F4F] text-['Helvetica'] text-[18px] text-left">
                        Key Benefits
                    </h3>
                    <br />
                    <ul className="list-disc pl-[20px]">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                        <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                        <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                        <li>Mauris eget diam magna, in blandit turpis.</li>
                    </ul>
                </div>
                <div className="flex flex-row mt-[100px] mb-[24px]">
                    <div className="w-[50%] text-left text-[#333] font-[700] text-[28px]">
                        Similar Products
                    </div>
                    <div className="w-[50%] text-right flex flex-row gap-[12px] justify-end">
                        <div className="w-[50px] h-[50px] rounded-[100%] bg-[#FAF7F2] flex justify-center items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M16.875 10.5L3.125 10.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.75 15.9844L3.125 10.5L8.75 5.01563" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="w-[50px] h-[50px] rounded-[100%] bg-primary-orange flex justify-center items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M3.125 10.5H16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.25 5.01562L16.875 10.5L11.25 15.9844" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[16px]">
                    {
                        similarproduct && similarproduct.map((item, index) => (
                            <Product item={item} key={index}></Product>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopDetail;