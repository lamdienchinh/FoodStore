import "./Header.css"

function Header() {
    return (
        <div className="navbar w-[auto] pb-[30px] mx-auto bg-transparent" >
            <div className="header__logo font-['Helvetica'] pt-[30px]">
                <span className="text-primary-orange text-sm" >Food</span>
                <span className="text-white text-sm">tuck</span>
            </div>
            <div className="flex items-center relative z-[2]" >
                <div className="header__items">
                    <div className="header__item">Home</div>
                    <div className="header__item">Menu</div>
                    <div className="header__item">Blog</div>
                    <div className="header__item">Pages</div>
                    <div className="header__item">About</div>
                    <div className="header__item">Shop</div>
                    <div className="header__item">Contact</div>
                </div>
                <div className="flex flex-row justify-items-center justify-center content-center absolute right-[32px] shrink-0 w-[310px] h-[54px] rounded-[27px] border-solid border border-primary-orange">
                    <input outline="none" type="text" className="bg-transparent text-[#FFF] focus:outline-none focus:border-gray-300 focus:ring-0 border-[none] flex flex-row items-center shrink-0 font-['Inter'] text-[16px] font-[400] leading-[24[px] text-justify mt-[14px] mb-[16px] ml-[26px] text-[#FFF] text-[16px] font-[400] font-['Inter'] leading-[24px]" placeholder="Search...">
                    </input>
                    <div className="flex flex justify-end items-center content-center w-[100%] h-[100%] pr-[16px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path d="M26 26L20.3335 20.3234L26 26ZM23.4737 12.7368C23.4737 15.5844 22.3425 18.3154 20.3289 20.3289C18.3154 22.3425 15.5844 23.4737 12.7368 23.4737C9.88925 23.4737 7.1583 22.3425 5.14475 20.3289C3.1312 18.3154 2 15.5844 2 12.7368C2 9.88925 3.1312 7.1583 5.14475 5.14475C7.1583 3.1312 9.88925 2 12.7368 2C15.5844 2 18.3154 3.1312 20.3289 5.14475C22.3425 7.1583 23.4737 9.88925 23.4737 12.7368V12.7368Z" stroke="white" stroke-width="2.22941" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div className="absolute right-[0px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5787 6.75H4.42122C4.23665 6.75 4.05856 6.81806 3.92103 6.94115C3.7835 7.06425 3.69619 7.23373 3.67581 7.41718L2.34248 19.4172C2.33083 19.522 2.34143 19.6281 2.37357 19.7286C2.40572 19.829 2.4587 19.9216 2.52904 20.0002C2.59939 20.0788 2.68553 20.1417 2.78182 20.1847C2.87812 20.2278 2.98241 20.25 3.08789 20.25H20.912C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4005 20.0788 21.4708 20.0002C21.5412 19.9216 21.5942 19.829 21.6263 19.7286C21.6585 19.6281 21.6691 19.522 21.6574 19.4172L20.3241 7.41718C20.3037 7.23373 20.2164 7.06425 20.0789 6.94115C19.9413 6.81806 19.7632 6.75 19.5787 6.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Header