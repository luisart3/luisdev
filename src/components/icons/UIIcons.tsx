import React from "react";

interface IconProps {
    className?: string,
    size?: number,
}

export const Copy: React.FC<IconProps> = ({
    className = "",
    size = 24,
}) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
            />
            <path opacity="0.4"
                d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" />
        </svg>


    )

}
export const Info: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" />
            <path d="M12 8V13" />
            <path d="M11.9946 16H12.0036" />

        </svg>



    )
}

export const Document: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z" />
            <path d="M15.0599 19.3901C14.4399 19.8101 13.6599 20.1601 12.7099 20.4701L11.1299 20.9901C7.15985 22.2701 5.06985 21.2001 3.77985 17.2301L2.49985 13.2801C1.21985 9.3101 2.27985 7.2101 6.24985 5.9301L7.82985 5.4101C8.23985 5.2801 8.62985 5.1701 8.99985 5.1001C8.69985 5.7101 8.45985 6.4501 8.25985 7.3001L7.27985 11.4901C6.29985 15.6701 7.58985 17.7301 11.7599 18.7201L13.4399 19.1201C14.0199 19.2601 14.5599 19.3501 15.0599 19.3901Z" />
            <path d="M12.6401 8.53003L17.4901 9.76003" stroke="#A839FC" />
            <path d="M11.6602 12.3999L14.5602 13.1399" />
        </svg>

    )
}

export const ArrowLeft: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" />
            <path d="M20.4999 12H3.66992" />
        </svg>

    )
}

export const ChevronRight: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z" />
        </svg>

    )
}

export const ChevronLeft: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55002C14.7598 3.26002 15.2398 3.26002 15.5298 3.55002C15.8198 3.84002 15.8198 4.32002 15.5298 4.61002L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z" />
        </svg>

    )
}

export const Timer: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M18.35 19.68C17.8 21.09 16.46 22 14.95 22H9.04998C7.52998 22 6.19998 21.09 5.64998 19.68C5.09998 18.26 5.47998 16.69 6.59998 15.67L10.65 12H13.36L17.4 15.67C18.52 16.69 18.89 18.26 18.35 19.68Z"  />
            <path d="M13.82 18.14H10.18C9.8 18.14 9.5 17.83 9.5 17.46C9.5 17.08 9.81 16.78 10.18 16.78H13.82C14.2 16.78 14.5 17.09 14.5 17.46C14.5 17.83 14.19 18.14 13.82 18.14Z" />
            <path d="M18.3502 4.32C17.8002 2.91 16.4602 2 14.9502 2H9.05016C7.54016 2 6.20016 2.91 5.65016 4.32C5.11016 5.74 5.48016 7.31 6.61016 8.33L10.6502 12H13.3602L17.4002 8.33C18.5202 7.31 18.8902 5.74 18.3502 4.32ZM13.8202 7.23H10.1802C9.80016 7.23 9.50016 6.92 9.50016 6.55C9.50016 6.18 9.81016 5.87 10.1802 5.87H13.8202C14.2002 5.87 14.5002 6.18 14.5002 6.55C14.5002 6.92 14.1902 7.23 13.8202 7.23Z" />
        </svg>

    )
}


export const Plus: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" />
            <path d="M12 5V19" />
        </svg>

    )
}
export const SMS: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}  
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" />
            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" />
        </svg>

    )
}

export const Map: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.1499 7.48999C8.5899 7.48999 8.1499 7.93999 8.1499 8.48999C8.1499 9.03999 8.5999 9.48999 9.1499 9.48999C9.6999 9.48999 10.1499 9.03999 10.1499 8.48999C10.1499 7.93999 9.6999 7.48999 9.1499 7.48999Z" />
            <path d="M21.46 5.04C20.62 3.09 18.77 2 16.19 2H7.81C4.6 2 2 4.6 2 7.81V16.19C2 18.77 3.09 20.62 5.04 21.46C5.23 21.54 5.45 21.49 5.59 21.35L21.35 5.59C21.5 5.44 21.55 5.22 21.46 5.04ZM10.53 12.24C10.14 12.62 9.63 12.8 9.12 12.8C8.61 12.8 8.1 12.61 7.71 12.24C6.69 11.28 5.57 9.75 6 7.93C6.38 6.28 7.84 5.54 9.12 5.54C10.4 5.54 11.86 6.28 12.24 7.94C12.66 9.75 11.54 11.28 10.53 12.24Z" />
            <path d="M19.4699 20.53C19.6899 20.75 19.6599 21.11 19.3899 21.26C18.5099 21.75 17.4399 22 16.1899 22H7.8099C7.5199 22 7.3999 21.66 7.5999 21.46L13.6399 15.42C13.8399 15.22 14.1499 15.22 14.3499 15.42L19.4699 20.53Z" />
            <path d="M22 7.81002V16.19C22 17.44 21.75 18.52 21.26 19.39C21.11 19.66 20.75 19.68 20.53 19.47L15.41 14.35C15.21 14.15 15.21 13.84 15.41 13.64L21.45 7.60002C21.66 7.40002 22 7.52002 22 7.81002Z" />
        </svg>
    )
}

export const Check: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12.5L9.32706 18L20 7" />

        </svg>
    )
}

export const ArrowUpRight: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13 11L21.2 2.79999" />
            <path d="M22 6.8V2H17.2" />
            <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" />
        </svg>
    )
}

export const StartUI: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (

        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14.796 2.50732C15.0222 1.83089 15.8866 1.83089 16.1128 2.50732L17.7125 7.29186C17.7836 7.50453 17.9351 7.6722 18.1273 7.7509L22.4504 9.52134C23.0616 9.77164 23.0616 10.7284 22.4504 10.9787L18.1273 12.7491C17.9351 12.8278 17.7836 12.9955 17.7125 13.2081L16.1128 17.9927C15.8866 18.6691 15.0222 18.6691 14.796 17.9927L13.1963 13.2081C13.1252 12.9955 12.9737 12.8278 12.7815 12.7491L8.45839 10.9787C7.8472 10.7284 7.8472 9.77164 8.4584 9.52134L12.7815 7.7509C12.9737 7.6722 13.1252 7.50453 13.1963 7.29186L14.796 2.50732Z" fill="url(#paint0_linear_195_52)" />
            <path d="M3.81538 5.49716C4.0222 4.83428 4.87016 4.83428 5.07698 5.49716L5.58534 7.12648C5.64875 7.32973 5.78921 7.49228 5.96995 7.5716L7.47127 8.23046C8.03272 8.47686 8.03272 9.35544 7.47127 9.60183L5.96995 10.2607C5.7892 10.34 5.64875 10.5026 5.58534 10.7058L5.07698 12.3351C4.87016 12.998 4.0222 12.998 3.81538 12.3351L3.30702 10.7058C3.24361 10.5026 3.10315 10.34 2.92241 10.2607L1.42109 9.60183C0.859636 9.35544 0.859637 8.47686 1.42109 8.23046L2.92241 7.5716C3.10315 7.49228 3.24361 7.32973 3.30702 7.12648L3.81538 5.49716Z" fill="url(#paint1_linear_195_52)" />
            <path d="M6.87457 13.5651C7.12178 12.8116 8.11306 12.8116 8.36027 13.5651L9.11926 15.8784C9.19567 16.1113 9.36286 16.2967 9.57703 16.3861L11.7322 17.2855C12.4024 17.5652 12.4024 18.5845 11.7322 18.8642L9.57703 19.7636C9.36286 19.853 9.19567 20.0384 9.11926 20.2713L8.36027 22.5846C8.11306 23.3381 7.12178 23.3381 6.87457 22.5846L6.11558 20.2713C6.03917 20.0384 5.87197 19.853 5.65781 19.7636L3.50262 18.8642C2.83246 18.5845 2.83246 17.5652 3.50262 17.2855L5.65781 16.3861C5.87197 16.2967 6.03917 16.1113 6.11558 15.8784L6.87457 13.5651Z" fill="url(#paint2_linear_195_52)" />
            <defs>
                <linearGradient id="paint0_linear_195_52" x1="18.2624" y1="3.64594" x2="14.8498" y2="19.8344" gradientUnits="userSpaceOnUse">
                    <stop offset="0.236799" stopColor="#FFC659" />
                    <stop offset="0.743388" stopColor="#FE9A60" />
                </linearGradient>
                <linearGradient id="paint1_linear_195_52" x1="5.91419" y1="5.21641" x2="3.87831" y2="14.2286" gradientUnits="userSpaceOnUse">
                    <stop offset="0.236799" stopColor="#FFC659" />
                    <stop offset="0.743388" stopColor="#FE9A60" />
                </linearGradient>
                <linearGradient id="paint2_linear_195_52" x1="9.53942" y1="13.4686" x2="7.11778" y2="24.7414" gradientUnits="userSpaceOnUse">
                    <stop offset="0.236799" stopColor="#FFC659" />
                    <stop offset="0.743388" stopColor="#FE9A60" />
                </linearGradient>
            </defs>
        </svg>


    )
}



export const Magicpen: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4026 2.04598C6.55611 1.62676 7.11755 1.64464 7.24407 2.07278L7.63251 3.38727C7.67162 3.51961 7.76299 3.6269 7.88269 3.68102L9.08723 4.22565C9.46178 4.39501 9.44353 4.96818 9.05896 5.11336L7.8222 5.58024C7.6993 5.62663 7.60129 5.72789 7.55384 5.85747L7.08254 7.14457C6.92903 7.5638 6.36759 7.54592 6.24107 7.11777L5.85263 5.80328C5.81352 5.67095 5.72215 5.56366 5.60245 5.50954L4.39791 4.9649C4.02336 4.79555 4.04161 4.22238 4.42618 4.0772L5.66294 3.61032C5.78584 3.56392 5.88385 3.46267 5.9313 3.33309L6.4026 2.04598Z" fill="url(#paint0_linear_195_43)" />
            <path d="M4.01979 9.27938C4.1733 8.86015 4.73474 8.87804 4.86126 9.30618L5.2497 10.6207C5.28881 10.753 5.38018 10.8603 5.49988 10.9144L6.70442 11.459C7.07897 11.6284 7.06072 12.2016 6.67614 12.3468L5.43939 12.8136C5.31649 12.86 5.21848 12.9613 5.17103 13.0909L4.69972 14.378C4.54621 14.7972 3.98478 14.7793 3.85826 14.3512L3.46981 13.0367C3.43071 12.9043 3.33933 12.7971 3.21964 12.7429L2.0151 12.1983C1.64054 12.0289 1.6588 11.4558 2.04337 11.3106L3.28012 10.8437C3.40302 10.7973 3.50104 10.6961 3.54849 10.5665L4.01979 9.27938Z" fill="url(#paint1_linear_195_43)" />
            <path d="M20.366 11.3877C20.5195 10.9684 21.0809 10.9863 21.2074 11.4145L21.5959 12.7289C21.635 12.8613 21.7264 12.9686 21.8461 13.0227L23.0506 13.5673C23.4252 13.7367 23.4069 14.3099 23.0223 14.455L21.7856 14.9219C21.6627 14.9683 21.5647 15.0696 21.5172 15.1991L21.0459 16.4862C20.8924 16.9055 20.331 16.8876 20.2044 16.4594L19.816 15.145C19.7769 15.0126 19.6855 14.9053 19.5658 14.8512L18.3613 14.3066C17.9867 14.1372 18.005 13.564 18.3896 13.4189L19.6263 12.952C19.7492 12.9056 19.8472 12.8043 19.8947 12.6748L20.366 11.3877Z" fill="url(#paint2_linear_195_43)" />
            <path d="M4.68971 21.3817C3.47794 20.2436 3.41818 18.3387 4.55623 17.1269L16.5306 4.3769C17.6687 3.16513 19.5736 3.10537 20.7854 4.24342C21.9972 5.38147 22.0569 7.28638 20.9189 8.49815L8.94444 21.2482C7.80639 22.46 5.90148 22.5197 4.68971 21.3817Z" fill="#9810FA" />
            <path d="M14.9998 6.00016L16.7647 4.09165C17.8487 2.91944 19.6608 2.80159 20.8875 3.82354L20.9757 3.89699C22.3312 5.02626 22.4243 7.07571 21.1768 8.32323L19.4999 10.0001L14.9998 6.00016Z" fill="#2F3032" />
            <defs>
                <linearGradient id="paint0_linear_195_43" x1="7.91364" y1="2.03981" x2="6.35882" y2="8.33955" gradientUnits="userSpaceOnUse">
                    <stop offset="0.236799" stopColor="#FFC659" />
                    <stop offset="0.743388" stopColor="#FE9A60" />
                </linearGradient>
                <linearGradient id="paint1_linear_195_43" x1="5.53083" y1="9.27321" x2="3.97601" y2="15.5729" gradientUnits="userSpaceOnUse">
                    <stop offset="0.236799" stopColor="#FFC659" />
                    <stop offset="0.743388" stopColor="#FE9A60" />
                </linearGradient>
                <linearGradient id="paint2_linear_195_43" x1="21.877" y1="11.3815" x2="20.3222" y2="17.6812" gradientUnits="userSpaceOnUse">
                    <stop offset="0.236799" stopColor="#FFC659" />
                    <stop offset="0.743388" stopColor="#FE9A60" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export const Layers: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1.71566 9.64704C1.77211 8.91282 2.41307 8.36339 3.14728 8.41984L10.9304 9.01827C11.6539 9.07389 12.2 9.69783 12.1594 10.4223L11.7116 18.4115C11.6698 19.1575 11.0232 19.7235 10.2782 19.6663L2.32956 19.0551C1.59535 18.9987 1.04592 18.3577 1.10237 17.6235L1.71566 9.64704Z" fill="#2F3032" />
            <path opacity="0.8" d="M5.90804 7.29486C5.96449 6.56065 6.60545 6.01122 7.33966 6.06767L15.1228 6.66609C15.8462 6.72172 16.3924 7.34566 16.3518 8.07012L15.904 16.0593C15.8622 16.8053 15.2155 17.3714 14.4705 17.3141L6.52194 16.7029C5.78773 16.6465 5.2383 16.0055 5.29475 15.2713L5.90804 7.29486Z" fill="white" />
            <path d="M11.43 5.04486C11.4865 4.31065 12.1274 3.76122 12.8616 3.81767L20.6447 4.41609C21.3682 4.47172 21.9144 5.09566 21.8738 5.82012L21.426 13.8093C21.3842 14.5553 20.7375 15.1214 19.9925 15.0641L12.0439 14.4529C11.3097 14.3965 10.7603 13.7555 10.8167 13.0213L11.43 5.04486Z" fill="#8200DB" />
        </svg>

    )
}


export const Layers_2: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1.71566 9.64704C1.77211 8.91282 2.41307 8.36339 3.14728 8.41984L10.9304 9.01827C11.6539 9.07389 12.2 9.69783 12.1594 10.4223L11.7116 18.4115C11.6698 19.1575 11.0232 19.7235 10.2782 19.6663L2.32956 19.0551C1.59535 18.9987 1.04592 18.3577 1.10237 17.6235L1.71566 9.64704Z" fill="url(#paint0_linear_244_27)" />
            <path opacity="0.8" d="M5.90804 7.29474C5.96449 6.56053 6.60545 6.0111 7.33966 6.06755L15.1228 6.66597C15.8462 6.7216 16.3924 7.34553 16.3518 8.07L15.904 16.0592C15.8622 16.8052 15.2155 17.3713 14.4705 17.314L6.52194 16.7028C5.78773 16.6464 5.2383 16.0054 5.29475 15.2712L5.90804 7.29474Z" fill="white" />
            <path d="M11.43 5.04474C11.4865 4.31053 12.1274 3.7611 12.8616 3.81755L20.6447 4.41597C21.3682 4.4716 21.9144 5.09553 21.8738 5.82L21.426 13.8092C21.3842 14.5552 20.7375 15.1213 19.9925 15.064L12.0439 14.4528C11.3097 14.3964 10.7603 13.7554 10.8167 13.0212L11.43 5.04474Z" fill="url(#paint1_linear_244_27)" />
            <defs>
                <linearGradient id="paint0_linear_244_27" x1="7.12158" y1="8.72542" x2="6.30386" y2="19.3607" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C176FF" />
                    <stop offset="1" stopColor="#9F22FB" />
                </linearGradient>
                <linearGradient id="paint1_linear_244_27" x1="16.8359" y1="4.12312" x2="16.0182" y2="14.7584" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC659" />
                    <stop offset="1" stopColor="#FF9D60" />
                </linearGradient>
            </defs>
        </svg>


    )
}

export const Components_token: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5098 5.01L14.5498 3.05C13.1498 1.65 10.8498 1.65 9.44977 3.05L7.48977 5.01C7.09977 5.4 7.09977 6.04 7.48977 6.43L11.2998 10.24C11.6898 10.63 12.3198 10.63 12.7098 10.24L16.5198 6.43C16.8998 6.04 16.8998 5.4 16.5098 5.01Z" fill="url(#paint0_linear_246_9)" />
            <path d="M5.01 7.49001L3.05 9.45001C1.65 10.85 1.65 13.15 3.05 14.55L5.01 16.51C5.4 16.9 6.03 16.9 6.42 16.51L10.23 12.7C10.62 12.31 10.62 11.68 10.23 11.29L6.43 7.49001C6.04 7.10001 5.4 7.10001 5.01 7.49001Z" fill="url(#paint1_linear_246_9)" />
            <path d="M20.95 9.45001L18.99 7.49001C18.6 7.10001 17.97 7.10001 17.58 7.49001L13.77 11.3C13.38 11.69 13.38 12.32 13.77 12.71L17.58 16.52C17.97 16.91 18.6 16.91 18.99 16.52L20.95 14.56C22.35 13.15 22.35 10.85 20.95 9.45001Z" fill="url(#paint2_linear_246_9)" />
            <path d="M7.49005 18.99L9.45005 20.95C10.8501 22.35 13.1501 22.35 14.5501 20.95L16.5101 18.99C16.9001 18.6 16.9001 17.97 16.5101 17.58L12.7001 13.77C12.3101 13.38 11.6801 13.38 11.2901 13.77L7.48005 17.58C7.10005 17.96 7.10005 18.6 7.49005 18.99Z" fill="url(#paint3_linear_246_9)" />
            <defs>
                <linearGradient id="paint0_linear_246_9" x1="11.9072" y1="10.5325" x2="12.0936" y2="2" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C27AFF" />
                    <stop offset="1" stopColor="#9810FA" />
                </linearGradient>
                <linearGradient id="paint1_linear_246_9" x1="9" y1="12" x2="3" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC659" />
                    <stop offset="1" stopColor="#FE9A60" />
                </linearGradient>
                <linearGradient id="paint2_linear_246_9" x1="21.5" y1="10.5" x2="14.5" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#181818" />
                    <stop offset="1" stopColor="#4A5565" />
                </linearGradient>
                <linearGradient id="paint3_linear_246_9" x1="11.9994" y1="13.4775" x2="11.9994" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0.00480769" stopColor="#F5F5F5" />
                    <stop offset="0.961538" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>

    )
}





export const Typography: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2V22H2V2H22ZM3 21H21V3H3V21Z" fill="white" />
            <path d="M2 23H5V20H2V23Z" fill="#F5F5F5" />
            <path d="M1 5H4V2H1L1 5Z" fill="#F5F5F5" />
            <path d="M20 5H23V2H20V5Z" fill="#F5F5F5" />
            <path d="M20 23H23V20H20V23Z" fill="#F5F5F5" />
            <path d="M5 23V20H2V23H5ZM2.6 20.6H4.4V22.4H2.6V20.6Z" fill="#8200DB" />
            <path d="M4 5V2H1L1 5H4ZM1.6 2.6H3.4V4.4H1.6V2.6Z" fill="#8200DB" />
            <path d="M23 5V2H20V5H23ZM20.6 2.6H22.4V4.4H20.6V2.6Z" fill="#8200DB" />
            <path d="M23 23V20H20V23H23ZM20.6 20.6H22.4V22.4H20.6V20.6Z" fill="#8200DB" />
            <path d="M19.3539 13.1361C19.4737 13.1192 19.5726 13.132 19.6506 13.1745C19.7363 13.2148 19.7986 13.3056 19.8374 13.4469C19.8742 13.5806 19.8701 13.7017 19.8252 13.8099C19.7803 13.9182 19.6962 13.9893 19.5728 14.0232C19.2567 14.11 19.0054 14.1311 18.8189 14.0864C18.6402 14.0396 18.4516 13.9116 18.2531 13.7024C18.0682 14.2968 17.5361 14.7147 16.6571 14.9563C15.7626 15.2021 15.0319 15.1232 14.4648 14.7195C13.8957 14.3083 13.5039 13.7126 13.2894 12.9322C13.1465 12.4119 13.1227 11.9029 13.2181 11.405C13.3135 10.9072 13.5336 10.471 13.8786 10.0965C14.2235 9.72191 14.6735 9.45835 15.2287 9.30578C15.5834 9.2083 15.9141 9.18937 16.2207 9.24899C16.5351 9.30648 16.7933 9.43136 16.9954 9.62362L16.9535 9.33537C16.9108 9.05934 17.0399 8.88 17.3406 8.79736C17.5411 8.74226 17.696 8.74765 17.8053 8.81353C17.9126 8.87198 17.9759 8.96649 17.9952 9.09708C18.0713 9.67568 18.1404 10.1083 18.2026 10.395C18.253 10.6689 18.3374 11.0214 18.4559 11.4525L18.6581 12.1882C18.7643 12.5747 18.8571 12.837 18.9365 12.975C19.0236 13.111 19.1627 13.1646 19.3539 13.1361ZM17.5246 12.4997C17.4404 12.1632 17.3186 11.705 17.1593 11.1253C17.0756 10.8206 16.9377 10.5907 16.7458 10.4356C16.5617 10.2784 16.3571 10.1827 16.1321 10.1486C15.9148 10.1124 15.7059 10.1219 15.5054 10.177C15.1584 10.2723 14.8891 10.4542 14.6975 10.7227C14.5116 10.9816 14.3988 11.2804 14.3592 11.619C14.3272 11.9555 14.3562 12.2873 14.4461 12.6143C14.5829 13.1123 14.8219 13.5142 15.1631 13.8201C15.5099 14.1165 15.9416 14.1937 16.4583 14.0517C16.8669 13.9394 17.1709 13.748 17.3703 13.4774C17.5696 13.2068 17.621 12.8809 17.5246 12.4997Z" fill="#9D1DFB" />
            <path d="M12.3757 15.4616C12.4193 15.5296 12.4461 15.5821 12.4563 15.6193C12.4972 15.7679 12.4672 15.9001 12.3663 16.0157C12.2633 16.124 12.1193 16.2035 11.9342 16.2544C11.8032 16.2904 11.6793 16.2924 11.5627 16.2605C11.4482 16.236 11.3622 16.1797 11.3048 16.0916C10.9543 15.5404 10.6423 15.0387 10.3687 14.5863L7.3815 15.3952L7.31374 17.1404C7.30765 17.3899 7.15425 17.5559 6.85352 17.6386C6.68388 17.6852 6.52229 17.6856 6.36873 17.6399C6.21314 17.5867 6.11696 17.4933 6.0802 17.3595C6.06794 17.3149 6.06419 17.256 6.06894 17.1827C6.22935 14.7486 6.34949 12.8771 6.42934 11.5682L6.48666 10.5093C6.52559 9.98702 6.60332 9.60595 6.71986 9.3661C6.83435 9.11881 7.02654 8.95808 7.29643 8.88392C7.55089 8.81399 7.77974 8.84702 7.98297 8.98302C8.19392 9.11689 8.4329 9.38295 8.69991 9.78118C9.37844 10.8017 10.1394 11.9715 10.9829 13.2904L11.3068 13.2014C11.461 13.159 11.5899 13.1756 11.6936 13.251C11.8029 13.3169 11.88 13.4316 11.925 13.5951C12.021 13.9444 11.9417 14.154 11.6873 14.2239L11.5947 14.2494L12.3757 15.4616ZM9.76536 13.613L9.6255 13.3757C9.04292 12.4327 8.58534 11.7031 8.25277 11.187C8.21125 11.1265 8.139 11.0144 8.036 10.8509C7.93301 10.6874 7.85202 10.5737 7.79304 10.51C7.74178 10.4442 7.70072 10.4155 7.66988 10.424C7.63132 10.4345 7.60502 10.4897 7.59098 10.5895C7.5826 10.6797 7.57718 10.8411 7.57472 11.0736C7.57722 11.1129 7.57587 11.1532 7.57066 11.1946C7.56545 11.236 7.56228 11.2848 7.56116 11.3411C7.55891 11.4536 7.55336 11.5391 7.54453 11.5975C7.53119 11.8809 7.51594 12.2328 7.49877 12.6532C7.47956 13.0661 7.4581 13.5916 7.43438 14.2296L9.76536 13.613Z" fill="white" />
        </svg>


    )
}


export const Cursor: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7.94587 4.73446C8.55428 4.39505 9.36486 4.37579 10.1268 4.87508L21.2849 12.1869C22.1479 12.7524 22.5326 13.6939 22.4712 14.5612C22.41 15.4251 21.9168 16.1645 21.0566 16.4152L16.0234 17.8808C15.6029 18.0032 15.2177 18.2183 14.8926 18.5118L11.0025 22.0258C10.3375 22.6264 9.44931 22.6576 8.68188 22.2561C7.91151 21.853 7.31153 21.0316 7.28328 20.0003L6.91952 6.66485C6.89467 5.75413 7.33744 5.07399 7.94587 4.73446Z" fill="#2F3032" stroke="url(#paint0_linear_197_10)" />
            <defs>
                <linearGradient id="paint0_linear_197_10" x1="7.70201" y1="4.29796" x2="16.298" y2="19.702" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C27AFF" />
                    <stop offset="1" stopColor="#9810FA" />
                </linearGradient>
            </defs>
        </svg>

    )
}


export const HanTwoTap: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            viewBox="0 0 50 50"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M28.005 15.0435C30.362 13.9678 32 11.5905 32 8.83037C32 4.25837 27.593 0.978368 23.213 2.29237L16.086 4.43037C13.661 5.15837 12 7.39037 12 9.92237C12 12.5165 13.7224 14.7081 16.086 15.4161" stroke="#9810FA" />
            <path d="M37 23.0005C35.343 23.0005 34 24.3435 34 26.0005V24.0005C34 22.3435 32.657 21.0005 31 21.0005C29.343 21.0005 28 22.3435 28 24.0005V22.0005V9.00049C28 7.34349 26.657 6.00049 25 6.00049C23.343 6.00049 22 7.34349 22 9.00049V10.0005V23.0005V11.0005C22 9.34349 20.657 8.00049 19 8.00049C17.343 8.00049 16 9.34349 16 11.0005V32.0005V27.0005C16 25.0005 14.657 24.0005 13 24.0005C11.343 24.0005 10 25.3435 10 27.0005V32.0005C10 40.2845 16.716 47.0005 25 47.0005C33.284 47.0005 40 40.2845 40 32.0005V26.0005C40 24.3435 38.657 23.0005 37 23.0005Z" />
        </svg>

    )
}

export const HandTwoScrollUp: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size} 
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M37 16V2" stroke="#9810FA" />
            <path d="M40 5L37 2L34 5" stroke="#C27AFF" />
            <path d="M36 21C34.343 21 33 22.343 33 24V22C33 20.343 31.657 19 30 19C28.343 19 27 20.343 27 22V20V6C27 4.343 25.657 3 24 3C22.343 3 21 4.343 21 6V7V20V8C21 6.343 19.657 5 18 5C16.343 5 15 6.343 15 8V29V24C15 22 13.657 21 12 21C10.343 21 9 22.343 9 24V32C9 40.284 15.716 47 24 47C32.284 47 39 40.284 39 32V24C39 22.343 37.657 21 36 21Z" />
        </svg>

    )
}

export const HandTwoScrollDown: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M37 2V16" stroke="#9810FA" />
            <path d="M40 13L37 16L34 13" stroke="#C27AFF" />
            <path d="M36 21C34.343 21 33 22.343 33 24V22C33 20.343 31.657 19 30 19C28.343 19 27 20.343 27 22V20V6C27 4.343 25.657 3 24 3C22.343 3 21 4.343 21 6V7V20V8C21 6.343 19.657 5 18 5C16.343 5 15 6.343 15 8V29V24C15 22 13.657 21 12 21C10.343 21 9 22.343 9 24V32C9 40.284 15.716 47 24 47C32.284 47 39 40.284 39 32V24C39 22.343 37.657 21 36 21Z" />
        </svg>

    )
}

export const CardMin: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z" />
            <path d="M15.0599 19.3901C14.4399 19.8101 13.6599 20.1601 12.7099 20.4701L11.1299 20.9901C7.15985 22.2701 5.06985 21.2001 3.77985 17.2301L2.49985 13.2801C1.21985 9.3101 2.27985 7.2101 6.24985 5.9301L7.82985 5.4101C8.23985 5.2801 8.62985 5.1701 8.99985 5.1001C8.69985 5.7101 8.45985 6.4501 8.25985 7.3001L7.27985 11.4901C6.29985 15.6701 7.58985 17.7301 11.7599 18.7201L13.4399 19.1201C14.0199 19.2601 14.5599 19.3501 15.0599 19.3901Z" />
            <path d="M12.6401 8.53003L17.4901 9.76003" stroke="#A839FC" />
            <path d="M11.6602 12.3999L14.5602 13.1399" />
        </svg>

    )
}


export const MouseIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 9.5V14.5C19.5 18.63 16.13 22 12 22C7.87 22 4.5 18.63 4.5 14.5V9.5C4.5 7.44 5.34 5.56 6.7 4.2C7.89 3.01 9.48 2.22 11.25 2.04C11.49 2.01 11.75 2 12 2C12.25 2 12.51 2.01 12.75 2.04C16.53 2.42 19.5 5.62 19.5 9.5Z" />
            <path d="M13.8701 7.5V9.5C13.8701 10.53 13.0301 11.38 12.0001 11.38C10.9601 11.38 10.1201 10.53 10.1201 9.5V7.5C10.1201 6.73 10.5901 6.07 11.2501 5.78V2.04C11.4901 2.01 11.7501 2 12.0001 2C12.2501 2 12.5101 2.01 12.7501 2.04V5.78C13.4101 6.07 13.8701 6.73 13.8701 7.5Z" fill="url(#paint0_linear_228_39)" />
            <defs>
                <linearGradient id="paint0_linear_228_39" x1="11.9951" y1="2" x2="11.9951" y2="11.38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C27AFF" />
                    <stop offset="1" stopColor="#5A0994" />
                </linearGradient>
            </defs>
        </svg>

    )
}


export const FingerTap: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 50 50"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.8682 23.8414C34.9708 21.6721 37 18.073 37 14C37 7.37258 31.6274 2 25 2C18.3726 2 13 7.37258 13 14C13 18.073 15.0292 21.6721 18.1318 23.8414" stroke="#9810FA" />
            <path d="M17.9819 47V14C17.9819 10.134 21.1159 7 24.9819 7C28.8479 7 31.9819 10.134 31.9819 14V47" />
            <path d="M27.9819 19C27.9819 19 26.6489 20 24.9819 20C23.3149 20 21.9819 19 21.9819 19V15C21.9819 13.343 23.3249 12 24.9819 12C26.6389 12 27.9819 13.343 27.9819 15V19Z" />
            <path d="M23 34H27" />
            <path d="M23 38H27" />
        </svg>

    )
}


export const TapScrollUp: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 50 50"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M34.0181 21V7" stroke="#9810FA" />
            <path d="M37.0181 10L34.0181 7L31.0181 10" stroke="#C27AFF" />
            <path d="M12 47V10C12 6.134 15.134 3 19 3C22.866 3 26 6.134 26 10V47" />
            <path d="M22 15C22 15 20.667 16 19 16C17.333 16 16 15 16 15V11C16 9.343 17.343 8 19 8C20.657 8 22 9.343 22 11V15Z" />
            <path d="M17.0181 34H21.0181" />
            <path d="M17.0181 38H21.0181" />
        </svg>

    )
}


export const TapScrollDown: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M34.0181 7V21" stroke="#9810FA" />
            <path d="M37.0181 18L34.0181 21L31.0181 18" stroke="#C27AFF" />
            <path d="M12 47V10C12 6.134 15.134 3 19 3C22.866 3 26 6.134 26 10V47" />
            <path d="M22 15C22 15 20.667 16 19 16C17.333 16 16 15 16 15V11C16 9.343 17.343 8 19 8C20.657 8 22 9.343 22 11V15Z" />
            <path d="M17.0181 34H21.0181" />
            <path d="M17.0181 38H21.0181" />
        </svg>

    )
}

export const Close: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00098 5L19 18.9991" />
            <path d="M5.00009 18.9991L18.9991 5" />
        </svg>

    )
}
