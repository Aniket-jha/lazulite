import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  MobileNav
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/logo.png"
import { IoMdArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Nabar.css"
const navListMenuItems = [
  {
    title: "Case Studies",
    
  },
  {
    title: "Portfolio",
 
  },
  {
    title: "Blog",
   
  },
  {
    title: "Exhibition Center",
  
  },
  
];
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex border-b-[1px] text-center hover:bg-transparent  justify-center rounded-none  border-gray-500 border-dotted items-center gap-3 ">
          <div>
            <p
            
             
              className="flex text-center hover:text-[#0093DA] hover:scale-110 transform duration-300 items-center text-white text-sm font-[PoppinsRegular]"
            >
              {title}
            </p>
            
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium hover:bg-transparent">
            <ListItem
              className="flex link hover:bg-transparent focus:bg-transparent hover:text-white active:bg-transparent items-center gap-2  pr-4 p-1 font-[PoppinsRegular] tracking-wider 2xl:text-[15px] xl:text-[12px] lg:text-[10px] text-white "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden text-center bg-[#00000039]  border-none max-w-screen-xl  lg:block">
          <ul className=" gap-y-0 text-center  outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
export function NavbarTwo() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
 
  const navList = (
    <ul className="mb-0 mt-0 flex flex-col font-[PoppinsRegular] text-black gap-2 lg:mb-0 lg:mt-0 lg:justify-center lg:flex-row lg:items-center lg:gap-12">
    
    
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[PoppinsRegular] tracking-wider 2xl:text-[15px] xl:text-[12px] lg:text-[10px] text-white "
      >
        <Link to="/#broad" smooth scroll={el => scrollWithOffset(el)} className="flex link items-center">
         Product
         </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[PoppinsRegular] tracking-wider 2xl:text-[15px] xl:text-[12px] lg:text-[10px] text-white "
      >
       <Link to="/#speakers" smooth scroll={el => scrollWithOffset(el)} className="flex link items-center">
         Service
         </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[PoppinsRegular] tracking-wider 2xl:text-[15px] xl:text-[12px] lg:text-[10px] text-white "
      >
        <Link to="/#sponsors" smooth scroll={el => scrollWithOffset(el)}  className="flex link  items-center">
         About
         </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[PoppinsRegular] tracking-wider 2xl:text-[15px] xl:text-[12px] lg:text-[10px] text-white "
      >
       <Link to="#contact" smooth scroll={el => scrollWithOffset(el)} className="flex link items-center">
         Contact
         </Link>
      </Typography>
     
    </ul>
  );
 
  return (
    <Navbar className={` fixed    w-[100vw !important] navBarBg  max-w-full  border-none shadow-none backdrop-saturate-0 backdrop-blur-none   rounded-none  py-4 px-2 lg:px-64 lg:py-6`}>
      <div className="  grid grid-cols-2 lg:grid-cols-4 justify-between items-center text-blue-gray-900">
       <a className="col-span-1" to="https://www.unionliving.in">
        <img className="w-[70px] lg:w-[180px]" src={Logo} alt="" />
       </a>
        <div className="hidden lg:block  col-span-3 ">{navList}</div>
       <div className="col-span-1 flex items-center justify-end " >
      
     
        <IconButton
              variant="text"
              className="lg:ml-auto ml-2 h-6 w-6 col-span-4 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container  mx-0 p-0">
          {navList}
         
        </div>
      </MobileNav>
    </Navbar>
  );
}