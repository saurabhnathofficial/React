import React from "react";

function Card() {
  const cards = [
    {
      name: "Samsung",
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus incidunt rem dolore repellat ipsum ipsam.",
      img: "https://images.unsplash.com/photo-1661347561476-8e8ea6113938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNhbXN1bmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Microsoft",
      dsc: "lorem orem ipsum dolor sit amet, consectetur adipisicing elit. orem ipsum dolor sit amet, consectetur adipisicing elit. ",
      img: "https://images.unsplash.com/photo-1632239776255-0a7f24814df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWljcm9zb2Z0JTIwdGVhbXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Accenture",
      dsc: "orem ipsum dolor sit amet, consectetur adipisicing elit. ",
      img: "https://images.unsplash.com/photo-1568294038989-ae90653d9558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNjZW50dXJlfGVufDB8fDB8fHww",
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-3 ">
      {cards.map((value,index) => (
        <div key={index} className="w-60 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300 px-1 py-1 pb-0">
            <img
              className="object-cover h-full w-full rounded"
              src={value.img}
              alt=""
              srcset=""
            />
          </div>
          <div className="w-full px-3 py-4 ">
            <h2 className="text-xl font-semibold">{value.name}</h2>
            <p className="text-xs mt-2">{value.dsc}</p>
           
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Card;
