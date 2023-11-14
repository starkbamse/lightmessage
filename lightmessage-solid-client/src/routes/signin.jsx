import Kyber from "~/components/Kyber";
import "../styles/signup.css"
export default function Signup() {

  return (
  <main class="text-center mx-auto text-gray-700 p-4 pt-12">

        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">            
                        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST"> 
            <div>
                <label for="email" class="block text-sm text-left font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2"></input>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
                </div>
                <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2"></input>
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a href="/signup" class="pl-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</a>
            </p>
        </div>
        </div>

    </main>
  );
}
