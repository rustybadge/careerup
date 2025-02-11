import React from 'react';

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

interface StyledFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  fields: FormField[];
  submitText: string;
}

export function StyledForm({ onSubmit, fields, submitText }: StyledFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {submitText}
      </button>
    </form>
  );
}