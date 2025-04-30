import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

interface FormData {
  file: FileList;
}

export default function useUploadImage() {
  const { register, handleSubmit, reset  } = useForm<FormData>();
  const { mutateAsync } = useMutation({
    mutationKey: ["Upload"],
    mutationFn: (file: File) => UploadImage(file),
    onSuccess: (data: any) => {
      console.log("Success");
    },
    onError: (error: any) => {
      console.log("Error Upload");
    },
  });
  const OnSubmitUpload = (data: FormData) => {
    const file = data.file[0];
    if (file) mutateAsync(file);
  };

  return { OnSubmitUpload, register, handleSubmit, reset };
}

export async function UploadImage(file: File) {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.post(
    "http://localhost:3000/v1/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
}
