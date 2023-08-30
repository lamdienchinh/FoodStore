import "./Blogs.css"

function Blogs() {
    return (
        <div className="px-[152px] pt-[120px]">
            <div className="special-font">
                Blog Posts
            </div>
            <div className="text-[#FFF] text-[48px] text-['Helvetica'] font-[700] mb-[30px]">
                <span>La</span><span>test News & Blog</span>
            </div>
            <div className="w-[100%] flex flex-row gap-[20px]">
                <div className="flex flex-col w-[33.33%] border border-[#FFF] border-solid pb-[20px] h-[580px]">
                    <div className="h-[60%]">
                        <img className="h-[100%] object-cover" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693364856/ttqtmwouofg4g52x6qop.png" alt="bài post"></img>
                    </div>
                    <div className="h-[40%] px-[30px] flex w-[100%] flex-col text-start">
                        <div className="h-[10%] mt-[16px] text-primary-orange font-['Inter'] text-[16px]">
                            10 February 2022
                        </div>
                        <div className="h-[70%] mt-[16px] font-[700] text-[#FFF] text-[24px] font-['Helvetica']">
                            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                        </div>
                        <div className="h-[20%] mt-[16px] text-[#FFF] font-['Inter'] flex flex-row">
                            <div className="w-[50%]">
                                Learn More
                            </div>
                            <div className="flex flex-row justify-end w-[50%] gap-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.49951 8.125H6.24951V16.25H2.49951C2.33375 16.25 2.17478 16.1842 2.05757 16.0669C1.94036 15.9497 1.87451 15.7908 1.87451 15.625V8.75C1.87451 8.58424 1.94036 8.42527 2.05757 8.30806C2.17478 8.19085 2.33375 8.125 2.49951 8.125V8.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.24951 8.125L9.37451 1.875C9.70282 1.875 10.0279 1.93966 10.3312 2.0653C10.6345 2.19094 10.9101 2.37509 11.1423 2.60723C11.3744 2.83938 11.5586 3.11498 11.6842 3.41829C11.8098 3.72161 11.8745 4.0467 11.8745 4.375V6.25H16.7085C16.8858 6.25 17.061 6.28769 17.2226 6.36058C17.3841 6.43346 17.5283 6.53987 17.6456 6.67275C17.7629 6.80562 17.8506 6.96192 17.9029 7.13128C17.9552 7.30063 17.9709 7.47917 17.9489 7.65504L17.0114 15.155C16.9736 15.4574 16.8267 15.7355 16.5983 15.9371C16.3699 16.1387 16.0757 16.25 15.771 16.25H6.24951" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.04304 15.7716L3.52717 17.8865C3.43607 17.9631 3.32499 18.0121 3.207 18.0277C3.08901 18.0433 2.96901 18.0249 2.86112 17.9747C2.75323 17.9244 2.66193 17.8444 2.59796 17.744C2.53398 17.6437 2.5 17.5271 2.5 17.4081V5C2.5 4.83424 2.56585 4.67527 2.68306 4.55806C2.80027 4.44085 2.95924 4.375 3.125 4.375H16.875C17.0408 4.375 17.1997 4.44085 17.3169 4.55806C17.4342 4.67527 17.5 4.83424 17.5 5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H6.44522C6.29808 15.625 6.15567 15.6769 6.04304 15.7716Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z" fill="#FF9F0D" />
                                    <path d="M6.25 10.9375C6.76777 10.9375 7.1875 10.5178 7.1875 10C7.1875 9.48223 6.76777 9.0625 6.25 9.0625C5.73223 9.0625 5.3125 9.48223 5.3125 10C5.3125 10.5178 5.73223 10.9375 6.25 10.9375Z" fill="#FF9F0D" />
                                    <path d="M13.75 10.9375C14.2678 10.9375 14.6875 10.5178 14.6875 10C14.6875 9.48223 14.2678 9.0625 13.75 9.0625C13.2322 9.0625 12.8125 9.48223 12.8125 10C12.8125 10.5178 13.2322 10.9375 13.75 10.9375Z" fill="#FF9F0D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 18.125C15.1307 18.125 16.25 17.0057 16.25 15.625C16.25 14.2443 15.1307 13.125 13.75 13.125C12.3693 13.125 11.25 14.2443 11.25 15.625C11.25 17.0057 12.3693 18.125 13.75 18.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 6.875C15.1307 6.875 16.25 5.75571 16.25 4.375C16.25 2.99429 15.1307 1.875 13.75 1.875C12.3693 1.875 11.25 2.99429 11.25 4.375C11.25 5.75571 12.3693 6.875 13.75 6.875Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.6472 5.72681L7.10254 8.64835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.10254 11.3516L11.6472 14.2731" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[33.33%] border border-[#FFF] border-solid pb-[20px] flex-row">
                    <div className="h-[60%]">
                        <img className="h-[100%] object-cover" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693364856/la4b7p2bei7cqdbmzedn.png" alt="bài post"></img>
                    </div>
                    <div className="h-[40%] px-[30px] flex w-[100%] flex-col text-start">
                        <div className="h-[10%] mt-[16px] text-primary-orange font-['Inter'] text-[16px]">
                            10 February 2022
                        </div>
                        <div className="h-[70%] mt-[16px] font-[700] text-[#FFF] text-[24px] font-['Helvetica']">
                            Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                        </div>
                        <div className="h-[20%] mt-[16px] text-[#FFF] font-['Inter'] flex flex-row">
                            <div className="w-[50%]">
                                Learn More
                            </div>
                            <div className="flex flex-row justify-end w-[50%] gap-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.49951 8.125H6.24951V16.25H2.49951C2.33375 16.25 2.17478 16.1842 2.05757 16.0669C1.94036 15.9497 1.87451 15.7908 1.87451 15.625V8.75C1.87451 8.58424 1.94036 8.42527 2.05757 8.30806C2.17478 8.19085 2.33375 8.125 2.49951 8.125V8.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.24951 8.125L9.37451 1.875C9.70282 1.875 10.0279 1.93966 10.3312 2.0653C10.6345 2.19094 10.9101 2.37509 11.1423 2.60723C11.3744 2.83938 11.5586 3.11498 11.6842 3.41829C11.8098 3.72161 11.8745 4.0467 11.8745 4.375V6.25H16.7085C16.8858 6.25 17.061 6.28769 17.2226 6.36058C17.3841 6.43346 17.5283 6.53987 17.6456 6.67275C17.7629 6.80562 17.8506 6.96192 17.9029 7.13128C17.9552 7.30063 17.9709 7.47917 17.9489 7.65504L17.0114 15.155C16.9736 15.4574 16.8267 15.7355 16.5983 15.9371C16.3699 16.1387 16.0757 16.25 15.771 16.25H6.24951" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.04304 15.7716L3.52717 17.8865C3.43607 17.9631 3.32499 18.0121 3.207 18.0277C3.08901 18.0433 2.96901 18.0249 2.86112 17.9747C2.75323 17.9244 2.66193 17.8444 2.59796 17.744C2.53398 17.6437 2.5 17.5271 2.5 17.4081V5C2.5 4.83424 2.56585 4.67527 2.68306 4.55806C2.80027 4.44085 2.95924 4.375 3.125 4.375H16.875C17.0408 4.375 17.1997 4.44085 17.3169 4.55806C17.4342 4.67527 17.5 4.83424 17.5 5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H6.44522C6.29808 15.625 6.15567 15.6769 6.04304 15.7716Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z" fill="#FF9F0D" />
                                    <path d="M6.25 10.9375C6.76777 10.9375 7.1875 10.5178 7.1875 10C7.1875 9.48223 6.76777 9.0625 6.25 9.0625C5.73223 9.0625 5.3125 9.48223 5.3125 10C5.3125 10.5178 5.73223 10.9375 6.25 10.9375Z" fill="#FF9F0D" />
                                    <path d="M13.75 10.9375C14.2678 10.9375 14.6875 10.5178 14.6875 10C14.6875 9.48223 14.2678 9.0625 13.75 9.0625C13.2322 9.0625 12.8125 9.48223 12.8125 10C12.8125 10.5178 13.2322 10.9375 13.75 10.9375Z" fill="#FF9F0D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 18.125C15.1307 18.125 16.25 17.0057 16.25 15.625C16.25 14.2443 15.1307 13.125 13.75 13.125C12.3693 13.125 11.25 14.2443 11.25 15.625C11.25 17.0057 12.3693 18.125 13.75 18.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 6.875C15.1307 6.875 16.25 5.75571 16.25 4.375C16.25 2.99429 15.1307 1.875 13.75 1.875C12.3693 1.875 11.25 2.99429 11.25 4.375C11.25 5.75571 12.3693 6.875 13.75 6.875Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.6472 5.72681L7.10254 8.64835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.10254 11.3516L11.6472 14.2731" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[33.33%] border border-[#FFF] border-solid pb-[20px] h-[580px]">
                    <div className="h-[60%]">
                        <img className="h-[100%] object-cover" src="https://res.cloudinary.com/dfoj6menm/image/upload/v1693364856/wean6g3yfisfvjfy10d5.png" alt="bài post"></img>
                    </div>
                    <div className="h-[40%] px-[30px] flex w-[100%] flex-col text-start">
                        <div className="h-[10%] mt-[16px] text-primary-orange font-['Inter'] text-[16px]">
                            10 February 2022
                        </div>
                        <div className="h-[70%] mt-[16px] font-[700] text-[#FFF] text-[24px] font-['Helvetica']">
                            Curabitur rutrum velit ac congue malesuada
                        </div>
                        <div className="h-[20%] mt-[16px] text-[#FFF] font-['Inter'] flex flex-row">
                            <div className="w-[50%]">
                                Learn More
                            </div>
                            <div className="flex flex-row justify-end w-[50%] gap-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.49951 8.125H6.24951V16.25H2.49951C2.33375 16.25 2.17478 16.1842 2.05757 16.0669C1.94036 15.9497 1.87451 15.7908 1.87451 15.625V8.75C1.87451 8.58424 1.94036 8.42527 2.05757 8.30806C2.17478 8.19085 2.33375 8.125 2.49951 8.125V8.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.24951 8.125L9.37451 1.875C9.70282 1.875 10.0279 1.93966 10.3312 2.0653C10.6345 2.19094 10.9101 2.37509 11.1423 2.60723C11.3744 2.83938 11.5586 3.11498 11.6842 3.41829C11.8098 3.72161 11.8745 4.0467 11.8745 4.375V6.25H16.7085C16.8858 6.25 17.061 6.28769 17.2226 6.36058C17.3841 6.43346 17.5283 6.53987 17.6456 6.67275C17.7629 6.80562 17.8506 6.96192 17.9029 7.13128C17.9552 7.30063 17.9709 7.47917 17.9489 7.65504L17.0114 15.155C16.9736 15.4574 16.8267 15.7355 16.5983 15.9371C16.3699 16.1387 16.0757 16.25 15.771 16.25H6.24951" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.04304 15.7716L3.52717 17.8865C3.43607 17.9631 3.32499 18.0121 3.207 18.0277C3.08901 18.0433 2.96901 18.0249 2.86112 17.9747C2.75323 17.9244 2.66193 17.8444 2.59796 17.744C2.53398 17.6437 2.5 17.5271 2.5 17.4081V5C2.5 4.83424 2.56585 4.67527 2.68306 4.55806C2.80027 4.44085 2.95924 4.375 3.125 4.375H16.875C17.0408 4.375 17.1997 4.44085 17.3169 4.55806C17.4342 4.67527 17.5 4.83424 17.5 5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H6.44522C6.29808 15.625 6.15567 15.6769 6.04304 15.7716Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z" fill="#FF9F0D" />
                                    <path d="M6.25 10.9375C6.76777 10.9375 7.1875 10.5178 7.1875 10C7.1875 9.48223 6.76777 9.0625 6.25 9.0625C5.73223 9.0625 5.3125 9.48223 5.3125 10C5.3125 10.5178 5.73223 10.9375 6.25 10.9375Z" fill="#FF9F0D" />
                                    <path d="M13.75 10.9375C14.2678 10.9375 14.6875 10.5178 14.6875 10C14.6875 9.48223 14.2678 9.0625 13.75 9.0625C13.2322 9.0625 12.8125 9.48223 12.8125 10C12.8125 10.5178 13.2322 10.9375 13.75 10.9375Z" fill="#FF9F0D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 18.125C15.1307 18.125 16.25 17.0057 16.25 15.625C16.25 14.2443 15.1307 13.125 13.75 13.125C12.3693 13.125 11.25 14.2443 11.25 15.625C11.25 17.0057 12.3693 18.125 13.75 18.125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 6.875C15.1307 6.875 16.25 5.75571 16.25 4.375C16.25 2.99429 15.1307 1.875 13.75 1.875C12.3693 1.875 11.25 2.99429 11.25 4.375C11.25 5.75571 12.3693 6.875 13.75 6.875Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.6472 5.72681L7.10254 8.64835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.10254 11.3516L11.6472 14.2731" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;