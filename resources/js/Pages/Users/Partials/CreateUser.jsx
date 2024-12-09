import Modal from '@/Components/Modal'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import SecondaryButton from '@/Components/SecondaryButton'
import PrimaryButton from '@/Components/PrimaryButton'
import Button from '@/Components/Button'
import { useState, React } from 'react'
import { useForm } from '@inertiajs/react';

export default function CreateUser({ className='' }) {
    
    const [confirmingAddUser, setConfirmingAddUser] = useState(false)
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        name: '',
        password: '',
    });


    const confirmAddUser = () => {
        setConfirmingAddUser(true)
    }

    const closeModal = () => {
        setConfirmingAddUser(false)

        reset()
    }

    const addUser = (e) => {
        e.preventDefault()

        post(route('users.store'))
    }

  return (
    <section className={className}>
      <Button onClick={confirmAddUser} className='rounded-lg py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white dark:bg-indigo-900 dark:hover:bg-indigo-950 border border-black'>Create User</Button>
      <Modal show={confirmingAddUser} onClose={closeModal}>
        <div className='bg-gray-300 dark:bg-gray-700'>
          <h3 className='text-2xl text-center font-bold py-2 '>Create User</h3>
          <form onSubmit={addUser} className="p-6">
            <div className="relative">
                <TextInput
                  type="email"
                  name="email"
                  id="email"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  onChange={(e) => setData('email', e.target.value)}
                  required
                />
                <InputLabel 
                  htmlFor="email" 
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  value="Email"
                />
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="relative my-3">
                <TextInput
                  type="text"
                  name="name"
                  id="name"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  onChange={(e) => setData('name', e.target.value)}
                  required
                />
                <InputLabel 
                  htmlFor="name" 
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" 
                  value="Name" 
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="relative">
                <TextInput
                  type="password"
                  name='password'
                  id="password"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  onChange={(e) => setData('password', e.target.value)}
                />
                <InputLabel 
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  value="Password"
                />
                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-6 flex justify-between">
              <Button
                type="button"
                className="inline-block rounded-lg border border-black bg-gray-700 hover:bg-gray-800 dark:bg-gray-500 dark:hover:bg-gray-600 px-10 py-3 mx-auto text-sm font-medium text-white"
                onClick={closeModal}
              >
                  Cancel
              </Button>
              <Button 
                className="inline-block rounded-lg border border-gray-300 bg-blue-600 hover:bg-blue-800 dark:bg-indigo-900 dark:hover:bg-indigo-950 px-10 py-3 mx-auto text-sm font-medium text-white" 
                processing={processing}
              >
                  Submit
              </Button>
          </div>
          </form>
        </div>
      </Modal>
    </section>
  )
}
