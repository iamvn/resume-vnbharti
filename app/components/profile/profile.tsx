"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import "./profile.css";
export default function Profile() {
  return (
    <div className="flex gap-2">
      Hi, I'm Vinay
      <Typewriter
        options={{
          strings: ["React js", "Angular", "Next js", "Javascript"],
          autoStart: true,
          loop: true,
        }}
      />
      Developer.
    </div>
  );
}
