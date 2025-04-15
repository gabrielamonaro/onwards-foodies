import ImagePicker from "@/components/meals/image-picker";

export default function ShareMealPage() {
  return (
    <>
      <header className="gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
        <h1 className="font-sans">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] my-12 mx-auto text-white">
        <form className="max-w-[50rem]">
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-sans uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb]"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-sans uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb]"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p className="mt-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-sans uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb]"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p className="mt-4">
            <label
              htmlFor="summary"
              className="block mb-2 text-sm font-sans uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb]"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p className="mt-4">
            <label
              htmlFor="instructions"
              className="block mb-2 text-sm font-sans uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-base font-sans text-[#ddd6cb]"
              id="instructions"
              name="instructions"
              required
            ></textarea>
          </p>
          <div className="my-4 text-[#b3aea5] uppercase font-bold">
            <ImagePicker label="Choose file" name={""} />
          </div>
          <p className="text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded cursor-pointer text-[1.25rem] shadow-md"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
