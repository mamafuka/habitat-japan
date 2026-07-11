"use client";

import { useState, type FormEvent } from "react";
import { contactContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  contactMethod: string;
  country: string;
  moveInPeriod: string;
  preferredArea: string;
  rentBudget: string;
  message: string;
  privacyConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  contactMethod?: string;
  country?: string;
  moveInPeriod?: string;
  preferredArea?: string;
  rentBudget?: string;
  message?: string;
  privacyConsent?: string;
}

const contactMethods = ["Email", "WhatsApp", "LINE", "Video consultation"];

const initialForm: FormData = {
  fullName: "",
  email: "",
  contactMethod: "",
  country: "",
  moveInPeriod: "",
  preferredArea: "",
  rentBudget: "",
  message: "",
  privacyConsent: false,
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Required.";
  if (!data.email.trim()) {
    errors.email = "Required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email.";
  }
  if (!data.contactMethod) errors.contactMethod = "Required.";
  if (!data.country.trim()) errors.country = "Required.";
  if (!data.moveInPeriod.trim()) errors.moveInPeriod = "Required.";
  if (!data.preferredArea.trim()) errors.preferredArea = "Required.";
  if (!data.rentBudget.trim()) errors.rentBudget = "Required.";
  if (!data.message.trim()) errors.message = "Required.";
  if (!data.privacyConsent) errors.privacyConsent = "Required.";

  return errors;
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[0.6875rem] tracking-[0.2em] text-ivory/50 uppercase"
    >
      {children}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-gold/80" role="alert">
      {message}
    </p>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const updateField = <K extends keyof FormData>(
    key: K,
    value: FormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof FormErrors];
        return next;
      });
    }
  };

  const inputClass = cn(
    "mt-3 w-full border-0 border-b border-ivory/15 bg-transparent px-0 py-3",
    "text-base text-ivory placeholder:text-ivory/25",
    "transition-colors duration-700 focus:border-ivory/40 focus:outline-none",
  );

  return (
    <Section
      id="contact"
      background="charcoal"
      className="!py-[clamp(7rem,16vw,14rem)]"
    >
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="text-[0.6875rem] tracking-[0.28em] text-gold/70 uppercase">
            {contactContent.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-8 font-serif text-4xl font-light leading-[1.1] tracking-[-0.02em] text-ivory sm:text-5xl lg:text-[3.5rem]">
            {contactContent.title}
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 text-base leading-[1.9] text-ivory/55">
            {contactContent.description}
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          {submitted ? (
            <p className="mt-16 text-base leading-[1.8] text-ivory/70" role="status">
              {contactContent.successMessage}
            </p>
          ) : (
            <form
              className="mt-16 space-y-10"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <FieldLabel htmlFor="fullName">Name</FieldLabel>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  className={inputClass}
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                <FieldError id="fullName-error" message={errors.fullName} />
              </div>

              <div>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <FieldError id="email-error" message={errors.email} />
              </div>

              <div>
                <FieldLabel htmlFor="contactMethod">Preferred contact</FieldLabel>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  className={cn(inputClass, "appearance-none")}
                  value={form.contactMethod}
                  onChange={(e) => updateField("contactMethod", e.target.value)}
                  aria-invalid={!!errors.contactMethod}
                  aria-describedby={
                    errors.contactMethod ? "contactMethod-error" : undefined
                  }
                >
                  <option value="" className="bg-charcoal">
                    Select
                  </option>
                  {contactMethods.map((method) => (
                    <option key={method} value={method} className="bg-charcoal">
                      {method}
                    </option>
                  ))}
                </select>
                <FieldError
                  id="contactMethod-error"
                  message={errors.contactMethod}
                />
              </div>

              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="country">Current location</FieldLabel>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    className={inputClass}
                    value={form.country}
                    onChange={(e) => updateField("country", e.target.value)}
                    aria-invalid={!!errors.country}
                    aria-describedby={errors.country ? "country-error" : undefined}
                  />
                  <FieldError id="country-error" message={errors.country} />
                </div>
                <div>
                  <FieldLabel htmlFor="moveInPeriod">Arrival</FieldLabel>
                  <input
                    id="moveInPeriod"
                    name="moveInPeriod"
                    type="text"
                    placeholder="e.g. Autumn 2026"
                    className={inputClass}
                    value={form.moveInPeriod}
                    onChange={(e) => updateField("moveInPeriod", e.target.value)}
                    aria-invalid={!!errors.moveInPeriod}
                    aria-describedby={
                      errors.moveInPeriod ? "moveInPeriod-error" : undefined
                    }
                  />
                  <FieldError
                    id="moveInPeriod-error"
                    message={errors.moveInPeriod}
                  />
                </div>
              </div>

              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="preferredArea">Neighbourhood</FieldLabel>
                  <input
                    id="preferredArea"
                    name="preferredArea"
                    type="text"
                    placeholder="e.g. Azabu, Hiroo"
                    className={inputClass}
                    value={form.preferredArea}
                    onChange={(e) => updateField("preferredArea", e.target.value)}
                    aria-invalid={!!errors.preferredArea}
                    aria-describedby={
                      errors.preferredArea ? "preferredArea-error" : undefined
                    }
                  />
                  <FieldError
                    id="preferredArea-error"
                    message={errors.preferredArea}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="rentBudget">Budget</FieldLabel>
                  <input
                    id="rentBudget"
                    name="rentBudget"
                    type="text"
                    placeholder="Monthly rent"
                    className={inputClass}
                    value={form.rentBudget}
                    onChange={(e) => updateField("rentBudget", e.target.value)}
                    aria-invalid={!!errors.rentBudget}
                    aria-describedby={
                      errors.rentBudget ? "rentBudget-error" : undefined
                    }
                  />
                  <FieldError id="rentBudget-error" message={errors.rentBudget} />
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className={cn(inputClass, "resize-none")}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <FieldError id="message-error" message={errors.message} />
              </div>

              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={form.privacyConsent}
                    onChange={(e) =>
                      updateField("privacyConsent", e.target.checked)
                    }
                    className="mt-0.5 h-3.5 w-3.5 rounded-none border-ivory/25 bg-transparent text-gold focus:ring-0 focus:ring-offset-0"
                    aria-invalid={!!errors.privacyConsent}
                    aria-describedby={
                      errors.privacyConsent ? "privacyConsent-error" : undefined
                    }
                  />
                  <span className="text-xs leading-[1.7] text-ivory/40">
                    I understand my information will be used to respond to this
                    enquiry.{" "}
                    <a
                      href="/privacy"
                      className="text-ivory/60 underline decoration-ivory/20 underline-offset-2"
                    >
                      Privacy
                    </a>
                  </span>
                </label>
                <FieldError
                  id="privacyConsent-error"
                  message={errors.privacyConsent}
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="large"
                  variant="secondary"
                  className="border-ivory/25 text-ivory hover:border-ivory/50 hover:bg-transparent"
                >
                  {contactContent.submitLabel}
                </Button>
              </div>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-20 border-t border-ivory/8 pt-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
              {contactContent.contactMethods.map((method) => (
                <div key={method.label} className="text-xs">
                  <span className="tracking-[0.15em] text-ivory/40 uppercase">
                    {method.label}
                  </span>
                  <span className="mt-1 block text-ivory/25">
                    {method.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
