import Button from "@/common/components/button";
import Card from "@/common/components/card";
import { Upvotes } from "@/common/components/icons";
import TextField from "@/common/components/input";
import Score from "@/common/components/score";
import Table from "@/common/components/table";
import Typography from "@/common/components/typography";
import Link from "next/link";
import React, { useState } from "react";
import DataTable, { Selector, TableColumn } from "react-data-table-component";
import DelegateStake from "widgets/home/delegateStake";

type componentProps = {
  loading: boolean;
  data: [];
};
export default function AllCollectionsTable({ data, loading }: componentProps) {
  interface DataRow {
    name: string;
    validators: string;
    average: string;
    selector: Selector<DataRow>;
    id: number;
    date: string;
    upvote: string;
    // selector: (d: any) => React.ReactElement;
  }

  const [delegateStake, setDelegateState] = useState<DataRow | null>(null);

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Collection Name",
      cell: (row) => (
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
      cell: (row) => (
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
      cell: (row) => (
        <div className="">
          <Typography color="text-dark" label={row?.average} variant="body2" />
        </div>
      ),
    },

    {
      name: "Upvotes",
      cell: (row) => (
        <div className="flex items-center">
          <Typography color="text-dark" label={row?.upvote} variant="body2" />
          <div className="px-1"></div>
          <Upvotes />
        </div>
      ),
    },

    {
      name: "Created",
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
        loading={loading}
        rightComponent={rightComponent()}
        title="All Collections: 456"
        columns={columns}
        data={data ?? []}
      />
    </Card>
  );
}
