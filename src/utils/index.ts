export const getItem = async (id: string) => {
    const res = await fetch(`http://127.0.0.1:3000/api/anime/${id}`);
    const data = await res.json();
    return data;
};
