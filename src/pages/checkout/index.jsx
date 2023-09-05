import { useState } from "react"
import "./Checkout.css"
import { checkoutlist } from "../../fakeData"
import OrderItem from "./orderitem"

function Checkout(props) {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [code, setCode] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="checkout">
            <div className="py-[160px] custom-bg flex flex-column justify-center items-center flex-col">
                <h1 className="font-['Helvetica'] text-[48px] font-[700] leading-[56px] text-[#FFF] pb-20px">
                    Checkout Page
                </h1>
                <div className="font-['Inter'] text-[20px] font-[400] leading-[28px] text-[#FFF]">
                    Home {`>`} <span className="text-primary-orange">Checkout</span>
                </div>
            </div>
            <div className="flex flex-row py-[80px] bg-[#FFF] px-[152px]">
                <div className="w-[70%]">
                    <div className="text-left font-['Helvetica'] text-[20px] font-[700] mb-[12px]">
                        Shipping Address
                    </div>
                    <div className="flex flex-row gap-[22px] w-[100%] text-left">
                        <form className="w-[50%]">
                            <div>
                                First name
                            </div>
                            <input value={firstname} onChange={(event) => setFirstName(event.target.value)}></input>
                        </form>
                        <form className="w-[50%]">
                            <div>
                                Last name
                            </div>
                            <input value={firstname} onChange={(event) => setFirstName(event.target.value)}></input>
                        </form>
                    </div>
                    <div className="flex flex-row gap-[22px] w-[100%] text-left">
                        <form className="w-[50%]">
                            <div>
                                Email Address
                            </div>
                            <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
                        </form>
                        <form className="w-[50%]">
                            <div>
                                Phone number
                            </div>
                            <input value={phone} onChange={(event) => setPhone(event.target.value)}></input>
                        </form>
                    </div>
                    <div className="flex flex-row gap-[22px] w-[100%] text-left">
                        <form className="w-[50%]">
                            <div>
                                Company
                            </div>
                            <input value={company} onChange={(event) => setCompany(event.target.value)}></input>
                        </form>
                        <form className="w-[50%]">
                            <div>
                                Country
                            </div>
                            <div className="w-[100%] custom-select">
                                <select className="focus:outline-none w-[100%]" value={country} onChange={(event) => setCountry(event.target.value)}>
                                    <option value="" disabled>Select an option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-row gap-[22px] w-[100%] text-left">
                        <form className="w-[50%]">
                            <div>
                                City
                            </div>
                            <input value={city} onChange={(event) => setCity(event.target.value)}></input>
                        </form>
                        <form className="w-[50%]">
                            <div>
                                Zip code
                            </div>
                            <input value={code} onChange={(event) => setCode(event.target.value)}></input>
                        </form>
                    </div>
                    <div className="flex flex-row gap-[22px] w-[100%] text-left">
                        <form className="w-[50%]">
                            <div>
                                Address 1
                            </div>
                            <input value={address1} onChange={(event) => setAddress1(event.target.value)}></input>
                        </form>
                        <form className="w-[50%]">
                            <div>
                                Address 2
                            </div>
                            <input value={address2} onChange={(event) => setAddress2(event.target.value)}></input>
                        </form>
                    </div>
                    <div className="text-left mb-[18px]">
                        <h2 className="mb-[12px] font-['Helvetica'] text-[20px] font-[700]">
                            Billing Address
                        </h2>
                        <div className="flex flex-row">
                            <input
                                className="custom-checkbox bg-primary-orange text-primary-orange focus:text-primary-orange mr-[10px]"
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                id="myCheckbox"
                            />
                            <label for="myCheckbox"></label>
                            <div>
                                Same as shipping address
                            </div>
                        </div>
                    </div>
                    <div className="text-[16px] w-[100%] flex flex-row gap-[20px]">
                        <button className="justify-center rounded-none py-[12px] w-[50%] flex flex-row gap-[20px] bg-[#FFF] border-[2px] border-[#E0E0E0] text-[#333]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 19.5L7.5 12L15 4.5" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Back to cart
                        </button>
                        <button className="justify-center rounded-none py-[12px] w-[50%] flex flex-row gap-[20px] bg-primary-orange text-[#FFF]">
                            Proceed to shipping
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 4.5L16.5 12L9 19.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="ml-[12px] border-[2px] border-[#E0E0E0] w-[30%] pt-[20px]">
                    <div className="flex flex-col gap-[20px] mx-[18px] mb-[32px]">
                        {
                            checkoutlist && checkoutlist.map((item, index) => (
                                <OrderItem item={item} key={index} />
                            ))
                        }
                    </div>
                    <div>
                        <div className="flex flex-row py-[12px] mx-[18px] border-t-[2px] border-[#E0E0E0] ">
                            <div className="w-[50%] text-left font-['Helvetica'] text-[16px]">
                                Sub-total
                            </div>
                            <div className="w-[50%] text-right font-['Helvetica'] text-[16px]">
                                {130}$
                            </div>
                        </div>
                        <div className="flex flex-row py-[12px] mx-[18px] ">
                            <div className="w-[50%] text-left font-['Helvetica'] text-[16px]">
                                Shipping
                            </div>
                            <div className="w-[50%] text-right font-['Helvetica'] text-[16px]">
                                Free
                            </div>
                        </div>
                        <div className="flex flex-row py-[12px] mx-[18px] ">
                            <div className="w-[50%] text-left font-['Helvetica'] text-[16px]">
                                Discount
                            </div>
                            <div className="w-[50%] text-right font-['Helvetica'] text-[16px]">
                                {25}%
                            </div>
                        </div>
                        <div className="flex flex-row py-[12px] mx-[18px] ">
                            <div className="w-[50%] text-left font-['Helvetica'] text-[16px]">
                                Tax
                            </div>
                            <div className="w-[50%] text-right font-['Helvetica'] text-[16px]">
                                {54.76}$
                            </div>
                        </div>
                        <div className="flex flex-row py-[12px] mx-[18px] border-t-[2px] border-[#E0E0E0] font-[700]">
                            <div className="w-[50%] text-left font-['Helvetica'] text-[16px] ">
                                Total
                            </div>
                            <div className="w-[50%] text-right font-['Helvetica'] text-[16px]">
                                {432.65}$
                            </div>
                        </div>
                        <div className="mx-[18px] mt-[20px]">
                            <button className="w-[100%] text-[#FFF] flex flex-row gap-[18px] bg-primary-orange font-['Helvetica'] text-[18px] font-[700]">
                                Place an order
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M3.125 10H16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout