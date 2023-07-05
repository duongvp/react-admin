import React, { useState } from 'react'
import InputField from './components/InputField'
import { useForm } from 'react-hook-form';
import FormProvider from './components/FormProvider';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import DatePicker from './components/DatePicker';


const defaultValues = {
    title: '',
    email: '',
    color: '#00000',
    date: null
}

export default function Setting() {
    const schema = Yup.object().shape({
        title: Yup.string().required('Tiêu đề không được để trống'),
        email: Yup.string().required('Email không được để trống').matches(/\S+@\S+\.\S+/, 'Email không đúng định dạng'),
        date: Yup.array().required('Date không được để trống').min(1, 'Date không được để trống')
    })

    const methods = useForm({
        ...defaultValues,
        resolver: yupResolver(schema)
    });

    const { handleSubmit, watch } = methods;

    const watchTitle = watch('title')
    const watchEmail = watch('email')
    const watchColor = watch('color')
    const watchDate = watch('date')

    const pressSave = handleSubmit(async (e) => {
        console.log(e)
    })

    return (
        <FormProvider methods={methods}>
            <div>
                <p className='text-sky-500'>Settings</p>
                <div className='grid grid-cols-4 gap-5 mt-2 px-[8%] resize-none'>
                    <InputField labelName="Title:" name={'title'} textColor={watch('color')} placeholder="Please enter your title" type="text" extra="mt-2 mb-2 col-span-2" />
                    <InputField labelName="Email:" name={'email'} placeholder="Please enter your email" type="text" extra="mt-2 mb-2 col-span-2" />
                    <InputField labelName="Background Color:" name={'color'} placeholder="Nhập tên sản phẩm" type="color" extra="mt-2 mb-2 col-span-2" />
                    <DatePicker labelName="Actived Date:" name={'date'} />
                    {
                        (watchTitle || watchColor || watchEmail || watchDate?.length > 0) &&
                        <div className="flex justify-end col-span-4">
                            <button className={`bg-blue-600 text-white rounded-[3px] px-2 py-1  justify-center items-center cursor-pointer`} onClick={pressSave}>Save</button>
                        </div>
                    }
                </div>
            </div>
        </FormProvider>
    )
}
