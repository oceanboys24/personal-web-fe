import { useState } from "react";

export default function useHandleTags(setTagsToForm: (tags: string[]) => void) {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      const newTags = [...tags, input.trim()];
      setTags(newTags);
      setInput("");
      setTagsToForm(newTags);
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    setTagsToForm(newTags);
  };
  return { input, addTag, removeTag, setInput, tags, setTags };
}
