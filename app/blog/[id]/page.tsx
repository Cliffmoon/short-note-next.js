import { fetchBlogByID, publicAPI } from '@/app/API/page'
import ButtonDelete from '@/app/components/buttonDelete/buttonDelete'
import Link from 'next/link'

export default async function Blog({ params }: any) {
    const blogID = await params.id
    const blogDataByID = await fetchBlogByID(blogID)
    // console.log('typeof param id ', typeof (blogID))
    // console.log('url', publicAPI + blogDataByID.data.id)
    // console.log('param id ', blogID)
    // console.log('blog data by id', blogDataByID)
    const images =
        blogDataByID.data.attributes.imagedata.map((x) =>
            <div key={x.id}>
                <img
                    src={publicAPI + x.image.data.attributes.url}
                />
                {x.caption[0].children[0].text}
            </div>
        )
    const firstimage = process.env.NEXT_PUBLIC_STRAPI_BASE_URL + blogDataByID.data.attributes.imagedata[0].image.data.attributes.formats.thumbnail.url


    return (
        <div className="max-w-3xl mx-auto p-4">
            <Link href="/read" >{"< Back"}</Link>
            <div className='blog-title my-2'>
                <h2 className='text-left text-xl'>
                    {blogDataByID.data.attributes.Title}
                </h2>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='blog-image'>
                    <img
                        src={firstimage}
                    />
                </div>
                <div className='blog-des'>
                    <div className="grid">
                        <div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    ชื่อรายวิชาภาษาไทย :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{blogDataByID.data.attributes.nameTH}</p>
                        </div>
                        <div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    ชื่อรายวิชาอังกฤษ :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{blogDataByID.data.attributes.nameENG}</p>
                        </div>
                        <div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    รหัสวิชา :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{blogDataByID.data.attributes.Course_Code}</p>
                        </div>
                        <div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    ชื่อผู้สอน :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{blogDataByID.data.attributes.Teacher}</p>
                        </div>
                        <div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    มหาวิทยาลัย :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{blogDataByID.data.attributes.University}</p>
                        </div>
                        <div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    ปีการศึกษา :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{blogDataByID.data.attributes.Year}</p>
                        </div>
                        <div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    เทอม :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{blogDataByID.data.attributes.Term}</p>
                        </div>
                        <div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    วันที่อัปโหลด :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{new Date(blogDataByID.data.attributes.createdAt).toLocaleString()}</p>
                        </div>
                        <div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a>
                                    วันที่อัปเดตล่าสุด :
                                </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{new Date(blogDataByID.data.attributes.updatedAt).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a>
                    รายละเอียดสรุป :
                </a>
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{blogDataByID.data.attributes.Description}</p>
            <Link href={`/editblog/${blogDataByID.data.id}`}>
                <button className='bg-blue-600 text-white'>
                    แก้ไข
                </button>
            </Link>

            <ButtonDelete params={params} />
            <div className='image-containner'>
                <div>
                    {images}
                </div>
            </div>

        </div>
    )
}
