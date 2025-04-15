"use client";
import { FC } from "react";

interface IImagePicker {
  label: string;
  name: string;
}

const ImagePicker: FC<IImagePicker> = ({ label, name }) => {
  //   const [preview, setPreview] = useState<string | null>(null);

  //   const imageInputRef = useRef<>();

  //   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     // imageInputRef.current.click();
  //     const file = e.target.files?.[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       //   reader.onload = () => setPreview(reader.result as string);
  //       reader.readAsDataURL(file);
  //     }
  //   };

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-bold text-[#b3aea5] uppercase font-montserrat">
        {label}
      </label>
      <div className="flex items-start gap-6 mb-4">
        <div className="relative">
          <label
            htmlFor={name}
            className="inline-block px-6 py-2 bg-[#a4abb9] text-white rounded cursor-pointer hover:bg-[#b3b9c6] focus:bg-[#b3b9c6] transition-colors"
          >
            Choose Image
          </label>
          <input
            type="file"
            id={name}
            name={name}
            accept="image/png, image/jpeg"
            className="hidden"
            // ref={imageInputRef}
            // onChange={handleImageChange}
          />
          <button
            className="w-40 h-40 border-2 border-[#a4abb9] flex items-center justify-center text-center text-[#a4abb9] relative overflow-hidden"
            type="button"
            // onClick={handleImageChange}
          >
            Pick an image
          </button>
        </div>
        {/* <div className="w-40 h-40 border-2 border-[#a4abb9] flex items-center justify-center text-center text-[#a4abb9] relative overflow-hidden">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="p-4">No image selected</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ImagePicker;
