import React from 'react'
import Buttons from '../atoms/buttons';
import InputText from './inputText';

interface ModalProps {
    onClose: () => void;
    open: boolean;
    isSuccess?: boolean
}

const Modal = ({onClose, open, isSuccess}: ModalProps) => {
  return open && (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            {
                isSuccess ?
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        You Catch the Pokemon!
                    </h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                            Give your pokemon a nickname
                        </p>
                    </div>

                    <div className='py-5 w-full'>
                        <InputText onClose={onClose} />
                    </div>
                </div>
                :
                <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900">
                        Sorry, You failed Catch the Pokemon!
                    </h3>
                    <div className='pt-5'>
                        <Buttons className='bg-[#ED5664] text-white py-2 px-8' title='Close' onClick={onClose} />
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Modal