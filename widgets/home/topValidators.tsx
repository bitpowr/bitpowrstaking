import Button from "common/components/button";
import Card from "common/components/card";
import Table from "common/components/table";
import Typography from "common/components/typography";
import React from "react";
import DataTable, { TableColumn, Selector } from "react-data-table-component";
export default function TopValidators() {
  interface DataRow {
    name: string;
    validators: string;
    fiatAmount: string;
    cryptoAmount: string;
    account_id: string;
    id: number;
    percent: string;
    link: string;
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
              className="w-10 h-10 rounded-full float-right"
              src="https://images.pexels.com/photos/14811468/pexels-photo-14811468.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Rounded avatar"
            />
            <div className="ml-3">
              <Typography color="text-dark" label={row.name} variant="body2" />
              <div className="mt-1">
                <Typography label={row.link} variant="body1" />
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
          <div>
            <Typography
              color="text-dark"
              label={row?.percent}
              variant="body2"
            />
          </div>
          <div className="mt-1">
            <Typography label="350 Delegated" variant="body1" />
          </div>
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <Button onClick={() => {}} size="semi-big" outline label="Delegate" />
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "P2P.ORG - P2P",
      link: "https://p2p.org",
      percent: "5%",
    },
    {
      id: 2,
      name: "Staking Facilit...",
      link: "https://p2p.org",
      percent: "7%",
    },
    {
      id: 3,
      name: "P2P.ORG - P2P",
      link: "https://p2p.org",
      percent: "5%",
    },
    {
      id: 4,
      name: "Staking Facilit...",
      link: "https://p2p.org",
      percent: "7%",
    },
  ];

  return (
    <Card>
      <Table
        rightComponent={
          <Button onClick={() => {}} size="semi-big" outline label="View All" />
        }
        title="Top Validators"
        columns={columns}
        data={data}
      />
    </Card>
  );
}
