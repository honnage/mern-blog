import axios from "axios";
import { useState, useEffect } from "react"

export default function TestGetAPI() {
    const [posts, setPosts] = useState([]);
    // const apiEndPoint = 'http://localhost:1337/api/categories/'
    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        const getPosts = async () => {
            const { data: res } = await axios.get(apiEndPoint)
            setPosts(res)
        }
        getPosts();
    }, [])

    return (
        <>
            <div>test-getdata</div>
            {posts}
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {posts.map(post =>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td><button onClick={() => handleUpdate(post)} className="btn btn-info btn-sm">Update</button></td>
                            <td><button onClick={() => handleDelete(post)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    )} */}
                </tbody>
            </table>
        </>

    )
}
