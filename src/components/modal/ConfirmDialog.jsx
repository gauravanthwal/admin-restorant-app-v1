import React, { useRef } from "react";

const ConfirmDialog = ({ title, children, afterCloseCallback }) => {
  const confirmModalRef = useRef(null);

  const closeModal = () => {
    confirmModalRef?.current?.close();

    if (afterCloseCallback) {
      afterCloseCallback();
    }
  };
  return (
    <dialog
      id="confirm-dialog"
      ref={confirmModalRef}
      className="bg-white p-4 rounded-md min-w-[400px] max-w-[900px] min-h-[200px]"
    >
      {/* Header */}
      <div className="border-b flex justify-between  py-2 mb-2">
        <h1 className="text-gray-700 font-semibold">{title}</h1>
        <button
          onClick={closeModal}
          className="text-gray-600 hover:text-gray-800 rounded-sm"
        >
          {XIcon}
        </button>
      </div>

      {/* body */}
      <div>{children}</div>
    </dialog>
  );
};

const XIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export default ConfirmDialog;
