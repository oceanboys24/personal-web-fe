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
  return <img src={src} alt="Preview" className="w-32 h-32 object-cover" />;
}
