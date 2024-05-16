export const fetchBlogs = async () => {
    const option = {
        headers: {
            Authorization: `Bearer${process.env.PUBLIC_STRAPI_USER_URL}`
        }
    }
    try {
        const res = await fetch("http://127.0.0.1:1337/api/blogs?populate[0]=imagedata.image", option)
        const response = await res.json()
        return response
    } catch (err) {
        console.error(err)
        console.log('fetch error', err)
    }
}

export const fetchBlogsID = async (id: string) => {
    console.log('fetch id', id)
    const option = {
        headers: {
            Authorization: `Bearer${process.env.PUBLIC_STRAPI_USER_URL}`
        }
    }
    try {
        const res = await fetch(`http://127.0.0.1:1337/api/blogs/${id}?populate[0]=imagedata.image`, option)
        const response = await res.json()
        return response
    } catch (err) {
        console.log('error', err)
    }
}

export const publicAPI = process.env.NEXT_PUBLIC_STRAPI_BASE_URL