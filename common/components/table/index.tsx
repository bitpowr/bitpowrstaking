import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#F5F6FA",
      paddingTop: "14px",
      paddingBottom: "14px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

export default function Table() {
  return (
    <DataTable columns={columns} customStyles={customStyles} data={data} />
  );
}
