import { useState } from "react";

const TagsInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(tags);
  const addTag = () => {
    const trimmed = inputValue.trim().toLowerCase();
    if (!trimmed || tags.includes(trimmed)) return;
    setTags((prev) => [...prev, trimmed]);
    setInputValue("");
  };

  const removeTag = (tagToRemove) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      <div
        style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            #{tag}
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#1d4ed8",
              }}
              onClick={() => removeTag(tag)}
            >
              X
            </button>
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="Tag qo'shing"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTag()}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
          }}
        />
        <button onClick={addTag}>Qo'shish</button>
      </div>
    </div>
  );
};

export default TagsInput;
