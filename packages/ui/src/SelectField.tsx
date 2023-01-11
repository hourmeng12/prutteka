import React, { forwardRef } from 'react';

import { useField } from 'formik';

interface SelectFieldProps
  extends Partial<React.HTMLAttributes<HTMLSelectElement>> {
  name: string;
  label: string;
  className?: string;
  containerClassName?: string;
  options: string[];
  values: string[];
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      name,
      label,
      className = '',
      containerClassName = '',
      options,
      placeholder,
      values,
      ...props
    },
    ref
  ) => {
    const [field, meta] = useField(name);

    return (
      <div className={`space-y-2 ${containerClassName}`}>
        <label className="flex flex-col">
          {label}
          <select
            // defaultValue={placeholder}
            className={`form-select h-13 focus:ring-primary rounded-2xl border border-gray-200 px-4 text-gray-900 focus:border-gray-200 focus:outline-none focus:ring ${className} ${
              label ? 'mt-2' : ''
            }`}
            ref={ref}
            {...props}
            {...field}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, idx) => (
              <option key={idx} value={values[idx]}>
                {option}
              </option>
            ))}
          </select>
        </label>
        {meta.error && meta.touched && (
          <div className="text-red-600">{meta.error}</div>
        )}
      </div>
    );
  }
);

SelectField.displayName = 'select';
