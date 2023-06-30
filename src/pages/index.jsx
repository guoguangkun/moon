import { useEffect, useState,  useRef  } from 'react'
import '../styles/global.scss'
import styles from './index.module.scss'

import tabs from '../mockData/tabs'

import cardInfo from "../mockData/pageData"

import {  message } from 'antd';

const Home = () => {

    const [selectedTab, setSelectedTab] = useState(tabs.tabs[0].label)
    const [classInfos, setClassInfo] = useState([])
    const scrollableElementRef = useRef(null);

    const [leftPos,setLeftPos] = useState(0)

    const [leftStep,setLeftleftStep] = useState(0)
    const changeTab = (tablable)=> {
        setSelectedTab(tablable)
    }
    const {cards} = cardInfo

    useEffect(()=> {
        setClassInfo(cards)
    },[])


    const handleDetail = (classInfo) => {
        message.open({
            type: 'info',
            content:  classInfo.title || classInfo.adTitle,
            duration: 0.8,
        })
    }


    const handleCardMoveLeft = () => {
      

      
        setLeftPos(0)
     
    }

    const handleCardMoveRight = () => {
       
        setLeftPos(-leftStep)
    }

    useEffect(()=> {
        const childrenWidth = scrollableElementRef.current.offsetWidth
        const parentWidth = document.documentElement.offsetWidth
        
        if(parentWidth > childrenWidth) {
            setLeftleftStep(0)
        } else {
            const step = childrenWidth - parentWidth + 248
            setLeftleftStep(step)
        }

    },[])
    
    const shapes = [
        <svg className={styles.baseBackGround} width="416" height="279" viewBox="0 0 416 279" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 0.000757482L384 6.31236e-05C401.673 2.82614e-05 416 14.3269 416 32.0001L416 163.027C416 168.42 414.637 173.726 412.037 178.451L410.141 181.897C404.656 191.869 404.879 204.003 410.727 213.767L411.451 214.975C414.428 219.944 416 225.628 416 231.42L416 246.366C416 264.039 401.673 278.366 384 278.366L32.0001 278.366C14.327 278.366 0.000171546 264.039 0.000141802 246.366L0.000111939 231.42C8.16747e-05 225.628 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.869 5.85879 181.897L3.96288 178.451C1.36321 173.726 8.41792e-05 168.42 8.44154e-05 163.027L9.01517e-05 32.0008C9.09255e-05 14.3277 14.3269 0.000792344 32 0.000757482Z" fill="#131313"/>
        </svg>,
        <svg  className={styles.baseBackGround} width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.9997 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9995 278C14.3264 278 -0.000438855 263.673 -0.00040756 246L-0.0002202 149.369C-0.000189402 143.011 2.07803 136.828 5.91781 131.761C13.545 121.696 13.8249 107.865 6.61132 97.5L5.64263 96.1081C1.96902 90.8295 -0.000186828 84.5527 -0.000217063 78.1216L-0.00036762 32.0001C-0.000427877 14.3269 14.3265 0 31.9997 0Z" fill="#131313"/>
        </svg>,
        <svg  className={styles.baseBackGround} width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="#131313"/>
        </svg>,
        <svg  className={styles.baseBackGround} width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="416" height="278" rx="36" fill="#111111"/>
        </svg>
    ]
    const backGroundLineColor = [
        <svg className={styles.backColorfullcontrol} width="416" height="279" viewBox="0 0 416 279" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 0.000269201L384 -0.000425158C401.673 -0.00046002 416 14.3264 416 31.9996L416 163.026C416 168.42 414.637 173.725 412.037 178.451L410.141 181.897C404.656 191.868 404.879 204.003 410.727 213.766L411.451 214.975C414.428 219.944 416 225.627 416 231.419L416 246.365C416 264.038 401.673 278.365 384 278.365L32.0001 278.365C14.327 278.365 0.000171546 264.038 0.000141802 246.365L0.000111939 231.419C8.16747e-05 225.627 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.868 5.85879 181.897L3.96288 178.451C1.36321 173.725 8.41792e-05 168.419 8.44154e-05 163.026L9.01517e-05 32.0003C9.09255e-05 14.3272 14.3269 0.000304063 32 0.000269201Z" fill="url(#paint0_linear_2_585)"/>
            <defs>
            <linearGradient id="paint0_linear_2_585" x1="416.051" y1="130.105" x2="0.0506935" y2="130.105" gradientUnits="userSpaceOnUse">
            <stop stop-color="#38C1A5"/>
            <stop offset="1" stop-color="#0891D5"/>
            </linearGradient>
            </defs>
        </svg>,
        <svg className={styles.backColorfullcontrol} width="417" height="278" viewBox="0 0 417 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.0001 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.359 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9999 278C14.3268 278 -4.21268e-05 263.673 -1.08311e-05 246L0.000176529 149.369C0.000207326 143.011 2.07842 136.828 5.91821 131.761C13.5454 121.696 13.8253 107.865 6.61172 97.5L5.64303 96.1081C1.96942 90.8295 0.0002099 84.5527 0.000179666 78.1216L2.91086e-05 32.0001C-3.11484e-05 14.3269 14.3269 0 32.0001 0Z" fill="url(#paint0_linear_2_488)"/>
            <defs>
            <linearGradient id="paint0_linear_2_488" x1="208" y1="278" x2="208" y2="-7.12466e-06" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C71FF"/>
            <stop offset="0.770833" stop-color="#DA8AFF"/>
            </linearGradient>
            </defs>
            </svg>
            ,
        <svg className={styles.backColorfullcontrol} width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.57233e-07 238.001L9.35541e-07 40.0001C1.02238e-06 17.9087 17.9086 5.94695e-05 40 5.75382e-05L229.45 4.0976e-05C238.544 4.0181e-05 247.367 3.09913 254.464 8.78632L283.573 32.1139C290.67 37.8011 299.493 40.9002 308.587 40.9002L376 40.9002C398.091 40.9002 416 58.8088 416 80.9002L416 238.001C416 260.092 398.091 278.001 376 278.001L40 278.001C17.9086 278.001 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="url(#paint0_linear_2_522)"/>
            <defs>
            <linearGradient id="paint0_linear_2_522" x1="208" y1="278.001" x2="208" y2="4.28512e-05" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D9E313"/>
            <stop offset="1" stop-color="#3CBC34"/>
            </linearGradient>
            </defs>
        </svg>,
      
        <svg className={styles.backColorfullcontrol} width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="416" height="278" rx="36" fill="url(#paint0_linear_8_766)"/>
            <defs>
            <linearGradient id="paint0_linear_8_766" x1="208" y1="-0.0343091" x2="208" y2="277.966" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E0AD38"/>
            <stop offset="1" stop-color="#EB3E1C"/>
            </linearGradient>
            </defs>
        </svg>
    ]

    const backGroundLineColor1= [
        <svg className={styles.backColorfullcontrol1} width="416" height="279" viewBox="0 0 416 279" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 0.000269201L384 -0.000425158C401.673 -0.00046002 416 14.3264 416 31.9996L416 163.026C416 168.42 414.637 173.725 412.037 178.451L410.141 181.897C404.656 191.868 404.879 204.003 410.727 213.766L411.451 214.975C414.428 219.944 416 225.627 416 231.419L416 246.365C416 264.038 401.673 278.365 384 278.365L32.0001 278.365C14.327 278.365 0.000171546 264.038 0.000141802 246.365L0.000111939 231.419C8.16747e-05 225.627 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.868 5.85879 181.897L3.96288 178.451C1.36321 173.725 8.41792e-05 168.419 8.44154e-05 163.026L9.01517e-05 32.0003C9.09255e-05 14.3272 14.3269 0.000304063 32 0.000269201Z" fill="url(#paint0_linear_2_585)"/>
            <defs>
            <linearGradient id="paint0_linear_2_585" x1="416.051" y1="130.105" x2="0.0506935" y2="130.105" gradientUnits="userSpaceOnUse">
            <stop stop-color="#38C1A5"/>
            <stop offset="1" stop-color="#0891D5"/>
            </linearGradient>
            </defs>
        </svg>,
        <svg className={styles.backColorfullcontrol1} width="417" height="278" viewBox="0 0 417 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.0001 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.359 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9999 278C14.3268 278 -4.21268e-05 263.673 -1.08311e-05 246L0.000176529 149.369C0.000207326 143.011 2.07842 136.828 5.91821 131.761C13.5454 121.696 13.8253 107.865 6.61172 97.5L5.64303 96.1081C1.96942 90.8295 0.0002099 84.5527 0.000179666 78.1216L2.91086e-05 32.0001C-3.11484e-05 14.3269 14.3269 0 32.0001 0Z" fill="url(#paint0_linear_2_488)"/>
            <defs>
            <linearGradient id="paint0_linear_2_488" x1="208" y1="278" x2="208" y2="-7.12466e-06" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C71FF"/>
            <stop offset="0.770833" stop-color="#DA8AFF"/>
            </linearGradient>
            </defs>
            </svg>
            ,
        <svg className={styles.backColorfullcontrol1} width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.57233e-07 238.001L9.35541e-07 40.0001C1.02238e-06 17.9087 17.9086 5.94695e-05 40 5.75382e-05L229.45 4.0976e-05C238.544 4.0181e-05 247.367 3.09913 254.464 8.78632L283.573 32.1139C290.67 37.8011 299.493 40.9002 308.587 40.9002L376 40.9002C398.091 40.9002 416 58.8088 416 80.9002L416 238.001C416 260.092 398.091 278.001 376 278.001L40 278.001C17.9086 278.001 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="url(#paint0_linear_2_522)"/>
            <defs>
            <linearGradient id="paint0_linear_2_522" x1="208" y1="278.001" x2="208" y2="4.28512e-05" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D9E313"/>
            <stop offset="1" stop-color="#3CBC34"/>
            </linearGradient>
            </defs>
        </svg>,
      
        <svg className={styles.backColorfullcontrol1} width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="416" height="278" rx="36" fill="url(#paint0_linear_8_766)"/>
            <defs>
            <linearGradient id="paint0_linear_8_766" x1="208" y1="-0.0343091" x2="208" y2="277.966" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E0AD38"/>
            <stop offset="1" stop-color="#EB3E1C"/>
            </linearGradient>
            </defs>
        </svg>
    ]

    const icons = {
        time: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3338 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z" fill="#F2F2F2"/>
            <path d="M11.3756 7.5838H6.70883C6.5478 7.5838 6.41724 7.45323 6.41724 7.2922V2.62549C6.41724 2.46445 6.5478 2.33379 6.70883 2.33379C6.86997 2.33379 7.00053 2.46445 7.00053 2.62549V7.00046H11.3755C11.5365 7.00046 11.6672 7.13102 11.6672 7.29215C11.6672 7.45319 11.5366 7.5838 11.3756 7.5838Z" fill="#F2F2F2"/>
        </svg>,
        course: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.57871 12.8638V2.04656C7.19864 0.856661 4.21415 0.919762 2.76941 1.10005V11.8186C6.08183 11.2105 7.35578 12.2621 7.57871 12.8638Z" stroke="#F2F2F2" stroke-width="0.6"/>
            <path d="M7.57779 12.8638V2.04656C7.95785 0.856661 10.9423 0.919762 12.3871 1.10005V11.8186C9.07466 11.2105 7.80071 12.2621 7.57779 12.8638Z" stroke="#F2F2F2" stroke-width="0.6"/>
            <path d="M2.75602 2.42983H1V13.6857L14.0904 13.9999V2.42983H12.3343" stroke="#F2F2F2" stroke-width="0.6"/>
            <path d="M7.56689 13.8968V12.6798" stroke="#F2F2F2" stroke-width="0.6"/>
        </svg>,

        schedule:<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5287 6.82826L16.9374 5.27026C17.5284 5.12659 17.9277 5.85856 17.4871 6.27776L12.8109 10.7262C12.7251 10.8079 12.6656 10.9133 12.6402 11.029L11.3676 16.8186C11.2267 17.4595 10.3038 17.4323 10.2008 16.7842L9.23218 10.6867C9.20918 10.5419 9.13346 10.4107 9.01958 10.3184L4.01681 6.26343C3.51572 5.85727 3.93024 5.05587 4.55128 5.23013L10.2279 6.82298C10.3261 6.85052 10.4297 6.85234 10.5287 6.82826Z" fill="#9EFA13"/>
                <path d="M6.908 11.6474C6.97335 11.6969 7.0153 11.7713 7.02392 11.8528L7.4785 16.1507C7.51224 16.4697 7.08635 16.6082 6.92597 16.3305L2.86686 9.29987C2.70486 9.01927 3.04527 8.71898 3.30347 8.91472L6.908 11.6474Z" fill="#9EFA13"/>
            </svg>
    }



    return (
    <div className={styles.mainPage}>
        <div className={styles.tabWrapper}>
        {
            tabs && tabs.tabs.length > 0 && tabs.tabs.map((tab) => {
                return <div  key={tab.label} onClick={()=> {
                    changeTab(tab.label)
                }} className={selectedTab ==  tab.label ? styles.tabSelected : styles.tabNormal}>{
                    tab.label ==  tabs.tabs[0].label ? 
                    <svg width="123" height="14" viewBox="0 0 123 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 482286">
                            <g id="Group">
                            <path id="Vector" d="M12.7405 0.792114V12.6996H8.76026V8.31042H3.98029V12.6996H0V0.792114H3.98029V5.16416H8.76026V0.792114H12.7405Z" fill="#B2B2B2"/>
                            <path id="Vector_2" d="M21.9189 11.492H20.1327C19.3956 11.492 18.7494 11.9878 18.5596 12.6996H14.4258L17.8962 0.792114H24.1554L27.6258 12.6996H23.492C23.3012 11.9868 22.656 11.492 21.9189 11.492ZM22.3188 8.31143L21.1626 3.93938H20.89L19.7339 8.31143H22.3188Z" fill="#B2B2B2"/>
                            <path id="Vector_3" d="M28.7026 6.73052C28.7026 3.34496 31.4581 0.606628 34.8436 0.606628C36.5955 0.606628 38.1605 1.33766 39.2833 2.49479L36.5107 5.30179C36.1027 4.82521 35.507 4.53643 34.8436 4.53643C33.636 4.53643 32.6495 5.52291 32.6495 6.73052C32.6495 7.93814 33.636 8.94179 34.8436 8.94179C35.4899 8.94179 36.0856 8.65302 36.4763 8.19361L39.2833 10.9834C38.1605 12.1406 36.5783 12.8716 34.8436 12.8716C31.4591 12.8716 28.7026 10.1332 28.7026 6.73052Z" fill="#B2B2B2"/>
                            <path id="Vector_4" d="M46.0677 9.2402L45.3871 10.0742V12.6934H41.4069V0.785889H45.3871V4.66419H45.5063L48.3981 0.785889H52.8721L48.6192 6.07576L53.1437 12.6924H48.4486L46.1525 9.23919H46.0677V9.2402Z" fill="#B2B2B2"/>
                            <g id="Group 482179">
                            <path id="Vector_5" d="M72.0646 7.8661V0.920288H76.0449V7.79844C76.0449 9.29584 76.8274 10.0784 78.0351 10.0784C79.2427 10.0784 79.9737 9.29584 79.9737 7.79844V0.920288H83.954V7.8661C83.954 11.8807 81.1308 13.3943 77.9492 13.3943C74.7676 13.3943 72.0636 11.8807 72.0636 7.8661H72.0646Z" fill="#B2B2B2"/>
                            <path id="Vector_6" d="M90.5069 4.05039V5.29234H97.0388V8.43861H90.5069V9.69771H97.0388V12.8278H86.5266V0.920288H97.0388V4.05039H90.5069Z" fill="#B2B2B2"/>
                            <path id="Vector_7" d="M99.4574 9.89652H105.666C106.193 9.89652 106.449 9.65823 106.449 9.26646C106.449 8.87469 106.194 8.65357 105.649 8.65357H102.825C100.835 8.65357 99.2191 7.29248 99.2191 4.89442C99.2191 2.13892 101.107 1.13525 103.013 1.13525H110.055V4.28253H103.983C103.524 4.28253 103.2 4.45216 103.2 4.87725C103.2 5.30234 103.524 5.50731 103.983 5.50731H106.636C108.916 5.50731 110.43 6.85124 110.43 9.2493C110.43 11.5121 108.73 13.0428 106.517 13.0428H99.4069L99.4584 9.89652H99.4574Z" fill="#B2B2B2"/>
                            <path id="Vector_8" d="M115.482 4.28253H111.944V1.13525H123V4.28253H119.462V13.0428H115.482V4.28253Z" fill="#B2B2B2"/>
                            <path id="Vector_9" d="M67.7037 2.40686L67.7016 2.40888C66.5859 1.29517 65.0471 0.60553 63.3528 0.60553L57.4672 0.876138L57.1966 6.76074C57.1966 8.45301 57.8792 9.98575 58.9848 11.0985L58.9868 11.0964C60.1036 12.2202 61.6494 12.9169 63.3528 12.9169L69.2384 12.6463L69.509 6.76175C69.509 5.06039 68.8194 3.52158 67.7037 2.40686ZM66.3193 8.21472C66.0245 8.89022 65.4823 9.43345 64.8058 9.72828C61.9029 10.9934 59.1211 8.21068 60.3863 5.30776C60.6811 4.63227 61.2233 4.08904 61.8998 3.79421C64.8028 2.52904 67.5845 5.3118 66.3193 8.21371V8.21472Z" fill="#B2B2B2"/>
                            </g>
                            </g>
                            </g>
                    </svg> : tab.label

                }</div>
            })
        }
        </div>

        <div className={styles.titleWapepr}>
            <svg width="153" height="20" viewBox="0 0 153 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.46 9.94V12.38L0.0600001 9.22V6.8L8.46 3.64V6.08L2.98 8.02L8.46 9.94ZM17.2792 15H14.3592L22.7592 0.799999H25.5792L17.2792 15ZM35.1695 15H31.8495V3.8H29.6495V0.799999H37.3695V3.8H35.1695V15ZM40.677 15H37.637V5.24H42.717V7.94L40.677 7.74V15ZM48.9792 15.24C45.6792 15.24 43.4792 13.16 43.4792 10.12C43.4792 7.08 45.6392 5 48.4792 5C50.9992 5 52.7792 6.44 53.2992 8.78V11.3H46.4792C46.7992 12.34 47.7992 12.86 49.1392 12.86L52.5592 11.76V14.16C51.6592 14.76 50.3592 15.24 48.9792 15.24ZM48.4792 7.38C47.4192 7.38 46.6192 7.96 46.3992 9.02H50.5392C50.3192 7.96 49.5392 7.38 48.4792 7.38ZM57.8266 15H54.7066V5.24H57.3266V6.24C57.7866 5.46 58.5866 5 59.6066 5C61.3266 5 62.3866 6.28 62.3866 8.26V15H59.2666V8.6C59.2666 7.98 59.0666 7.6 58.5466 7.6C58.0266 7.6 57.8266 7.98 57.8266 8.6V15ZM74.4905 15H71.7705V13.92C70.9105 14.76 69.7505 15.24 68.5505 15.24C66.0505 15.24 63.8105 13.2 63.8105 10.12C63.8105 7.04 66.0505 5 68.5505 5C69.5705 5 70.5705 5.36 71.3705 5.98V0.799999H74.4905V15ZM69.1505 12.38C70.3505 12.38 71.3105 11.52 71.3705 10.22V10.12C71.3705 8.78 70.3905 7.86 69.1505 7.86C67.9105 7.86 66.9305 8.78 66.9305 10.12C66.9305 11.46 67.9105 12.38 69.1505 12.38ZM79.2887 15H76.2487V5.24H79.2887V15ZM79.2887 3.52H76.2487V0.799999H79.2887V3.52ZM84.1633 15H81.0433V5.24H83.6633V6.24C84.1233 5.46 84.9233 5 85.9433 5C87.6633 5 88.7233 6.28 88.7233 8.26V15H85.6033V8.6C85.6033 7.98 85.4033 7.6 84.8833 7.6C84.3633 7.6 84.1633 7.98 84.1633 8.6V15ZM94.9472 14.88C92.3272 14.88 90.1472 12.96 90.1472 9.94C90.1472 6.92 92.3272 5 94.9472 5C96.1872 5 97.3072 5.44 98.1672 6.24V5.24H100.887V14.62C100.887 17.76 98.4472 19.54 95.1472 19.54C93.7672 19.54 92.4072 19.18 91.3272 18.72V15.94L94.9872 16.94C96.7072 16.94 97.7672 16.1 97.7672 14.58V13.98C96.9672 14.56 95.9872 14.88 94.9472 14.88ZM95.4472 12.16C96.7472 12.16 97.7672 11.3 97.7672 9.94V9.84C97.7072 8.54 96.7072 7.72 95.4472 7.72C94.1472 7.72 93.1272 8.58 93.1272 9.94C93.1272 11.3 94.1472 12.16 95.4472 12.16ZM109.252 15H106.292V0.799999H109.412L111.632 8.02L111.392 5.06V0.799999H114.352V15H111.352L109.012 7.46L109.252 10.42V15ZM121.198 15.24C118.378 15.24 115.858 13.2 115.858 10.12C115.858 7.04 118.378 5 121.198 5C124.018 5 126.538 7.04 126.538 10.12C126.538 13.2 124.018 15.24 121.198 15.24ZM121.198 12.38C122.438 12.38 123.418 11.46 123.418 10.12C123.418 8.78 122.438 7.86 121.198 7.86C119.958 7.86 118.978 8.78 118.978 10.12C118.978 11.46 119.958 12.38 121.198 12.38ZM132.129 15H129.109L127.269 5.24H130.189L130.809 11.18L131.569 5.24H134.209L134.969 11.22L135.569 5.24H138.509L136.669 15H133.649L132.889 9.12L132.129 15ZM152.62 9.22L144.22 12.38V9.94L149.7 8.02L144.22 6.08V3.64L152.62 6.8V9.22Z" fill="#F1F1F1"/>
            </svg>
        </div>

        <div className={styles.classWrapper}>

            {
                leftPos < 0 && <div className={styles.leftShadow}>
                 <div className={styles.arrContent}  onClick={()=> {
                     handleCardMoveLeft()
                 }}>
                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle className={styles.circleWrapper} cx="24" cy="24" r="23.6" transform="rotate(-180 24 24)"  stroke-width="0.8"/>
                         <path d="M29 32L18 24L29 16" stroke="white" stroke-width="2" stroke-linejoin="bevel"/>
                     </svg>
 
                 </div>
             </div>
            }
           {
            leftPos == 0 &&  <div className={styles.rightShadow}
                onClick={()=> {
                        handleCardMoveRight()
                    }}
                >
                <div  className={styles.arrContent} >
                    <svg  width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className={styles.circleWrapper} cx="24" cy="24" r="23.6" fill="black" stroke="#676767" stroke-width="0.8"/>
                        <path d="M19 16L30 24L19 32" stroke="white" stroke-width="2" stroke-linejoin="bevel"/>
                    </svg>
                </div>
            </div>
           }
    
            <div className={styles.classScrollWrapper}  ref={scrollableElementRef} style={{
                
                transform: `translate3d(${leftPos}px, 0, 0)`
            }} >



                {
                    classInfos && classInfos.length > 0 && classInfos.map((classInfo) => {
                        return <div  onClick={()=> {
                            handleDetail(classInfo)
                        }} key={classInfos.id} className={`${styles.nomalClass} ${styles.nomalClass}`}>
                            {
                                shapes[classInfo.status -1]
                            }
                            {
                                backGroundLineColor[classInfo.status -1]
                            }
                            <div className={styles.contentWrapper}>
                                {
                                    [1,3,4].includes(classInfo.status) &&  <div key={classInfo.status} className={styles.fakeBar}>
                                        {
                                            backGroundLineColor1[classInfo.status -1]
                                        }
                                    </div>
                                }
                                <div className={styles.classTitle}>
                                    {
                                        classInfo.title
                                    }
                                </div>
                                
                                {
                                    classInfo.tags && classInfo.tags.length > 0 && <div className={
                                        styles.tagWrapper
                                    }>
                                        {
                                            classInfo.tags.map((tag)=> {
                                                return <div key={tag.label} className={
                                                    styles.classTag
                                                }>
                                                    {tag.label}
                                                </div>
                                            })
                                        }
                                    </div>
                                }

                                {
                                    classInfo.content && <div className={styles.classContent}>
                                        {
                                            classInfo.content
                                        }
                                    </div>
                                }

                                {
                                    classInfo.classInfo && <div className={styles.requiredBottom}>
                                        {
                                            classInfo.classInfo && classInfo.classInfo.length > 0 && classInfo.classInfo.map((res)=> {
                                                return <div  key= {res.key} className={  classInfo.status == 4 ? styles.adRequired:styles.classRequired}>
                                                    {
                                                        <span>
                                                            { icons[res.key]}
                                                        </span>
                                                    }
                                                    <span className={styles.classRequiredContent}>
                                                        {
                                                            res.value
                                                        }
                                                    </span>
                                                </div>
                                            }) 
                                        }
                                        {
                                            classInfo.schedule && <div className={styles.classInfoSchedule}>
                                             
                                                    
                                                    <span>
                                                        {
                                                            icons.schedule
                                                        }
                                                    </span>

                                                    <span className={
                                                        styles.scheduleContent
                                                    }>
                                                        {
                                                            classInfo.schedule
                                                        }
                                                    </span>
                                                
                                            </div>
                                        }

                                
                                    </div>
                                }
                                {
                                    classInfo.info && classInfo.info.length > 0 && <div className={styles.infoConentWrapper}>

                                            {
                                                classInfo.info.map((info)=> {
                                                    return <div key={info.key} className={styles.infoConentItem}>
                                                            <span className={styles.infoKey}>
                                                                {info.key}
                                                            </span>
                                                            <span className={styles.infoItemText}>
                                                                {info.value}
                                                            </span>
                                                    </div>
                                                })
                                            }
                                    </div>
                                }

                                {
                                    classInfo.status == 4 &&  <img 
                                
                                        style={{
                                            position: 'absolute',
                                            top: "30px",
                                            zIndex: 6,
                                            right:"20px",
                                            width: "340px"
    
                                            
                                        }}  src={`/biccoin.png`}/>
                                
                                }
                                {
                                    classInfo.adTitle && <div className={styles.adTitle}>
                                        {
                                            classInfo.adTitle 
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
)
}



export default Home