import React from "react";
import "./TaskCard.css";
import deleteIcon from "../../assets/Bin.png";
import Tag from "../Tag/Tag"; 


const TaskCard = () => {
  return (
    <article>
      <p className="task-text">This is Sample Text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="DEV" />
          <Tag tagName="QA" />
        </div>
        <div className="task_delete">
          <img src={deleteIcon} alt="Delete task" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;