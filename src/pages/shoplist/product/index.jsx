import "./Product.css"
import { Link } from "react-router-dom";

function Product(props) {
    return (
        <div className="">
            <Link to="/shopdetail">
                <div className="custom-product relative flex flex-col">
                    <img alt="ảnh đồ ăn" src={props.item.img}></img>
                    {
                        props.item.isSale === true ? <div className="custom-sale absolute top-[10%] left-[10%] bg-primary-orange text-[#FFF] py-[2px] px-[12px] rounded-[4px] text-[12px]">Sell</div> : ""
                    }
                    <div className="absolute left-[50%] transform translate-x-[-50%] translate-y-[-50%] top-[50%] justify-center items-center flex flex-row gap-[10px]">
                        <div className="product-action bg-[#FFF] p-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M14.7484 15.5444C15.8342 15.5444 16.7145 14.6874 16.7145 13.6302C16.7145 12.5731 15.8342 11.7161 14.7484 11.7161C13.6625 11.7161 12.7822 12.5731 12.7822 13.6302C12.7822 14.6874 13.6625 15.5444 14.7484 15.5444Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.7488 11.7162L14.7486 8.97356C14.7486 8.10332 14.3935 7.26873 13.7614 6.65338L11.0972 4.05957" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.0972 6.79408V4.05957H13.9059" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.19857 7.34101C6.28444 7.34101 7.16471 6.48401 7.16471 5.42685C7.16471 4.36969 6.28444 3.5127 5.19857 3.5127C4.1127 3.5127 3.23242 4.36969 3.23242 5.42685C3.23242 6.48401 4.1127 7.34101 5.19857 7.34101Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.19873 7.34082L5.19884 10.0835C5.19888 10.9537 5.55399 11.7883 6.18605 12.4036L8.85032 14.9974" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.8498 12.2629V14.9974H6.04102" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="product-action bg-[#FFF] p-[8px]">
                            <svg className="stroke-primary-orange" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path className="stroke-primary-orange" d="M15.5805 15.5444H4.22743C4.08918 15.5444 3.95579 15.4948 3.85278 15.405C3.74977 15.3153 3.68437 15.1917 3.66911 15.0579L2.67043 6.30749C2.6617 6.23105 2.66964 6.15367 2.69372 6.08041C2.7178 6.00716 2.75748 5.93967 2.81017 5.88236C2.86286 5.82504 2.92737 5.7792 2.9995 5.74781C3.07163 5.71642 3.14974 5.7002 3.22875 5.7002H16.5791C16.6581 5.7002 16.7363 5.71642 16.8084 5.74781C16.8805 5.7792 16.945 5.82504 16.9977 5.88236C17.0504 5.93967 17.0901 6.00716 17.1142 6.08041C17.1383 6.15367 17.1462 6.23105 17.1375 6.30749L16.1388 15.0579C16.1235 15.1917 16.0581 15.3153 15.9551 15.405C15.8521 15.4948 15.7187 15.5444 15.5805 15.5444Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path className="stroke-primary-orange" d="M7.09473 7.88769V5.70008C7.09473 4.97485 7.39065 4.27931 7.9174 3.76649C8.44415 3.25368 9.15857 2.96558 9.90351 2.96558C10.6484 2.96558 11.3629 3.25368 11.8896 3.76649C12.4164 4.27931 12.7123 4.97485 12.7123 5.70008V7.88769" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="product-action bg-[#FFF] p-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M9.83347 15.5445C9.83347 15.5445 2.81152 11.7162 2.81152 7.06756C2.81167 6.24593 3.1041 5.44971 3.63909 4.81427C4.17409 4.17883 4.91863 3.74339 5.74613 3.58198C6.57363 3.42057 7.43301 3.54317 8.17816 3.92892C8.92331 4.31466 9.50823 4.93976 9.83348 5.69791L9.83347 5.69792C10.1587 4.93976 10.7436 4.31467 11.4888 3.92892C12.2339 3.54317 13.0933 3.42058 13.9208 3.58198C14.7483 3.74339 15.4929 4.17883 16.0279 4.81427C16.5629 5.44971 16.8553 6.24593 16.8554 7.06756C16.8554 11.7162 9.83347 15.5445 9.83347 15.5445Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="text-left font-[700] mt-[8px] text-[#333]">
                    {props.item.name}
                </div>
                <div className="flex flex-row gap-[12px]">
                    <div className="text-primary-orange">
                        $ {(props.item.price).toFixed(2)}
                    </div>
                    {
                        props.item?.pricebefore ?
                            <div className="line-through text-[#828282]">$ {(props.item.pricebefore).toFixed(2)}</div> : ""
                    }
                </div>
            </Link>
        </div>
    )
}

export default Product;