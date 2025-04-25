import { useState } from "react";
import { useGetAllUserQuery } from "../../redux/api/auth.api";
import { AccountDetailsTable } from "./account-details-table";

export const DashboardTable = () => {

  const { isLoading, data } = useGetAllUserQuery({})

   const [currentPage, setCurrentPage] = useState(1)


  return (
    <div className="user-table-container">
      <AccountDetailsTable isLoading={isLoading} data={data?.data?.data} setCurrentPage={setCurrentPage} currentPage={currentPage} meta={data?.meta} />
    </div>
  );
};


