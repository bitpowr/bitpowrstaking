import Avatar from "@/common/components/avatar";
import Button from "@/common/components/button";
import Card from "@/common/components/card";
import TextField from "@/common/components/input";
import Score from "@/common/components/score";
import Table from "@/common/components/table";
import Typography from "@/common/components/typography";
import { useCollection } from "@/contexts/CollectionsProviderContext";
import { useValidator } from "@/contexts/ValidatorsProviderContext";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn, Selector } from "react-data-table-component";
import DelegateStake from "widgets/common/staking/delegateStake";
export default function ValidatorsTable() {
  const { publicKey, signMessage, connected } = useWallet();
  const { validators, getValidators } = useValidator();

  console.log(validators);
  interface DataRow {
    name: string;
    validators: string;
    fiatAmount: string;
    active_stake: string;
    total_score: string;
    account_id: string;
    id: number;
    avatar_url: string;
    status: "active" | "pending";
    created_at: string;
    url: string;
    commission: string;
    earnings: string;
    // selector: (d: any) => React.ReactElement;
  }

  useEffect(() => {
    if (connected) {
      getValidators();
    }
  }, [connected]);

  const [delegateStake, setDelegateState] = useState<DataRow | null>(null);

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Validator Name",
      minWidth: "250px",
      cell: (row) => (
        <>
          <div className="flex overflow-hidden">
            <Avatar name={row?.name} avatar_url={row?.avatar_url} />
            <div className="ml-3">
              <Typography color="text-dark" label={row?.name} variant="body2" />
              <div className="mt-1">
                <Typography
                  className="w-[180px] overflow-hidden text-ellipsis whitespace-nowrap"
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
      cell: (row) => (
        <div className="">
          <Typography
            color="text-dark"
            label={row?.commission}
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
              color="text-dark"
              label={row?.active_stake}
              variant="body2"
            />
          </div>
          <div className="mt-1">
            <Typography label={"$40,000"} variant="body1" />
          </div>
        </div>
      ),
    },
    {
      name: "Commission",
      cell: (row) => (
        <div className="">
          <Typography
            color="text-dark"
            label={row?.commission}
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
          {row.total_score}
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
              label={new Date(row?.created_at).toDateString()}
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
          onClick={() => setDelegateState(row)}
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
        title="Validators"
        columns={columns}
        data={validators.data ?? []}
      />
      {delegateStake ? (
        <DelegateStake onClose={() => setDelegateState(null)} visible={true} />
      ) : null}
    </Card>
  );
}
