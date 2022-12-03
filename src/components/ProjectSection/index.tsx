import { PROJECT_LIST } from '@src/common/constants/projects';
import { useState } from 'react';
import SquareImageCard from '@components/common/Card/SquareImageCard';
import Carousel from '@components/common/Carousel/Carousel';
import styles from './index.module.scss';

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(PROJECT_LIST[0]);

  return (
    <section className={styles.projectSection}>
      <div>
        <Carousel
          listOfchildren={PROJECT_LIST.map((project) => (
            <SquareImageCard
              key={project.name}
              image={project.image}
              imageAlt={`illustration for the ${project.name} project`}
              tiltHoverEffect
            />
          ))}
          onActiveItemChanged={(index) => setActiveProject(PROJECT_LIST[index])}
        />
      </div>

      <div className={styles.infoSection}>
        <div>
          <h2>{activeProject.name}</h2>
          <a
            className={styles.openLink}
            href={activeProject.link}
            target="blank"
          >
            icon
          </a>
          <span>{activeProject.role}</span>
          <p>{activeProject.decription}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
