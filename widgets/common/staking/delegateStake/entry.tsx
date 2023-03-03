import Avatar from "@/common/components/avatar";
import Banner from "@/common/components/banner";
import Button from "@/common/components/button";
import { DeleteIcon } from "@/common/components/icons";
import TextField from "@/common/components/input";
import Modal from "@/common/components/modal";
import Typography from "@/common/components/typography";
import React, { MouseEventHandler } from "react";
import { ValidatorInfo } from "types/validators";

type componentProps = {
  handleShowCalculator: MouseEventHandler<HTMLSpanElement>;
  onSuccess: Function;
  selectedValidators: Partial<ValidatorInfo>[];
  removeValidator: (id: string) => void;
};
export default function DelegateStakeEntry({
  handleShowCalculator,
  selectedValidators,
  removeValidator,
  onSuccess,
}: componentProps) {
  return (
    <div>
      <Typography variant="subtitle" label="Delegate Stake " />
      <div className="py-4">
        <Banner
          ctaLabel={<span onClick={handleShowCalculator}>click here</span>}
          label="Calculate your estimated earnings for your staking conditions by clicking here"
        />
      </div>
      <div className="flex justify-between pb-2">
        <div>
          <Typography label="Delegation Amount" />
        </div>

        <div>
          <Typography label="Available: 12900.68 SOL ($3339.76)" />
        </div>
      </div>
      <TextField className="w-full" />
      <div className="mt-6 mb-4">
        <Typography label="Validators" variant="subtitle" />
        <Typography label="Delegated amount was split evenly among the validators, but you can edit to your taste" />
      </div>
      {/* <div className="mb-4">
        <div className="flex items-center pb-3">
          <img
            className="w-[24px] h-[24px] mr-3 rounded-3xl"
            src="https://images.pexels.com/photos/10768835/pexels-photo-10768835.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="Default avatar"
          ></img>
          <Typography label="P2P.ORG - P2P" />{" "}
          <Typography className="text-primary ml-3" label="CHANGE" />
        </div>
        <div className="flex items-center mb-4">
          <TextField className="w-full" containerClass="w-full" />
          <div className="pl-3">
            <DeleteIcon />
          </div>
        </div>
      </div> */}
      {selectedValidators?.map((validator, index) => {
        return (
          <div key={index} className="mb-4">
            <div className="flex items-center pb-3">
              <div className="mr-2">
                <Avatar
                  avatar_url={validator?.avatar_url ?? ""}
                  name={validator.name ?? ""}
                />
              </div>
              <Typography label={validator.name} />{" "}
              <Typography className="text-primary ml-3" label="CHANGE" />
            </div>
            <div className="flex items-center mb-4">
              <TextField className="w-full" containerClass="w-full" />
              {selectedValidators?.length && selectedValidators?.length > 1 ? (
                <div
                  className="pl-3"
                  onClick={() => {
                    console.log(validator.account);
                    validator?.account && removeValidator(validator.account);
                  }}
                >
                  <DeleteIcon />
                </div>
              ) : null}
            </div>
          </div>
        );
      })}

      <Button onClick={() => onSuccess()} label="Confirm Staking" />
    </div>
  );
}
