import React from "react";

type AlertProps = {
  show: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
};

const CustomAlert: React.FC<AlertProps> = ({ show, title, message, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-96 text-center animate-fadeIn">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{message}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          {onConfirm && (
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
