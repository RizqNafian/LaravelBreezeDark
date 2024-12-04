import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateUser from './Partials/CreateUser';
import EditUser from './Partials/EditUser';

function Users({ users, auth }) {
  console.log(users);
  return (
    <AuthenticatedLayout
        user={auth.user}
        header={
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Users Management</h2>
                <CreateUser className="" />
            </div>
        }
    >
      <Head title="Users Management" />
      <div className="py-2">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="overflow-x-auto sm:rounded-lg shadow-md">
              <table className="min-w-full border border-black divide-y-2 divide-gray-200 bg-white text-sm dark:bg-gray-700">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="bg-gray-50 dark:bg-gray-600">
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Name</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Date of Registration</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Email</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Last Update</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
                    {users.map((user) => (
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">{user.name}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-white">{user.created_at}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-white">{user.email}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-white">{user.updated_at}</td>
                        <td className="whitespace-nowrap px-4 py-2">
                          

                          <div className="inline-flex rounded-md shadow-sm" role="group">
                            <EditUser user={user} className="" />
                            <a href={'/users/delete/' + user.id}>
                                <button 
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-red-600 border border-gray-200 rounded-e-lg hover:bg-red-800 hover:text-white focus:z-10 focus:ring-2 focus:ring-white focus:text-blue-700 dark:bg-red-600 dark:border-black dark:text-white dark:hover:text-white dark:hover:bg-red-900 dark:focus:ring-blue-500 dark:focus:text-white">
                                    Delete
                                </button>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    
    </AuthenticatedLayout>
  )
}

export default Users