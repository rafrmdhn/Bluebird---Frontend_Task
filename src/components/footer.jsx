import React from "react";

const Footer = () => {
    return (
        <footer class="bg-[#2f5296]">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0 text-left">
                    <a href="https://www.bluebirdgroup.com" class="flex items-center">
                        <img src="https://www.bluebirdgroup.com/asset/51_tahun/Icon_BBG_51th_Bluebird_Group.svg" class="h-28 me-3" alt="FlowBite Logo" />
                    </a>
                    <span class="text-xl font-semibold whitespace-nowrap text-white">Bluebird Main Officee<br /></span>
                    <span className="text-lg whitespace-nowrap text-white">Jl. Mampang Prapatan Raya No. 60, Jakarta 12790</span>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
                    <div className="text-left">
                        <h2 class="mb-6 text-lg font-bold text-white uppercase">About Us</h2>
                        <ul class="text-white">
                            <li className="mb-4">
                                <a href="https://www.bluebirdgroup.com/about/company?lang=en" class="hover:underline">Company Profile</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.bluebirdgroup.com/about/history?lang=en" class="hover:underline">History</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.bluebirdgroup.com/about/values?lang=en" class="hover:underline">Purpose & Values</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.bluebirdgroup.com/about/message-from-the-late?lang=en" class="hover:underline">Message from The Founder</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.bluebirdgroup.com/about/vision-mission?lang=en" class="hover:underline">Vision & Mission</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.bluebirdgroup.com/about/awards?lang=en" class="hover:underline">Awards</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.bluebirdgroup.com/about/financial-statement?lang=en" class="hover:underline">Investor Relations</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h2 class="mb-6 text-lg font-bold text-white uppercase">Follow us</h2>
                        <ul class="text-white">
                            <li className="mb-4">
                                <a href="https://www.facebook.com/bluebirdgroup.official/" class="hover:underline ">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.instagram.com/bluebirdgroup/" class="hover:underline">Instagram</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://twitter.com/Bluebirdgroup" class="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.youtube.com/channel/UCTPkFzZriXVoZZgOalscUDQ" class="hover:underline">Youtube</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.linkedin.com/company/bluebirdgroup/" class="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h2 class="mb-6 text-lg font-bold text-white uppercase">Legal</h2>
                        <ul class="text-white">
                            <li class="mb-4">
                                <a href="https://www.bluebirdgroup.com/privacy?lang=en" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://www.bluebirdgroup.com/term-conditions?lang=en" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between bg-">
                <span class="text-sm text-white sm:text-center">© 2024 Blue Bird Group. All Rights Reserved.
                </span>
            </div>
            </div>
        </footer>
    );
};

export default Footer;