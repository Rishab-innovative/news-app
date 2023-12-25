import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion"
import sports from "../News/sports.json"


const Sports = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=22b4e6c6f2b94cc19d4eed701db86018"
    )
      .then((res) => res.json())
      .then((data) => setMyData(data.articles));
  }, []);
  return (
    <>
      <Layout>
        <div className="md:text-4xl text-xl mt-[2rem] grid justify-center font-bold text-slate-500">
          <h2>Top Headlines - sports</h2>
        </div>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap m-4">
   
        {
            sports.articles?.map((article)=>{
                return(
               
                    
                    (article.title && article.description && article.urlToImage)?
                    
                    <motion.div whileHover={{ scale: 1.1 }} className="p-4 md:w-1/3" key={article.title} >
                    <div className="h-full overflow-hidden">
                        <a href={article.url} target="_blank" rel="noreferrer" >
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.urlToImage} alt="blog"/>
                    </a>
                    <div className="py-5">
                      <a href={article.url} target="_blank" >
                      <h2 className="title-font text-md font-medium text-slate-600 mb-2">{article.title.slice(0,40)}...</h2>
                      </a>

                    <a href={article.url} target="_blank" rel="noreferrer" >
                      <p className="leading-relaxed mb-3 text-sm">{article.description.slice(0,110)}...</p>
                      </a>
                   

                     
                    </div>
                  </div></motion.div>:""
                  
                )
            })
        }



       
  
     
    </div>
  </div>
</section>

      </Layout>
    </>
  );
};

export default Sports;
