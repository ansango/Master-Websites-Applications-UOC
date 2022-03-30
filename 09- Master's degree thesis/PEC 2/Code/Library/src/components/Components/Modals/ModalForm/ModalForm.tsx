/**
 * ?ModalForm Component
 */

import { cloneElement, FC, useState } from "react";
import { ModalFormProps } from ".";
// import * as cn from "./ModalFormStyles";

/**
 * Description of ModalForm component displayed in Storybook
 */

const ModalForm: FC<ModalFormProps> = ({ opened, element, form }) => {
  const [isOpen, setIsOpen] = useState<boolean>(opened);
  const newElement = cloneElement(element, {
    action: () => setIsOpen(true),
    "data-testid": "open-modal-button",
  });
  return (
    <>
      {newElement}
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                {/*header*/}
                <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setIsOpen(false)}
                    data-testid="close-button"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {form}
                {/*footer*/}
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    data-testid="accept-button"
                  >
                    I accept
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                    data-testid="decline-button"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalForm;
