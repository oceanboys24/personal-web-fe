import SpinnerButton from "@/components/login/components/Spinner";

export default function ImagePreviewComponent({
  preview,
  imageUrl,
  isUploading,
}: {
  preview?: string | null;
  imageUrl?: string;
  isUploading?: boolean;
}) {
  const src = preview || imageUrl;
  if (!src) {
    return null;
  }
  return (
    <div className="rounded-xl p-3 bg-[#e8e8e8] dark:bg-[#1a1a1a]">
      {isUploading ? (
        <SpinnerButton />
      ) : (
        <img
          src={src}
          alt="Preview"
          className="max-w-40 max-h-40 object-contain"
        />
      )}
    </div>
  );
}
