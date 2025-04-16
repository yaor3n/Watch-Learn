import React from 'react';
import { useRouter } from 'next/navigation';
import HamburgerMenu from "@/components/ui/HamburgerMenu";

interface BannerItems {
  title: string;
  color: string;
  showProfileButton?: boolean;
  showHamburgerMenu?: boolean;
  showBackButton?: boolean;
}

const Banner: React.FC<BannerItems> = ({
  title,
  color,
  showHamburgerMenu = false,
  showBackButton = false,
}) => {
  const router = useRouter();

  return (
    <div
      className="w-full text-[#f5f8d5] text-center m-0 "
      style={{ backgroundColor: color }
      }
    >
      <div className="p-6 flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          {showBackButton && (
            <button
              className="bg-[#205781] hover:bg-[#f6f8d5] border-[2px] border-[#f6f8d5] rounded-md text-[#f6f8d5] hover:text-[#205781] p-3 px-4 w-25 md:font-bold transition ease-linear duration-300"
              onClick={() => router.back()}
            >
              &larr; Back
            </button>
          )}
        </div>

        <div className="flex-1 text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>

        <div className="flex-1 flex justify-end gap-2">
          {showHamburgerMenu && <HamburgerMenu />}

        </div>
      </div>
    </div >
  );
};

export default Banner;
