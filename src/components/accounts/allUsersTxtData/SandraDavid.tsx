"use client";

import React from "react";
// import { TbArrowBackUpDouble, TbArrowForwardUpDouble } from "react-icons/tb";
import { SandraDavidTxData } from "../transactionData/TrxData";
import Link from "next/link";

export default function SandraDavid() {
  const top7TxData = SandraDavidTxData.slice(0, 100); // Fetching only the first five transactions
  const moreThanSeven = SandraDavidTxData.length > 100;

  return (
    <>
      {top7TxData.length === 0 && (
        <div className="text-center">No transaction yet.</div>
      )}
      {top7TxData.map((txt, i) => (
        <div
          key={i}
          className="border justify-between flex bg-white p-4 max-[470px]:px-2 w-full rounded-lg"
        >
          <div className="flex gap-1 text-[#2d1a47]">
            <div>
              <p className="trxName text-[16px] font-semibold">{txt.txName}</p>
              <p className="sm:text-[17px] text-[15px] mt-1">{txt.whatUsed}</p>
            </div>
          </div>
          <div>
            <p className={`font-semibold text-[16px] ${
              txt.whatUsed === "Deposit" ? "text-green-500" : "text-red-500"
            }`}
            >
              {txt.amount}
            </p>
            <p className="text-[13px] text-right mt-1">{txt.date}</p>
          </div>
        </div>
      ))}
      {moreThanSeven && (
        <div className="text-center mt-8">
          <Link
            href="/accounts/transactions"
            className="bg-[#d71e28] text-white font-semibold border border-[#d71e28] rounded p-3 text-lg"
          >
            Show All
          </Link>
        </div>
      )}
    </>
  );
}
