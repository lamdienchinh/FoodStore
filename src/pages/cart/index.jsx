import { useEffect, useState } from "react";
import { cart } from "../../fakeData"
import Product from "./product";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [totalPrice, setTotalPrice] = useState(0);
    const updateTotalPrice = (updatedTotal) => {
        setTotalPrice(totalPrice + updatedTotal);
    };
    useEffect(() => {
        let temp = totalPrice;
        for (let item of cart) {
            temp += item.price * item.number;
        }
        setTotalPrice(temp);
    }, [])
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/checkout")
    }
    return (
        <div>
            <div className="py-[160px] custom-bg flex flex-column justify-center items-center flex-col">
                <h1 className="font-['Helvetica'] text-[48px] font-[700] leading-[56px] text-[#FFF] pb-20px">
                    Shopping Cart
                </h1>
                <div className="font-['Inter'] text-[20px] font-[400] leading-[28px] text-[#FFF]">
                    Home {`>`} <span className="text-primary-orange">Shopping cart</span>
                </div>
            </div>
            <div className="px-[152px] py-[80px] bg-[#FFF]">
                <div className="flex flex-row text-left font-['Inter'] font-[700] text-[18px]">
                    <div className="w-[28%]">
                        Product
                    </div>
                    <div className="w-[18%] text-center">
                        Price
                    </div>
                    <div className="w-[18%] text-center">
                        Quantity
                    </div>
                    <div className="w-[18%] text-center">
                        Total
                    </div>
                    <div className="w-[18%] text-center">
                        Remove
                    </div>
                </div>
                {
                    cart && cart.map((item, index) => (
                        <Product item={item} key={index} updateTotalPrice={updateTotalPrice} />
                    ))
                }
            </div>
            <div className="bg-[#FFF] pb-[100px] px-[152px] text-left rounded-[6px] flex flex-row gap-[30px]">
                <div className="w-[50%]">
                    <div className="text-[32px] font-['Helvetica'] font-[700] mb-[16px]">
                        Coupon Code
                    </div>
                    <div className="border-[2px] rounded-[6px] px-[16px] py-[22px]">
                        <div className="text-[#828282] text-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
                        </div>
                        <div className="flex flex-row mt-[16px] border-[2px] rounded-[6px] border-r-0">
                            <div className="w-[85%]">
                                <input className="px-[16px] focus:outline-none w-[100%] h-[100%]" placeholder="Enter your code hear"></input>
                            </div>
                            <button className="text-[#FFF] w-[15%] bg-primary-orange rounded-[6px] border-primary-orange border-[2px]">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="text-[32px] font-['Helvetica'] font-[700] mb-[16px]">
                        Total Bill
                    </div>
                    <div className="flex flex-col gap-[10px] border-[2px] rounded-[6px] py-[16px]">
                        <div className="px-[16px] flex flex-row font-['Helvetica'] text-[20px] font-[700]">
                            <div className="w-[50%] text-left">
                                Cart Subtotal
                            </div>
                            <div className="w-[50%] text-right">
                                ${totalPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="px-[16px] flex flex-row font-['Inter'] text-[18px] pb-[8px]">
                            <div className="w-[50%] text-left font-[400]">
                                Shipping Charge
                            </div>
                            <div className="w-[50%] text-right">
                                $00.00
                            </div>
                        </div>
                        <div className="pt-[16px] border-t-[2px] flex flex-row font-['Helvetica'] text-[20px] font-[700]">
                            <div className="pl-[16px] w-[50%] text-left">
                                Total Amount
                            </div>
                            <div className=" pr-[16px] w-[50%] text-right">
                                ${totalPrice.toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <div className="mt-[32px]">
                        <button onClick={() => handleClick()} className="flex flex-row items-center gap-[12px] justify-center w-[100%] font-[400] bg-primary-orange rounded-none text-[#FFF] text-[18px] font-['Inter']">
                            Proceed to Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M3.4375 11.1932V4.0625C3.4375 3.89674 3.50335 3.73777 3.62056 3.62056C3.73777 3.50335 3.89674 3.4375 4.0625 3.4375H15.9375C16.1033 3.4375 16.2622 3.50335 16.3794 3.62056C16.4967 3.73777 16.5625 3.89674 16.5625 4.0625V15.9375C16.5625 16.1033 16.4967 16.2622 16.3794 16.3794C16.2622 16.4967 16.1033 16.5625 15.9375 16.5625H10.5966" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 11.875L5 16.875L2.5 14.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;