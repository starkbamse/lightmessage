import {
    PAGE_TITLE
} from "../data/routes/navbar"
import lightmessage from "../assets/lightmessage.svg"
import "./styles/Navbar.css"
export default function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img class="w-100 logo mr-2" src={lightmessage} />

            <span class="font-semibold text-xl tracking-tight">{PAGE_TITLE}</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                Docs
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                About
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                Features
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white">
                Pricing
            </a>            
            </div>
            <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0 mr-2">Login</a>
            <a href="/signup" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0">Sign Up</a>
            </div>
        </div>
        </nav>
    )
}