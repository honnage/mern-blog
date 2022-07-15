import axios from 'axios';
export default function handler(req, res) {

    let apiURL = process.env.API_HOST + "/categories"

    axios.get('http://localhost:1337/api/categories').then((response) => {
        // console.log(response.data);
        const data = response
        console.log(data.data)

    }).catch((error) => {
        console.log(error);
    });

    console.log(process.env.API_HOST + "/categories")
    const dataTest = process.env.API_HOST + "/categories"

    res.status(200)
    res.json({ dataTest })

}
