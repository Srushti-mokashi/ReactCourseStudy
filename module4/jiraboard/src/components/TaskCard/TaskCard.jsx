import React from "react";
import "./TaskCard.css";
import deleteIcon from "../../assets/Bin.png";
import Tag from "../Tag/Tag"; 


const TaskCard = ( {title, tags, handleDelete, index }) => {
  return (
    <article>
      <p className="task-text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
        {tags.map((tag, index) => (
          <Tag key={index} tagName={tag} slected />
        ))}
          
        </div>
        <div className="task_delete" onClick={() =>{
          handleDelete(index)}}>
          <img src={deleteIcon} alt="Delete task" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;