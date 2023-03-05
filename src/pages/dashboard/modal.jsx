import React from 'react'
import {Card, CardHeader, CardBody} from '@material-tailwind/react';

import PendingActionsIcon from '@mui/icons-material/PendingActions';

const Modal = () => {
  return (
    <>
    <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-4 mx-auto max-w-8xl">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-blue-400 bg-opacity-50 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-1 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto grid grid-cols-3 gap-6">
                <div>
                    <Card className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <PendingActionsIcon  sx={{ fontSize: "60px" }}/>
                        <div className="flex flex-col justify-between px-4 py-1 leading-normal grid grid-cols-2 gap-1">
                            <p className="font-bold text-gray-700 dark:text-gray-400">test</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">test</p>
                            <p className="font-bold text-gray-700 dark:text-gray-400">test</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">test</p>
                            <p className="font-bold text-gray-700 dark:text-gray-400">test</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">test</p>
                        </div>
                    </Card>
                    <Card className="my-4 flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="p-2 sm:p-4 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                            <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                                <p className="dark:text-gray-400">11/09sadlkfj</p>
                                <p className="dark:text-gray-400">Smoker</p>
                            </div>
                        </div>
                        <table className="table-auto text-left">
                        <thead >
                            <tr >
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="pr-4">The Sliding </td>
                            <td className="pr-4">Malcolm Lockyer</td>
                            <td className="pr-4">1961</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </Card>
                    <Card className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="p-2 sm:p-4 dark:bg-gray-900 dark:text-gray-100">
                        <div className="grid grid-cols-3 gap-2 ">
                            <div className="flex flex-col col-span-2">
                                <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                                <p className="mt-2 dark:text-gray-400">11/09sadlkfj</p>
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                            </div>
                            <div>
                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className=" flex-shrink-0 w-28 h-28 border rounded-md dark:bg-gray-500 dark:border-gray-700" />
                            </div>
                        </div>
                    </div>
                    </Card>
                    <Card className="mt-6 flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="p-2 sm:p-4 dark:bg-gray-900 dark:text-gray-100">
                        <div className="">
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                                <p className="mt-2 dark:text-gray-400">11/09sadlkfj</p>
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                            </div>
                        </div>
                    </div>
                    </Card>
                </div>
                <div className="col-span-2">
                    <Card className="my-0 flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="p-2 sm:p-4 dark:bg-gray-900 dark:text-gray-100">
                        <div className="">
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                                <p className="mt-2 dark:text-gray-400">11/09sadlkfj</p>
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                            </div>
                        </div>
                    </div>
                    </Card>
                    <Card className="my-4 flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="p-2 sm:p-4 dark:bg-gray-900 dark:text-gray-100">
                            <div className="">
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                                    <p className="mt-2 dark:text-gray-400">11/09sadlkfj</p>
                                    <p className="mt-1 dark:text-gray-400">Smoker</p>
                                    <p className="mt-1 dark:text-gray-400">Smoker</p>
                                    <p className="mt-1 dark:text-gray-400">Smoker</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="my-4 flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="w-full text-left">
                        <table className="table-auto w-full">
                            <thead>
                            <tr className="">
                                <th className="rounded-tl-lg bg-gray-800 p-2">
                                <span className="text-gray-300">Name</span>
                                </th>
                                <th className="bg-gray-800 p-2">
                                <span className="text-gray-300">Invitation</span>
                                </th>
                                <th className="bg-gray-800 p-2">
                                <span className="text-gray-300">Date</span>
                                </th>

                                <th className="rounded-tr-lg bg-gray-800 p-2">
                                <span className="text-gray-300">Time</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white">
                                <td>
                                <span className="text-center ml-2 font-normal">Dean Lynch</span>
                                </td>
                                <td className="p-2">
                                    text
                                </td>
                                <td className="p-2">
                                <span>05/06/2020</span>
                                </td>
                                <td className="p-2">
                                <span>10:00</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <h6 className="float-right px-6 pt-4 pb-2 font-bold">Total: $864</h6>
                        </div>
                    </Card>
                    <Card className="my-0 flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="p-2 sm:p-4 dark:bg-gray-900 dark:text-gray-100">
                        <div className="">
                            <div className="flex flex-col">
                                <p className="mt-1 dark:text-gray-400">Smoker</p>
                                <input className="py-3" placeholder="Text goes here"></input>
                            </div>
                        </div>
                    </div>
                    </Card>
                </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 pb-6 rounded-b">
                  <button
                    className="bg-red-500 hover:bg-red-800 text-white font-bold px-6 py-3 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
  )
}

export default Modal