
import "../styles/signup.css"
import { createSignal } from "solid-js";
export default function Signup() {
    const [name,setName] = createSignal("")
    const [password,setPassword] = createSignal("")
    async function signUp(){
        console.log("Signing up "+name()+" "+password())
    }

  return (
  <main class="text-center mx-auto text-gray-700 p-4 pt-12">

        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">            
                        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up for an account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <label for="name" class="block text-sm text-left font-medium leading-6 text-gray-900">Username</label>
                <div class="mt-2">
                <input onInput={(e) => setName(e.target.value)} id="name" name="name" type="text" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2"></input>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between mt-2">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                
                </div>
                <div class="mt-2">
                <input onInput={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2"></input>
                </div>
            </div>

            <div>
                <button onClick={signUp} class="mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>

    
        </div>
        </div>

    </main>
  );
}
