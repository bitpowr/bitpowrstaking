import Button from "@/common/components/button";
import Card from "@/common/components/card";
import TextField from "@/common/components/input";
import Score from "@/common/components/score";
import Table from "@/common/components/table";
import Typography from "@/common/components/typography";
import React, { useState } from "react";
import DataTable, { TableColumn, Selector } from "react-data-table-component";
import DelegateStake from "widgets/home/delegateStake";
export default function ValidatorsTable() {
  interface DataRow {
    name: string;
    validators: string;
    fiatAmount: string;
    cryptoAmount: string;
    stake: string;
    account_id: string;
    id: number;
    status: "active" | "pending";
    date: string;
    links: string;
    fee: string;
    earnings: string;
    // selector: (d: any) => React.ReactElement;
  }

  const [delegateStake, setDelegateState] = useState<DataRow | null>(null);

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Validator Name",
      cell: (row) => (
        <>
          <div className="flex">
            <img
              className="min-w-10 w-10 h-10 rounded-full float-right object-cover"
              src="https://miro.medium.com/max/2400/1*SgM4XSJnPhGXVIqZayA-hg.png"
              alt="Rounded avatar"
            />
            <div className="ml-3">
              <Typography color="text-dark" label={row.name} variant="body2" />
              <div className="mt-1">
                <Typography label={row.links} variant="body1" />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Fee",
      cell: (row) => (
        <div className="">
          <Typography color="text-dark" label={row?.fee} variant="body2" />
        </div>
      ),
    },
    {
      name: "Stake",
      cell: (row) => (
        <div className="">
          <div>
            <Typography color="text-dark" label={row?.stake} variant="body2" />
          </div>
          <div className="mt-1">
            <Typography label={row.fiatAmount} variant="body1" />
          </div>
        </div>
      ),
    },
    {
      name: "Score",
      cell: (row) => (
        <div className="flex items-center">
          <Score />
          {"("}11{")"}
        </div>
      ),
    },

    {
      name: "Delegators",
      cell: (row) => (
        <div className="">
          <div>
            <Typography
              color="text-dark"
              label={new Date(row?.date).toDateString()}
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

  const data = [
    {
      id: 1,
      name: "P2P.ORG - P2P Validator",
      links: "https://p2p.org",
      fiatAmount: "$3,000",
      fee: "5.5%",
      date: new Date(),
      stake: "3,119,907.11 (0.84%)",
    },
    {
      id: 2,
      name: "P2P.ORG - P2P Validator",
      links: "https://p2p.org",
      date: new Date(),
      fiatAmount: "$3,000",
      fee: "5.5%",
      stake: "3,119,907.11 (0.84%)",
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
        rightComponent={rightComponent()}
        title="Validators"
        columns={columns}
        data={data}
      />
      {delegateStake ? (
        <DelegateStake onClose={() => setDelegateState(null)} visible={true} />
      ) : null}
    </Card>
  );
}
