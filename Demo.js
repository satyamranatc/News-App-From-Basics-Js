let Main = document.getElementById('main');


function Display(data)
{
    for(let i of data)
    {
        let Card = document.createElement('div');
        Card.className = "Card";
    

        let Title = document.createElement("h2");
        Title.innerText = i.title;

        let Img = document.createElement("img");
        Img.src = i.urlToImage;


        let Desc = document.createElement("p");
        Desc.innerText = i.description;



        Card.appendChild(Img);
        Card.appendChild(Title);
        Card.appendChild(Desc);

        Main.appendChild(Card);
    }

}



fetch("https://newsapi.org/v2/everything?q=indore&from=2023-12-31&sortBy=publishedAt&apiKey=20fd56da8c1247de82856d2fd80b1211")
.then((data)=>
{
    return data.json();
  
}).then((data)=>{
  console.log(data)
    Display(data.articles);
})

.catch((err)=>{
    console.log(err)
})