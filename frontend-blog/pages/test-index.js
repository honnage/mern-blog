import React, { useEffect, useState } from 'react'


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ReactLoading from 'react-loading';
import Loading from '../components/pagination/loading';

export default function testload() {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState(null)
    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            const res = await fetch(
                'http://localhost:1337/api/section-carousels/?populate=cover_image',
            );
            const json = await res.json();
            setData(json.data);
            setIsLoading(false);
            console.log(json.data)
        };
        fetchData();
    }, [setData]);

    const img = "http://localhost:1337/uploads/bg2_288f3e6648.jpg"
    const host = "http://localhost:1337"
  
    return (
        <div>

            {data ? (
                <div>
                    hi
                    <ul>
                        {data.map(item => (
                            <li key={item.attributes.ObjectId}>
                                <a href="#">{item.attributes.title}</a>
                                <br />
                                {host}
                                <br />
                                {item.attributes.cover_image.data.attributes.url}
                                <br />
                                {host}{item.attributes.cover_image.data.attributes.url}

                                {/* <img src ="http://localhost:1337/uploads/bg2_288f3e6648.jpg" /> */}
                                {/* <img src=`url(`${ api.LOCALHOST + API_data_1.attributes?.cover_image.data.attributes.url}`)`` /> */}
                                <img src={`${host}${item.attributes.cover_image.data.attributes.url}`} width="250" />
                            </li>
                        ))}
                    </ul>
                </div>

            ) : (
                // <Backdrop
                //     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                //     open
                // >
                //     <CircularProgress color="inherit" />
                // </Backdrop>
                <Loading />
            )
            }


        </div>

    )
}
