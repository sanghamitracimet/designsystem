import React, { useEffect, useState } from "react";
import { FaClipboardList, FaPlus } from "react-icons/fa";
import List from "@/components/todo/list";
import ActionBtn from "../buttons/actionBtn";

const todo = () => {
  return (
    <div className="container border border-lightGray">
      {/* header section */}
      <div className="header flex flex-row gap-2 place-items-center border-b-2 border-collapse px-5 py-2.5">
        <FaClipboardList className="headerIcon" />
        <h2 className="headerTitle"> To Do List</h2>
      </div>
      {/* body section */}
      {/* <div>
        {actionBtnClicked && (
          <List isActionButtonClicked={() => isActionButtonClicked} handleCompleteTask= {handleCompleteTask} handleAddTodos= {handleAddTodos} isEditing={isEditing} setIsEditing={setIsEditing}/>
        )}
      </div> */}
      <div>
        <List />
      </div>
      {/* footer section */}
      <div className="footer bg-gray-100 flex justify-end px-2.5 py-2.5 ">
        {/* <ActionBtn
          icon={FaPlus}
          heading="Add Item"
          onClick={() => handleAddTodos("New Task")}
        /> */}
        <ActionBtn icon={FaPlus} heading="Add Item"/>
      </div>
    </div>
  );
};

export default todo;
