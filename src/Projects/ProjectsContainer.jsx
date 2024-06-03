import ProjectCard from "./ProjectCard";
import Projects from "./Projects";

function ProjectsContainer() {

    const projectCards = Projects.map((Project) => (
        <ProjectCard key={Project.id} projectLogo={Project.logo} content={Project.desc} images={Project.images} videos={Project.videos}/>
    ));

    return (
        <>
            {projectCards}
        </>
    );
}

export default ProjectsContainer;