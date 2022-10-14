// import tasksData from "./data/tasksData";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px;
`;
const ProjectCard = styled.div`
    padding: 20px 12px;
    background: #fff;
    color: #0747a6;
    border: 1px solid #eee;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    transition: all 0.3s ease-out;

    &:hover {
        box-shadow: 2px 4px 5px 2px #ddd;
    }

    /* & > div {
        flex: 1 1 auto;
    } */

    & img {
        width: 80px;
        height: 80px;
        /* flex: 1 0 auto; */
        border-radius: 4px;
        overflow: hidden;
    }

    & h2 {
        margin: 0;
    }

    & .desc,
    .desc * {
        margin: 0;
    }
    & .desc {
        margin-top: 10px;
        max-lines: 3;
    }
`;

const PageInfo = styled.div`
    margin-bottom: 4rem;

    & p {
        margin: 0;
        margin-top: 5px;
        font-size: 14px;
        color: #535353;
    }
`;

const PageHeader = styled.h1`
    font-size: 1.8rem;
    color: #252525;
    font-weight: bold;
`;

const ProjectCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 45px;
    align-items: center;

    @media screen and (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

function ProjectList({ projects }) {
    return (
        <ProjectContainer>
            <PageInfo>
                <PageHeader>Your Projects</PageHeader>
                <p>
                    Only projects you've been assigned to will appear here.
                    Following are demo projects you are already a member of and
                    can make changes.
                </p>
                <p>
                    If you don't see the projects you are supposed to see, ask
                    your project manager to assign you to projects.
                </p>
            </PageInfo>
            <ProjectCardContainer>
                {projects &&
                    [...projects, ...projects, ...projects].map(
                        (project, i) => (
                            <Link key={i} to={project.id}>
                                <ProjectCard>
                                    <img
                                        src={project.iconUrl}
                                        alt={project.name}
                                    />
                                    <h2>{project.name}</h2>
                                    {/* <div
                                    className="desc"
                                    dangerouslySetInnerHTML={{
                                        __html: project.description,
                                    }}
                                /> */}
                                </ProjectCard>
                            </Link>
                        )
                    )}
            </ProjectCardContainer>
        </ProjectContainer>
    );
}

export default ProjectList;
