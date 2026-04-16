"use client";

import { useState } from "react";
import Image from "next/image";

interface AvatarProps {
  size?: number;
  className?: string;
}

export default function Avatar({ size = 32, className = "" }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`rounded-full bg-surface border border-border flex items-center justify-center shrink-0 hover:border-accent transition-all ${className}`}
      >
        <span
          className="font-mono text-accent leading-none"
          style={{ fontSize: size * 0.35 }}
        >
          LR
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/avatar.jpeg"
      alt="Lucas Rabay Butcher"
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className={`rounded-full border border-border hover:border-accent transition-all shrink-0 object-cover ${className}`}
    />
  );
}
