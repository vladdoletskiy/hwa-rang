export const Footer: React.FC = () => {
    return (
        <footer className="px-[85px] pt-[170px]">
            <div className="flex flex-wrap items-baseline">
                <div className="flex items-end text-2xl font-semibold leading-8 tracking-tight">
                    <span className="block bg-gradient-to-r text-transparent bg-clip-text from-[#09142e] via-[#58275f] to-[#f85253]">
                        HWA-RANG
                    </span>
                </div>
                <nav>
                    <ul className="flex pr-15 mt-5">
                        <li className="pl-[35px]  font-medium text-base">
                            <a href="#about">/ ПРО КЛУБ</a>
                        </li>
                        <li className="pl-[35px]  font-medium text-base">
                            <a href="#advantages">/ НАШІ ПЕРЕВАГИ</a>
                        </li>
                        <li className="pl-[35px] font-medium text-base">
                            <a href="#trainers">/ ТРЕНЕРА</a>
                        </li>
                        <li className="pl-[35px] font-medium text-base">
                            <a href="#trainers">/ ЗАЛИ</a>
                        </li>
                        <li className="pl-[35px] font-medium text-base">
                            <a href="#trainers">/ ПОСЛУГИ</a>
                        </li>
                    </ul>
                </nav>
                <div className=" mt-5 pl-[135px]">
                    <p className="font-medium text-base">/ КОНТАКТИ</p>

                    <a
                        className="font-normal text-lg text-gray-600"
                        href="mailto:hwa-rang@ukr.net"
                    >
                        <span className="font-normal text-base text-gray-600 pr-2">
                            Email:
                        </span>
                        hwa-rang@ukr.net
                    </a>
                </div>
            </div>
            <p className="text-[20px] font-normal">
                Спортивний клуб <br /> олімпійського тхеквондо <br /> для дітей
                та дорослих
            </p>
            <div className="pt-20 text-base font-semibold text-gray-400">
                <a
                    className="block"
                    href="https://www.linkedin.com/in/daria-doletska/"
                >
                    designer: Daria Doletska
                </a>
                <a
                    className="block"
                    href="https://www.linkedin.com/in/vlad-doletskiy/"
                >
                    front-end: Vlad Doletskiy
                </a>
                @ All Rights Reserved 2023.
            </div>
        </footer>
    );
};