import MaterialTable from "material-table";
const DataTable = ({ tableData, setTotalData }) => {
  return (
    <>
      <MaterialTable
        title={
          tableData.length > 0 && tableData[0].Country
            ? "World Records"
            : "India Records"
        }
        columns={
          tableData.length > 0 && tableData[0].Country
            ? [
                { title: "Country", field: "Country" },
                { title: "New Confirmed", field: "NewConfirmed" },
                { title: "New Recovered", field: "NewRecovered" },
                { title: "New Deaths", field: "NewDeaths" },
                { title: "Total Confirmed", field: "TotalConfirmed" },
                { title: "Total Recovered", field: "TotalRecovered" },
                { title: "Total Deaths", field: "TotalDeaths" },
                { title: "Date & Time", field: "Date" },
              ]
            : [
                { title: "State", field: "state" },
                { title: "New Confirmed", field: "deltaconfirmed" },
                { title: "New Recovered", field: "deltarecovered" },
                { title: "New Deaths", field: "deltadeaths" },
                { title: "Total Confirmed", field: "confirmed" },
                { title: "Total Recovered", field: "recovered" },
                { title: "Total Deaths", field: "deaths" },
                { title: "Date & Time", field: "lastupdatedtime" },
              ]
        }
        data={tableData}
        actions={[
          {
            icon: "add",
            tooltip: "add data on pie chart",
            onClick: (event, rowData) => {
              console.log(rowData);
              if (rowData?.active) {
                setTotalData({
                  totalConfirmed: rowData.confirmed,
                  totalRecovered: rowData.recovered,
                  totalDeaths: rowData.deaths,
                  newConfirmed: rowData.deltaconfirmed,
                  newRecovered: rowData.deltarecovered,
                  newDeaths: rowData.deltadeaths,
                });
              } else {
                setTotalData({
                  totalConfirmed: rowData.TotalConfirmed,
                  totalRecovered: rowData.TotalRecovered,
                  totalDeaths: rowData.TotalDeaths,
                  newConfirmed: rowData.NewConfirmed,
                  newRecovered: rowData.NewRecovered,
                  newDeaths: rowData.NewDeaths,
                });
              }
            },
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
        }}
      />
    </>
  );
};

export default DataTable;
