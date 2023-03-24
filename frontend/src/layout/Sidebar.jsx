import React from "react";
import OneInch from "../assets/1inch-sidebar.svg";
import { RxDashboard } from "react-icons/rx";
import { MdSecurity } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GiChampions } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineQuestionCircle, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";

import { RiBankFill } from "react-icons/ri";
import { GoGitCompare } from "react-icons/go";
import { GiHorseHead } from "react-icons/gi";

const menuItems = [
  {
    title: "Rewards & Fees",
    icon: <RxDashboard />,
  },
  {
    title: "Resolvers",
    icon: <GiHorseHead />,
  },
  {
    title: "Volumes",
    icon: <IoAnalyticsOutline />,
  },
  {
    title: "Transactions",
    icon: <GoGitCompare />,
  },
  {
    title: "Governance",
    icon: <RiBankFill />,
  },
];

const Sidebar = () => {
  return (
    <aside className="h-screen w-60 md:w-80 p-5">
      <div className="sidebar rounded-md py-5 h-[calc(100vh-2.5rem)] flex flex-col bg-[#1D2B41] opacity-75 rounded-md">
        <div className="brand flex items-center mb-12 text-white pl-7">
          <img className="sidebar-logo" src={OneInch} alt="Logo" />
        </div>
        <div className="flex flex-col justify-between flex-1 pl-7">
          <ul className="sidebar--links pr-7 list-none">
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                <a className="px-2 py-2 my-2 flex items-center text-white active:bg-blue-500 hover:bg-blue-900 rounded-md cursor-pointer">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </a>
                </li>
              );
            })}
            <div className="divider border-b border-[#fd1313]" />
            <li key="new audit">
              <a className="px-2 py-2 my-2 flex items-center text-orange-500 active:bg-orange-500 focus:bg-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer rounded-md">
                <BsPlusLg />
                <div className="ml-2">Create a New Audit</div>
              </a>
            </li>
          </ul>
          <ul className="sidebar--links-bottom">
            <a className="flex items-center text-white active:text-red hover:text-indigo-500 cursor-pointer">
              <CiSettings />
              <span className="ml-2">Settings</span>
            </a>
            <a href="https://www.youtube.com/watch?v=osxsfgWgqQY" 
              className="flex items-center text-white active:text-indigo-500 hover:text-indigo-500 cursor-pointer">
              <AiOutlineQuestionCircle />
              <span className="ml-2">FAQ</span>
            </a>
            <a href="https://twitter.com/metamafia_ooo" 
              className="flex items-center text-white active:text-indigo-500 hover:text-indigo-500 cursor-pointer">
              <AiOutlineTwitter />
              <span className="ml-2">Twitter</span>
            </a>
            <a href="https://discord.com/" 
              className="flex items-center text-white active:text-indigo-500 hover:text-indigo-500 cursor-pointer">
              <FaDiscord />
              <span className="ml-2">Discord Community</span>
            </a>
            <button className="flex items-center text-white active:text-indigo-500 hover:text-indigo-500 cursor-pointer">
              <FiLogOut />
              <span className="ml-2">Log out</span>
            </button>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;