import React from "react";
// import taskStory from "../../images/svgs/t-story.svg";
// import taskTask from "../../images/svgs/t-task.svg";
// import taskBug from "../../images/svgs/t-bug.svg";
// import priorityHighest from "../../images/svgs/p-highest.svg";
// import priorityHigh from "../../images/svgs/p-high.svg";
// import priorityMedium from "../../images/svgs/p-medium.svg";
// import priorityLow from "../../images/svgs/p-low.svg";
// import priorityLowest from "../../images/svgs/p-lowest.svg";
import svgs from "../../shared/utils/SvgHelper";
import { Draggable } from "react-beautiful-dnd";
import { NavLink } from "react-router-dom";

const IssueCard = ({ issue, index, users }) => {
    const { title, type, priority, userIds } = issue;
    const taskTypeIcon = {
        story: svgs.taskStory,
        task: svgs.taskTask,
        bug: svgs.taskBug,
    };
    const taskPriorityIcon = [
        svgs.priorityHighest,
        svgs.priorityHigh,
        svgs.priorityMedium,
        svgs.priorityLow,
        svgs.priorityLowest,
    ];

    const getItemStyle = (isDragging, draggableStyle) => ({
        // userSelect: "none",
        transform: isDragging ? "rotateZ(3deg)" : "",
        // change background colour if dragging
        // background: isDragging ? "rgb(248 234 255)" : "",
        // styles we need to apply on draggables
        // ...draggableStyle,
    });

    return (
        <Draggable draggableId={issue.id} index={index}>
            {(provided, snapshot) => (
                <NavLink
                    to={`issues/${issue.id}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div
                        className="taskCard"
                        style={{
                            ...getItemStyle(
                                snapshot.isDragging &&
                                    !snapshot.isDropAnimating,
                                provided.draggableProps.style
                            ),
                        }}
                    >
                        <p className="taskTitle">{title}</p>
                        <div className="taskInfoContainer">
                            <div className="taskInfo">
                                <span className="taskType">
                                    <img
                                        src={taskTypeIcon[type]}
                                        alt="task type"
                                    />
                                </span>
                                <span className="taskPriority">
                                    <img
                                        src={taskPriorityIcon[priority]}
                                        alt="medium"
                                    />
                                </span>
                            </div>
                            <div className="taskMembers">
                                {userIds &&
                                    users &&
                                    userIds.map(userId => {
                                        const user = users.find(
                                            u => u.id === userId
                                        );

                                        return (
                                            <img
                                                key={user.id}
                                                alt={user.name}
                                                src={user.avatarUrl}
                                                title={user.name}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </NavLink>
            )}
        </Draggable>
    );
};

export default IssueCard;
