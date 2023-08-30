import { useEffect, useState } from "react";
import "./Product.css"

function Product(props) {
    const [number, setNumber] = useState(props.item.number)
    const [total, setTotal] = useState(props.item.price * props.item.number)
    const handle = (action) => {
        if (action === "+") {
            updateTotal("+");
            setTotal(props.item.price * (number + 1))
            setNumber(number + 1)
        }
        else if (action === "-") {
            updateTotal("-");
            setTotal(props.item.price * (number - 1))
            setNumber(number - 1)
        }
    }

    const updateTotal = (data) => {
        let slice = 0;
        if (data === "+") {
            slice = props.item.price * 1;
        }
        else {
            slice = -props.item.price * 1;
        }
        props.updateTotalPrice(slice);
    };
    return (
        <div className="mt-[12px] flex flex-row py-[20px] border-b border-[#E0E0E0]">
            <div className="w-[28%] flex flex-row">
                <div>
                    <img src={props.item.img} alt="món ăn trong giỏ">
                    </img>
                </div>
                <div>
                    <div className="text-left ml-[20px] mb-[10px] font-[700] font-['Inter'] text-[16px] text-[#333]">
                        {props.item.name}
                    </div>
                    <div className="ml-[20px] flex flex-row">
                        {
                            props.item.star && (
                                Array.from({ length: props.item.star }).map((_, index) => (
                                    <div key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <path d="M10.5242 15.0398L14.4677 17.543C14.9763 17.8638 15.6022 17.3866 15.4535 16.7999L14.3112 12.3096C14.2803 12.1852 14.2852 12.0545 14.3254 11.9327C14.3655 11.8109 14.4392 11.703 14.5381 11.6212L18.0747 8.67208C18.5363 8.28876 18.3016 7.51431 17.6991 7.4752L13.0828 7.17794C12.9568 7.17061 12.8357 7.12676 12.7343 7.05174C12.6328 6.97672 12.5555 6.87378 12.5116 6.75551L10.7902 2.42172C10.7447 2.29648 10.6617 2.18829 10.5525 2.11184C10.4433 2.03539 10.3132 1.99438 10.1799 1.99438C10.0466 1.99438 9.91657 2.03539 9.80739 2.11184C9.6982 2.18829 9.6152 2.29648 9.56963 2.42172L7.84827 6.75551C7.8044 6.87378 7.72702 6.97672 7.62558 7.05174C7.52415 7.12676 7.40305 7.17061 7.27709 7.17794L2.66072 7.4752C2.05825 7.51431 1.82352 8.28876 2.28516 8.67208L5.82176 11.6212C5.92061 11.703 5.99436 11.8109 6.0345 11.9327C6.07465 12.0545 6.07956 12.1852 6.04867 12.3096L4.99238 16.4713C4.81242 17.1754 5.56356 17.7464 6.16604 17.3631L9.83566 15.0398C9.93856 14.9744 10.058 14.9396 10.1799 14.9396C10.3019 14.9396 10.4213 14.9744 10.5242 15.0398Z" fill="#FF9F0D" />
                                        </svg>
                                    </div>
                                ))
                            )
                        }
                        {
                            props.item.star && (
                                Array.from({ length: 5 - props.item.star }).map((_, index) => (
                                    <div key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <path d="M10.6336 15.0398L14.5771 17.543C15.0856 17.8638 15.7116 17.3866 15.5629 16.7999L14.4206 12.3096C14.3897 12.1852 14.3946 12.0545 14.4347 11.9327C14.4749 11.8109 14.5486 11.703 14.6475 11.6212L18.1841 8.67208C18.6457 8.28876 18.411 7.51431 17.8085 7.4752L13.1921 7.17794C13.0662 7.17061 12.9451 7.12676 12.8437 7.05174C12.7422 6.97672 12.6648 6.87378 12.621 6.75551L10.8996 2.42172C10.854 2.29648 10.771 2.18829 10.6618 2.11184C10.5527 2.03539 10.4226 1.99438 10.2893 1.99438C10.156 1.99438 10.0259 2.03539 9.91676 2.11184C9.80758 2.18829 9.72457 2.29648 9.67901 2.42172L7.95765 6.75551C7.91378 6.87378 7.83639 6.97672 7.73496 7.05174C7.63352 7.12676 7.51243 7.17061 7.38647 7.17794L2.7701 7.4752C2.16762 7.51431 1.93289 8.28876 2.39453 8.67208L5.93114 11.6212C6.02999 11.703 6.10373 11.8109 6.14388 11.9327C6.18402 12.0545 6.18893 12.1852 6.15805 12.3096L5.10176 16.4713C4.9218 17.1754 5.67294 17.7464 6.27541 17.3631L9.94503 15.0398C10.0479 14.9744 10.1674 14.9396 10.2893 14.9396C10.4113 14.9396 10.5307 14.9744 10.6336 15.0398Z" fill="#E0E0E0" />
                                        </svg>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="text-[#333] w-[18%] flex flex-row justify-center items-center font-['Helvetica'] text-[16px]">
                ${props.item.price.toFixed(2)}
            </div>
            <div className="w-[18%] flex justify-center items-center">
                <div className="w-[50%] gap-[16px] border rounded-[18px] border-[#E0E0E0] flex flex-row justify-center items-center py-[10px]">
                    <div className="cursor-pointer font-[700] hover:text-primary-orange" onClick={() => handle("-")}>
                        -
                    </div>
                    <div>
                        {number}
                    </div>
                    <div className="cursor-pointer font-[700] hover:text-primary-orange" onClick={() => handle("+")}>
                        +
                    </div>
                </div>
            </div>
            <div className="font-[700] w-[18%] text-[#333] flex flex-row justify-center items-center font-['Helvetica'] text-[16px]">
                ${total.toFixed(2)}
            </div>
            <div className="w-[18%] flex justify-center items-center">
                <svg className="cancel-button" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M16.397 4.51147L5.12988 15.7762" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.397 15.7762L5.12988 4.51147" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default Product;