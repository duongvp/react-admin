// Custom components
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

function InputField({ name, extra, labelName, textColor, type, ...other }) {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => <div className={`${extra}`}>
                    <label className={`text-sky-500`}>
                        {labelName}
                    </label>
                    <input
                        {...{ ...field, value: field.value ?? "" }}
                        {...other}
                        type={type}
                        style={{ color: textColor }}
                        className={`mt-2 flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 text-sm outline-none ${type === 'color' ? 'pl-[85%] pr-1' : 'p-3'}`}
                    />
                    {error && (<span className="text-[14px] text-red-500 font-medium">{error?.message}</span>)}
                </div>}
            />

        </>

    );
}

export default memo(InputField);
