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
  loading,
  leftComponent,
}: {
  columns: any[];
  data: any[];
  loading?: boolean;
  title?: string;
  leftComponent?: React.ReactElement;
  selectableRows?: boolean;
  rightComponent?: React.ReactElement;
}) {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleRowSelected = React.useCallback((state: any) => {
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
      {loading ? (
        <div role="status" className="my-20 justify-center items-center flex">
          <svg
            aria-hidden="true"
            className="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#F5F6FA"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <DataTable
          sortIcon="ksk"
          onSelectedRowsChange={handleRowSelected}
          columns={columns}
          progressPending={loading}
          pagination
          selectableRows={selectableRows}
          customStyles={customStyles}
          data={data}
        />
      )}
    </>
  );
}
