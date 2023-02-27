import Button from "common/components/button";
import Card from "common/components/card";
import { Upvotes } from "common/components/icons";
import TextField from "common/components/input";
import Score from "common/components/score";
import Table from "common/components/table";
import Typography from "common/components/typography";
import Link from "next/link";
import React, { useState } from "react";
import DataTable, { TableColumn, Selector } from "react-data-table-component";
import DelegateStake from "widgets/home/delegateStake";
export default function AllCollectionsTable() {
  const [delegateStake, setDelegateState] = useState(null);

  const columns = [
    {
      name: "Collection Name",
      selector: (row) => (
        <>
          <div className="flex items-center">
            <img
              className="min-w-10 w-10 h-10 rounded-full float-right object-cover"
              src="https://miro.medium.com/max/2400/1*SgM4XSJnPhGXVIqZayA-hg.png"
              alt="Rounded avatar"
            />
            <div className="ml-3">
              <Typography color="text-dark" label={row.name} variant="body2" />
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Validators",
      selector: (row) => (
        <div className="">
          <Typography
            color="text-dark"
            label={row?.validators}
            variant="body2"
          />
        </div>
      ),
    },
    {
      name: "Average Fee",
      selector: (row) => (
        <div className="">
          <Typography color="text-dark" label={row?.average} variant="body2" />
        </div>
      ),
    },

    {
      name: "Upvotes",
      selector: (row) => (
        <div className="flex items-center">
          <Typography color="text-dark" label={row?.upvote} variant="body2" />
          <div className="px-1"></div>
          <Upvotes />
        </div>
      ),
    },

    {
      name: "Created",
      selector: (row) => (
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
      selector: (row) => (
        <Link href={"/collections/" + row?.id}>
          <Button
            onClick={() => setDelegateState(row)}
            size="semi-big"
            outline
            label="View Validators"
          />
        </Link>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Burundo Samm",
      validators: 12,
      average: "14%",
      upvote: 122,
      date: new Date(),
    },
    {
      id: 1,
      name: "Burundo Samm",
      validators: 12,
      average: "14%",
      upvote: 122,
      date: new Date(),
    },
    {
      id: 1,
      name: "Burundo Samm",
      validators: 12,
      average: "14%",
      upvote: 122,
      date: new Date(),
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
        rightComponent={rightComponent()}
        title="All Collections: 456"
        columns={columns}
        data={data}
      />
    </Card>
  );
}
