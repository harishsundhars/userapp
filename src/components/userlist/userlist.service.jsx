
import axios from 'axios';

const userListData = async () => {
    let data = await axios('https://api.github.com/users');
    let userPromises = data.data.map(async (data) => {
        let user = await axios(`https://api.github.com/users/${data.login}`);
        return user.data;
    });

    let userlists = await Promise.all(userPromises);
    return userlists;


}

export default userListData;