import navMenuItems from "@/constants/nav-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className='container mx-auto px-4 py-6 flex items-center justify-between'>
      <Link href={"/"} className='font-bold text-white text-xl' passHref>
        Next
      </Link>
      <nav>
        <ul className='flex items-center justify-center font-semibold'>
          {navMenuItems.map((item) => {
            const { id, text, url, icon, tooltip, role, ariaLabel, submenu } =
              item;
            return <li key={item.id}></li>;
          })}
          <li className='relative group  px-3 py-2'>
            <button className='hover:opacity-50 cursor-pointer '>
              Products
            </button>
            <div
              className='absolute top-0 -translate-x-48 transition 
              group-hover:translate-y-5 group-focus-within:translate-y-5 translate-y-0 opacity-0 invisible 
              group-hover:opacity-100 group-focus-within:opacity-100
              group-hover:visible group-focus-within:visible duration-500 ease-in-out 
              group-hover:transform z-50 min-w-[560px]  group-focus-within:transform z-50 min-w-[560px] 


     
            
            '
            >
              <div className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                <div className='w-10 group h-10 bg-white transform rotate-45  absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm'></div>

                <div className='relative z-10'>
                  <div className='grid grid-cols-2 gap-6'>
                    <div>
                      <p className='uppercase tracking-wider text-gray-500 font-medium text-[13px]'>
                        The Suite
                      </p>
                      <ul className='mt-3 text-[15px]'>
                        <li>
                          <Link
                            href={"#"}
                            className='block -mx-2  p-2 rounded-lg 
                          hover:bg-gradient-to-br
                         hover:from-indigo-50
                         hover:to-pink-50 
                         hover:via-blue-50 
                         transition ease-in-out duration-300 text-gray-800 font-semibold
                          hover:text-indigo-600
                         '
                          >
                            Course Editor
                            <p className='font-normal text-gray-500 '>
                              All-in-one editor
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href={"#"}
                            className='block -mx-2  p-2 rounded-lg 
                        hover:bg-gradient-to-br
                       hover:from-indigo-50
                       hover:to-pink-50 
                       hover:via-blue-50 
                       transition ease-in-out duration-300 text-gray-800 font-semibold
                        hover:text-indigo-600'
                          >
                            Accept Payments
                            <p className='font-normal text-gray-500 '>
                              Pre-build payments page
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href={"#"}
                            className='block -mx-2  p-2 rounded-lg 
                      hover:bg-gradient-to-br
                     hover:from-indigo-50
                     hover:to-pink-50 
                     hover:via-blue-50 
                     transition ease-in-out duration-300 text-gray-800 font-semibold
                      hover:text-indigo-600'
                          >
                            Close Captioning
                            <p className='font-normal text-gray-500 '>
                              Use AI to Generate Captions
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className='uppercase tracking-wider text-gray-500 font-medium text-[13px]'>
                        Extensions
                      </p>
                      <ul className='mt-3 text-[15px]'>
                        <li>
                          <Link
                            href={"#"}
                            className='block -mx-2  p-2 rounded-lg 
                        hover:bg-gradient-to-br
                       hover:from-indigo-50
                       hover:to-pink-50 
                       hover:via-blue-50 
                       transition ease-in-out duration-300 text-gray-800 font-semibold
                        hover:text-indigo-600'
                          >
                            Plugins
                            <p className='font-normal text-gray-500 '>
                              Tweak existing functionality
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href={"#"}
                            className='block -mx-2  p-2 rounded-lg 
                      hover:bg-gradient-to-br
                     hover:from-indigo-50
                     hover:to-pink-50 
                     hover:via-blue-50 
                     transition ease-in-out duration-300 text-gray-800 font-semibold
                      hover:text-indigo-600'
                          >
                            Batch Uploads
                            <p className='font-normal text-gray-500 '>
                              Get your time back
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href={"#"}
                            className='block -mx-2  p-2 rounded-lg 
                    hover:bg-gradient-to-br
                   hover:from-indigo-50
                   hover:to-pink-50 
                   hover:via-blue-50 
                   transition ease-in-out duration-300 text-gray-800 font-semibold
                    hover:text-indigo-600'
                          >
                            Social sharing
                            <p className='font-normal text-gray-500 '>
                              Generate content for socials
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className='relative group px-3 py-2'>
            <button className='hover:opacity-50 cursor-default '>
              Solutions
            </button>
            <div
              className='absolute top-0 -left-2 transition 
          group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
          group-hover:opacity-100 
          group-hover:visible duration-500 ease-in-out 
          group-hover:transform z-50 min-w-[300px] transform'
            >
              <div className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                <div className='w-10 h-10 bg-white transform rotate-45  absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm'></div>

                <div className='relative z-10'>
                  <p className='uppercase tracking-wider text-gray-500 font-medium text-[13px]'>
                    Use Cases
                  </p>
                  <ul className='mt-3 text-[15px]'>
                    <li>
                      <Link
                        href={"#"}
                        className='bg-transparent bg-clip-text text-transparent 
                      bg-gradient-to-br  font-semibold
                      from-indigo-400
                      to-pink-700
                      via-blue-600
                 
                      hover:to-indigo-600
                      hover:via-pink-400 py-1 block'
                      >
                        Creators
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"#"}
                        className='bg-transparent bg-clip-text text-transparent 
                    bg-gradient-to-br  font-semibold
                    from-indigo-400
                    to-pink-700
                    via-blue-600
               
                    hover:to-indigo-600
                    hover:via-pink-400 py-1 block'
                      >
                        Influence
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"#"}
                        className='bg-transparent bg-clip-text text-transparent 
                    bg-gradient-to-br  font-semibold
                    from-indigo-400
                    to-pink-700
                    via-blue-600
               
                    hover:to-indigo-600
                    hover:via-pink-400 py-1 block'
                      >
                        Programming
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className='bg-transparent bg-clip-text text-transparent 
                    bg-gradient-to-br  font-semibold
                    from-indigo-400
                    to-pink-700
                    via-blue-600
               
                    hover:to-indigo-600
                    hover:via-pink-400 py-1 block'
                      >
                        Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className='relative group px-3 py-2'>
            <button className='hover:opacity-50 cursor-default '>
              Developers
            </button>
            <div className='absolute top-0 left-0 transition '></div>
          </li>

          <li className='relative group px-3 py-2'>
            <button className='hover:opacity-50 cursor-default '>
              Resources
            </button>
            <div className='absolute top-0 left-0 transition '></div>
          </li>

          <li className='relative group px-3 py-2'>
            <Link href={"#"} className='hover:opacity-50 cursor-default '>
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link
              href={"#"}
              passHref
              className='rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group'
            >
              <span className='mr-2'>Sign in</span>
              <svg
                className='stroke-current'
                strokeWidth={"2px"}
                width='10'
                height='10'
                viewBox='0 0 10 10'
                // aria-hidden='true'
                // aria
              >
                <g fillRule='evenodd'>
                  <path
                    className='opacity-0 group-hover:opacity-100 transition ease-in-out duration-200'
                    d='M0 5h7'
                  ></path>
                  <path
                    className='opacity-100 group-hover:translate-x-1 transition ease-in-out duration-200'
                    d='M1 1l4 4-4 4'
                  ></path>
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
