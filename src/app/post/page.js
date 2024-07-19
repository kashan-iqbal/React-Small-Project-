import style from "@/app/page.module.css"

const getData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
   data = await data.json();
  return data;
};

const  Posts = async () => {
  const res = await getData();
  return (
    <>
      POst
      {
        res?.map((r)=> <li className={r.id === 1 ?  style.bg:style.int } key={r.id}>{r.title}</li>)
      }
    </>
  );
};

export default Posts;
