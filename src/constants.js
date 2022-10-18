export const IssueType = {
    TASK: "task",
    BUG: "bug",
    STORY: "story",
};

export const IssueStatus = {
    BACKLOG: "backlog",
    SELECTED: "selected",
    INPROGRESS: "inprogress",
    COMPLETED: "completed",
};

export const IssuePriority = {
    HIGHEST: "5",
    HIGH: "4",
    MEDIUM: "3",
    LOW: "2",
    LOWEST: "1",
};

export const IssueTypeText = {
    [IssueType.TASK]: "Task",
    [IssueType.BUG]: "Bug",
    [IssueType.STORY]: "Story",
};

export const IssueStatusText = {
    [IssueStatus.BACKLOG]: "Backlog",
    [IssueStatus.SELECTED]: "Selected For Development",
    [IssueStatus.INPROGRESS]: "In Progress",
    [IssueStatus.COMPLETED]: "Completed",
};

export const IssuePriorityText = {
    [IssuePriority.HIGHEST]: "Highest",
    [IssuePriority.HIGH]: "High",
    [IssuePriority.MEDIUM]: "Medium",
    [IssuePriority.LOW]: "Low",
    [IssuePriority.LOWEST]: "Lowest",
};
