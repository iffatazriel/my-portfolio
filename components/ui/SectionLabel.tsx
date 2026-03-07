interface SectionLabelProps {
  children: string;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-accent">
      {children}
    </p>
  );
}
