"use client";

import { useState } from "react";
import { Copy, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

function generateClaimCode(): string {
  const segment = () =>
    Math.random().toString(36).substring(2, 6).toUpperCase();
  return `CHAINPASS-${segment()}-${segment()}-${segment()}`;
}

export function CreateEventForm() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [claimCodes, setClaimCodes] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  function handleGenerateCodes() {
    const codes = Array.from({ length: 5 }, generateClaimCode);
    setClaimCodes(codes);
  }

  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white">Create Event</h3>
        <p className="mt-1 text-sm text-slate-400">
          Issue certificates and generate claim codes for students.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-slate-400">Event Name</label>
            <input
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="e.g. AI Foundations Workshop 2026"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-violet-500/50 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Brief event description..."
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-violet-500/50 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400">Certificate Image</label>
            <div className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.02] py-8 transition hover:border-violet-500/40">
              <Upload className="h-8 w-8 text-slate-500" />
              <p className="mt-2 text-sm text-slate-400">
                Drop image or click to upload
              </p>
              <p className="text-xs text-slate-600">PNG, JPG up to 5MB</p>
            </div>
          </div>
          <Button className="w-full" onClick={handleGenerateCodes}>
            <Plus className="h-4 w-4" />
            Generate Claim Codes
          </Button>
          <Button variant="primary" className="w-full" disabled={!eventName}>
            Create Event
          </Button>
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white">Claim Codes</h3>
        <p className="mt-1 text-sm text-slate-400">
          Share these codes with students to claim their certificates.
        </p>
        {claimCodes.length === 0 ? (
          <p className="mt-8 text-center text-sm text-slate-500">
            Generate codes after filling event details.
          </p>
        ) : (
          <ul className="mt-6 space-y-2">
            {claimCodes.map((code) => (
              <li
                key={code}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
              >
                <code className="text-sm text-violet-300">{code}</code>
                <button
                  onClick={() => copyCode(code)}
                  className="text-slate-400 hover:text-white"
                  aria-label="Copy code"
                >
                  <Copy className="h-4 w-4" />
                  {copied === code && (
                    <span className="sr-only">Copied</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </div>
  );
}
