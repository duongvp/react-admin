// Custom components
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

function DatePicker({ name, labelName, type }) {
    const { control, setValue } = useFormContext();
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) =>
                    <div className='mt-2 mb-2 col-span-2'>
                        <label className={`text-sky-500`}>
                            {labelName}
                        </label>
                        <Flatpickr
                            {...field}
                            options={{
                                mode: 'range',
                                dateFormat: 'Y-m-d',
                                enableTime: false,
                            }}
                            onChange={(e) => {
                                setValue(name, e)
                            }}
                            className={`mt-2 flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 text-sm outline-none p-3`}
                        />
                        {error && (<span className="text-[14px] text-red-500 font-medium">{error?.message}</span>)}
                    </div>
                }
            />

        </>

    );
}

export default memo(DatePicker);
