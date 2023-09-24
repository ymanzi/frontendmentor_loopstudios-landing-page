import vrManPicture from '../../assets/mobile/image-interactive.jpg';

export const Presentation = () => {
  return (
    <article className='company_presentation'>
      <img
        src={vrManPicture}
        alt='man wearing a vr headset'
        className='company_presentation__image'
      />
      <div className='company_presentation__card'>
        <h3 className='card__title'>The leader in interactive VR</h3>
        <p className='card__content'>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </article>
  );
};
