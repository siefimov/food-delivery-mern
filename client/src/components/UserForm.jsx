import Input from './Input';

const UserForm = ({ name, email, tel, address, onChange }) => {
  return (
    <div className='h-fit basis-full rounded border bg-slate-50 py-5 mb-8 md:basis-[40%]'>
      <Input type='text' id='name' name='name' title='Name' value={name} onChange={onChange} />
      <Input type='email' id='email' name='email' title='Email' value={email} onChange={onChange} />
      <Input type='tel' id='phone' name='tel' title='Phone' value={tel} onChange={onChange} />
      <Input
        type='text'
        id='address'
        name='address'
        title='Address'
        value={address}
        onChange={onChange}
      />
    </div>
  );
};

export default UserForm;
