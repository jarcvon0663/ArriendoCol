'use client';
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

const ShareButtons = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;

  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        Compartir esta propiedad:
      </h3>
      <div className='flex gap-3 justify-center pb-5'>
        <WhatsappShareButton
          url={shareUrl}
          title={property.name}
          separator=':: '
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`#${property.type.replace(/\s/g, '')}en arriendo`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <TelegramShareButton
          url={shareUrl}
          title={property.name}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>

        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Revisa esta propiedad publicada en: ${shareUrl}`}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
};
export default ShareButtons;
