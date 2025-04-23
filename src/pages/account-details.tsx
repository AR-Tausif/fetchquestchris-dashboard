import { Input } from "antd";
import { AccountDetailsTable } from "../components";
import { useGetAllUserQuery } from "../redux/api/auth.api";
import { Search } from "lucide-react";
import { useState } from "react";

export const AccountDetails = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [searchText, setSearchText] = useState("");

  const query: { page: number, searchTerm ?: string } = { page: currentPage };

  if (searchText) {
    query["searchTerm"] = searchText;
  }

  const { isLoading, data } = useGetAllUserQuery(query)

  return (
    <div>
      <div className="w-1/3 ml-auto pb-5">
        <Input
          placeholder="Search by name or email"
          prefix={<Search className="mr-2 text-black" size={20} />}
          className="h-11 !border !rounded-lg !text-base"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <AccountDetailsTable isLoading={isLoading} data={data?.data?.data} setCurrentPage={setCurrentPage} currentPage={currentPage} meta = {data?.meta} />

    </div>
  );
};
