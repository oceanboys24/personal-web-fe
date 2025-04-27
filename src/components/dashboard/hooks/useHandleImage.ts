import { useState } from "react";

export default function useHandleImage() {
  const [preview, setPreview] = useState<string | null>(null);
  const HandleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return { preview, setPreview, HandleImagePreview };
}
