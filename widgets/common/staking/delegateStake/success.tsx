import Button from "@/common/components/button";
import Typography from "@/common/components/typography";
import React from "react";

export default function StakingSuccessful() {
  return (
    <div className="text-center py-5">
      <div className="h-[200px]"></div>
      <Typography variant="title" label="Staking successful" />
      <Typography
        className="mt-4 mb-8"
        variant="body2"
        label="You have successfully staked 12900 SOL check back in a couple of days to see your tasty rewards acuumulating"
      />

      <div className="flex items-center justify-center">
        <Button onClick={() => ""} label="Go to dashboard" outline />
        <div className="px-5"></div>
        <Button onClick={() => ""} label="Create New Stake" />
      </div>
    </div>
  );
}
