export const Textarea = ({
  id,
  label,
  placeholder,
  required = false,
  type = "text",
  rows = 5,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-base" htmlFor={id}>
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <textarea
      rows={rows}
        id={id}
        type={type}
        className="border border-text/50 bg-light py-4 px-6 rounded-xl placeholder:text-text/50 outline-none focus:border-primary duration-300 transition-all"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
