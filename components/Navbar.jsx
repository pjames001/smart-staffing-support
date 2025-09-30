'use client'
import { useState, useEffect } from "react"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Presentation, 
  Workflow, 
  QrCode,
  DollarSign,
  Weight,
  Cpu,
  Mail,
  Headset,
  Scale,
  HeartPulse,
  Landmark,
  ListCollapse,
  CarFront,
  BriefcaseBusiness,
  Zap,
  Cross,
  ShieldPlus,
  Film,
  Building2,
  ShoppingCart,
  Network,
  Plane,
  LayoutPanelTop,
  MapPinned,
  Clapperboard
} from 'lucide-react'
import logo from '@/public/logo2.png'
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    href: "/",
    submenu: [],
  },
  {
    name: "About",
    href: "/about",
    submenu: [
      { icon: <LayoutPanelTop className="text-blue-500" />, name: "Company Structure", href: "/about/company-structure" },
      { icon: <MapPinned className="text-green-500" />, name: "Location", href: "/about/location" },
      { icon: <Clapperboard className="text-red-400" />, name: "Media", href: "/about/media" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { icon: <Presentation className="text-emerald-600" />, name: "Back Office Support", href: "/services/back-office-support" },
      { icon: <Workflow className="text-cyan-700" />, name: "Automation and AI", href: "/services/automation-and-ai" },
      { icon: <QrCode className="text-blue-500" />, name: "Digital Transformation", href: "/services/digital-transformation" },
      { icon: <Landmark className="text-green-600" />, name: "Finance and Accounting", href: "/services/finance-and-accounting" },
      { icon: <Weight className="text-purple-500" />, name: "Sales and Marketing", href: "/services/sales-and-marketing" },
      { icon: <Cpu className="text-sky-700" />, name: "Technical Support", href: "/services/technical-support" },
      { icon: <Mail className="text-orange-500" />, name: "Email and Chat Support", href: "/services/email-and-chat-support" },
      { icon: <Headset className="text-yellow-500" />, name: "Answering Services", href: "/services/answering-services" },
      { icon: <Scale className="text-rose-700" />, name: "Paralegal and Legal Support", href: "/services/paralegal-and-legal-support" },
      { icon: <HeartPulse className="text-green-400" />, name: "Health Care and Insurance", href: "/services/health-care-and-insurance" },
      { icon: <DollarSign className="text-red-500" />, name: "Collection Services", href: "/services/collection-services" },
      { icon: <ListCollapse className="text-gray-700" />, name: "More Services", href: "/services/more-services" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    submenu: [
      { icon: <CarFront className="text-emerald-600" />, name: "Automotive", href: "/industries/automotive" },
      { icon: <Landmark className="text-cyan-700" />, name: "Banking and Financial Services", href: "/industries/banking-and-financial-services" },
      { icon: <BriefcaseBusiness className="text-blue-500" />, name: "Professional Services (Law, Accounting)", href: "/industries/professional-services" },
      { icon: <Zap className="text-green-600" />, name: "Energy and Public Sector", href: "/industries/energy-and-public-sector" },
      { icon: <Cross className="text-purple-500" />, name: "Health Care Services", href: "/industries/health-care-services" },
      { icon: <ShieldPlus className="text-sky-700" />, name: "Insurance", href: "/industries/insurance" },
      { icon: <Film className="text-orange-500" />, name: "Media and Communication", href: "/industries/media-and-communication" },
      { icon: <Building2 className="text-yellow-500" />, name: "New Economy and Startups", href: "/industries/new-economy-and-startups" },
      { icon: <ShoppingCart className="text-rose-700" />, name: "Retail and Ecommerce", href: "/industries/retail-and-ecommerce" },
      { icon: <Network className="text-green-400" />, name: "IT Support Services", href: "/industries/it-support-services" },
      { icon: <Plane className="text-red-500" />, name: "Travel and Tourism", href: "/industries/travel-and-tourism" },
      { icon: <ListCollapse className="text-gray-700" />, name: "More Industries", href: "/industries/more-industries" },
    ],
  },
  {
    name: "How We Work",
    href: "/how-we-work",
    submenu: [],
  },
  {
    name: "Contact",
    href: "/contact",
    submenu: [],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname()

  useEffect(() => {
    setOpenSubmenu(null);
    setIsMobileMenuOpen(false);
  }, [pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <nav className='w-full h-[80px] fixed top-0 z-50 transition-all duration-300 bg-white shadow-md'>
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold">
              <Image src={logo} height={60} alt="Logo" priority />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            {navItems.map((item, index) => (
              <div key={index} className="group px-3 py-2 flex items-center">
                <Link href={item.href} className='text-gray-800 font-medium'>
                  {item.name}
                </Link>
                {item.submenu.length > 0 && (
                  <button
                    className='text-gray-800'
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}

                <ul className={`absolute top-full left-0 w-full bg-white shadow-lg py-1 transition-all duration-300 ease-in-out origin-top transform ${openSubmenu === item.name ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                  <div className="grid grid-cols-3 max-w-7xl mx-auto">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.href} className="flex items-center gap-2 px-4 py-6 text-lg text-gray-800 font-medium hover:text-white hover:bg-gray-400 transition duration-300 ease">
                          {subItem.icon}
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel with transitions */}
      <div className={`md:hidden overflow-hidden bg-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <Link href={item.href} className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700 transition duration-300" onClick={toggleMobileMenu}>
                  {item.name}
                </Link>
                {item.submenu.length > 0 && (
                  <button
                    className="p-2 text-gray-700 hover:text-gray-300"
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    <ChevronDown size={20} className={`transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              {/* Conditionally render mobile submenu with transitions */}
              <ul className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === item.name ? 'max-h-screen' : 'max-h-0'}`}>
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.href} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-600 transition duration-300" onClick={toggleMobileMenu}>
                      {subItem.icon}
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
