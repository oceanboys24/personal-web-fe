export default function ImagePreviewComponent({
  preview,
}: {
  preview: string;
}) {
  return <img src={preview} alt="Preview" className="w-32 h-32 " />;
}
