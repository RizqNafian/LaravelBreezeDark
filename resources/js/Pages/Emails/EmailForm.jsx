import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react'
import Button from '@/Components/Button';
import InputError from '@/Components/InputError';

function EmailForm({ auth }) {
    // console.log(status);
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const send = (e) => {
        e.preventDefault();
        
        post(route('email.send'));
    }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
          <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Email</h2>
          </div>
      }
    >
      <Head title="Email" />
      <div className="mt-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="overflow-x-auto sm:rounded-lg shadow-md">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">Sent Email!</h1>

                    <p className="mt-4 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                      ipsa culpa autem, at itaque nostrum!
                    </p>
                  </div>

                  <form onSubmit={send} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>

                      <div className="relative">
                        <input
                          id='name'
                          name='name'
                          onChange={(e) => setData('name', e.target.value)}
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter Name"
                        />
                        <InputError message={errors.name} className="mt-2" />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        </span>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>

                      <div className="relative">
                        <input
                          id='email'
                          name='email'
                          type="email"
                          onChange={(e) => setData('email', e.target.value)}
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter email"
                        />
                        <InputError message={errors.email} className="mt-2" />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <label className="sr-only" htmlFor="message">Message</label>

                        <textarea
                          id='message'
                          name='message'
                          onChange={(e) => setData('message', e.target.value)}
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Message"
                          rows="8"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <Button
                        className='rounded-lg py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white dark:bg-indigo-900 dark:hover:bg-indigo-950 border border-black'
                        processing={processing}
                      >
                        send
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default EmailForm