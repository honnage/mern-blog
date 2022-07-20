import Head from 'next/head'
import Script from 'next/Script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutBlog from '../components/layout/testLayoutBlog'
import Breadcrumbs from '../components/section/breadcrumbs/Breadcrumbs'
import Blog from '../components/section/blog/Blog'
import TestBlogList from '../components/section/test/Test'
import axios from "axios";
import { useState, useEffect } from "react"

export default function Home() {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        const getPosts = async () => {
            const { data: res } = await axios.get(apiEndPoint)
            setPosts(res)
        }
        getPosts();
    }, [])

    const addPost = async () => {
        const post = { title: 'New Post', body: 'new' }
        await axios.post(apiEndPoint, post);
        setPosts([post, ...posts])
    }

    const handleUpdate = async post => {
        post.title = 'Updated title'
        await axios.put(apiEndPoint + '/' + post.id);
        const postsClone = [...posts];
        const index = postsClone.indexOf(post);
        postsClone[index] = { ...post };
        setPosts(postsClone);
    }

    const handleDelete = async post =>{
        await axios.delete(apiEndPoint + '/' + post.id + post)
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>Test</title>

                <meta content="" name="description" />
                <meta content="" name="keywords" />
            </Head>

            <LayoutBlog>
                <Breadcrumbs />

                <div className="container">
                <h2>There are {posts.length} post in the datase</h2>
                <button onClick={addPost} className="btn btn-primary">Add Post</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post =>
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td><button onClick={() => handleUpdate(post)} className="btn btn-info btn-sm">Update</button></td>
                                <td><button onClick={() => handleDelete(post)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </LayoutBlog>


            <Script src="assets/vendor/purecounter/purecounter.js"></Script>
            <Script src="assets/vendor/aos/aos.js"></Script>
            <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
            <Script src="assets/vendor/glightbox/js/glightbox.min.js"></Script>
            <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
            <Script src="assets/vendor/swiper/swiper-bundle.min.js"></Script>
            <Script src="assets/vendor/waypoints/noframework.waypoints.js"></Script>
            <Script src="assets/vendor/php-email-form/validate.js"></Script>

            <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
            <Script>
                AOS.init();
            </Script>

            <Script src="assets/js/main.js"></Script>
        </>
    )
}
