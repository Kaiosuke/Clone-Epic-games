const getData = async (url: string, path: string): Promise<any> => {
  try {
    const res = await fetch(`${url}/${path}`);
    if (!res.ok) {
      throw Error(`Fetch error ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getData };
