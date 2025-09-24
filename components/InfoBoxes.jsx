import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='Para arrendatarios'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Ver propiedades',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            Encuentra la mejor propiedad. Guarda propiedades y contacta a los propietarios.
          </InfoBox>
          <InfoBox
            heading='Para propietarios'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Añadir propiedad',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >
            Sube tus propiedades y encuentra clientes más rápido. Arrienda como un AirBnb o a largo plazo.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
