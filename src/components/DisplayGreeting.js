import React from "react";

function DisplayGreeting({ firstName, lastName, onEdit }) {
  const greeting = `GOOD DAY!${firstName} ${lastName}`;

  return (
    <div className="flex flex-col relative justify-center items-center h-[100%]">
      <div className="bg-[#C8B6A6] border-8 border-double px-20 py-20 justify-center item-center h-[400px] w-[800px] ">
        <p className="mx-4 text-[#00425A]  font-sans text-xl pl-[30%] font-bold">{greeting}</p>
        <button className="bg-[#7AA874] hover:bg-green-300 tracking-widest w-full text-white text-2xl font-bold py-2 px-4 my-10  rounded-lg" onClick={onEdit}>EDIT</button>
      </div>
    </div>
  );
}

export default DisplayGreeting;
