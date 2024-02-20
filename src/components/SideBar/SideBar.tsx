import React from 'react';
import styles from './SideBar.module.css';
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { BsAirplaneEngines } from "react-icons/bs";
import { FaWallet as LuWallet } from "react-icons/fa";
import { HiChartPie } from "react-icons/hi";
import { TbReport } from "react-icons/tb";
import Avatar from '../../assets/avatar.jpeg';
import ImageStack from '../common/ImageStack/ImageStack';
import { ActiveUser } from "../../types/types";
import Image from 'next/image';
import SideBarOptions from '../SideBarOptions/SideBarOptions';

const SideBar = () => {
  const activeUsers: ActiveUser[] = [
    {id: "1", avatar: Avatar},
    {id: "2", avatar: Avatar},
    {id: "3", avatar: Avatar},
    {id: "4", avatar: Avatar},
    {id: "5", avatar: Avatar}
  ];

  const sidebarOptions = [
    {id: "1", icon: IoHomeOutline, value: "DASHBOARD"},
    {id: "2", icon: BsAirplaneEngines, value: "FLIGHTS"},
    {id: "3", icon: LuWallet, value: "WALLET"},
    {id: "4", icon: TbReport, value: "REPORTS"},
    {id: "5", icon: HiChartPie, value: "STATISTICS"},
    {id: "6", icon: IoSettingsOutline, value: "SETTINGS"},
  ];

  return (
    <div className={styles.sideBar}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          <Image src={Avatar} alt="User profile" />
        </div>
        <div className={styles.userDetails}>
          <div className={styles.name}>Alex Johnson</div>
          <div className={styles.email}>Alex.johnson@gmail.com</div>
        </div>
      </div>

      <div className={styles.middle}>
        {sidebarOptions.map((option) => (
          <SideBarOptions key={option.id} option={option} />
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.title}>ACTIVE USERS</span>
        <div className={styles.imageStackWrapper}>
          <ImageStack  users={activeUsers} />
        </div>
        <div className={styles.map}></div>
      </div>
    </div>
  );
};

export default SideBar;
