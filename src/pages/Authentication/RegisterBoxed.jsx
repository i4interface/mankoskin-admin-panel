import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setPageTitle, toggleRTL } from "../../store/themeConfigSlice"
import { useEffect, useState } from "react"
import Dropdown from "../../components/Dropdown"
import i18next from "i18next"
import IconCaretDown from "../../components/Icon/IconCaretDown"
import IconUser from "../../components/Icon/IconUser"
import IconMail from "../../components/Icon/IconMail"
import IconLockDots from "../../components/Icon/IconLockDots"
import IconInstagram from "../../components/Icon/IconInstagram"
import IconFacebookCircle from "../../components/Icon/IconFacebookCircle"
import IconTwitter from "../../components/Icon/IconTwitter"
import IconGoogle from "../../components/Icon/IconGoogle"
import {toast} from "react-toastify"
import axiosInstance from "../../api/axios"

const RegisterBoxed = () => {

  const [name ,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPass,setConfirmPass] = useState("")
  const regex_password = /^(?=.*?[A-Z])(?=.*[a-z])(?=.*[0-9]){8,16}/


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle("Register"))
  })
  const navigate = useNavigate()
  const isDark = useSelector(
    state => state.themeConfig.theme === "dark" || state.themeConfig.isDarkMode
  )
  const isRtl =
    useSelector(state => state.themeConfig.rtlClass) === "rtl" ? true : false
  const themeConfig = useSelector(state => state.themeConfig)
  const setLocale = flag => {
    setFlag(flag)
    if (flag.toLowerCase() === "ae") {
      dispatch(toggleRTL("rtl"))
    } else {
      dispatch(toggleRTL("ltr"))
    }
  }
  const [flag, setFlag] = useState(themeConfig.locale)

  const submitForm = () => {
    // console.log("details",name,email,password)
    // navigate("/")
    if(name.trim().length === 0 || email.trim().length === 0 || password.trim().length ===0){
          toast.error("please fill all the field")
    }else if(regex_password.test(password) === false){
          toast.error("use strong password")
    }else if(password === confirmPass){
          toast.error("Confirm password dosent match")

    }else{
      console.log("hrere")
      axiosInstance.post('/admin/register',{name,email,password}).then((res)=>{
        if(res.data.message){
          toast.success(res.data.message)
        }else{
          toast.error(res.data.errmsg)
        }
      })
    }
  }

  // console.log("details",name,email,password)


  return (
    <div>
      <div className="absolute inset-0">
        <img
          src="/assets/images/auth/bg-gradient.png"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
        <img
          src="/assets/images/auth/coming-soon-object1.png"
          alt="image"
          className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"
        />
        <img
          src="/assets/images/auth/coming-soon-object2.png"
          alt="image"
          className="absolute left-24 top-0 h-40 md:left-[30%]"
        />
        <img
          src="/assets/images/auth/coming-soon-object3.png"
          alt="image"
          className="absolute right-0 top-0 h-[300px]"
        />
        <img
          src="/assets/images/auth/polygon-object.svg"
          alt="image"
          className="absolute bottom-0 end-[28%]"
        />
        <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
          <div className="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20">
            {/* <div className="absolute top-6 end-6">
              <div className="dropdown">
                <Dropdown
                  offset={[0, 8]}
                  placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                  btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
                  button={
                    <>
                      <div>
                        <img
                          src={`/assets/images/flags/${flag.toUpperCase()}.svg`}
                          alt="image"
                          className="h-5 w-5 rounded-full object-cover"
                        />
                      </div>
                      <div className="text-base font-bold uppercase">
                        {flag}
                      </div>
                      <span className="shrink-0">
                        <IconCaretDown />
                      </span>
                    </>
                  }
                >
                  <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
                    {themeConfig.languageList.map(item => {
                      return (
                        <li key={item.code}>
                          <button
                            type="button"
                            className={`flex w-full hover:text-primary rounded-lg ${
                              flag === item.code
                                ? "bg-primary/10 text-primary"
                                : ""
                            }`}
                            onClick={() => {
                              i18next.changeLanguage(item.code)
                              // setFlag(item.code);
                              setLocale(item.code)
                            }}
                          >
                            <img
                              src={`/assets/images/flags/${item.code.toUpperCase()}.svg`}
                              alt="flag"
                              className="w-5 h-5 object-cover rounded-full"
                            />
                            <span className="ltr:ml-3 rtl:mr-3">
                              {item.name}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </Dropdown>
              </div>
            </div> */}
            <div className="mx-auto w-full max-w-[440px]">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">
                  Sign Up
                </h1>
                <p className="text-base font-bold leading-normal text-white-dark">
                  Enter your email and password to register
                </p>
              </div>
              <div className="space-y-5 dark:text-white">
                <div>
                  <label htmlFor="Name">Name</label>
                  <div className="relative text-white-dark">
                    <input
                      onChange={(e)=>setName(e.target.value)}
                      id="Name"
                      type="text"
                      placeholder="Enter Name"
                      className="form-input ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconUser fill={true} />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="Email">Email</label>
                  <div className="relative text-white-dark">
                    <input
                      onChange={(e)=>setEmail(e.target.value)}
                      id="Email"
                      type="email"
                      placeholder="Enter Email"
                      className="form-input ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconMail fill={true} />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="Password">Password</label>
                  <div className="relative text-white-dark">
                    <input
                      onChange={(e)=>setPassword(e.target.value)}
                      id="Password"
                      type="password"
                      placeholder="Enter Password"
                      className="form-input ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconLockDots fill={true} />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="Password">Confirm Password</label>
                  <div className="relative text-white-dark">
                    <input
                      onChange={(e)=>setPassword(e.target.value)}
                      id="Re-Password"
                      type="password"
                      placeholder="Enter Password"
                      className="form-input ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconLockDots fill={true} />
                    </span>
                  </div>
                </div>
                {/* <div>
                  <label className="flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox bg-white dark:bg-black"
                    />
                    <span className="text-white-dark">
                      Subscribe to weekly newsletter
                    </span>
                  </label>
                </div> */}
                <button
                  type="button"
                  onClick={submitForm}
                  className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                >
                  Sign Up
                </button>
              </div>
              <div className="relative my-7 text-center md:mb-9">
                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
                <span className="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light">
                  or
                </span>
              </div>
              {/* <div className="mb-10 md:mb-[60px]">
                <ul className="flex justify-center gap-3.5 text-white">
                  <li>
                    <Link
                      to="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"
                      }}
                    >
                      <IconInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"
                      }}
                    >
                      <IconFacebookCircle />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"
                      }}
                    >
                      <IconTwitter fill={true} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"
                      }}
                    >
                      <IconGoogle />
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div className="text-center dark:text-white">
                Already have an account ?&nbsp;
                <Link
                  to="/auth/boxed-signin"
                  className="uppercase text-primary underline transition hover:text-black dark:hover:text-white"
                >
                  SIGN IN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterBoxed
