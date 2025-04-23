interface LayoutPagesProps {
  children: React.ReactNode;
}

export default function LayoutComponent({ children }: LayoutPagesProps) {
  return <div>{children}</div>;
}
