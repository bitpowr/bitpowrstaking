import Button from "@/common/components/button";
import Card from "@/common/components/card";
import Table from "@/common/components/table";
import Typography from "@/common/components/typography";
import React from "react";
import DataTable, { TableColumn, Selector } from "react-data-table-component";
export default function TopValidators() {
  interface DataRow {
    name: string;
    validators: string;
    average: string;
    votes: string;
    percent: string;
    id: number;
    date: string;
    upvote: string;
    // selector: (d: any) => React.ReactElement;
  }

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Collection",
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
                <Typography label={row.votes} variant="body1" />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "No of Validators",
      cell: (row) => (
        <div className="">
          <div>
            <Typography
              color="text-dark"
              label={row?.validators}
              variant="body2"
            />
          </div>
          <div className="mt-1">
            <Typography label={row.percent} variant="body1" />
          </div>
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <Button onClick={() => ""} size="semi-big" outline label="View" />
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Coin Bureau",
      votes: "459 upvotes",
      validators: "30",
      percent: "Avg Fee: 6%",
    },
    {
      id: 2,
      name: "Lindsey List",
      votes: "459 upvotes",
      validators: "100",
      percent: "Avg Fee: 6%",
    },
    {
      id: 3,
      name: "Coin Bureau",
      votes: "459 upvotes",
      validators: "30",
      percent: "Avg Fee: 6%",
    },
    {
      id: 4,
      name: "Lindsey List",
      votes: "459 upvotes",
      validators: "100",
      percent: "Avg Fee: 6%",
    },
  ];

  return (
    <Card>
      <Table
        rightComponent={
          <Button onClick={() => ""} size="semi-big" outline label="View All" />
        }
        title="Most Rated Collections"
        columns={columns}
        data={data}
      />
    </Card>
  );
}
