export default function ImagePreviewComponent({
  preview,
  imageUrl,
}: {
  preview?: string | null;
  imageUrl?: string;
}) {
  const src = preview || imageUrl;
  if (!src) {
    return null;
  }
  return <img src={src} alt="Preview" className="w-40 h-40 object-cover rounded-xl" />;
}
