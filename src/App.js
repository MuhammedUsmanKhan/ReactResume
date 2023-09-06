import logo from './logo.svg';
import './App.css';
import myimg from './img/myimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaTwitter, FaGithub, FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp, } from 'react-icons/fa';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className=" w-full ">
      <div className='flex justify-center items-center container mx-auto  h-full'>
        <div className='cvContainer w-5/6 bg-white  border-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  flex flex-col md:flex-row md:justify-center '>

          <div className='leftCont  md:w-1/3 flex flex-col  mt-14 mb-14 '>
            <div className='flex justify-end '>
              <div className=' w-5/6 flex justify-end bg-yellow-400 pl-0 p-8'>
                <div className='flex justify-between space-x-2 w-4/5  '>
                  <div className=''><FontAwesomeIcon className='fa-xl' icon={faLocationDot} /></div>
                  <a className='font-bold text-sm ' href='https://www.google.com/maps/place/Mashriqi+Cooperative+Housing+Society/@25.0076556,67.1142585,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb346dd43717689:0xe6786e0953f8d2a2!8m2!3d25.0076508!4d67.1168334!16s%2Fg%2F11gf9p1s0w?entry=ttu' target='_blank'>Al Mashriq Chs Sector 52 A Gulzar E Hijri Scheme 33, Karachi, Karachi City, Sindh, Pakistan</a>
                </div>
              </div>
            </div>
            <div className='flex justify-end bg-[#22212f]'>
              <div className='flex justify-end  relative w-5/6 before:absolute before:top-0 before:right-0 before:w-full before:h-full before:z-50 before:bg-yellow-400/40 '>
                <img src={myimg} className='' alt='' />
              </div>
            </div>
            {/* <div class="flex relative justify-end">
              <img src={myimg} width={225} alt="Your Image" class=" h-auto" />
              <div class="absolute inset-0 bg-yellow-500 opacity-50"></div>
            </div> */}
            <div className=' flex flex-col items-end  '>
              <div className='flex flex-col items-end w-5/6  space-y-3 bg-yellow-400'>
                <h1 className='text-2xl w-5/6 tracking-widest pt-6 pb-3 pl-0 text-[#262026] border-b-2 border-b-[#ddb019] font-bold '>Education</h1>
                <ul className='  w-5/6 space-y-5 text-[#231504]'>
                  <li className='flex flex-col'>
                    <h1 className='font-semibold mb-2 text-lg'>O-levels (General Certificate of Education)</h1>
                    <span className='font-medium text-md'>Beacon Light Academy</span>
                    <span className='font-medium text-md'>2007 till 2020</span>
                    <span className='font-medium text-md'>Maths Ad-Maths ICT etc</span>
                    <span className='font-medium text-md'>Grades : 3A*s 3As 3Bs</span>
                  </li>
                  <li className='flex flex-col'>
                    <h1 className='font-semibold mb-2 text-lg'>Inter (Pre-Engineering)</h1>
                    <span className='font-medium text-md'>Dehli Govt College</span>
                    <span className='font-medium text-md'>2020 till 2022</span>
                    <span className='font-medium text-md'>Grade : A</span>
                  </li>
                  <li className='flex flex-col'>
                    <h1 className='font-semibold mb-2 text-lg'>Bachelor In (Computer Science)</h1>
                    <span className='font-medium text-md'>Sir Syed University of Engineering</span>
                    <span className='font-medium text-md'>2022 till 2026</span>
                    <span className='font-medium text-md'>Gpa : 1st Semester - 3.8</span>
                    <span className='font-medium text-md'>Gpa : 2nd Semester - 3.4</span>
                  </li>
                </ul>
              </div>

            </div>
            <div className=' flex flex-col items-end  '>
              <div className='flex flex-col items-end w-5/6 space-y-3 bg-yellow-400'>
                <h1 className='text-2xl w-5/6 tracking-widest pt-6 pb-3 pl-0 text-[#262026] border-b-2 border-b-[#ddb019] font-bold '>Hobbies </h1>
                <ul className=' flex w-5/6 flex-wrap gap-[1.4rem] gap-y-2 pl-0  p-4  pr-3 text-[#231504]'>
                  <li className='flex flex-col items-center'>
                    <FontAwesomeIcon className='fa-lg rounded-full border-[#6a4b00] w-5 border-2 p-2' icon={faCar} />
                    <span className='text-xs'>Travel</span>
                  </li>
                  <li className='flex flex-col items-center'>
                    <FontAwesomeIcon className='fa-lg rounded-full w-5 border-[#6a4b00] border-2 p-2' icon={faPlay} />
                    <span className='text-xs'>Music</span>
                  </li>
                  <li className='flex flex-col items-center'>
                    <FontAwesomeIcon className='fa-lg rounded-full w-5 border-[#6a4b00] border-2 p-2' icon={faHeadset} />
                    <span className='text-xs'>Gaming</span>
                  </li>
                  <li className='flex flex-col items-center w-11'>
                    <FontAwesomeIcon className='fa-lg rounded-full w-5 border-[#6a4b00] border-2 p-2' icon={faComputer} />
                    <span className='text-xs break-words text-center'>Passionate Learner</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=' flex flex-col items-end  '>
              <div className='flex flex-col items-end w-5/6  sm:h-[24rem] lg:h-80 space-y-3 bg-yellow-400'>
                <h1 className='text-2xl w-5/6 tracking-widest  pb-3 pl-0 text-[#262026] border-b-2 border-b-[#ddb019] font-bold '>Social Media </h1>
                <ul className=' flex flex-wrap gap-[1.1rem] gap-y-2 w-5/6  pl-0 p-4 pb-0 pr-3 text-[#231504]'>
                  <li className='flex flex-col w-11 items-center'>
                    <span className='  rounded-full  border-[#6a4b00] border-2 p-2 '><FaLinkedin className='text-lg' /></span>
                    <span className='text-xs'>Linkedin</span>
                  </li>
                  <li className='flex flex-col w-11 items-center'>
                    <span className='  rounded-full  border-[#6a4b00] border-2 p-2 '><FaGithub className='text-lg' /></span>
                    <span className='text-xs'>Github</span>
                  </li>
                  <li className='flex flex-col w-11 items-center'>
                    <span className='  rounded-full  border-[#6a4b00] border-2 p-2 '><FaWhatsapp className='text-lg' /></span>
                    <span className='text-xs break-words text-center'>Whats App</span>
                  </li>
                  <li className='flex flex-col w-11 items-center'>
                    <span className='  rounded-full  border-[#6a4b00] border-2 p-2 '><FaInstagram className='text-lg' /></span>
                    <span className='text-xs  break-words'>Instagram</span>
                  </li>
                  <li className='flex flex-col items-center'>
                    <span className='  rounded-full  border-[#6a4b00] border-2 p-2 '><FaTwitter className='text-lg' /></span>
                    <span className='text-xs text-center'>Twitter</span>
                  </li>
                  <li className='flex flex-col items-center'>
                    <span className='  rounded-full  border-[#6a4b00] border-2 p-2 '><FaFacebook className='text-lg' /></span>
                    <span className='text-xs text-center'>Facebook</span>
                  </li>
                  <li className='flex flex-col items-center'>
                    <span className='  rounded-full  border-[#6a4b00] border-2 p-2 '><FaDiscord className='text-lg' /></span>
                    <span className='text-xs text-center'>Discord</span>
                  </li>
                </ul>

              </div>

            </div>
          </div>
          <div className='flex  flex-col  md:w-2/3 mt-14 mb-14  '>
            {/* <div> */}
            {/* <div className='flex bg-[#22212f]   border-2 '> */}
            <div className='flex flex-col md:flex-row md:justify-evenly md:items-baseline md:pt-8 sm:h-[13.9rem] lg:h-[10.2rem] 2xl:h-[7.6rem] xl:h-36 pl-0 pr-0 bg-white'>
              <div className='flex flex-col w-44 items-center '>
                <div>
                  <h4 className='space-x-1'><FontAwesomeIcon icon={faPhone} /><span>Phone</span></h4>
                  <span className='text-sm'>0317-7675185</span>
                </div>
              </div>
              <div className='flex flex-col w-44 items-center '>
                <div>
                  <h4 className='space-x-1'><FontAwesomeIcon icon={faEnvelope} /><span>Email</span></h4>
                  <span className='  text-sm'>uktech0310@gmail.com</span>
                </div>
              </div>
              <div className='flex flex-col w-44 items-center ' >
                <div>
                  <h4 className='space-x-1'><FontAwesomeIcon icon={faGlobe} /><span>WEB</span></h4>
                  <span className='w-44 break-all text-sm'>
                    <a href='https://muhammedusmankhan.github.io/Portfolio/main/#' target='_blank'>muhammedusmankhan.github.io/Portfolio/main/#</a>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col bg-[#22212f] md:flex-row justify-center  sm:h-[11.4rem] lg:h-[15.1rem] 2xl:h-[22.5rem] xl:h-[18.9rem] pl-0 pr-0 '>
              <div className='flex flex-col  justify-center md:w-[85%] sm:11/12 xl:space-y-5  sm:space-y-1 '>
                <div className='flex flex-col  '>
                  <h1 className='flex flex-col  sm:flex-row lg:flex-col sm:mt-2 lg:mt-4'>
                    <span className='lg:text-3xl sm:text-2xl sm:border-b-[3px] w-fit sm:border-b-[#ebcb1d]  sm:pb-0  xl:text-4xl 2xl:text-5xl font-normal tracking-wider text-white lg:border-b-0'>Muhammad</span>
                    <span className='lg:text-4xl border-b-[3px] w-fit border-b-[#ebcb1d] lg:pb-3 sm:pb-0 sm:text-2xl xl:text-5xl 2xl:text-6xl font-semibold tracking-wider text-white '>UsmanKhan</span>
                  </h1>
                  <span className='text-xl sm:text-base xl:text-xl 2xl:text-3xl text-white lg:mt-2 sm:mt-1  tracking-wider'>UI DESIGNER</span>
                </div>
                <div>
                  <p className='text-white sm:text-xs lg:mb-4 overflow-hidden text-sm 2xl:text-base font-light'>I'm Muhammad Usman, a passionate learner and a student pursuing BCS from Sir Syed University. Currently, I'm on an exciting journey, honing my skills in the MERN stack through a course at Saylani Welfare International Trust. As a dedicated learner, I've successfully completed modules on Firebase, HTML, CSS, MongoDB, and Express, NodeJS bringing me one step closer to becoming a proficient full-stack developer.  In my recent endeavors, I've been hard at work on the backend, shaping it into its final form. </p>
                </div>
              </div>

            </div>
            <div className='flex flex-col items-end '>
              <div className='flex flex-col justify-center md:w-[93%] sm:11/12 xl:space-y-5  sm:space-y-1'>
                <div className='space-y-4'>
                  <h1 className='text-2xl flex items-center mt-1 border-b-[3px]  border-b-[#e0e0e0] font-bold h-16  tracking-widest'>
                    Experiance
                  </h1>
                  <div className='space-y-5'>
                    <span className="text-[0.9em] w-fit border-b-2 text-[#4f4f4f] font-semibold border-[#fdcb00] pb-[0.5em]">Web Developement Intern</span>
                    <div className="flex flex-col space-y-2 items-start  ">
                      <div className='flex gap-[1em] text-[0.8em]'>
                        <p className="p-[0.5em_2em] text-[#fff] bg-[#21212f] rounded-[0.7em] w-[9em] text-center">Present</p>
                        <p className="flex font-bold items-center">CodSoft / Kolkata , West Bengal</p>
                      </div>
                      <p className="text-sm md:w-[90%] ">
                        They have given me 3 task during my internship . Each task contain several Apps . in which Task one has been completed by me which was to make portfolio , Todo App , Calculator . Task 2 was to make and tribute page and Travel System . Task 3 was to make Blogging Platform and Ecommerce Website.
                      </p>
                    </div>
                  </div>
                  <div className='space-y-5'>
                    <span className="text-[0.9em] w-fit border-b-2 text-[#4f4f4f] font-semibold border-[#fdcb00] pb-[0.5em]">Dot net Intern</span>
                    <div className="flex flex-col space-y-2 items-start  ">
                      <div className='flex gap-[1em] text-[0.8em]'>
                        <p className="p-[0.5em_2em] text-[#fff] bg-[#21212f] rounded-[0.7em] w-[9em] text-center">2020-2021</p>
                        <p className="flex font-bold items-center">Super International / Karachi Pakistan</p>
                      </div>
                      <p className="text-sm md:w-[90%] ">
                        VisualBasic.net was the first programming language that i learned during this intership and i came to know about the fundamentals of programming Language and i had made several dekstop application related to the requirment of Company such as inventory App and more e.t.c
                      </p>
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <h1 className='text-2xl flex items-center mt-1 border-b-[3px]  border-b-[#e0e0e0] font-bold h-16  tracking-widest'>
                    Expertise
                  </h1>
                  <div className="space-y-3 mb-4">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-black text-white">
                      Advanced
                    </span>
                  </div>
                  <div className=' flex flex-col md:flex-row   '>
                    <div className=' md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">HTML 5</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-full rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=' md:pl-8 md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">CSS 3</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[90%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=' flex flex-col md:flex-row  '>
                    <div className=' md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">JavaScript</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[92%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=' md:pl-8 md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">TailwindCss</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[96%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' flex flex-col md:flex-row  '>
                    <div className=' md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">NodeJS</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[85%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=' md:pl-8 md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">React</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[30%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row '>
                    <div className='md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">Express</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[80%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4 mb-4">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-black text-white">
                      Intermediate
                    </span>
                  </div>
                  <div className=' flex flex-col md:flex-row  '>
                    <div className='md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">C ++</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[70%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='md:pl-8 md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">C #</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[78%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' flex flex-col md:flex-row  '>
                    <div className='md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">VisualBasic</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[60%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='md:pl-8 md:w-1/2 w-full'>
                      <div className="space-y-3 mb-4">
                        <p className="font-semibold">Python</p>
                        <div className="w-full">
                          <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                            <div className="bg-black h-full w-[64%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/* <div className='w-2/4'>

              </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
