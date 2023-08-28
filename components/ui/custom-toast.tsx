"use client";

import { toast } from "react-hot-toast";

import { Icons } from "@/components/Icons";

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
        } pointer-events-auto flex w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
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
            className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
