import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  toggleRTL,
  toggleTheme,
  toggleLocale,
  toggleMenu,
  toggleLayout,
  toggleAnimation,
  toggleNavbar,
  toggleSemidark
} from "./store/themeConfigSlice"
import store from "./store"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ children }) {
  const themeConfig = useSelector(state => state.themeConfig)
  const adminId = useSelector((state) => state.admin.adminId);
console.log("AdminId", adminId);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleTheme(localStorage.getItem("theme") || themeConfig.theme))
    dispatch(toggleMenu(localStorage.getItem("menu") || themeConfig.menu))
    dispatch(toggleLayout(localStorage.getItem("layout") || themeConfig.layout))
    dispatch(
      toggleRTL(localStorage.getItem("rtlClass") || themeConfig.rtlClass)
    )
    dispatch(
      toggleAnimation(
        localStorage.getItem("animation") || themeConfig.animation
      )
    )
    dispatch(toggleNavbar(localStorage.getItem("navbar") || themeConfig.navbar))
    dispatch(
      toggleLocale(localStorage.getItem("i18nextLng") || themeConfig.locale)
    )
    dispatch(
      toggleSemidark(localStorage.getItem("semidark") || themeConfig.semidark)
    )
  }, [
    dispatch,
    themeConfig.theme,
    themeConfig.menu,
    themeConfig.layout,
    themeConfig.rtlClass,
    themeConfig.animation,
    themeConfig.navbar,
    themeConfig.locale,
    themeConfig.semidark
  ])

  const sidebarClass = store.getState().themeConfig.sidebar
    ? "toggle-sidebar"
    : ""

  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
    <div
      className={`${sidebarClass} ${themeConfig.menu} ${themeConfig.layout} ${themeConfig.rtlClass} main-section antialiased relative font-nunito text-sm font-normal`}
    >
      {children}
    </div>
    </>
  )
}

export default App
