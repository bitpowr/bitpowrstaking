import Modal from "@/common/components/modal";
import React, { useState } from "react";
import { ValidatorInfo } from "types/validators";
import CalculateEarning from "../../../home/calculateEarning";
import DelegateStakeEntry from "./entry";
import StakingSuccessful from "./success";

type componentProps = {
  onClose: Function;
  visible: boolean;
  removeValidator: (id: string) => void;

  selectedValidators: Partial<ValidatorInfo>[];
};

export default function DelegateStake({
  selectedValidators,
  onClose,
  removeValidator,
  visible,
}: componentProps) {
  const stages = {
    entry: "entry",
    calculator: "calculator",
    success: "success",
  };

  const [current, setCurrent] = useState(stages.entry);

  return (
    <>
      <Modal onClose={onClose} visible={visible}>
        <div className={current == stages.entry ? "block" : "hidden"}>
          <DelegateStakeEntry
            removeValidator={(account) => {
              removeValidator(account);
            }}
            selectedValidators={selectedValidators}
            handleShowCalculator={() => {
              setCurrent(stages.calculator);
            }}
            onSuccess={() => {
              setCurrent(stages.success);
            }}
          />
        </div>

        <div className={current == stages.calculator ? "block" : "hidden"}>
          <CalculateEarning
            onBack={() => {
              setCurrent(stages.entry);
            }}
          />
        </div>

        <div className={current == stages.success ? "block" : "hidden"}>
          <StakingSuccessful />
        </div>
      </Modal>
    </>
  );
}
