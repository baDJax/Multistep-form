const inputArray = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "e.g. Stephen King",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    label: "Number",
    name: "number",
    type: "tel",
    placeholder: "e.g. 9876543210",
  },
];

export default function Home() {
  return (
    <div className="flex-1 overflow-auto w-full">
      <form className="">
        <h2 className="text-3xl font-bold text-personal mb-1">Personal info</h2>
        <p className="text-neutral-400 mb-10">
          Please provide your name, email, address, and phone number.
        </p>
        <div>
          {inputArray.map((input, index) => (
            <div key={index} className="mb-6 flex flex-col gap-2">
              <label
                htmlFor={input.name}
                className="ms-1 font-medium text-personal"
              >
                {input.label}
              </label>
              <input
                id={input.name}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                className="p-3 w-full border-2 border-solid text-personal border-neutral-300 bg-[#FAFBFF] rounded-md outline-none font-medium focus:border-[#A19CFF]"
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
