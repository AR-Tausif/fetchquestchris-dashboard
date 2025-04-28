import moment from "moment"
import { BlogType } from "../../types"
import { Pencil, Trash } from "lucide-react"
import { toast } from "react-toastify"
import { useDeleteBlogMutation } from "../../redux/api/blog.api"
import { Popconfirm, Tooltip } from "antd"

export const BlogCard = ({ blog, setSelectedItem, setModalOpen }: { blog: BlogType, setSelectedItem: React.Dispatch<React.SetStateAction<BlogType | null>>, setModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [postDelete] = useDeleteBlogMutation()

    const handleDeleteGame = async (id: string) => {
        const loadingToast = toast.loading("loading....");
        try {
            await postDelete({ id }).unwrap();
            toast.success("Blog delete succesfully");
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong, try again")
        } finally {
            toast.dismiss(loadingToast)
        }
    }

    return (
        <div className="p-4 bg-[#fdfdfd] rounded-lg relative" style={{
            border: "1px solid #DA5DA3"
        }}>
            <div >
                <div className="h-56">
                    <img className="h-full w-full rounded-lg object-cover" src={blog?.image} alt="Blog Image" />
                </div>
                <div className="pt-5">
                    <p className="tracking-tight">{moment(blog?.createdAt).format('MMMM D, YYYY')}</p>
                    <h3 className="uppercase font-bold text-[24px] -tracking-widest ">{blog?.name}</h3>
                    <p className="text-[16px] tracking-wide">{blog?.description}</p>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center absolute top-2 right-2">



                <Tooltip title={"Edit Blog"}>
                    <button
                        // style={styles.actionIcon}
                        className="p-2 bg-slate-50 cursor-pointer"
                        onClick={() => {
                            setSelectedItem(blog)
                            setModalOpen(true)
                        }}>
                        <Pencil size={16} />
                    </button>
                </Tooltip>

                <Popconfirm
                    title={"Delete"}
                    description={"Are you sure you want to delete this blog?"}
                    onConfirm={() => handleDeleteGame(blog?._id)}
                    okText={"Yes"}
                    cancelText={"No"}>
                    <Tooltip title={"Delete Blog"}>
                        <button className="p-2 bg-slate-50 cursor-pointer">
                            <Trash size={16} />
                        </button>
                    </Tooltip>
                </Popconfirm>

            </div>
        </div>
    )
}