import { ServiceList } from "@/src/components/services/ServiceList";
import React from "react";

export default function ServicesPage() {
  return (
    <section className="mt-8 mb-9.25 w-full px-5 max-w-7xl mx-auto">
      <h2 className="text-center font-sans text-2xl font-semibold text-main-dark">
        Services
      </h2>

      <ServiceList />
    </section>
  );
}
