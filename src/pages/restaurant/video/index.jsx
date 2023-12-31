import "./Video.css"

function Video() {
    return (
        <div className="min-[320px]:bg-cover min-[320px]:px-[10%] min-[320px]:py-[120px] min-[320px]:bg-no-repeat 2xl:pr-[152px] flex flex-col justify-center items-end mt-[100px] w-[100%] bg-[url('https://res.cloudinary.com/dfoj6menm/image/upload/v1693363556/vsvxmzbjov3u3lfskjv8.png')]">
            <div className="min-[320px]:text-center xl:text-right min-[320px]:w-[100%] w-[60%] flex flex-col justify-center text-right content-end">
                <div className="special-font max-lg:text-[40px] max-2xl:text-[20px] max-sm:text-[32px]">
                    Restaurant Active Process
                </div>
                <div className="text-[48px] font-['Helvetica'] font-[700] text-[#FFF] max-lg:text-[68px] max-[500px]:text-[36px] max-sm:text-[42px] max-2xl:text-[36px]">
                    <span className="text-primary-orange font-['Helvetica']">We </span>
                    Document Every Food <br />
                    Bean Process until it is saved
                </div>
                <div className="font-['Inter']  text-[16px] text-[#FFF] mt-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque <br /> bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
                </div>
                <div className="xl:justify-end flex flex-row gap-[30px] justify-center mt-[30px]">
                    <button className="font-[600] bg-transparent rounded-[30px] px-[40px] py-[10px] text-[#FFF] border-primary-orange border">
                        Read More
                    </button>
                    <div className="cursor-pointer flex flex-row justify-center items-center font-['Inter'] font-[600] text-[16px] text-[#FFF]">
                        <div className="mr-[12px] flex justify-center items-center w-[50px] h-[50px] px-[5px] py-[5px] rounded-[100%] bg-primary-orange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.3889 11.36L7.8911 3.11102C7.77741 3.04154 7.64726 3.0036 7.51404 3.00111C7.38083 2.99861 7.24935 3.03165 7.13314 3.09683C7.01692 3.162 6.92017 3.25696 6.85283 3.37193C6.7855 3.4869 6.75 3.61774 6.75 3.75098V20.2488C6.75 20.3821 6.7855 20.5129 6.85283 20.6279C6.92017 20.7429 7.01692 20.8378 7.13314 20.903C7.24935 20.9682 7.38083 21.0012 7.51404 20.9987C7.64726 20.9962 7.77741 20.9583 7.8911 20.8888L21.3889 12.6399C21.4985 12.5729 21.5891 12.4788 21.652 12.3668C21.7148 12.2547 21.7478 12.1284 21.7478 11.9999C21.7478 11.8714 21.7148 11.7451 21.652 11.633C21.5891 11.521 21.4985 11.427 21.3889 11.36Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        Play Video
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video