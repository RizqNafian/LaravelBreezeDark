import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import Button from '@/Components/Button';
import { React, useState } from 'react'
import { Head, useForm, Link, router } from '@inertiajs/react';

function EditUser({ user, className='' }) {
    const [confirmingEditUser, setConfirmingEditUser] = useState(false);
    const { data:editData, setData:setEditData, post, processing, errors } = useForm({
        id: user.id,
        email: user.email,
        name: user.name,
        // password: user.password,
    });

    const confirmEditUser = () => {

        setConfirmingEditUser(true)
    }

    const closeModal = () => {
        setConfirmingEditUser(false)

        reset()
    }

    const editUser = (e) => {
        e.preventDefault();

        post(route('users.update'));
    };
  return (
    <section className={className}>
      <Button 
        onClick={confirmEditUser}
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-400 border border-gray-200 rounded-s-lg hover:bg-amber-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-white dark:bg-amber-500 dark:border-black dark:text-white dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Edit
      </Button>
      <Modal show={confirmingEditUser} onClose={closeModal}>
          <div className='bg-gray-300 dark:bg-gray-700'>
              <h3 className='text-2xl text-center font-bold py-2 '>Eidt User</h3>
              <form onSubmit={editUser} className="p-6">
                  <TextInput type="hidden" name="id" value={editData.id} />
                  <div class="relative">
                      <TextInput
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={editData.email}
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        onChange={(e) => setEditData('email', e.target.value)}
                        required
                      />
                      <InputLabel 
                        htmlFor="email" 
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        value="Email"
                      />
                      <InputError message={errors.email} className="mt-2" />
                  </div>
                  <div class="relative my-3">
                      <TextInput
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={editData.name}
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        onChange={(e) => setEditData('name', e.target.value)}
                        required
                      />
                      <InputLabel 
                        htmlFor="name" 
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" 
                        value="Name" 
                      />
                      <InputError message={errors.name} className="mt-2" />
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
                      className="inline-block rounded-lg border border-black bg-blue-600 hover:bg-blue-800 dark:bg-indigo-900 dark:hover:bg-gray-900 px-10 py-3 mx-auto text-sm font-medium text-white" 
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

export default EditUser