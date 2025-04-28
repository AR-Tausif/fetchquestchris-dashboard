
import { Input, theme } from "antd";
import { ProductListTable } from "../components";
import { useState } from "react";
import { CreateSubsPlanForm } from "../components/forms/create-subs-plan-form";
import { useGetAllProductsQuery } from "../redux/api/product.api";
import { Search } from "lucide-react";

export const ProductPrice = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState("");

    const query: { page: number, searchTerm?: string } = { page: currentPage };

    if (searchText) {
        query["searchTerm"] = searchText;
    }

    const { isLoading, data, isFetching } = useGetAllProductsQuery(query)

    const { token } = theme.useToken()

    // Style object
    const styles = {
        container: {
            display: "flex" as const,
            flexDirection: "column" as const,
            gap: "10px",
        },
        addButton: {
            background: token.colorPrimary,
            width: "100%",
            padding: "13px 30px",
            color: token.colorWhite,
            fontWeight: 600,
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            borderRadius: 8,
        },
        icon: {
            color: token.colorWhite,
            fontSize: token.fontSize * 2,
        },
        title: {
            fontWeight: 500,
            textAlign: "center" as const, // Explicitly declare textAlign type
            margin: "15px 0",
        },
        form: {
            maxWidth: "100%",
            display: "flex",
            gap: 16,
        },
        formItem: {
            width: "100%",
        },
        modalWidth: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
            xxl: "40%",
        },
    };


    return (
        <div style={styles.container}>

            <CreateSubsPlanForm />

            <div>
                <div className="w-1/3 ml-auto py-5">
                    <Input
                        placeholder="Search by name"
                        prefix={<Search className="mr-2 text-black" size={20} />}
                        className="h-11 !border !rounded-lg !text-base"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            <ProductListTable isLoading={isLoading || isFetching} data={data?.data?.data} setCurrentPage={setCurrentPage} currentPage={currentPage} meta={data?.meta} />

        </div>
    );
};

