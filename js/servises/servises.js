const postData = async(url, data) => { //функция отправки постов в базу данных
    const res = await fetch(url, {
        method: "Post",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};



const getResourse = async(url) => { //функция получения из базу данных
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

export {
    postData,
    getResourse
};