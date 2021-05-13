import React from "react";

export default function Loading() {
  return (
    <div className="w-full init">
      <p className="flex h-full">
        <i className="fas fa-circle-notch fa-spin text-5xl text-blue-800"></i>
      </p>
    </div>
  );
}
