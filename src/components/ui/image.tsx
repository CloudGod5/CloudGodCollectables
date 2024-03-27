import { CldUploadWidget } from "next-cloudinary";
import { Button } from "./button";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  onRemove,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
  return (
    <div>
      <div className='mb-4 flex flex-wrap items-center gap-4'>
        {value.map((url) => (
          <div className='relative w-[200px] h-[200px]'>
            <div className='absolute top-0 right-0 z-10'>
              <Button
                onClick={() => onRemove(url)}
                size='sm'
                variant='destructive'
              >
                <Trash className='h-4 w-4' />
              </Button>
            </div>
            <Image
              className='object-cover rounded-lg'
              src={url}
              alt='collection'
              fill
            />
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset='uyvth3mb' onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button variant='ghost' onClick={() => open()}>
              <Plus className='h-4 w-4 mr-2' />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
