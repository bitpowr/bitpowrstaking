import Modal from "common/components/modal";
import React, { useState } from "react";
import CalculateEarning from "../calculateEarning";
import DelegateStakeEntry from "./entry";
import StakingSuccessful from "./success";

type componentProps = {
  onClose: Function;
  visible: boolean;
};

export default function DelegateStake({ onClose, visible }: componentProps) {
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
