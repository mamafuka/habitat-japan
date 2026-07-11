"use client";

import { cn } from "@/lib/utils";

export function FieldLabel({
  htmlFor,
  children,
  optional,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[0.6875rem] tracking-[0.2em] text-ivory/50 uppercase"
    >
      {children}
      {optional && (
        <span className="ml-2 normal-case tracking-normal text-ivory/30">
          Optional
        </span>
      )}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-gold/80" role="alert">
      {message}
    </p>
  );
}

export function FormSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-8 border-0 p-0">
      <legend className="w-full border-b border-ivory/10 pb-6">
        <span className="text-[0.6875rem] tracking-[0.28em] text-gold/70 uppercase">
          Section {number}
        </span>
        <h3 className="mt-3 font-serif text-xl font-light tracking-[-0.01em] text-ivory sm:text-2xl">
          {title}
        </h3>
      </legend>
      <div className="space-y-8">{children}</div>
    </fieldset>
  );
}

export const inputClass = cn(
  "mt-3 w-full border-0 border-b border-ivory/15 bg-transparent px-0 py-3",
  "text-base text-ivory placeholder:text-ivory/25",
  "transition-colors duration-700 focus:border-ivory/40 focus:outline-none",
);

export function TagSelect({
  options,
  selected,
  onChange,
  multiple = true,
  ariaLabel,
}: {
  options: readonly string[];
  selected: string[];
  onChange: (value: string[]) => void;
  multiple?: boolean;
  ariaLabel: string;
}) {
  const toggle = (option: string) => {
    if (multiple) {
      onChange(
        selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option],
      );
      return;
    }
    onChange(selected.includes(option) ? [] : [option]);
  };

  return (
    <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={ariaLabel}>
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            aria-pressed={isSelected}
            className={cn(
              "rounded-full border px-4 py-2 text-[0.8125rem] tracking-[0.02em] transition-all duration-700",
              isSelected
                ? "border-ivory/50 bg-ivory/8 text-ivory"
                : "border-ivory/15 text-ivory/55 hover:border-ivory/30 hover:text-ivory/75",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  ariaLabel,
}: {
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}) {
  return (
    <div className="mt-4 space-y-3" role="radiogroup" aria-label={ariaLabel}>
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-start gap-3 text-sm leading-[1.7] text-ivory/70"
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1 h-3.5 w-3.5 border-ivory/25 bg-transparent text-gold focus:ring-0 focus:ring-offset-0"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}

export function YesNoGroup({
  name,
  value,
  onChange,
  ariaLabel,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}) {
  return (
    <RadioGroup
      name={name}
      options={["Yes", "No"] as const}
      value={value}
      onChange={onChange}
      ariaLabel={ariaLabel}
    />
  );
}

export function CheckboxField({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-3.5 w-3.5 rounded-none border-ivory/25 bg-transparent text-gold focus:ring-0 focus:ring-offset-0"
      />
      <span className="text-sm leading-[1.7] text-ivory/70">{label}</span>
    </label>
  );
}

export function BudgetSlider({
  value,
  onChange,
  min = 100000,
  max = 2000000,
  step = 50000,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  const formatBudget = (amount: number) => {
    if (amount >= 1000000) {
      return `¥${(amount / 1000000).toFixed(amount % 1000000 === 0 ? 0 : 1)}M`;
    }
    return `¥${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between">
        <span className="font-serif text-2xl font-light text-ivory">
          {formatBudget(value)}
        </span>
        <span className="text-xs text-ivory/35">per month</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-6 h-px w-full cursor-pointer appearance-none bg-ivory/15 accent-gold [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-ivory [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ivory"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label="Monthly budget"
      />
      <div className="mt-2 flex justify-between text-[0.6875rem] tracking-[0.1em] text-ivory/30 uppercase">
        <span>{formatBudget(min)}</span>
        <span>{formatBudget(max)}+</span>
      </div>
    </div>
  );
}
