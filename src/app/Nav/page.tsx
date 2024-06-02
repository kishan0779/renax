import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Image from "next/image"
import { Menu, PhoneCall } from 'lucide-react';


function Nav() {
  return (
    <div className="  bg-transparent  w-full  py-6">
      <div className=" items-start sm:items-center justify-between  text-white flex gap-24 py-6 px-4 sm:px-36 w-full md:w-[1440px] mx-auto md:py-0 ">
        <Image
          src={`/Renax-logo.png`}
          alt="jordans"
          height="120"
          width="120"
          className="object-contain  "
        />
        <Menu className="  sm:hidden "/>
        <div className="sm:flex  hidden gap-6">
          <Menubar >
            <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
               <MenubarContent>
                <MenubarItem>
                  Slider
                </MenubarItem>
                <MenubarItem>Image</MenubarItem>
                <MenubarItem>Video</MenubarItem>
                <MenubarItem>Slidershow</MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Onepage</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Slider</MenubarItem>
                    <MenubarItem>Image</MenubarItem>
                    <MenubarItem>Videos</MenubarItem>
                    <MenubarItem>Sliveshow</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>About</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Cars</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Car Grid</MenubarItem>
                <MenubarItem>Car Listing</MenubarItem>
                <MenubarItem>Car Types 01</MenubarItem>
                <MenubarItem>Car Types 02</MenubarItem>
                <MenubarItem>Car Details 01</MenubarItem>
                <MenubarItem>Car Details 02</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Services</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Pages</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Team
                </MenubarItem>
                <MenubarItem> Image Gallery</MenubarItem>
                <MenubarItem> Video Gallery</MenubarItem>
                <MenubarItem>Pricing Plang</MenubarItem>
                <MenubarItem>FAQ</MenubarItem>
                <MenubarItem>Testiominals</MenubarItem>
                <MenubarItem>Team Single</MenubarItem>
                <MenubarItem>404 error</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Blog</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Blog Grid
                </MenubarItem>
                <MenubarItem>  Blog List</MenubarItem>
                <MenubarItem>Post Single</MenubarItem>

              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Contact</MenubarTrigger>
            </MenubarMenu>

          </Menubar>
          <div className="sm:flex text-white justify-between hidden h-10  gap-4">

            <div className=" border-[1px] rounded-[50%] px-2 py-2 border-[#f5b754] justify-center items-center flex ">
              <PhoneCall />

            </div>
            <div className="flex justify-between flex-col">
              <h1>Need Help?</h1>
              <a href="tel:855 100 4444">855 100 4444</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Nav