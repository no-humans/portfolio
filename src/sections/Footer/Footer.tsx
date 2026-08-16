import { ArrowUpRight } from "lucide-react";
export function Footer({ goTo }: { goTo: (id: string) => void }) {
  return (
    <footer>
      <button className="brand" onClick={() => goTo("home")}>
        PRANAV <b>P.</b>
      </button>
      <span>© 2026 Pranav P. All rights reserved.</span>
      <button onClick={() => goTo("home")}>
        BACK TO TOP <ArrowUpRight size={15} />
      </button>
    </footer>
  );
}
