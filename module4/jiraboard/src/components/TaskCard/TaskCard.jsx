import React from "react";
import "./TaskCard.css";
import deleteIcon from "../../assets/Bin.png";
import Tag from "../Tag/Tag"; 


const TaskCard = ( {title, tags }) => {
  return (
    <article>
      <p className="task-text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
        {tags.map((tag, index) => (
          <Tag key={index} tagName={tag} slected />
        ))}
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