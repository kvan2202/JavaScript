function searchnow(){
    const movies=[]
    var movie=document.getElementById('searchs').value;
    let OMDBapi_URL="http://www.omdbapi.com/?i=tt3896198&apikey=2f943646&s="+movie;
    fetch(OMDBapi_URL)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            var i;
            var len = data.Search.length;
            for(i=0;i<len;i++)
            {
                if(data.Search[i] != "N/A")
                {
                    movies.push({
                        Title: data.Search[i].Title,
                        Year: data.Search[i].Year,
                        Poster: data.Search[i].Poster
                    })
                }
            }
            console.log(movies);
            var len2 = movies.length;
            for(i=0;i<len2;i++)
            {
                const list = document.createElement("div");
                list.setAttribute("class","result");

                const text = document.createElement("span");
                const image = document.createElement("img");
                
                image.setAttribute("src",movies[i].Poster);
                list.appendChild(image);
                text.innerText = movies[i].Title+"IN YEAR"+movies[i].Year;
                list.appendChild(text);
                document.getElementById('search-results').appendChild(list);
            }
          })

          
        }