import Avatar from "@/common/components/avatar";
import Button from "@/common/components/button";
import Card from "@/common/components/card";
import TextField from "@/common/components/input";
import Score from "@/common/components/score";
import Table from "@/common/components/table";
import Typography from "@/common/components/typography";
import { useCollection } from "@/contexts/CollectionsProviderContext";
import { useValidator } from "@/contexts/ValidatorsProviderContext";
import { useStore } from "@/store";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn, Selector } from "react-data-table-component";
import { ValidatorInfo } from "types/validators";
import DelegateStake from "widgets/common/staking/delegateStake";
import MultipleValidatatorsButton from "./multipleValidatatorsButton";
export default function ValidatorsTable() {
  const { publicKey, signMessage, connected } = useWallet();
  const { usdToSol } = useStore();
  const { validators, getValidators } = useValidator();

  console.log(validators);
  // interface DataRow {
  //   name: string;
  //   validators: string;
  //   fiatAmount: string;
  //   account: string;
  //   active_stake: string;
  //   total_score: string;
  //   account_id: string;
  //   id: number;
  //   avatar_url: string;
  //   status: "active" | "pending";
  //   created_at: string;
  //   url: string;
  //   commission: string;
  //   earnings: string;
  //   // selector: (d: any) => React.ReactElement;
  // }

  useEffect(() => {
    getValidators();
  }, [connected]);

  const [delegateStake, setDelegateStake] = useState<any>(null);
  const [selectedRows, setSelectedRows] = useState<Partial<ValidatorInfo>[]>(
    []
  );

  const handleRemoveValidator = (account: string) => {
    const validators = selectedRows?.filter(
      (validator) => validator?.account !== account
    );
    setSelectedRows(validators);
  };
  const columns: TableColumn<Partial<ValidatorInfo>>[] = [
    {
      name: "Validator Name",
      minWidth: "250px",
      cell: (row) => (
        <>
          <div className="flex overflow-hidden">
            <Avatar name={row?.name || ""} avatar_url={row?.avatar_url || ""} />
            <div className="ml-3">
              <Typography
                className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap"
                color="text-dark"
                label={row?.name}
                variant="body2"
              />
              <div className="mt-1">
                <Typography
                  className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap"
                  label={row?.url}
                  variant="body1"
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "APY",
      maxWidth: "4%",
      cell: (row) => (
        <div className="">
          <Typography
            color="text-dark"
            label={row?.commission?.toString() || "---"}
            variant="body2"
          />
        </div>
      ),
    },
    {
      name: "Active Stake",
      cell: (row) => (
        <div className="">
          <div>
            <Typography
              color="text-dark whitespace-nowrap"
              label={row?.active_stake?.toLocaleString() || "---"}
              variant="body2"
            />
          </div>
          <div className="mt-1">
            <Typography
              label={((row?.active_stake || 0) / usdToSol).toLocaleString()}
              variant="body1"
            />
          </div>
        </div>
      ),
    },
    {
      name: "Commission",
      maxWidth: "4%",

      cell: (row) => (
        <div className="">
          <Typography
            color="text-dark"
            label={row?.commission?.toString() || "---"}
            variant="body2"
          />
        </div>
      ),
    },
    {
      name: "Score",
      cell: (row) => (
        <div className="flex items-center">
          <Score />
          {"("}
          <div className="whitespace-nowrap">{row.total_score}</div>

          {")"}
        </div>
      ),
    },

    {
      name: "Date",
      cell: (row) => (
        <div className="">
          <div>
            <Typography
              color="text-dark"
              className="whitespace-nowrap"
              label={
                row.created_at ? new Date(row.created_at).toDateString() : "N/A"
              }
              variant="body2"
            />
          </div>
        </div>
      ),
    },

    {
      name: "Action",
      cell: (row) => (
        <Button
          onClick={() => {
            setDelegateStake(row);
            setSelectedRows([row]);
          }}
          size="semi-big"
          outline
          label="Delegate"
        />
      ),
    },
  ];

  const rightComponent = () => {
    return (
      <>
        <TextField placeholder="Search for collection" />
      </>
    );
  };

  return (
    <Card>
      <Table
        selectableRows
        loading={validators.loading}
        rightComponent={rightComponent()}
        setSelectedRows={(data: ValidatorInfo[]) => setSelectedRows(data)}
        title="Validators"
        columns={columns}
        data={validators.data ?? []}
      />
      {delegateStake ? (
        <DelegateStake
          removeValidator={(account) => {
            handleRemoveValidator(account);
          }}
          selectedValidators={selectedRows}
          onClose={() => setDelegateStake(null)}
          visible={true}
        />
      ) : null}

      <MultipleValidatatorsButton
        visible={selectedRows?.length ? true : false}
        count={selectedRows?.length || 0}
        onClick={() => setDelegateStake(selectedRows)}
      />
    </Card>
  );
}
