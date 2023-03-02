import Button from "@/common/components/button";
import Card from "@/common/components/card";
import Status from "@/common/components/status";
import Table from "@/common/components/table";
import Typography from "@/common/components/typography";
import React from "react";
import DataTable, { TableColumn, Selector } from "react-data-table-component";
export default function TransactionHistory() {
  interface DataRow {
    name: string;
    validators: string;
    fiatAmount: string;
    cryptoAmount: string;
    account_id: string;
    id: number;
    status: "active" | "pending";
    date: string;
    links: string;
    earnings: string;
    // selector: (d: any) => React.ReactElement;
  }

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Validator",
      cell: (row) => (
        <>
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full float-right object-cover"
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
      name: "Staked Amount",
      cell: (row) => (
        <div className="">
          <div>
            <Typography
              color="text-dark"
              label={row?.fiatAmount}
              variant="body2"
            />
          </div>
          <div className="mt-1">
            <Typography label={row.cryptoAmount} variant="body1" />
          </div>
        </div>
      ),
    },
    {
      name: "Earnings",
      cell: (row) => (
        <div className="">
          <div>
            <Typography
              color="text-dark"
              label={row?.earnings}
              variant="body2"
            />
          </div>
          <div className="mt-1">
            <Typography label={row.cryptoAmount} variant="body1" />
          </div>
        </div>
      ),
    },
    // {
    //   name: "Status",
    //   cell: (row) => (
    //     <div>
    //       <Status status={row?.status} />
    //     </div>
    //   ),
    // },
    {
      name: "Account ID",
      cell: (row) => (
        <div className="flex items-center">
          <Typography
            color="text-dark"
            label={row?.account_id}
            variant="body2"
          />
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 15.75H6V5.25H14.25V15.75ZM14.25 3.75H6C5.60218 3.75 5.22064 3.90804 4.93934 4.18934C4.65804 4.47064 4.5 4.85218 4.5 5.25V15.75C4.5 16.1478 4.65804 16.5294 4.93934 16.8107C5.22064 17.092 5.60218 17.25 6 17.25H14.25C14.6478 17.25 15.0294 17.092 15.3107 16.8107C15.592 16.5294 15.75 16.1478 15.75 15.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75ZM12 0.75H3C2.60218 0.75 2.22064 0.908035 1.93934 1.18934C1.65804 1.47064 1.5 1.85218 1.5 2.25V12.75H3V2.25H12V0.75Z"
              fill="#647AA8"
            />
          </svg>
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
        <Button onClick={() => {}} size="semi-big" outline label="View" />
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "P2P.ORG - P2P Validator",
      links: "https://p2p.org",
      fiatAmount: "$3,000",
      cryptoAmount: "44,536.50 SOL",
      status: "active",
      account_id: "0xac...C6755",
      date: new Date(),
      earnings: "$40,000",
    },
    {
      id: 2,
      name: "Staking Facilities",
      links: "https://stakingfacilities.com",
      fiatAmount: "$15,000",
      cryptoAmount: "536.50 SOL",
      status: "pending",
      account_id: "0xac...C6755",
      earnings: "$10,000",

      date: new Date(),
    },
  ];

  return (
    <Card>
      <Table
        rightComponent={
          <Button onClick={() => {}} size="semi-big" outline label="View All" />
        }
        title="Transaction History"
        columns={columns}
        data={data}
      />
    </Card>
  );
}
