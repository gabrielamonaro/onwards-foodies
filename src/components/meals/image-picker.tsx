"use client";
import Image from "next/image";
import { ChangeEvent, FC, useRef, useState } from "react";

interface IImagePicker {
  label: string;
  name: string;
}

const ImagePicker: FC<IImagePicker> = ({ label, name }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPreview(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

 

  return (
    <div className="mb-6">
      <div className="flex items-start gap-6 mb-4">
        <div className="relative">
          <div className="flex">
            <div className="w-40 h-40 border-2 border-[#a4abb9] flex items-center justify-center text-center text-[#a4abb9] relative overflow-hidden">
              {!preview && <p> No image picked yet.</p>}
              {preview && (
                <Image
                  src={preview}
                  alt="The image slected by the user."
                  fill
                />
              )}
            </div>
            <input
              type="file"
              id={name}
              name={name}
              accept="image/png, image/jpeg"
              className="hidden"
              ref={imageInputRef}
              onChange={handleImageChange}
            />
            <button
              className="w-40 h-10 border-2 bg-[#a4abb9] flex items-center justify-center text-center text-black relative overflow-hidden rounded-sm"
              type="button"
              onClick={handlePickClick}
            >
              {label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
