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
import logo from 'public/assets/images/Logo.png';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cvaUtils';

type NavLinkType = {
  label: string;
  href: string;
};

type NavListType = {
  label: string;
  list: NavLinkType[];
};

const navLinks: (NavLinkType | NavListType)[] = [
  {
    label: 'ABOUT',
    href: '#',
  },
  {
    label: 'OFFICES',
    list: [
      {
        label: 'Office of the President',
        href: '#',
      },
      {
        label: 'Office of the Vice President',
        href: '#',
      },
    ],
  },
  {
    label: 'STUDENT JUDICIAL COURT',
    href: '#',
  },
  {
    label: 'EVENTS',
    href: '#',
  },
];

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

  /**
   * Check if viewport width is 992px below
   */
  const isTablet = useMediaQuery('(max-width: 61.9375rem)');

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
    if (isTablet) setIsMenuOpen(false);

    lastScrollPosition.current = window.scrollY;
    scrollListener();
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [scrollListener, isTablet]);

  // Adds no-scroll when Navigation menu is open
  useEffect(() => {
    if (isMenuOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <header
      className="container-xl top-4 left-[50%] translate-x-[-50%] z-[999] fixed lg:top-8 transition-all duration-300"
      ref={navigationRef}
    >
      {isTablet ? (
        <NavigationMenu.Root className="lg:hidden relative">
          <div className="flex justify-between bg-beige items-center rounded-full flex-row px-8 py-3 relative shadow-sm">
            <Link
              href="/"
              className="w-[8.125rem] h-[2.125rem] relative flex items-center justify-center"
            >
              <Image
                src={logo}
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
              !isMenuOpen && 'translate-y-[calc(-100%-10vh)]'
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
              href="#"
              className="bg-lightBlue text-white py-2 px-4 font-artega text-xs rounded-full block w-fit mx-auto mt-3 hover:scale-105 transition-all duration-300"
            >
              <span className="mt-[0.1rem] inline-block">HELP PORTAL</span>
            </Link>
          </div>
        </NavigationMenu.Root>
      ) : (
        <NavigationMenu.Root className="bg-beige rounded-full py-3 px-10 hidden lg:block shadow-sm">
          <NavigationMenu.List className="flex flex-row justify-between items-stretch w-full">
            <Link
              href="/"
              className="w-[9.875rem] h-[2.5rem] relative flex items-center justify-center my-auto"
            >
              <Image src={logo} alt="SAMAHAN At the Get Go" fill priority />
            </Link>
            <div className="grid grid-flow-col gap-1 font-artega text-xs text-lightBlue items-center">
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
                  <NavigationMenu.Item
                    key={`nav-${index}`}
                    className="relative"
                  >
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
                      className="absolute top-[calc(100%+1.6rem)] left-[50%] translate-x-[-50%] overflow-hidden rounded-md shadow-sm"
                    >
                      <ul className="bg-beige">
                        {link.list.map((subLink, index) => (
                          <li key={`subNav-${index}`} className="block">
                            <NavigationMenu.Link asChild>
                              <Link
                                href={subLink.href}
                                className="block whitespace-nowrap py-3 hover:bg-darkBeige rounded-lg px-8 transition-colors duration-300"
                              >
                                {subLink.label}
                              </Link>
                            </NavigationMenu.Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                )
              )}
            </div>
            <Link
              href="#"
              className="bg-lightBlue text-white py-4 my-auto px-4 font-artega text-xs rounded-full hover:scale-105 transition-all duration-300 flex items-center lg:px-6"
            >
              HELP PORTAL
            </Link>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      )}
    </header>
  );
};

export default Navigation;
