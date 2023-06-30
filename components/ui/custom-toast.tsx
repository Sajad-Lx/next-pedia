"use client";

import { Icons } from "@/components/Icons";
import { toast } from "react-hot-toast";

interface ToastProps {
  title: string;
  description?: string;
}

export default function CustomToast({ title, description }: ToastProps) {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible
            ? "animate-in slide-in-from-top"
            : "animate-out slide-out-to-top-0"
        } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.remove(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Icons.close />
          </button>
        </div>
      </div>
    ),
    {
      duration: 6000,
    }
  );
}
