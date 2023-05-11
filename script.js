async function fetchData(data) {
    const fetch = await import('node-fetch');
    let response = await fetch.default("https://api.chucknorris.io/jokes/random?category=" + data);
    let result = await response.json();
    return result;
  }

const app = () => {
  process.stdin.on('data', function(data) {
    const inputData = data.toString().trim();
  
  
    fetchData(inputData)
      .then((result) => {
        const joke = {
          categories: result.categories[0],
          created_at: result.created_at,
          joke: result.value
        };
        console.log(joke);
      })
      .catch((error) => console.log(error));
  });
};

app();