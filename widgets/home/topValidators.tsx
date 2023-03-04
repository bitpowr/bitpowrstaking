import Avatar from "@/common/components/avatar";
import Button from "@/common/components/button";
import Card from "@/common/components/card";
import Table from "@/common/components/table";
import Typography from "@/common/components/typography";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn, Selector } from "react-data-table-component";
import { ValidatorInfo } from "types/validators";
import DelegateStake from "widgets/common/staking/delegateStake";

type componentProps = {
  loading: boolean;
  data: [];
  connected: boolean;
};
export default function TopValidators({
  loading,
  data,
  connected,
}: componentProps) {
  const [delegateStake, setDelegateState] =
    useState<Partial<ValidatorInfo> | null>(null);
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
              <Typography color="text-dark" label={row?.name} variant="body2" />
              <div className="mt-1">
                <Typography
                  className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap"
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
      name: "Commission",
      cell: (row) => (
        <div className="">
          <Typography
            color="text-dark"
            label={row?.commission?.toString()}
            variant="body2"
          />
        </div>
      ),
    },

    {
      name: "Action",
      cell: (row) => (
        <Button
          onClick={() => {
            setDelegateState(row);
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
        <Link href={"/validators"}>
          <Button outline size="semi-big" label="View All" onClick={() => {}} />
        </Link>
      </>
    );
  };

  return (
    <Card>
      <Table
        loading={loading}
        rightComponent={rightComponent()}
        title="Top Validators"
        columns={columns}
        data={data ?? []}
      />
      {delegateStake ? (
        <DelegateStake
          removeValidator={(account) => {
            handleRemoveValidator(account);
          }}
          selectedValidators={selectedRows}
          onClose={() => setDelegateState(null)}
          visible={true}
        />
      ) : null}
    </Card>
  );
}
