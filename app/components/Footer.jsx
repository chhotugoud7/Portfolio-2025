import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('chhotu957588@gmail.com');
        alert('Email copied to clipboard!');
    };

    return (
        <div>
            <div className="text-center">
                <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />

                <div
                    className="w-max flex items-center gap-2 mx-auto cursor-pointer hover:text-blue-500 transition-all duration-300"
                    onClick={copyEmailToClipboard}
                    title="Click to copy email"
                >
                    <Image src={assets.mail_icon} alt="Mail Icon" className="w-6" />
                    <span className="font-Ovo">chhotu957588@gmail.com</span>
                </div>

                <div className="text-center sm:flex items-center justify-center border-t border-gray-400 mx-[10%] mt-12 py-6">
                    <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                        <li className="font-Ovo cursor-pointer transition-colors duration-300 hover:text-black hover:underline">
                            <a
                                target="_blank"
                                href="https://github.com/chhotugoud7"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900"
                            >
                                GitHub
                            </a>
                        </li>

                        <li className="font-Ovo cursor-pointer transition-colors duration-300 hover:text-blue-600 hover:underline">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/chhotu-goud-linkdin/"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                LinkedIn
                            </a>
                        </li>

                        <li className="font-Ovo cursor-pointer transition-colors duration-300 hover:text-green-500 hover:underline">
                            <a
                                target="_blank"
                                href="https://www.geeksforgeeks.org/user/chhotu957mm/"
                                rel="noopener noreferrer"
                                className="hover:text-green-500"
                            >
                                GeeksForGeeks
                            </a>
                        </li>

                        <li className="font-Ovo cursor-pointer transition-colors duration-300 hover:text-orange-500 hover:underline">
                            <a
                                target="_blank"
                                href="https://leetcode.com/u/Chhotugoud/"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500"
                            >
                                LeetCode
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
