'use client';

import Image from 'next/image';
import { screen } from '@/constants/screen';
import useWindowWidth from '@/hooks/common/useWindowWidth';
import { useRouter } from 'next/navigation'



const Header = () => {
    const windowWidth = useWindowWidth();
    const router = useRouter();

    // 초기 렌더링 시 windowWidth가 0일 경우 기본 이미지 설정
    const logoSrc = windowWidth > screen.sm ? "/images/logo/logo_large.svg" : "/images/logo/logo_small.svg";
    const logoWidth = windowWidth > screen.sm ? 151 : 71;

    return (
        <header className="flex justify-center h-60pxr border-slate-200 border-b bg-white">
            <div className="flex items-center w-1200pxr mx-24pxr">
                <button onClick={() => { router.push('/') }}>
                    <Image
                        src={logoSrc}
                        alt="Logo"
                        width={logoWidth}
                        height={40}
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;