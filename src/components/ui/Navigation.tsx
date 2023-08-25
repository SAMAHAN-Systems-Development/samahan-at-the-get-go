'use client';

import React, {
  type FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

import * as Accordion from '@radix-ui/react-accordion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import logoType from 'public/assets/images/logoType.png';

import { cn } from '@/utils/cvaUtils';

type NavLinkType = {
  href: string;
  label: string;
};

type NavListType = {
  label: string;
  list: NavLinkType[];
};

const navLinks: (NavLinkType | NavListType)[] = [
  {
    label: 'ABOUT',
    href: '/about',
  },
  {
    label: 'OFFICES',
    list: [
      {
        label: 'Office of the President',
        href: '/offices/office-of-the-president',
      },
      {
        label: 'Office of the Vice President',
        href: '/offices/office-of-the-vice-president',
      },
      {
        label: 'Office of the Secretary-General',
        href: '/offices/office-of-the-secretary-general',
      },
      {
        label: 'Office of the Treasurer',
        href: '/offices/office-of-the-treasurer',
      },
    ],
  },
  {
    label: 'RECRUITMENT WEEK',
    href: '/recruitment-week',
  },
  {
    label: 'CENTRAL BOARD',
    href: '/samahan-central-board'
  }
];

/**
 * The spacing between navigation items in DesktopNavigation.
 * Adjust depending on the amount of items.
 */
const desktopGapX = 'gap-4';

/**
 * This is used to toggle the mobile navigation menu.
 *
 * @param isOpen - (required) [boolean] the state of the menu
 * @param onClick - (required) [React.MouseEventHandler<HTMLButtonElement>] the event handler when button is clicked
 */
export const NavigationHamburgerButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isOpen: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }
>(({ className, isOpen = false, onClick, ...props }, ref) => (
  <button
    ref={ref}
    onClick={onClick}
    className={cn(
      'relative flex h-fit w-fit cursor-pointer flex-col space-y-[4px] border-none xl:invisible xl:hidden xl:opacity-0',
      className
    )}
    {...props}
  >
    <span
      aria-hidden
      className={cn(
        'ease bg-lightBlue block h-[3px] w-[24px] rounded-full transition-all duration-300',
        isOpen ? 'translate-y-[7px] rotate-45' : ''
      )}
    />
    <span
      aria-hidden
      className={cn(
        'ease bg-lightBlue block h-[3px] w-[24px] rounded-full transition-all duration-200',
        isOpen ? 'opacity-0' : ''
      )}
    />
    <span
      aria-hidden
      className={cn(
        'ease bg-lightBlue block h-[3px] w-[24px] rounded-full transition-all duration-300',
        isOpen ? '-translate-y-[7px] -rotate-45' : ''
      )}
    />
  </button>
));

NavigationHamburgerButton.displayName = 'NavigationHamburgerButton';

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);
  const lastScrollPosition = useRef(0);

  // The scroll listener. Used for hiding and showing Navigation component based on scrolling.
  const scrollListener = useCallback(() => {
    if (navigationRef.current) {
      if (
        lastScrollPosition.current < window.scrollY &&
        window.scrollY > navigationRef.current.offsetHeight
      ) {
        // If scroll direction is UPWARD and position is NOT at the top
        navigationRef.current.classList.remove('translate-y-0');
        navigationRef.current.classList.add('translate-y-[calc(-100%-2rem)]');
      } else {
        navigationRef.current.classList.remove(
          'translate-y-[calc(-100%-2rem)]'
        );
        navigationRef.current.classList.add('translate-y-0');
      }
    }

    lastScrollPosition.current = window.scrollY;
  }, []);

  // Adds the resize listener to the window object.
  useEffect(() => {
    setIsMenuOpen(false);

    lastScrollPosition.current = window.scrollY;
    scrollListener();
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [scrollListener]);

  // Adds no-scroll when Navigation menu is open
  useEffect(() => {
    if (isMenuOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <header
      className="container-2xl top-4 left-[50%] translate-x-[-50%] z-[999] fixed lg:top-8 transition-all duration-300"
      ref={navigationRef}
    >
      {/* 
      = = = = = = = = = = MOBILE NAVIGATION = = = = = = = = = =
      */}
      <NavigationMenu.Root className="lg:hidden relative">
        <div className="flex justify-between bg-beige items-center rounded-full flex-row px-8 py-3 relative shadow-sm">
          <Link
            href="/"
            className="w-[8.125rem] h-[2.125rem] relative flex items-center justify-center"
          >
            <Image
              src={logoType}
              alt="SAMAHAN At the Get Go"
              style={{ objectFit: 'contain', width: '100%' }}
              draggable={false}
              priority
            />
          </Link>
          <NavigationHamburgerButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <div
          className={cn(
            'bg-beige rounded-3xl pt-5 pb-8 shadow-sm mt-2 transition-all duration-300 z-[-1] absolute left-0 right-0',
            !isMenuOpen && 'translate-y-[calc(-150%)]'
          )}
        >
          <Accordion.Root type="single" collapsible asChild>
            <NavigationMenu.List>
              {navLinks.map((link, index) =>
                !('list' in link) ? (
                  <NavigationMenu.Item key={`nav-${index}`}>
                    <NavigationMenu.Link
                      asChild
                      className="font-artega text-lightBlue text-[0.75rem] sm:text-sm block py-3 hover:bg-darkBeige rounded-lg px-5 mx-3 transition-colors duration-100"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ) : (
                  <Accordion.Item
                    value="nav-1"
                    key={`nav-${index}`}
                    className="font-artega text-lightBlue text-[0.75rem] sm:text-sm mx-3"
                  >
                    <Accordion.Trigger className="flex flex-row w-full justify-between group items-center hover:bg-darkBeige py-3 rounded-lg px-5 transition-colors duration-300">
                      {link.label}
                      <BiChevronDown
                        aria-hidden
                        className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 h-[2em] w-[2em]"
                      />
                    </Accordion.Trigger>
                    <Accordion.Content
                      asChild
                      className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
                    >
                      <ul>
                        {link.list.map((subLink, index) => (
                          <li
                            key={`subNav-${index}`}
                            className="font-artega text-lightBlue text-[0.75rem] sm:text-sm hover:bg-darkBeige rounded-lg py-3 pl-8 pr-5 transition-colors duration-300"
                          >
                            <Link href={subLink.href}>{subLink.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Content>
                  </Accordion.Item>
                )
              )}
            </NavigationMenu.List>
          </Accordion.Root>
          <Link
            href="/help-portal"
            className="bg-lightBlue text-white py-2 px-4 font-artega text-xs rounded-full block w-fit mx-auto mt-3 hover:scale-105 transition-all duration-300"
          >
            <span className="mt-[0.1rem] inline-block">HELP PORTAL</span>
          </Link>
        </div>
      </NavigationMenu.Root>
      {/* 
      = = = = = = = = = = DESKTOP NAVIGATION = = = = = = = = = =
      */}
      <NavigationMenu.Root className="bg-beige rounded-full py-3 px-10 hidden lg:block lg:px-6 shadow-sm">
        <NavigationMenu.List className="flex flex-row justify-between items-stretch w-full">
          <Link
            href="/"
            className="w-[9.875rem] h-[2.5rem] relative flex items-center justify-center my-auto"
          >
            <Image
              src={logoType}
              alt="SAMAHAN At the Get Go"
              fill
              sizes="
              (min-width: 1200px) 80vw,
              (min-width: 992px) 60vw,
              (min-width: 768px) 40vw,
              30vw
              "
              draggable={false}
              priority
            />
          </Link>
          <div
            className={cn(
              'grid grid-flow-col font-artega text-[0.7rem] text-lightBlue items-center xl:text-xs',
              desktopGapX
            )}
          >
            {navLinks.map((link, index) =>
              !('list' in link) ? (
                <NavigationMenu.Item
                  key={`nav-${index}`}
                  className="h-full block"
                >
                  <NavigationMenu.Link asChild>
                    <Link
                      href={link.href}
                      className="hover:bg-darkBeige rounded-lg h-full flex items-center px-2 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ) : (
                <NavigationMenu.Item key={`nav-${index}`} className="relative">
                  <NavigationMenu.Trigger className="group">
                    <NavigationMenu.Link className="grid grid-flow-col gap-1 items-center hover:bg-darkBeige rounded-lg py-3 pl-2 pr-1">
                      {link.label}
                      <BiChevronDown
                        aria-hidden
                        className="mb-1 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 h-[2em] w-[2em]"
                      />
                    </NavigationMenu.Link>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content
                    asChild
                    className="absolute top-[calc(100%)] left-[50%] translate-x-[-50%]"
                  >
                    <div className="pt-5">
                      <ul className="bg-beige overflow-hidden rounded-md shadow-sm">
                        {link.list.map((subLink, index) => (
                          <li key={`subNav-${index}`} className="block">
                            <NavigationMenu.Link asChild>
                              <Link
                                href={subLink.href}
                                className="block whitespace-nowrap py-3 hover:bg-darkBeige rounded-lg px-8 transition-colors duration-300 text-[0.7rem] xl:text-xs"
                              >
                                {subLink.label}
                              </Link>
                            </NavigationMenu.Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              )
            )}
          </div>
          <Link
            href="/help-portal"
            className="bg-lightBlue text-white py-4 my-auto px-4 font-artega xl:text-xs rounded-full hover:scale-105 transition-all duration-300 flex items-center lg:px-6 text-[0.7rem]"
          >
            HELP PORTAL
          </Link>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
};

export default Navigation;
