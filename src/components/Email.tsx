"use client";

export function EmailLink() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = [
          "mailto:",
          "danielrw7",
          "@",
          "gmail",
          ".com",
        ].join("");
      }}
    >
      Email
    </a>
  );
}
