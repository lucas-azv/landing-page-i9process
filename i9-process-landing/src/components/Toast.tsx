import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const style =
    type === "success"
      ? "bg-green-500"
      : "bg-red-500";

  return (
    <div
      className={`
        fixed bottom-6 right-6 
        px-5 py-3 text-white 
        rounded-lg shadow-xl 
        text-base font-medium
        animate-slide-up
        ${style}
      `}
      style={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
