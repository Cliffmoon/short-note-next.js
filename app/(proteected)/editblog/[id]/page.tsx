import { publicAPI } from "@/app/API/page"
import FormEdit from "@/app/components/formEdit/page"
import { useRouter, useSearchParams } from "next/navigation"

export default function EditBlog({ params }: any) {
    // console.log("param form editblog", params)
    return (
        <div>
            <FormEdit id={params.id}></FormEdit>
        </div>
    )
}