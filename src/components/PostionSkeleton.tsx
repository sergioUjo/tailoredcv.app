import React from "react";

interface Props {
  name: string;
}
function PositionSkeleton({ name }: Props) {
  return (
    <div
      className={
        "flex w-36 flex-col gap-1 rounded-md border border-solid border-gray-200 bg-white p-1 shadow-md"
      }
    >
      <p className={"text-center text-sm font-bold"}>{name}</p>
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"mb-1 h-1 w-1/2 rounded-full bg-gray-50"} />
      <p className={"text-xs"}>Description</p>
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"mb-1 h-1 w-1/4 rounded-full bg-gray-50 "} />
      <p className={"text-xs"}>Requirements</p>
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"mb-1 h-1 w-1/2 rounded-full bg-gray-50 "} />
      <p className={"text-xs"}>Nice to have</p>
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"h-1 rounded-full bg-gray-50"} />
      <div className={"mb-1 h-1 w-2/3 rounded-full bg-gray-50 "} />
    </div>
  );
}

export default PositionSkeleton;
