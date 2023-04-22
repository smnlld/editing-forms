import React from "react";

function EditGreeting({
  firstName,
  lastName,
  onSave,
  onChangeFirstName,
  onChangeLastName,
}) {
  return (
    <div className="flex flex-col relative justify-center items-center h-[100%]">
      <div className="bg-[#C8B6A6] border-8 border-double px-20 py-20 justify-center item-center h-[400px] w-[800px] ">
        <form>
          <div>
            <label className="mx-4 text-[#00425A]  font-sans text-xl font-bold">
              First Name:
            </label>
            <input
              className="rounded w-[60%] text-left px-2 ml-16 font-mono tracking-widest text-[#00425A] bg-[#F3DEBA]"
              type="text"
              value={firstName}
              onChange={onChangeFirstName}
            />
          </div>
          <br />
          <div>
            <label className="mx-4 text-[#00425A]  font-sans text-xl font-bold">
              Last Name:
            </label>
            <input
              className="rounded w-[60%] text-left px-2 ml-16 font-mono tracking-widest text-[#00425A] bg-[#F3DEBA]"
              type="text"
              value={lastName}
              onChange={onChangeLastName}
            />
          </div>
          <br />
          <button
            className="bg-[#263A29] hover:bg-[#ABC4AA] tracking-widest w-full text-white text-2xl font-bold py-2 px-4 my-2  rounded-lg"
            onClick={onSave}
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditGreeting;
