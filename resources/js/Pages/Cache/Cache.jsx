import {React, useEffect } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react'
import Button from '@/Components/Button';
import InputError from '@/Components/InputError';

function Cache ({ auth, datas, status }) {
    // console.log(datas);
    const [ massage, setMessage ] = useState('');
    const [ cacheData, setCacheData ] = useState(datas['coba']);
    const { data, setData, post, errors, processing } = useForm({
        coba: '',
    });

    useEffect(() => {
        setCacheData(datas);
        if (status) {
            setMessage(status);
            setTimeout(() => {
                setMessage('');  // Clear the message after 5 seconds
            }, 5000);
        }
    }, [datas, status]);

    const send = (e) => {
        e.preventDefault();
        
        post(route('cache.store'));
    }
    const destroy = (e) => {
        e.preventDefault();

        console.log('reset');
        post(route('cache.destroy'));
    }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
          <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Cache</h2>
          </div>
      }
    >
      <Head title="Cache" />
      <div className="mt-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="overflow-x-auto sm:rounded-lg shadow-md">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">Test Cache!</h1>

                    <p className="mt-4 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                      ipsa culpa autem, at itaque nostrum!
                    </p>
                    
                  </div>

                  <form onSubmit={send} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    { massage && <p className="mt-4 py-2 px-4 text-black text-center bg-yellow-500 sm:rounded-lg">{massage}</p> }
                    <div>
                      <label htmlFor="coba" className="sr-only">Cached</label>

                      <div className="relative">
                        <input
                          id='coba'
                          name='coba'
                          onChange={(e) => setData('coba', e.target.value)}
                          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter Something"
                        />
                        <InputError message={errors.coba} className="mt-2" />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button
                        type='button'
                        className='rounded-lg py-1 px-10 mx-auto text-white border border-black bg-gray-700 hover:bg-gray-800 dark:bg-gray-500 dark:hover:bg-gray-600'
                        onClick={destroy}
                      >
                        reset
                      </Button>
                      <Button
                        className='rounded-lg py-1 px-10 mx-auto text-white border border-black bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600'
                        processing={processing}
                      >
                        send
                      </Button>
                    </div>
                  </form>
                  {cacheData && (
                    <div className="mt-4">
                      <p className="text-gray-500">Cached Data: {cacheData}</p>
                    </div>
                  )}
                </div>
              </div>
          </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Cache