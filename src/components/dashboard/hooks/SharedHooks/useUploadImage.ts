import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { axiosInstance } from "@/config/axios";

interface FormDataType {
  image: FileList;
}

export function useUploadImage({
  isDirtyImage,
  setIsDirtyImage,
}: {
  isDirtyImage?: boolean;
  setIsDirtyImage?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { register, reset, resetField } = useForm<FormDataType>();

  const queryClient = useQueryClient();

  const {
    mutateAsync: uploadImage,
    data: uploadedImage,
    isPending: isUploading,
  } = useMutation({
    mutationKey: ["Upload-Image"],
    mutationFn: async (formData: FormData) => {
      const response = await axiosInstance.post("/v1/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
    onSuccess: (data: any) => {
      toast.success("Success Upload");
      queryClient.setQueryData(["data-image"], data);
      setIsDirtyImage?.(true);
    },
    onError: () => {
      toast.error("Upload Failed", {
        description: "Must be an image file",
      });
      resetField("image");
      setIsDirtyImage?.(false);
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const formData = new FormData();
    formData.append("image", files[0]);

    await uploadImage(formData);
  };

  return {
    handleFileChange,
    register,
    reset,
    isDirtyImage,
    uploadedImage,
    isUploading,
  };
}
