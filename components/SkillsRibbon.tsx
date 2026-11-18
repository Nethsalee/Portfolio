"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { content } from "@/content";

export default function SkillsRibbon() {
  const [paused, setPaused] = useState(false);
  const { ribbon } = content;
  return (
    <div className={`skills-ribbon ${paused ? "is-paused" : ""}`}>
      <div className="ribbon-window">
        <div className="ribbon-track">
          {[0, 1].map(copy => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {ribbon.items.map(item => <li key={item}><span className="ribbon-word">{item}</span><span className="ribbon-separator" aria-hidden="true" /></li>)}
            </ul>
          ))}
        </div>
      </div>
      <button type="button" className="ribbon-control" onClick={() => setPaused(!paused)}
        aria-label={paused ? ribbon.play : ribbon.pause} aria-pressed={paused}>
        {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
      </button>
    </div>
  );
}
