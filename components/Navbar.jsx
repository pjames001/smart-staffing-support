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
      { icon: <LayoutPanelTop />, name: "Company Structure", href: "/services/company-structure" },
      { icon: <MapPinned />, name: "Location", href: "/services/location" },
      { icon: <Clapperboard />, name: "Media", href: "/services/media" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { icon: <Presentation />, name: "Back Office Support", href: "/services/back-office-support" },
      { icon: <Workflow />, name: "Automation and AI", href: "/services/automation-and-ai" },
      { icon: <QrCode />, name: "Digital Transformation", href: "/services/digital-transformation" },
      { icon: <Landmark />, name: "Finance and Accounting", href: "/services/finance-and-accounting" },
      { icon: <Weight />, name: "Sales and Marketing", href: "/services/sales-and-marketing" },
      { icon: <Cpu />, name: "Technical Support", href: "/services/technical-support" },
      { icon: <Mail />, name: "Email and Chat Support", href: "/services/email-and-chat-support" },
      { icon: <Headset />, name: "Answering Services", href: "/services/answering-services" },
      { icon: <Scale />, name: "Paralegal and Legal Support", href: "/services/paralegal-and-legal-support" },
      { icon: <HeartPulse />, name: "Health Care and Insurance", href: "/services/health-care-and-insurance" },
      { icon: <DollarSign />, name: "Collection Services", href: "/services/collection-services" },
      { icon: <ListCollapse />, name: "More Services", href: "/services/more-services" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    submenu: [
      { icon: <CarFront />, name: "Automotive", href: "/industries/automotive" },
      { icon: <Landmark />, name: "Banking and Financial Services", href: "/industries/banking-and-financial-services" },
      { icon: <BriefcaseBusiness />, name: "Professional Services (Law, Accounting)", href: "/industries/professional-services" },
      { icon: <Zap />, name: "Energy and Public Sector", href: "/industries/energy-and-public-sector" },
      { icon: <Cross />, name: "Health Care Services", href: "/industries/health-care-services" },
      { icon: <ShieldPlus />, name: "Insurance", href: "/industries/insurance" },
      { icon: <Film />, name: "Media and Communication", href: "/industries/media-and-communication" },
      { icon: <Building2 />, name: "New Economy and Startups", href: "/industries/new-economy-and-startups" },
      { icon: <ShoppingCart />, name: "Retail and Ecommerce", href: "/industries/retail-and-ecommerce" },
      { icon: <Network />, name: "IT Support Services", href: "/industries/it-support-services" },
      { icon: <Plane />, name: "Travel and Tourism", href: "/industries/travel-and-tourism" },
      { icon: <ListCollapse />, name: "More Industries", href: "/industries/more-industries" },
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
              <div key={index} className="group px-3 py-2">
                <Link href={item.href} className='text-gray-800 font-medium'>
                  {item.name}
                </Link>
                {item.submenu.length > 0 && (
                  <button
                    className='text-gray-800'
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    <ChevronDown size={16} className={`transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}

                <ul className={`absolute top-full left-0 w-full bg-white shadow-lg py-1 transition-all duration-300 ease-in-out origin-top transform ${openSubmenu === item.name ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                  <div className="grid grid-cols-3 max-w-7xl mx-auto">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.href} className="flex items-center gap-2 px-4 py-6 text-lg text-gray-800 hover:bg-gray-400 transition duration-300 ease">
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <Link href={item.href} className="block w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={toggleMobileMenu}>
                  {item.name}
                </Link>
                {item.submenu.length > 0 && (
                  <button
                    className="p-2 text-white hover:text-gray-300"
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
                    <Link href={subItem.href} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-600" onClick={toggleMobileMenu}>
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
