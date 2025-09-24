'use client';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import addMessage from '@/app/actions/addMessage';
import SubmitMessageButton from './SubmitMessageButton';

const PropertyContactForm = ({ property }) => {
  const { data: session } = useSession();

  const [state, formAction] = useFormState(addMessage, {});

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.submitted) toast.success('Message sent successfully');
  }, [state]);

  if (state.submitted) {
    return (
      <p className='text-green-500 mb-4'>
        Su mensaje ha sido enviado exitosamente
      </p>
    );
  }

  return (
    session && (
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <h3 className='text-xl font-bold mb-6'>Contactar al propietario</h3>
        <form action={formAction}>
          <input
            type='hidden'
            id='property'
            name='property'
            defaultValue={property._id}
          />
          <input
            type='hidden'
            id='recipient'
            name='recipient'
            defaultValue={property.owner}
          />
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Nombre:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              name='name'
              type='text'
              placeholder='Ingrese su nombre'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              type='email'
              placeholder='Ingrese su email'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='phone'
            >
              Celular:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='phone'
              name='phone'
              type='text'
              placeholder='Ingrese su número celular'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='body'
            >
              Mensaje:
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
              id='body'
              name='body'
              placeholder='Escriba su mensaje'
            ></textarea>
          </div>
          <div>
            <SubmitMessageButton />
          </div>
        </form>
      </div>
    )
  );
};
export default PropertyContactForm;
