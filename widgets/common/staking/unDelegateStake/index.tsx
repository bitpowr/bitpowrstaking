import Banner from "@/common/components/banner";
import Button from "@/common/components/button";
import { DeleteIcon } from "@/common/components/icons";
import TextField from "@/common/components/input";
import Modal from "@/common/components/modal";
import Typography from "@/common/components/typography";
import React, { MouseEventHandler } from "react";
type componentProps = {
  onClose: Function;
  visible: boolean;
};

export default function UnDelegateStake({ onClose, visible }: componentProps) {
  return (
    <Modal title="Undelegate Stake" onClose={onClose} visible={visible}>
      <div>
        <div className="flex justify-between mt-5 pb-2">
          <div>
            <Typography label="Amount" />
          </div>

          <div>
            <Typography label="Available: 12900.68 SOL ($3339.76)" />
          </div>
        </div>
        <TextField className="w-full" />

        <div className="bg-background p-[24px] my-[24px]">
          <div className="flex justify-between">
            <Typography color="text-dark" label="Transaction Cost" />
            <Typography color="text-dark" label="0.0003 SOL" />
          </div>
          <div className="flex justify-between mt-[16px]">
            <Typography color="text-dark" label="You will receive" />
            <Typography color="text-dark" label="25.63 SOL" />
          </div>
        </div>
        <Button onClick={() => onClose()} label="Confirm Staking" />
      </div>
    </Modal>
  );
}
