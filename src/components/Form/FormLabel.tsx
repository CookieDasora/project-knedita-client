interface FormLabelProps {
  id: string
  label: string
}

export default function FormLabel({ id, label }: FormLabelProps) {
  return (
    <label className='mb-2 block text-sm font-bold text-gray-300' htmlFor={id}>
      {label}
    </label>
  )
}
