import React from "react";
import DataTable from "react-data-table-component";
import Typography from "../typography";

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#F5F6FA",
      paddingTop: "14px",
      paddingBottom: "14px",
      color: "#647AA8",
      fontFamily: "Euclid",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      paddingTop: "24px",
      paddingBottom: "24px",
    },
  },
};

export default function Table({
  columns,
  data,
  title,
  selectableRows,
  rightComponent,
  leftComponent,
}: {
  columns: any[];
  data: any[];
  title?: string;
  leftComponent?: React.ReactElement;
  selectableRows?: boolean;
  rightComponent?: React.ReactElement;
}) {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  return (
    <>
      <div className="w-full flex items-center mb-[25px] justify-between">
        <div>
          {" "}
          {title ? (
            <div className="flex items-center">
              <Typography label={title} variant="subtitle" />
              <svg
                width={16}
                className="ml-2"
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25 5.75H8.75V4.25H7.25V5.75ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14ZM8 0.5C7.01509 0.5 6.03982 0.693993 5.12987 1.0709C4.21993 1.44781 3.39314 2.00026 2.6967 2.6967C1.29018 4.10322 0.5 6.01088 0.5 8C0.5 9.98912 1.29018 11.8968 2.6967 13.3033C3.39314 13.9997 4.21993 14.5522 5.12987 14.9291C6.03982 15.306 7.01509 15.5 8 15.5C9.98912 15.5 11.8968 14.7098 13.3033 13.3033C14.7098 11.8968 15.5 9.98912 15.5 8C15.5 7.01509 15.306 6.03982 14.9291 5.12987C14.5522 4.21993 13.9997 3.39314 13.3033 2.6967C12.6069 2.00026 11.7801 1.44781 10.8701 1.0709C9.96018 0.693993 8.98491 0.5 8 0.5ZM7.25 11.75H8.75V7.25H7.25V11.75Z"
                  fill="#90A0C2"
                />
              </svg>
            </div>
          ) : (
            leftComponent
          )}
        </div>
        <div>{rightComponent}</div>
      </div>
      <DataTable
        sortIcon="ksk"
        onSelectedRowsChange={handleRowSelected}
        columns={columns}
        selectableRows={selectableRows}
        customStyles={customStyles}
        data={data}
      />
    </>
  );
}