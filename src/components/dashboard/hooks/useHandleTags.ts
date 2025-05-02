import { useState } from "react";

export default function useHandleTags() {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");
  console.log("Tags", tags);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };
  return { input, addTag, removeTag, setInput, tags };
}
