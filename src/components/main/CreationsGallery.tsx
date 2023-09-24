import curiosityImage from '../../assets/mobile/image-curiosity.jpg';
import curiosityImageD from '../../assets/desktop/image-curiosity.jpg';
import deepEarthImage from '../../assets/mobile/image-deep-earth.jpg';
import deepEarthImageD from '../../assets/desktop/image-deep-earth.jpg';
import nightArcadeImage from '../../assets/mobile/image-night-arcade.jpg';
import nightArcadeImageD from '../../assets/desktop/image-night-arcade.jpg';
import soccerTeamImage from '../../assets/mobile/image-soccer-team.jpg';
import soccerTeamImageD from '../../assets/desktop/image-soccer-team.jpg';
import gridImage from '../../assets/mobile/image-grid.jpg';
import gridImageD from '../../assets/desktop/image-grid.jpg';
import fromAboveImage from '../../assets/mobile/image-from-above.jpg';
import fromAboveImageD from '../../assets/desktop/image-from-above.jpg';
import fisheyeImage from '../../assets/mobile/image-fisheye.jpg';
import fisheyeImageD from '../../assets/desktop/image-fisheye.jpg';
import borealisImage from '../../assets/mobile/image-pocket-borealis.jpg';
import borealisImageD from '../../assets/desktop/image-pocket-borealis.jpg';

export const CreationsGallery = () => {
  interface Creation {
    readonly image: string;
    readonly title: string;
  }

  const isMobile = window.innerWidth < 900;

  const creationsList: Creation[] = [
    {
      image: isMobile ? deepEarthImage : deepEarthImageD,
      title: 'deep earth',
    },
    {
      image: isMobile ? nightArcadeImage : nightArcadeImageD,
      title: 'night arcade',
    },
    {
      image: isMobile ? soccerTeamImage : soccerTeamImageD,
      title: 'soccer team vr',
    },
    {
      image: isMobile ? gridImage : gridImageD,
      title: 'the grid',
    },
    {
      image: isMobile ? fromAboveImage : fromAboveImageD,
      title: 'FROM UP ABOVE VR',
    },
    {
      image: isMobile ? borealisImage : borealisImageD,
      title: 'POCKET BOREALIS',
    },
    {
      image: isMobile ? curiosityImage : curiosityImageD,
      title: 'THE CURIOSITY',
    },
    {
      image: isMobile ? fisheyeImage : fisheyeImageD,
      title: 'make it fisheye',
    },
  ];

  return (
    <section className='creations'>
      <div className='creations__header'>
        <h3 className='creations__title'>our creations</h3>
        <button className='creations__header__button pointer'>see all</button>
      </div>
      <div className='creations__gallery'>
        {creationsList.map((creation, index) => (
          <div className='creation pointer' key={index}>
            <div className='creation__image'></div>
            <span
              className={
                creation.title === 'the grid'
                  ? 'creation__title small_title'
                  : 'creation__title'
              }
            >
              {creation.title}
            </span>
          </div>
        ))}
      </div>
      <button className='creations__button pointer'>see all</button>
    </section>
  );
};
