import React from "react";
import StatusCard from "./UI/StatusCard";
import { InvoiceCardProps } from "../types/types";
import { formatCurrency, mapStatusToEnum } from "../utils/utils";
import { useMediaQuery } from "react-responsive";

const InvoiceCard = ({
  id,
  dueDate,
  name,
  amount,
  status,
}: InvoiceCardProps) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 639px)" });
  return (
    <div className="w-full rounded-lg sm:rounded-md bg-3-dark-black mt-2 sm:flex pl-8 sm:pl-10 pr-6 text-11-white py-4 sm:py-8 items-center justify-between gap-4 mb-5 hover:outline hover:outline-2 hover:outline-1-dark-violet cursor-pointer text-center">
      {isSmallScreen ? (
        <>
          <div className="flex justify-between items-center w-full py-4">
            <h2 className="font-bold">
              <span className="text-7-gray-blue">#</span>
              {id}
            </h2>
            <h4 className="font-semibold">{name}</h4>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <h4 className="text-5-light-gray py-4">Due {dueDate}</h4>
              <h2 className="font-bold tracking-wide">
                <span className="pr-1">$</span>
                {formatCurrency(amount)}
              </h2>
            </div>
            <StatusCard statusType={mapStatusToEnum(status)} />
          </div>
        </>
      ) : (
        <>
          <h2 className="font-bold">
            <span className="text-7-gray-blue">#</span>
            {id}
          </h2>
          <h4 className="text-5-light-gray">Due {dueDate}</h4>
          <h4>{name}</h4>
          <h2 className="font-bold tracking-wide">
            <span className="pr-1">$</span>
            {formatCurrency(amount)}
          </h2>
          <StatusCard statusType={mapStatusToEnum(status)} />
        </>
      )}
    </div>
  );
};

export default InvoiceCard;
