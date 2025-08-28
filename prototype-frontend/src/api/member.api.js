import axios from 'axios';

export const getAllMembers = () => {
    axios.get('http://localhost:8000/api/members/')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('There was an error fetching the members!', error);
        });
}